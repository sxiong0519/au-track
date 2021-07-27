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


    return (
        <ChildContext.Provider value={{children, getChildren, getChildById}}>
            {props.children}
        </ChildContext.Provider>
    )



}