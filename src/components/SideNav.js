import { Divider, List, ListItemIcon, ListItemText, makeStyles, Drawer, ListItem } from '@material-ui/core';
import React from 'react';
import {IoHome, IoAnalytics } from 'react-icons/io5'
import repo from '../data/repos'
const useStyles = makeStyles({
    sidenavContainer: {
        width: 170,
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
        marginBottom: 10
    }
})

const SideNav = () => {
    const classes = useStyles();
    return (
        <div className={classes.navContainer}>
            <Drawer classes={{paper: classes.sidenav}}variant="permanent"  anchor="left">
                <Divider/>
                <List>
                    <ListItem button key="Test Button">
                        <ListItemIcon className={classes.sidenavIcon}><IoHome/></ListItemIcon>
                        <ListItemText classes={{primary: classes.listItemText}} primary="Home"/>
                    </ListItem>
                    {repo.map((repo, index) => {
                        return (
                            <ListItem button key={index}>
                                <ListItemIcon className={classes.sidenavIcon}>{repo.icon}</ListItemIcon>
                                <ListItemText classes={{primary: classes.listItemText}} primary={repo.name}/>
                            </ListItem>
                        )
                    })}
                    <ListItem button key="Test Button">
                        <ListItemIcon className={classes.sidenavIcon}><IoAnalytics/></ListItemIcon>
                        <ListItemText classes={{primary: classes.listItemText}}primary="Compare Frameworks"/>
                    </ListItem>
                    </List> 
            </Drawer>
        </div>
    );
}

export default SideNav;
