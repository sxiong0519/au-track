import React, { useContext, useEffect } from "react";
import { LocationContext } from "../locations/LocationProvider";
import { FavLocationContext } from "./FavoriteLocationsProvider";


export const FavLocationCard = ({ fav }) => {
    const { deleteFavLocation } = useContext(FavLocationContext)

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

            {fav.currentUserId === parseInt(localStorage.getItem("autrack_user")) ? 
            <section className="buttons">
			<button className="btns" onClick={unFavorite}>Delete</button>
			</section> : ""}
            </div>
        </>
    )

}