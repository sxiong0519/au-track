import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MilestoneList } from "../milestones/MilestoneList";
import { MilestoneContext, MilestoneProvider } from "../milestones/MilestoneProvider";
import { ChildContext } from "./ChildProvider";



export const ChildDetail = () => {
    // const {children, getChildren} = useContext(ChildContext)
    // const {milestones, getMilestones} = useContext(MilestoneContext)

    // let foundChild = milestones.find(milestone => milestone.childId === children.id)
    
    return (
        <>
        <div>
        <MilestoneProvider>
            <MilestoneList />
        </MilestoneProvider>
        </div>
       <Link to={`/milestones`}>View All Milestones
                        </Link>
        </>
    )
}