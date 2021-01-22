import React, { Fragment, useEffect, useState } from 'react';
import WeeklyChart from './charts/WeeklyChart';
import axios from 'axios';
import YearlyChart from './charts/YearlyChart';

const Repo = ({repo}) => {

    //state
    const [weeklyCommits, setWeeklyCommits] = useState(null);
    const [yearlyCommitsData, setYearlyCommitsData] = useState(null);
    const [totalYearlyCommits, setTotalYearlyCommits] = useState(null);
    const [issues, setIssues] = useState(null);
    const [stars, setStars] = useState(null);
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
    const getCharts = () => {
        if(!loading){
            return (
                <Fragment>
                    <WeeklyChart data={weeklyCommits.days} />
                    <YearlyChart data={yearlyCommitsData}/>
                </Fragment>
            )
        }
    }
    return (
        <div>
            <img src={repo.logo}></img>
           <h1>{repo.name}</h1>
            Commits in the past week: {loading ? 0 : weeklyCommits.total}<br/>
            Commits in the past year: {loading ? 0 : totalYearlyCommits}<br/>
            Current open issues: {loading ? 0 : issues}<br/>
            Current number of stars: {loading ? 0 : stars}<br/>
            {getCharts()}
        </div>
    );
}

export default Repo;
