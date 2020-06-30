import React, { useState } from 'react';

import logo from '../../assets/lightsimplelogo.png'

import { Link, NavLink } from 'react-router-dom';

import { MenuButton, Logo, MobileContainer } from '../../global styles/index'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    list: {
        width: 250,
        },
    fullList: {
        width: 'auto',
        },
});


function MobileHeader(){

    const classes = useStyles();
    const [state, setState] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

        <List>
        <ListItem button>
            <NavLink 
                to="/shop"
                style={{
                    textDecoration: 'none',
                    color: '#000000',
                    width: '100%',
                    borderBottom: "solid #b4b4b4 1px",
                }}
                activeStyle={{
                    color: "#000000",
                    borderBottom: "solid #800000 2px"
                }}>
            <ListItemText primary="Shop" />
            </NavLink>
            </ListItem>

            <ListItem button>
                <NavLink 
                    to="/artists"
                    style={{
                        textDecoration: 'none',
                        color: '#000000',
                        width: '100%',
                        borderBottom: "solid #b4b4b4 1px",
                    }} 
                    activeStyle={{
                        color: "#000000",
                        borderBottom: "solid #800000 2px"
                    }}>
                <ListItemText primary="Artists" />
                </NavLink>

            </ListItem>

            <ListItem button>
                <NavLink 
                    to="/login"
                    style={{
                        textDecoration: 'none',
                        color: '#000000',
                        width: '100%',
                        borderBottom: "solid #b4b4b4 1px",
                    }} 
                    activeStyle={{
                        color: "#000000",
                        borderBottom: "solid #800000 2px"
                    }}>
                <ListItemText primary="Artist Portal" />
                </NavLink>

            </ListItem>

            <ListItem button>
                <NavLink 
                    to="/about"
                    style={{
                        textDecoration: 'none',
                        color: '#000000',
                        width: '100%',
                        borderBottom: "solid #b4b4b4 1px",
                    }}
                    activeStyle={{
                        width: '100%',
                        color: "#000000",
                        borderBottom: "solid #800000 2px"
                    }}>
                <ListItemText primary="About Us" />
                </NavLink>
            </ListItem>

            <ListItem button>
                <NavLink 
                    to="/FAQ"
                    style={{
                        textDecoration: 'none',
                        color: '#000000',
                        width: '100%',
                        borderBottom: "solid #b4b4b4 1px",
                    }} 
                    activeStyle={{
                        color: "#000000",
                        borderBottom: "solid #800000 2px"
                    }}>
                <ListItemText primary="FAQ" />
                </NavLink>
            </ListItem>

        </List>
        </div>
    );


    return(
        <MobileContainer className="mobile" >
            <div className="menu">
            {[''].map((anchor) => (
                <React.Fragment key={anchor}>
                <MenuButton onClick={toggleDrawer(anchor, true)}><MenuIcon />{anchor}</MenuButton>
                <Drawer 
                    anchor={anchor} 
                    open={state[anchor]} 
                    onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
            </div>    

            <Link to="/" className="home">
                <Logo src={logo} />
            </Link>

            <Link to="/cart" className="cart">
                <ShoppingCartOutlinedIcon />
            </Link>
        </MobileContainer>
    )
}

export default MobileHeader