import React, { useEffect, useState } from 'react';


const Repo = ({repo}) => {

    const [hourlyCommits, setHourlyCommits] = useState({});
    const [weeklyCommits, setMonthlyCommits] = useState({});
    const [yearlyCommits, setYearlyCommits] = useState({});
    const [issues, setIssues] = useState(0);
    const [stars, setStars] = useState(0);

    const fetchHourlyCommits = () =>{
        fetch(repo.github_url + "stats/punch_card")
        .then(resp => resp.json())
        .then(hourlyCommits => setHourlyCommits(hourlyCommits))
    }
    const fetchWeeklyCommits = () =>{
        fetch(repo.github_url + "stats/participation")
        .then(resp => resp.json())
        .then(hourlyCommits => setHourlyCommits(hourlyCommits))
    }
    const fetchYearlyCommits = () =>{
        fetch(repo.github_url + "/punch_card")
        .then(resp => resp.json())
        .then(hourlyCommits => setHourlyCommits(hourlyCommits))
    }
    const fetchStarsAndIssues = () =>{
        fetch(repo.github_url + "/punch_card")
        .then(resp => resp.json())
        .then(hourlyCommits => setHourlyCommits(hourlyCommits))
    }

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
