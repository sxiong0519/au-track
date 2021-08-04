import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { FavLocationContext } from "../favoritelocations/FavoriteLocationsProvider"
import "./Location.css"
import { LocationContext } from "./LocationProvider"



export const LocationCard = ({ location }) => {
    const { deleteLocation } = useContext(LocationContext)
    const { favLocation, addFavLocation, getFavLocation } = useContext(FavLocationContext)
    const history = useHistory();
    const currentUser = parseInt(localStorage.getItem("autrack_user"))

    useEffect(() => {
    getFavLocation();
    }, [])

    const locationDelete = () => {
        deleteLocation(location.id)
    }

   let favorites = favLocation.find((fav) => currentUser === fav.currentUserId && fav.locationId === location.id)

    const addNewFavLocation = () => {
        const newFavLocationObj = {
            currentUserId: currentUser,
            locationId: location.id
        }
        addFavLocation(newFavLocationObj)
        .then(() => history.push("/favlocations"))
    }
    
    return (
        <>
            <div className="Location_card">
            <div className="location_title">
                {location.title}
                </div>
            {location.description}
            <br/>
            Address: {location.address}
            <br/>
            Posted by: {location.parent.name}            
            {location.parentId === currentUser ? 
            <section className="buttons">
                <button className="btns" onClick={locationDelete}>Delete</button>
                <button className="btns" onClick={() => {
                    history.push(`/locations/edit/${location.id}`)
                        }}>Edit</button>
			</section> 
            : <>{favorites ? "" : <button className="btns" onClick={addNewFavLocation}>Favorite</button>}</>}
            </div>
        </>
)}

