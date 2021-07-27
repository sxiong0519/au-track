import React from "react"
import { Link } from "react-router-dom"
import "./Milestone.css"


export const MilestoneCard = ({ milestone }) => {
    
    return (
        <>
            <div className="milestone_card">
                <ul>
                <li>{milestone.milestone}</li>
                <li>{milestone.date}</li>
                <li>{milestone.description}</li>
                </ul>
            </div>
        </>
)}





