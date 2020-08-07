import React, { useState, useRef, useEffect } from 'react';

import logo from '../../assets/darkartxblm.gif'

import { Link, NavLink } from 'react-router-dom';

import { MenuButton, Logo, MobileContainer } from '../../global styles/index'

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

// icons
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
                <MenuList 
                    autoFocusItem={open} 
                    id="menu-list-grow" 
                    onKeyDown={handleListKeyDown}
                    style={{
                        backgroundColor: '#000',
                    }}>

                <MenuItem 
                    button
                    style={{
                        backgroundColor: '#000',
                    }}>
                    <NavLink 
                        to="/blm-art-exchange"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            width: '100%',
                            fontSize: '1.3rem',
                        }}
                        activeStyle={{
                            width: '100%',
                            color: "#fff",
                            borderBottom: "solid #800000 2px",
                            fontWeight: '900'
                        }}
                        className="mobile-hover">
                    Home
                    </NavLink>
                </MenuItem>

                <MenuItem 
                    button
                    style={{
                        backgroundColor: '#000',
                    }}>
                    <NavLink 
                        to="/shop"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            width: '100%',
                            fontSize: '1.3rem',

                        }}
                        activeStyle={{
                            width: '100%',
                            color: "#000000",
                            borderBottom: "solid #800000 2px",
                            fontWeight: '900'
                        }}
                        className="mobile-hover">
                    Shop
                    </NavLink>
                </MenuItem>


                {/*  */}
                <Accordion>
                <AccordionSummary
                    style={{
                        textDecoration: 'none',
                        backgroundColor: '#000',
                        color: '#fff',
                        width: '100%',
                        fontSize: '1.3rem',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }} >
                    Artists <ArrowForwardIosIcon />
                </AccordionSummary>
                <AccordionDetails>
                <MenuItem 
                    button
                    style={{
                        backgroundColor: '#000',
                    }}>
                    <NavLink 
                        to="/artists"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            width: '100%',
                            fontSize: '1.3rem',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }} 
                        activeStyle={{
                            color: "#fff",
                            borderBottom: "solid #800000 2px",
                            fontWeight: '900',
                        }}
                        className="mobile-hover">
                    List of Artists
                    </NavLink>
                    </MenuItem>

                    <MenuItem button
                    style={{
                        backgroundColor: '#000',
                    }}
                    onClick={handleClose}>
                    <NavLink 
                        to="/artist/login"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            width: '100%',
                            fontSize: '1.3rem',
                        }} 
                        activeStyle={{
                            width: '100%',
                            color: "#fff",
                            borderBottom: "solid #800000 2px",
                            fontWeight: '900'
                        }}
                        className="mobile-hover">
                    Artist Portal
                    </NavLink>
                </MenuItem>
                </AccordionDetails>
                </Accordion>


                <MenuItem 
                    button
                    style={{
                        backgroundColor: '#000',
                    }}>
                    <NavLink 
                        to="/insta"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            width: '100%',
                            fontSize: '1.3rem',
                        }}
                        activeStyle={{
                            width: '100%',
                            color: "#fff",
                            borderBottom: "solid #800000 2px",
                            fontWeight: '900'
                        }}
                        className="mobile-hover">
                    About Us
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

            <Link to="/blm-art-exchange" className="home">
                <Logo src={logo} />
            </Link>

            <Link to="/cart" className="cart">
                <ShoppingCartOutlinedIcon />
            </Link>
        </MobileContainer>
    )
}

export default MobileHeader