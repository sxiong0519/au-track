import React, { useState, createContext } from "react"


export const ProviderContext = createContext()

export const ProviderProvider = (props) => {
    const [providers, setProviders] = useState([])
    const [searchTerms, setSearchTerms] = useState("")


    const getProviders = () => {
        return fetch("http://localhost:8088/providers")
        .then(res => res.json())
        .then(setProviders)
    }

    const getProviderById = (id) => {
        return fetch (`http://localhost:8088/providers/${id}?_expand=child`)
        .then(res => res.json())
    }

    const addProviders = providerObj => {
        return fetch("http://localhost:8088/providers", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(providerObj)
        })
        .then(getProviders)
    }

    const deleteProvider = (id) => {
		return fetch(`http://localhost:8088/providers/${id}`,
		{method: "DELETE"})
		.then(getProviders)
	}

	const updateProvider = provider => {
		return fetch(`http://localhost:8088/providers/${provider.id}`, {
			method:"PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(provider)
		})
		.then(getProviders)
	}


    return (
        <ProviderContext.Provider value={{providers, getProviders, getProviderById, addProviders, deleteProvider, updateProvider, searchTerms, setSearchTerms}}>
            {props.children}
        </ProviderContext.Provider>
    )



}