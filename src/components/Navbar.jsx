import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/" className="navbar bg-primary" style={{height:"100px", display:"flex", justifyContent:"center"}}>
                <button className="btn btn-primary" style={{fontSize:"50px"}}>🏠</button>
            </NavLink>
        </nav>
    );
}

export default Navbar;
