import React, {useContext} from "react"
import { TipContext } from "./TipProvider"
import "./Tip.css"

export const TipSearch = () => {
    const { setSearchTerms } = useContext(TipContext)

    return (
        <>
        Search:
        <input type="text" className="tipsearch" onKeyUp={(event) => 
            setSearchTerms(event.target.value)}  placeholder="Search for a post" />
        </>
    )
}