import React, {useContext} from "react"
import { ProviderContext } from "./ProviderProvider"
import "./Provider.css"

export const ProviderSearch = () => {
    const { setSearchTerms } = useContext(ProviderContext)

    return (
        <>
        Provider Search:
        <input type="text" className="providersearch" onKeyUp={(event) => 
            setSearchTerms(event.target.value)}  placeholder="Search for providers" />
        </>
    )
} 