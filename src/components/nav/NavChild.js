import React, { useContext, useEffect, useState } from "react"
import { Link, Redirect, useHistory, useParams } from "react-router-dom"
import { Login } from "../auth/Login"
import { ChildContext } from "../children/ChildProvider"
import "./Nav.css"
import logo from "./navlogo.png"

export const NavChild = (props) => {
    const { getChildById } = useContext(ChildContext)
    const [child, setChild] = useState({})
    const {childId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", childId)
        getChildById(childId)
        .then((response) => {
            setChild(response)
        })
    }, [])

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
                <Link className="navbar__link" to="/"><span className="highlight">Home </span></Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to={`/milestones/list/${child.id}`}>Milestones </Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to={`/providers/list/${child.id}`}>Provider</Link>
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
