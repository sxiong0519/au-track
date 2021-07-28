import React, { useState, createContext } from "react"


export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])


    const getLocations = () => {
        return fetch("http://localhost:8088/locations?_expand=parent")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocations = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}?_embed=parents`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }

    const deleteLocation = (id) => {
		return fetch(`http://localhost:8088/locations/${id}`,
		{method: "DELETE"})
		.then(getLocations)
	}

	const updateLocation = location => {
		return fetch(`http://localhost:8088/locations/${location.id}`, {
			method:"PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(location)
		})
		.then(getLocations)
	}


    return (
        <LocationContext.Provider value={{locations, getLocations, addLocations, getLocationById, deleteLocation, updateLocation}}>
            {props.children}
        </LocationContext.Provider>
    )



}