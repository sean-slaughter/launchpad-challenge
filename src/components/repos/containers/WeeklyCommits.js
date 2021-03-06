import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#e0e1dd",
    maxWidth: 300,
  },
  text: {
    color: "#0d1b2a",
    fontSize: 40,
    fontFamily: "Titillium Web",
  },
});

const WeeklyCommits = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.text}>
          Total Weekly Commits: {data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeeklyCommits;
