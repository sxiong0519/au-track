import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"
import logo from "./navlogo.png";

export const NavHome = (props) => {


    return (
        <>
        <div className="navigation">
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/tips">Forum </Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
        </ul>
        </div>
        </>    
    )
}
