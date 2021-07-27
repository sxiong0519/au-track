import React, { useState, createContext } from "react"


export const TipContext = createContext()

export const TipProvider = (props) => {
    const [tips, setTips] = useState([])


    const getTips = () => {
        return fetch("http://localhost:8088/tips?_expand=parent")
        .then(res => res.json())
        .then(setTips)
    }


    return (
        <TipContext.Provider value={{tips, getTips}}>
            {props.children}
        </TipContext.Provider>
    )



}