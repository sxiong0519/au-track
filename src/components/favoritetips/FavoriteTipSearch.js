import React, { useContext } from "react";
import { FavTipContext } from "./FavoriteTipsProvider";



export const FavTipSearch = () => {
    const {setSearchTerms} = useContext(FavTipContext)

    return (
        <>
        Search:
        <input type="text" className="tipsearch" onKeyUp={(event) => 
            setSearchTerms(event.target.value)}  placeholder="Search for a post" />
        </>
    )
}