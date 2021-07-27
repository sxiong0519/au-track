import React, { useState, createContext } from "react"


export const ProviderContext = createContext()

export const ProviderProvider = (props) => {
    const [providers, setProviders] = useState([])


    const getProviders = () => {
        return fetch("http://localhost:8088/providers")
        .then(res => res.json())
        .then(setProviders)
    }


    return (
        <ProviderContext.Provider value={{providers, getProviders}}>
            {props.children}
        </ProviderContext.Provider>
    )



}