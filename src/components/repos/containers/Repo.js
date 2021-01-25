import React, { useEffect, useState } from "react";
import WeeklyChart from "../charts/WeeklyChart";
import axios from "axios";
import YearlyChart from "../charts/YearlyChart";
import WeeklyCommits from "./WeeklyCommits";
import { CircularProgress, Grid, Icon, makeStyles } from "@material-ui/core";
import YearlyCommits from "./YearlyCommits";
import OpenIssues from "./OpenIssues";
import Stars from "./Stars";

const useStyles = makeStyles({
  chart: {
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
  icon: {
    margin: 20,
    fontSize: 150,
    color: "#e0e1dd",
  },
  title: {
    margin: 20,
    fontSize: 150,
    color: "#e0e1dd",
  },
});

const Repo = ({ repo }) => {

  const classes = useStyles();

  const [weeklyCommits, setWeeklyCommits] = useState(0);
  const [yearlyCommitsData, setYearlyCommitsData] = useState(null);
  const [totalYearlyCommits, setTotalYearlyCommits] = useState(0);
  const [issues, setIssues] = useState(0);
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);

  //fetch data from Github API
  const fetchRepoData = async () => {
    const commitURL = "/stats/commit_activity";
    const resp1 = await axios.get(repo.github_url + commitURL);
    const resp2 = await axios.get(repo.github_url);
    return [resp1.data, resp2.data];
  };

  //set component state with api data
  const setStateWithApiData = async () => {
    console.log("inside setstatewithapidata")
    const data = await fetchRepoData();
    setYearlyCommitsData(data[0]);
    setTotalYearlyCommits(getTotal(data[0]));
    setWeeklyCommits(data[0][0]);
    setStars(data[1].stargazers_count);
    setIssues(data[1].open_issues_count);
    setLoading(false);
  };

  //get total number of yearly commits
  const getTotal = (data) => {
    return data.reduce((acc, curr) => {
      return acc + curr.total;
    }, 0);
  };

  //fetch repo data after component mount
  useEffect(() => {
    setStateWithApiData();
  }, []);

  //set interval to keep reloading api data
  useEffect(() => {
    const interval = setInterval(setStateWithApiData, 2000);
    return clearInterval(interval);
  }, []);

  //only render charts if data is loaded
  const renderRepoData = () => {
    if (!loading) {
      return (
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={2}>
            <Icon className={classes.icon}>{repo.icon}</Icon>
          </Grid>
          <Grid item xs={8}>
            <h1 className={classes.title}>{repo.name}</h1>
          </Grid>
          <Grid container item direction="column" xs={6}>
            <Grid item xs={12} className={classes.chart}>
              <WeeklyChart data={weeklyCommits.days} />
            </Grid>
            <Grid item xs={12} className={classes.chart}>
              <YearlyChart data={yearlyCommitsData} />
            </Grid>
          </Grid>
          <Grid container item direction="column" xs={6}>
            <Grid item xs={12} className={classes.card}>
              <WeeklyCommits
                className={classes.card}
                data={weeklyCommits.total}
              />
            </Grid>
            <Grid item xs={12} className={classes.card}>
              <YearlyCommits
                className={classes.card}
                data={totalYearlyCommits}
              />
            </Grid>
            <Grid item xs={12} className={classes.card}>
              <OpenIssues className={classes.card} data={issues} />
            </Grid>
            <Grid item xs={12} className={classes.card}>
              <Stars className={classes.card} data={stars} />
            </Grid>
          </Grid>
        </Grid>
      );
    } else
      return (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <CircularProgress color="primary" />
            </Grid>
          </Grid>
        </Grid>
      );
  };
  return <div>{renderRepoData()}</div>;
};

export default Repo;
