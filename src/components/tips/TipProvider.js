import React, { useState, createContext } from "react"


export const TipContext = createContext()

export const TipProvider = (props) => {
    const [tips, setTips] = useState([])


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
        return fetch(`http://localhost:8088/tips/${id}?_embed=parents`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }


    return (
        <TipContext.Provider value={{tips, getTips, addTips, getTipById}}>
            {props.children}
        </TipContext.Provider>
    )



}