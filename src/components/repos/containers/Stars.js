import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    card: {
        backgroundColor: "#22333b",
        maxWidth: 300,
    },
    text: {
        color: "white",
        fontSize: 40,
        fontFamily: 'Titillium Web'
    },
})

const Stars = ({data}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.text}>
                    Stars: {data}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Stars;
