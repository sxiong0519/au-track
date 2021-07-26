import React, { useState, createContext } from "react"


export const MilestoneContext = createContext()

export const MilestoneProvider = (props) => {
    const [milestones, setMilestones] = useState([])


    const getMilestones = () => {
        return fetch("http://localhost:8088/milestones")
        .then(res => res.json())
        .then(setMilestones)
    }


    return (
        <MilestoneContext.Provider value={{milestones, getMilestones}}>
            {props.children}
        </MilestoneContext.Provider>
    )



}