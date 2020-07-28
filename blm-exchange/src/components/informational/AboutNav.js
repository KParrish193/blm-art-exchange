import React from 'react'
import { NavLink } from 'react-router-dom';
import { AboutNavContainer } from '../../global styles'

function AboutNav(){
    return(
    <AboutNavContainer>
    
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
        to="/faq"               
        activeStyle={{
        fontWeight: "bold",
        color: "#fff",
        borderBottom: "solid #800000 2px"
    }}>
        FAQ
    </NavLink>

    <NavLink 
        to="/insta"               
        activeStyle={{
        fontWeight: "bold",
        color: "#fff",
        borderBottom: "solid #800000 2px"
    }}>
        Instagram
    </NavLink>
</AboutNavContainer>

)}

export default AboutNav