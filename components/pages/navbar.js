import React from "react";
import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

function Navbar(){
    return(
        <>
        <nav>
            <NavLink to='/home'>Home</NavLink>   
            <NavLink to='/product'>Product</NavLink> 
            <NavLink to='/logout'>Profile</NavLink> 
            {/* <a href="http://localhost:8080/homepage">Home</a>
            <a href="http://localhost:8080/product">Product</a>
            <a href="http://localhost:8080/signup">Profile</a> */}
            
        </nav>
        </>
    )
}

export default Navbar;