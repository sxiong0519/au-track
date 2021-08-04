import React, { useContext, useEffect } from "react";
import { ParentContext } from "../parents/ParentProvider";
import { FavLocationContext } from "./FavoriteLocationsProvider";


export const FavLocationCard = ({ fav }) => {
    const { deleteFavLocation } = useContext(FavLocationContext)
    const { parents, getParents } = useContext(ParentContext)

    useEffect(() => {
    getParents()
    }, [])

    const parent = parents.find((p) => p.id === fav.location.parentId)
    console.log("parents", parent)

    const unFavorite = () => {
        deleteFavLocation(fav.id)
    }



    return (
        <>
        <div className="Location_card">
            <div className="location_title">
                {fav.location.title}
                </div>
            {fav.location.description}
            <br/>
            Address: {fav.location.address}
            <br/>
            Posted by: {parent?.name}
            {fav.currentUserId === parseInt(localStorage.getItem("autrack_user")) ? 
            <section className="buttons">
			<button className="btns" onClick={unFavorite}>Delete</button>
			</section> : ""}
            </div>
        </>
    )

}