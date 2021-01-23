import React, { useState, useEffect } from "react";
import axios from "axios";
import reposData from "../../../data/reposData";
import CommitsChart from "../charts/CompareWeeklyChart";
import CompareWeeklyChart from "../charts/CompareWeeklyChart";

const Compare = () => {

  const [commitsData, setCommitsData] = useState({});
  const [starsAndIssuesData, setStarsAndIssuesData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchApiData = () => {
    const commitURL = "/stats/commit_activity";
    const commits = {};
    const starsAndIssues = {};

    for (let i = 0; i < reposData.length; i++) {
      const { name, github_url } = reposData[i];
      axios.get(github_url + commitURL).then((resp) => (commits[name] = resp.data));
      axios.get(github_url).then((resp) => (starsAndIssues[name] = resp.data));
    }

    setCommitsData(commits);
    setStarsAndIssuesData(starsAndIssues);
    setLoading(false);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const renderData = () => {
      if(!loading){
          return (
              <CompareWeeklyChart data={commitsData}/>
          )
      }
  } 

  return (
    <div>
        {renderData()}
    </div>
);
};

export default Compare;
