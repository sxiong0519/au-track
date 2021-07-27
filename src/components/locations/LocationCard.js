import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"


export const LocationCard = ({ location }) => {
    
    return (
        <>
            <div className="Location_card">
            <h2>{location.title}</h2>
            {location.description}
            <br/>
            Posted by: {location.parent.name}
            </div>
        </>
)}

