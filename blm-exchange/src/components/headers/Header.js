import React, { useState, useEffect, useRef } from 'react';

import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/ArtxBLMLogo-13.png'
import { HeaderContainer, Nav, Logo, ArtistMenuButton } from '../../global styles/index'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';


function Header() {

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
        <HeaderContainer>
            <Nav>
            <NavLink 
                to="/about"   
                activeStyle={{
                    fontWeight: "bold",
                    color: "#000000",
                    borderBottom: "solid #800000 2px"
                }}>
                About Us
            </NavLink>

            <NavLink 
                to="/shop"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#000000",
                    borderBottom: "solid #800000 2px"
                }}>
                Shop
            </NavLink>

            <Link to="/blm-art-exchange" className="home">
                <Logo src={logo} />
            </Link>

            <ArtistMenuButton
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}>
                
                <NavLink 
                    to="/artists"               
                    activeStyle={{
                    fontWeight: "bold",
                    color: "#000000",
                    borderBottom: "solid #800000 2px"
                }}>
                    Artists
                </NavLink>
                
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>

                    <MenuItem onClick={handleClose}>
                        <Link to="/artists">
                            List of Artists
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <NavLink 
                            to="/artist/login"
                            activeStyle={{
                                fontWeight: "bold",
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
            </ArtistMenuButton>

            <NavLink 
                to="/FAQ"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#000000",
                    borderBottom: "solid #800000 2px"
                }}>
                FAQ
            </NavLink>
            </Nav>

            <Link to="/cart" className="cart">
                <ShoppingCartOutlinedIcon />
            </Link>
        

        </HeaderContainer>
    )
}

export default Header












 




