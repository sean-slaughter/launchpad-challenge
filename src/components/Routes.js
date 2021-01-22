import React from "react";
import { Route, Switch } from "react-router-dom";
import reposData from "../data/reposData";
import Compare from "./Compare";
import Home from "./Home";
import Repo from "./Repo";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/compare" component={Compare} />
      {reposData.map((repo, index) => {
        return (
          <Route
            key={index}
            path={repo.path}
            render={() => <Repo repo={repo} />}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
