import React, { useState, createContext } from "react"


export const ChildContext = createContext()

export const ChildProvider = (props) => {
    const [children, setChildren] = useState([])


    const getChildren = () => {
        return fetch("http://localhost:8088/children")
        .then(res => res.json())
        .then(setChildren)
    }

    const getChildById = (id) => {
        return fetch (`http://localhost:8088/children/${id}`)
        .then(res => res.json())
    }

    const addChildren = childObj => {
        return fetch("http://localhost:8088/children", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(childObj)
        })
        .then(getChildren)
    }

    const deleteChild = (id) => {
		return fetch(`http://localhost:8088/children/${id}`,
		{method: "DELETE"})
		.then(getChildren)
	}

	const updateChild = child => {
		return fetch(`http://localhost:8088/children/${child.id}`, {
			method:"PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(child)
		})
		.then(getChildren)
	}

    return (
        <ChildContext.Provider value={{children, getChildren, getChildById, addChildren, deleteChild, updateChild}}>
            {props.children}
        </ChildContext.Provider>
    )



}