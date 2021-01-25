import React, { useState, useEffect } from "react";
import axios from "axios";
import reposData from "../../../data/reposData";
import StarsChart from "../charts/StarsChart";
import CompareWeeklyChart from "../charts/CompareWeeklyChart";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import CompareYearlyChart from "../charts/CompareYearlyChart";
import OpenIssuesChart from "../charts/OpenIssuesChart";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    marginLeft: -50
  },
  title: {
    margin: 20,
    fontSize: 100,
    color: "#f3f3f4"
  },
  loading: {
    marginTop: "40vh"
  }
})

const Compare = () => {

  const classes = useStyles();

  const [commitsData, setCommitsData] = useState({});
  const [starsAndIssuesData, setStarsAndIssuesData] = useState({});
  const [loading, setLoading] = useState(true);

  //fetch GitHub API data for all repositories
  const fetchApiData = async () => {

    const commitURL = "/stats/commit_activity";
    const starsAndIssues = {};
    const commits = {};

    for(let i = 0; i < reposData.length; i++){
      const {name, github_url} = reposData[i];
      const resp1 = await axios.get(github_url + commitURL);
      const resp2 = await axios.get(github_url);
      commits[name] = resp1.data;
      starsAndIssues[name] = resp2.data;
    }
    
    return [commits, starsAndIssues]
  };

  //set component state with GitHub API data
  const setStateWithApiData = async () => {
    const data = await fetchApiData();
    setCommitsData(data[0]);
    setStarsAndIssuesData(data[1]);
    setLoading(false);
  };

//set state when component mounts
  useEffect(() => {
    setStateWithApiData();
  }, []);

  //set interval to keep reloading api data
  useEffect(() => {
    const id = setInterval(setStateWithApiData, 10000);
    return () => clearInterval(id)
  },[loading]);

//only render charts if data is loaded
  const renderData = () => {
      
      if(!loading){
          return (
            <Grid className={classes.root}container justify="center" alignItems="center" spacing={3}>
              <Grid item sm={12}>
                <h1 className={classes.title}>Compare Framework Data</h1>
              </Grid>
              <Grid item sm={12}>
                <CompareYearlyChart data={commitsData}/>
              </Grid>
              <Grid item sm={4}>
                <CompareWeeklyChart data={commitsData}/>
              </Grid>
              <Grid item sm={4}>
                <StarsChart data={starsAndIssuesData}/>
              </Grid>
              <Grid item sm={4}>
                <OpenIssuesChart data={starsAndIssuesData}/>
              </Grid>
            </Grid>
          )
      }
      else return (
        //loading circle
        <Grid container direction="row" justify="center" alignItems="center">
              <Grid className={classes.loading} item xs={12}>
                <CircularProgress size={100} color="primary"/>
              </Grid>
        </Grid>
    )
  } 

  return (
    <div>
        {renderData()}
    </div>
);
};

export default Compare;
