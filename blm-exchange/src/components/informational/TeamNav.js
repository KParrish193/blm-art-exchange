import React from 'react'
import { NavLink } from 'react-router-dom';
import { TeamNavContainer } from '../../global styles'

function Team() {
return(
    <TeamNavContainer>
        <NavLink 
            to="/operations"            
            activeStyle={{
            fontWeight: "bold",
            color: "#fff",
            borderBottom: "solid #800000 2px"
        }}>
            Operations
        </NavLink>

        <NavLink 
            to="/digitalmarketing"            
            activeStyle={{
            fontWeight: "bold",
            color: "#fff",
            borderBottom: "solid #800000 2px"
        }}>
            Digital Marketing
        </NavLink>

        <NavLink 
            to="/legal"            
            activeStyle={{
            fontWeight: "bold",
            color: "#fff",
            borderBottom: "solid #800000 2px"
        }}>
            Legal
        </NavLink>

        <NavLink 
            to="/development"            
            activeStyle={{
            fontWeight: "bold",
            color: "#fff",
            borderBottom: "solid #800000 2px"
        }}>
            Development
        </NavLink>
    </TeamNavContainer>
)}

export default TeamNav
