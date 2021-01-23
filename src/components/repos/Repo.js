import React, { Fragment, useEffect, useState } from 'react';
import WeeklyChart from './charts/WeeklyChart';
import axios from 'axios';
import YearlyChart from './charts/YearlyChart';
import WeeklyCommits from './WeeklyCommits';
import { Icon } from '@material-ui/core';
import YearlyCommits from './YearlyCommits';
import OpenIssues from './OpenIssues';
import Stars from './Stars';

const Repo = ({repo}) => {

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
                <Fragment>
                    <WeeklyChart data={weeklyCommits.days} />
                    <YearlyChart data={yearlyCommitsData}/>
                    <WeeklyCommits data={weeklyCommits.total}/>
                    <YearlyCommits data={totalYearlyCommits}/>
                    <OpenIssues data={issues}/>
                    <Stars data={stars}/>
                </Fragment>
            )
        }
    }
    return (
        <div>
            <Icon>{repo.icon}</Icon> <h1>{repo.name}</h1>
            {renderRepoInfo()}
        </div>
    );
}

export default Repo;
