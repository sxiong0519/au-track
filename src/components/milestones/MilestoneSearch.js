import React, {useContext} from "react"
import { MilestoneContext } from "./MilestoneProvider"
import "./Milestone.css"

export const MilestoneSearch = () => {
    const { setSearchTerms } = useContext(MilestoneContext)

    return (
        <>
        Milestone Search:
        <input type="text" className="milestonesearch" onKeyUp={(event) => 
            setSearchTerms(event.target.value)}  placeholder="Search for milestones" />
        </>
    )
} 