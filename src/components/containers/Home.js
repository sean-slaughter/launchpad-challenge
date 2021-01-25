import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
        color: "#e0e1dd",
        marginLeft: -100,
        maxWidth: 1200
    },
    title: {
        fontSize: 75
    },
    body: {
        fontSize: 40
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <div className ={classes.root}>
            <h1 className={classes.title}>Hi, my name is Sean Thompson!</h1>
            <p className={classes.body}>I'm a Full Stack Software Engineer based in Milwaukee, WI.</p>
            <p className={classes.body}>I hope that this dashboard gives you a better insight into my current techncial skills.
            LaunchPad Labs is at the top of my list of potential employers, and I would love to be a part of your team.</p>
            <p className={classes.body}>Use the side navigation bar to view data from each of the prospective JS frameworks. 
            Click 'Compare Frameworks' to see a more in depth analysis of how they stack up against each other.</p>
            <p className={classes.body}>Thank you for giving me this coding challenge, it was a lot of fun!</p>

        </div>
    );
}

export default Home;
