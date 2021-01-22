import React, { useEffect, useState } from 'react';
import WeeklyChart from './charts/WeeklyChart';


const Repo = ({repo}) => {

    const commitURL = "/stats/commit_activity";

    const [weeklyCommits, setWeeklyCommits] = useState(null);
    const [yearlyCommits, setYearlyCommits] = useState(null);
    const [issues, setIssues] = useState(null);
    const [stars, setStars] = useState(null);
    const [loading, setLoading] = useState(true)

    const fetchCommitActivity = () =>{
        fetch(repo.github_url + commitURL)
        .then(resp => resp.json())
        .then(data => setRepoState(data))
    }
  
    const fetchStarsAndIssues = () =>{
        fetch(repo.github_url)
        .then(resp => resp.json())
        .then(data => setStarsAndIssues(data))
    }

    const setStarsAndIssues = (data) =>{
       setStars(data.stargazers_count);
       setIssues(data.open_issues_count);
    }

    const setRepoState = (data) => {
        setWeeklyCommits(data[0])
        setYearlyCommits(sumOfWeeklyCommits(data))
    }

    const sumOfWeeklyCommits = (data) => {
        return data.reduce((acc, curr) => {return acc + curr.total}, 0)
    }

    const checkLoading = () => {
        if(weeklyCommits != null && yearlyCommits != null && issues != null && stars != null){
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCommitActivity();
        fetchStarsAndIssues();
    }, [])

    useEffect(() => {
        checkLoading();
    }, [weeklyCommits, yearlyCommits, stars, issues])

    return (
        <div>
           {repo.icon}{repo.name}<br/>
            Commits in the past week: {loading ? 0 : weeklyCommits.total}<br/>
            Commits in the past year: {loading ? 0 : yearlyCommits}<br/>
            Current open issues: {loading ? 0 : issues}<br/>
            Current number of stars: {loading ? 0 : stars}<br/>
            <WeeklyChart weeklyCommits={weeklyCommits} loading={loading}/>
        </div>
    );
}

export default Repo;
