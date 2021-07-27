import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export const NavChild = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home </Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/milestones">Milestones </Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to="/providers">Provider</Link>
            </li>
        </ul>
    )
}
