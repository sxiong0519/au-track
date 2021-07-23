import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export const NavHome = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home </Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/tips">Tips/Tricks </Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
        </ul>
    )
}
