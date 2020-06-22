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
    border-bottom: solid #f6f6f6 1px;
    // border: orange dashed 2px;

        a:hover {
            color: #037963;
            text-decoration: underline;
        }

        a.cart {
            text-decoration: none;
            margin: 0 20px;
            color: #000000;
            font-size: 1.3rem;
        }

        a.cart:hover {
            color: #037963;
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
            font-size: 1.3rem;
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

            <Link to="/">
                <p>About Us</p>
            </Link>

            <Link to="/shop">
                <p>Shop</p>
            </Link>

            <Link to="/">
                <Logo src={logo} />
            </Link>

            <Link to="/artists">
                <p>Artists</p>
            </Link>

            <Link to="/FAQ">
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