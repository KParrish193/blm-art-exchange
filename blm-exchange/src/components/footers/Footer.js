import React from 'react';
import { FooterContainer, Nav } from '../../global styles/index'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function Footer() {
    return(
        <FooterContainer>
            <Nav className="footer-contact">
                <a href="https://instagram.com/artxblm?igshid=1b2f2j0u0ntyw" target="blank">
                    <InstagramIcon />
                </a>

                <a href="https://www.facebook.com/artxblm" target="blank">
                    <FacebookIcon />
                </a>

                <a href="https://twitter.com/artxblm" target="blank">
                    <TwitterIcon />
                </a>

                <a href="mailto:artxblmcollective@gmail.com">
                    <MailOutlineIcon />
                </a>
            </Nav>

            <Nav className="footer-codeofconduct">
                <Link to="/coc">Code of Conduct</Link>
            </Nav>

            <Nav class="footer-codeofconduct">
                <Link to="/artistguidelines">Artist Guidelines</Link>
            </Nav>
        </FooterContainer>
    )
}
export default Footer