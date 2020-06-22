import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/lightsimplelogo.png'

import styled from 'styled-components';

import { ShoppingCartOutlined } from '@ant-design/icons';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    width: 100%;
    // border: orange dashed 2px;

        a.cart {
            // border: limegreen 2px solid;
            text-decoration: none;
            margin: 0 20px;
            color: #000000; 
        }
`

const Nav = styled.div`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    // border: purple dashed 2px;
    width: 90%;

        a {
            // border: pink solid 2px;
            text-decoration: none;
            color: #000000; 
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

            <Link>
                <p>About Us</p>
            </Link>

            <Link>
                <p>Shop</p>
            </Link>

            <Link to="/">
                <Logo src={logo} />
            </Link>

            <Link>
                <p>Artists</p>
            </Link>

            <Link>
                <p>FAQ</p>
            </Link>

            </Nav>

            <Link to="/cart" className="cart">
                <ShoppingCartOutlined />
            </Link>

        </HeaderContainer>
    )
}

export default Header