import React from "react";
import { Route, Switch } from "react-router-dom";
import reposData from "./data/reposData";
import Compare from "./components/repos/Compare";
import Home from "./components/containers/Home";
import Repo from "./components/repos/Repo";

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
