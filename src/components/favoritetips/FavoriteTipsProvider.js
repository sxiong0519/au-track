import React, { createContext, useState } from "react";

export const FavTipContext = createContext()

export const FavTipProvider = (props) => {
    const id = parseInt(localStorage.getItem("autrack_user"))
    const [favTip, setFavTip] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getFavTip = () => {
        return fetch(`http://localhost:8088/currentUsers/${id}/favoriteTips?_expand=tip`)
        .then((res) => res.json())
        .then(setFavTip)
    }

    const addFavTip = (newFavTipObj) => {
        return fetch("http://localhost:8088/favoriteTips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFavTipObj)})
            .then(getFavTip)
    }

    const deleteFavTip = (id) => {
        return fetch(`http://localhost:8088/favoriteTips/${id}`,{
            method: "DELETE"})
            .then(getFavTip)
    }

    return (
        <>
        <FavTipContext.Provider value={{favTip, getFavTip, addFavTip, deleteFavTip, searchTerms, setSearchTerms}}>
            {props.children}
        </FavTipContext.Provider>
        </>
    )

}