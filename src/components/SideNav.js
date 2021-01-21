import { Divider, List, ListItemIcon, ListItemText, makeStyles, Drawer, ListItem } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    sidenav: {
        width: 170,
    }
})

const SideNav = () => {
    const classes = useStyles();
    return (
        <div className={classes.sidenav}>
            <Drawer variant="permanent"  anchor="left">
                <Divider/>
                <List>
                    <ListItem button key="Test Button">
                        <ListItemIcon>Icon</ListItemIcon>
                        <ListItemText primary=""/>
                    </ListItem>
                    </List> 
            </Drawer>
        </div>
    );
}

export default SideNav;
