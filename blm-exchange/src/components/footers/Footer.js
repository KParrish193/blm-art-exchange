import React from 'react';
import { FooterContainer, Nav } from '../../global styles/index'
import { NavLink } from 'react-router-dom';

function Footer() {
    return(
        <FooterContainer>
            <Nav>
                <NavLink to="/artist/coc"
                    style={{color: 'white'}}>Code of Conduct</NavLink>
            </Nav>
        </FooterContainer>
    )
}
export default Footer