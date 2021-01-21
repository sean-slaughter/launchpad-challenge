import { Divider, List, ListItemIcon, ListItemText, makeStyles, Drawer, ListItem } from '@material-ui/core';
import React from 'react';
import {IoHome, IoAnalytics } from 'react-icons/io5'
import { withRouter } from 'react-router-dom';
import repo from '../data/repos'

const useStyles = makeStyles({
    sidenavContainer: {
        width: 400,
    },
    sidenav:{
        background: "#283d3b",
        color: "white",
        fontSize: 25 
    },
    sidenavIcon: {
        color: "white"
    },
    listItemText: {
        fontSize: 25,
        marginBottom: 10,
        fontFamily: 'Titillium Web',
    }
})

const SideNav = (props) => {

  const { history } = props;
  const classes = useStyles();

  return (
    <div className={classes.sidenavContainer}>
      <Drawer
        classes={{ paper: classes.sidenav }}
        variant="permanent"
        anchor="left"
      >
        <Divider />

        <List>
          <ListItem button onClick={() => history.push("/")}>
            <ListItemIcon className={classes.sidenavIcon}>
              <IoHome/>
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Home"
            />
          </ListItem>

          {repo.map((repo, index) => {
            const {name, path, icon} = repo;
            return (
              <ListItem button key={index} onClick={() => history.push(path)}>
                <ListItemIcon className={classes.sidenavIcon}>
                  {icon}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={name}
                />
              </ListItem>
            );
          })}
          <ListItem button onClick={() => history.push("/compare")}>
            <ListItemIcon className={classes.sidenavIcon}>
              <IoAnalytics />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Compare Frameworks"
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default withRouter(SideNav);
