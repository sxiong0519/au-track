import React from "react"
import { Link } from "react-router-dom"
import "./Milestone.css"


export const MilestoneCard = ({ milestone }) => {
    
    return (
        <>
            <section className="milestone_card">
                {milestone.milestone}
            </section>
        </>
)}





