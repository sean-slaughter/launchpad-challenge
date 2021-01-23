import React, { Fragment, useEffect, useState } from 'react';
import WeeklyChart from './charts/WeeklyChart';
import axios from 'axios';
import YearlyChart from './charts/YearlyChart';
import WeeklyCommits from './WeeklyCommits';
import { CircularProgress, Grid, Icon, makeStyles } from '@material-ui/core';
import YearlyCommits from './YearlyCommits';
import OpenIssues from './OpenIssues';
import Stars from './Stars';

const useStyles = makeStyles({
    chart: {
        marginBottom: 20
    },
    card: {
        marginBottom: 20
    },
    icon: {
        margin: 20,
        fontSize: 150,
        color: "#22333b"
    },
    title: {
        margin: 20,
        fontSize: 150,
        color: "#22333b"
    }
})

const Repo = ({repo}) => {
    const classes = useStyles();

    //state
    const [weeklyCommits, setWeeklyCommits] = useState(0);
    const [yearlyCommitsData, setYearlyCommitsData] = useState(null);
    const [totalYearlyCommits, setTotalYearlyCommits] = useState(0);
    const [issues, setIssues] = useState(0);
    const [stars, setStars] = useState(0);
    const [loading, setLoading] = useState(true)

    //fetch data from Github API
    const fetchRepoData = () =>{
        const commitURL = "/stats/commit_activity";
        axios.get(repo.github_url + commitURL)
        .then(resp => setWeeklyAndYearlyCommits(resp.data))
        .then(() => {
            fetchStarsAndIssues();
        })
        .then(() => setLoading(false))
    }

    
    const setWeeklyAndYearlyCommits = (data) => {
        setYearlyCommitsData(data);
        setWeeklyCommits(data[0]);
        setTotalYearlyCommits(getTotal(data));
    }

    
    const fetchStarsAndIssues = () => {
        axios.get(repo.github_url)
        .then(resp => setStarsAndIssues(resp.data))
    }

    const setStarsAndIssues = (data) =>{
       setStars(data.stargazers_count);
       setIssues(data.open_issues_count);
    }

    //get total number of yearly commits
    const getTotal = (data) => {
        return data.reduce((acc, curr) => {return acc + curr.total}, 0)
    }

    //fetch repo data after component mount
    useEffect(() => {
       fetchRepoData();
    }, [])

    //only render charts if data is loaded
    const renderRepoInfo = () => {
        if(!loading){
            return (
              <Grid container justify="center" alignItems="center" spacing={3}>
                <Grid item xs={2}>
                  <Icon className={classes.icon}>{repo.icon}</Icon>
                </Grid>
                <Grid item xs={8}>
                  <h1 className={classes.title}>{repo.name}</h1>
                </Grid>
                <Grid container direction="column" xs={6}>
                  <Grid item xs={12} className={classes.chart}>
                    <WeeklyChart data={weeklyCommits.days} />
                  </Grid>
                  <Grid item xs={12} className={classes.chart}>
                    <YearlyChart data={yearlyCommitsData} />
                  </Grid>
                </Grid>
                <Grid container direction="column" xs={6}>
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
        }
        else return (
            <CircularProgress color="#22333b"/>
        )
    }
    return (
        <div>
            {renderRepoInfo()}
        </div>
    );
}

export default Repo;
