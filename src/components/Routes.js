import React from 'react';
import { Route, Switch } from 'react-router-dom';
import repos from '../data/repos';
import Compare from './Compare';
import Home from './Home';
import Repo from './Repo';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/compare" component={Compare}/>
            {repos.map((repo, index) => {
                return <Route key={index} path={repo.path} render={() => <Repo repo={repo}/>}/> 
            })}
        </Switch>
    );
}

export default Routes;
