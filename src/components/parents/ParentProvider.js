import React, { useState, createContext } from "react"


export const ParentContext = createContext()

export const ParentProvider = (props) => {
    const [parents, setParents] = useState([])


    const getParents = () => {
        return fetch("http://localhost:8088/parents")
        .then(res => res.json())
        .then(setParents)
    }


    return (
        <ParentContext.Provider value={{parents, getParents}}>
            {props.children}
        </ParentContext.Provider>
    )



}