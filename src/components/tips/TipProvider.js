import React, { useState, createContext } from "react"


export const TipContext = createContext()

export const TipProvider = (props) => {
    const [tips, setTips] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getTips = () => {
        return fetch("http://localhost:8088/tips?_expand=parent")
        .then(res => res.json())
        .then(setTips)
    }

    const addTips = tipObj => {
        return fetch("http://localhost:8088/tips", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tipObj)
        })
        .then(getTips)
    }

    const getTipById = (id) => {
        return fetch(`http://localhost:8088/tips/${id}?_expand=parent`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }

    const deleteTip = (id) => {
		return fetch(`http://localhost:8088/tips/${id}`,
		{method: "DELETE"})
		.then(getTips)
	}

	const updateTip = tip => {
		return fetch(`http://localhost:8088/tips/${tip.id}`, {
			method:"PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(tip)
		})
		.then(getTips)
	}


    return (
        <TipContext.Provider value={{tips, getTips, addTips, getTipById, deleteTip, updateTip, searchTerms, setSearchTerms}}>
            {props.children}
        </TipContext.Provider>
    )



}