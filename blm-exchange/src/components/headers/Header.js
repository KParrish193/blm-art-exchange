import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/darkartxblm.gif'
import { HeaderContainer, Nav, Logo } from '../../global styles/index'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {

    return(
        <HeaderContainer>
            <Nav>
            {/* <Link to="/customer/login" className="cart">
                <AccountCircleIcon />
            </Link> */}
            
            <NavLink 
                to="/about"   
                activeStyle={{
                    fontWeight: "bold",
                    color: "#fff",
                    borderBottom: "solid #800000 2px"
                }}>
                About Us
            </NavLink>

            <NavLink 
                to="/shop"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#fff",
                    borderBottom: "solid #800000 2px"
                }}>
                Shop
            </NavLink>

            <Link to="/blm-art-exchange" className="home">
                <Logo src={logo} />
            </Link>

            <NavLink 
                to="/artists"               
                activeStyle={{
                fontWeight: "bold",
                color: "#fff",
                borderBottom: "solid #800000 2px"
            }}>
                Artists
            </NavLink>

            {/* <NavLink 
                to="/artist/login"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#fff",
                    borderBottom: "solid #800000 2px"
                }}>
                Artist Login
            </NavLink> */}

            <Link to="/cart" className="cart">
                <ShoppingCartOutlinedIcon />
            </Link>
            </Nav>
        

        </HeaderContainer>
    )
}

export default Header












 




