import React, { useContext } from "react";
import { FavLocationContext } from "./FavoriteLocationsProvider";


export const FavLocationSearch = () => {
    const {setSearchTerms} = useContext(FavLocationContext)


    return (
        <>
        Location Search:
        <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a Location... " />
        </>
    )
}