import React, { useEffect, useState } from 'react';
import WeeklyChart from './charts/WeeklyChart';
import axios from 'axios';

const Repo = ({repo}) => {

    const commitURL = "/stats/commit_activity";

    const [weeklyCommits, setWeeklyCommits] = useState(null);
    const [yearlyCommitsData, setYearlyCommitsData] = useState(null);
    const [totalYearlyCommits, setTotalYearlyCommits] = useState(null);
    const [issues, setIssues] = useState(null);
    const [stars, setStars] = useState(null);
    const [loading, setLoading] = useState(true)

    const fetchRepoData = () =>{
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

    const getTotal = (data) => {
        return data.reduce((acc, curr) => {return acc + curr.total}, 0)
    }

    useEffect(() => {
       fetchRepoData();
    }, [])

    return (
        <div>
           {repo.icon}{repo.name}<br/>
            Commits in the past week: {loading ? 0 : weeklyCommits.total}<br/>
            Commits in the past year: {loading ? 0 : totalYearlyCommits}<br/>
            Current open issues: {loading ? 0 : issues}<br/>
            Current number of stars: {loading ? 0 : stars}<br/>
            <WeeklyChart days={loading ? null : weeklyCommits.days} loading={loading}/>
        </div>
    );
}

export default Repo;
