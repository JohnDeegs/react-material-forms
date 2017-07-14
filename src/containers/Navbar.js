import React, {Component} from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import {AppBar, Toolbar, Typography, Button, IconButton} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

class Navbar extends Component {
    render(){
        return(
            <div>
                <AppBar title="Forms" id="myNavBar">
                    <Toolbar>
                        <IconButton id="navBtns" color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className="flex">
                            Nice Forms
                        </Typography>
                        <Button id="navBtns" color="contrast">Login</Button>
                    </Toolbar>
                    <progress max="100" value="70"></progress>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;