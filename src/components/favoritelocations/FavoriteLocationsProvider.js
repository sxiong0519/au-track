import React, { createContext, useState } from "react";

export const FavLocationContext = createContext()

export const FavLocationProvider = (props) => {
    const id = parseInt(localStorage.getItem("autrack_user"))
    const [favLocation, setFavLocation] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getFavLocation = () => {
        return fetch(`http://localhost:8088/currentUsers/${id}/favoriteLocations?_expand=location`)
        .then((res) => res.json())
        .then(setFavLocation)
    }

    const addFavLocation = (newFavLocationObj) => {
        return fetch("http://localhost:8088/favoriteLocations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFavLocationObj)})
            .then(getFavLocation)
    }

    const deleteFavLocation = (id) => {
        return fetch(`http://localhost:8088/favoriteLocations/${id}`,{
            method: "DELETE"})
            .then(getFavLocation)
    }

    return (
        <>
        <FavLocationContext.Provider value={{favLocation, getFavLocation, addFavLocation, deleteFavLocation, searchTerms, setSearchTerms}}>
            {props.children}
        </FavLocationContext.Provider>
        </>
    )

}