import React, {useContext} from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationSearch = () => {
    const { setSearchTerms } = useContext(LocationContext)

    return (
        <>
        Location Search:
        <input type="text" className="locationsearch" onKeyUp={(event) => 
            setSearchTerms(event.target.value)}  placeholder="Search for locations" />
        </>
    )
}