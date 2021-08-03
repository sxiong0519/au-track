import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Nav.css"
import logo from "./navlogo.png";

export const NavHome = (props) => {
    const history = useHistory()
    const logout = () => {
        localStorage.removeItem("autrack_user")
        }
    
        const home = () => {
            history.push(`/login`)
        }

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
            <li className="navbar__item">
                <Link  className="navbar__link" onClick={() => { 
                    logout()
                    home()}}> logout </Link>
            </li>
        </ul>
        </div>
        </>    
    )
}
