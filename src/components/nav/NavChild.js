import React, { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChildContext } from "../children/ChildProvider"
import "./Nav.css"

export const NavChild = (props) => {
    const { getChildById } = useContext(ChildContext)
    const [child, setChild] = useState({})
    const {childId} = useParams();

    useEffect(() => {
        console.log("useEffect", childId)
        getChildById(childId)
        .then((response) => {
            setChild(response)
        })
    }, [])




    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home </Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to={`/children/detail/${child.id}`}>Child</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to={`/milestones/list/${child.id}`}>Milestones </Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to={`/providers/list/${child.id}`}>Provider</Link>
            </li>
        </ul>
    )
}
