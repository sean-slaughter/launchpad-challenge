import React, { useState, useEffect } from "react";
import axios from "axios";
import reposData from "../../../data/reposData";
import StarsChart from "../charts/StarsChart";
import CompareWeeklyChart from "../charts/CompareWeeklyChart";
import { CircularProgress, Grid } from "@material-ui/core";
import CompareYearlyChart from "../charts/CompareYearlyChart";
import OpenIssuesChart from "../charts/OpenIssuesChart";

const Compare = () => {

  const [commitsData, setCommitsData] = useState({});
  const [starsAndIssuesData, setStarsAndIssuesData] = useState({});
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const setStateWithApiData = async () => {
      const data = await fetchApiData();
      setCommitsData(data[0]);
      setStarsAndIssuesData(data[1]);
      setLoading(false);
    };
    setStateWithApiData();
  }, []);

  const renderData = () => {
      
      if(!loading){
          return (
            <Grid>
              <CompareWeeklyChart data={commitsData}/>
              <CompareYearlyChart data={commitsData}/>
              <StarsChart data={starsAndIssuesData}/>
              <OpenIssuesChart data={starsAndIssuesData}/>
            </Grid>
          )
      }
      else return (
        <CircularProgress color="primary"/>
    )
  } 

  return (
    <div>
        {renderData()}
    </div>
);
};

export default Compare;
