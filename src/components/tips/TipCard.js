import React from "react"
import { Link } from "react-router-dom"
import "./Tip.css"


export const TipCard = ({ tip }) => {
    
    return (
        <>
            <div className="tip_card">
            <h2>{tip.title}</h2>
            {tip.description}
            <br/>
            Posted by: {tip.parent.name}
            </div>
        </>
)}

