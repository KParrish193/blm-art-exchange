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
        to="/operations"               
        activeStyle={{
        fontWeight: "bold",
        color: "#fff",
        borderBottom: "solid #800000 2px"
    }}>
        Meet The Team
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
</AboutNavContainer>

)}

export default AboutNav