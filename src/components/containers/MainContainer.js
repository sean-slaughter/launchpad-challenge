import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Routes from "../../Routes";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eae0d5",
    width: "100%",
    height: "100vh",
    paddingLeft: "15vw",
  },
});
const MainContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Routes />
        </Grid>
      </Container>
    </div>
  );
};

export default MainContainer;
