import React, { useEffect, useState } from 'react';


const Repo = ({repo}) => {

    const commitURL = "/stats/commit_activity";

    const [weeklyCommits, setWeeklyCommits] = useState(null);
    const [yearlyCommits, setYearlyCommits] = useState(null);
    const [issues, setIssues] = useState(null);
    const [stars, setStars] = useState(null);

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

    useEffect(() => {
        fetchCommitActivity();
        fetchStarsAndIssues();
    }, [])

    return (
        <div>
            {repo.name}
            {repo.url}
            {repo.github_url}
            {repo.icon}
        </div>
    );
}

export default Repo;
