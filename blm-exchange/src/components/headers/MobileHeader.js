import React, { useState, useRef, useEffect } from 'react';

import logo from '../../assets/lightsimplelogo.png'

import { Link, NavLink } from 'react-router-dom';

import { MenuButton, Logo, MobileContainer } from '../../global styles/index'

import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// icons
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

function MobileHeader(){

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    
      // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
    
        prevOpen.current = open;
    }, [open]);

    return(
        <MobileContainer className="mobile" >
            <div className="menu">

            <MenuButton
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}>
                <MenuIcon />

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                <MenuItem button>
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
                    Shop
                    </NavLink>
                    </MenuItem>

                    <MenuItem button>
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
                        Artists
                        </NavLink>
                    </MenuItem>

                    <MenuItem button>
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
                        About Us
                        </NavLink>
                    </MenuItem>

                    <MenuItem button>
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
                        FAQ
                        </NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
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
                        Artist Portal
                        </NavLink>
                    </MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                    </Paper>
                </Grow>
                )}
            </Popper>   
            </MenuButton>             
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