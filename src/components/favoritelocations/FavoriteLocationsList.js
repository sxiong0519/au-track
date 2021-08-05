import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { FavLocationCard } from "./FavoriteLocationCard";
import { FavLocationSearch } from "./FavoriteLocationSearch";
import { FavLocationContext } from "./FavoriteLocationsProvider";



export const FavLocationList = () => {
    const { favLocation, getFavLocation, searchTerms } = useContext(FavLocationContext)
    const [filteredFavLocation, setFilteredFavLocation] = useState([])
    const history = useHistory()


    useEffect(() => {
        getFavLocation()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
          // If the search field is not åblank, display matching locations
          const subset = favLocation.filter((fl) =>
            fl.location.title.toLowerCase().includes(searchTerms) ||
            fl.location.description.toLowerCase().includes(searchTerms) ||
            fl.location.address.toLowerCase().includes(searchTerms)
          );
         
          setFilteredFavLocation(subset);
        } else {
          // If the search field is blank, display all locations
          setFilteredFavLocation(favLocation);
        }
      }, [searchTerms, favLocation]);
     
    return (
        <>
        <h2>Saved Locations</h2>
        <div className="wholelocations">
            <div className="locationsearches">
                <FavLocationSearch/>
                <p/>
                <div className="favLocation">
                    <button className="btns" onClick={() => {history.push("/locations")}}>All Locations</button>
                </div>
                </div>
                <div className="locations">
                <div className="locations_list">
                { console.log("filter", favLocation)}
                {filteredFavLocation.map((fav) => {
                    if (fav.currentUserId === parseInt(localStorage.getItem("autrack_user")))
                    return <FavLocationCard key={fav.id} fav={fav}/>;
                })}
                </div>
            </div>
        </div>
        </>
    )



}