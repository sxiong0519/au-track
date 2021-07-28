import React, { useState, createContext } from "react"


export const MilestoneContext = createContext()

export const MilestoneProvider = (props) => {
    const [milestones, setMilestones] = useState([])


    const getMilestones = () => {
        return fetch("http://localhost:8088/milestones?_expand=child")
        .then(res => res.json())
        .then(setMilestones)
    }

    const getMilestoneById = (id) => {
        return fetch (`http://localhost:8088/milestones/${id}?_expand=child`)
        .then(res => res.json())
    }

    const addMilestones = milestoneObj => {
        return fetch("http://localhost:8088/milestones", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(milestoneObj)
        })
        .then(getMilestones)
    }

    const deleteMilestone = (id) => {
		return fetch(`http://localhost:8088/milestones/${id}`,
		{method: "DELETE"})
		.then(getMilestones)
	}

	const updateMilestone = milestone => {
		return fetch(`http://localhost:8088/milestones/${milestone.id}`, {
			method:"PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(milestone)
		})
		.then(getMilestones)
	}

    return (
        <MilestoneContext.Provider value={{milestones, getMilestones, getMilestoneById, addMilestones, deleteMilestone, updateMilestone}}>
            {props.children}
        </MilestoneContext.Provider>
    )



}