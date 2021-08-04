import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import "./Milestone.css"
import { MilestoneContext } from "./MilestoneProvider"


export const MilestoneCard = ({ milestone }) => {
    const {deleteMilestone} = useContext(MilestoneContext)
    const history = useHistory();
    
    const milestoneDelete = () => {
        deleteMilestone(milestone.id)
    }
    
    return (
        <>
            <div className="milestone_card">
            <h4>{milestone.milestone}</h4>
                <ul>
                <li>Occurred:{new Date(milestone.date).toLocaleDateString()}</li>
                <li>{milestone.description}</li>
                </ul>
                <center>
                <div className="buttons">
                    <button className="btns" onClick={milestoneDelete}>Delete</button>
                    <button className="btns" onClick={() => {
                        history.push(`/milestones/edit/${milestone.id}`)
                        }}>Edit</button>
                </div>
                </center>
            </div>

        </>
)}





