import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import logo from '../assets/lightsimplelogo.png'

import styled from 'styled-components';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    width: 100%;
    border-bottom: solid #f6f6f6 1px;

    a {
        text-decoration: none;
        color: #000000;
        font-size: 1.4rem;
        margin: 0;
        padding: 10px;
    }

        a.home{
            padding: 0px;
            margin: 0px;
            
            :hover {
                border-bottom: none;
            }
        }

        a.cart {
            text-decoration: none;
            margin: 0 20px;
            padding: 0px;
            color: #000000;
            font-size: 1.3rem;

            :hover {
                color: #000000;
                border-bottom: none;
            }
        }

        a:hover {
            border-bottom: 2px solid #800000;
        }

        .mobile-home{
            display: none;
        }

        @media (max-width: 500px){
            display: flex;
            flex-direction: column-reverse;

            .home {
                display: none;
            }

            .mobile-home{
                display: flex;

                :hover{
                    border-bottom: none;
                }
            }
        }

`

const Nav = styled.div`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    width: 90%;

    @media (max-width: 500px){
        display: flex;
        flex-direction: column;
        width: 100%;

        a {
            width: 100%;
            border-bottom: 1px solid #222222;
        }
    }
`

const MobileNav = styled.div`
@media (max-width: 500px){
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #222222;

    a.mobile-home {
        margin-right: 126px;
    }
}
`
const Logo = styled.img`
    height: auto;
    width: 100px;
`

function Header() {
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

            <Link to="/" className="home">
                <Logo src={logo} />
            </Link>

            <NavLink 
                to="/artists"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#000000",
                    borderBottom: "solid #800000 2px"
                }}>
                Artists
            </NavLink>

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

            <MobileNav>
            <Link to="/" className="mobile-home">
                <Logo src={logo} />
            </Link>
            <Link to="/cart" className="cart">
                <ShoppingCartOutlinedIcon />
            </Link>
            </MobileNav>

        </HeaderContainer>
    )
}

export default Header