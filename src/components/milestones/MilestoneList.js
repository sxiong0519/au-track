import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { MilestoneContext } from "./MilestoneProvider";
import { MilestoneCard } from "./MilestoneCard";
import { ChildContext } from "../children/ChildProvider";

export const MilestoneList = () => {

    const { milestones, getMilestones } = useContext(MilestoneContext)
    const {children, getChildById} = useContext(ChildContext)
    const history = useHistory()

    const [child, setChild] = useState({})

    
    const { childId } = useParams();
    
    let foundChild = milestones.filter(c => c.childId === child.id)

    useEffect(() => {
        console.log("useEffect", childId)
        getChildById(childId)
        .then(getMilestones())
        .then((response) => {
            setChild(response)
        })
    }, [])

    return (
        <>
        
        <div className="milestones">
        <h2>Milestones</h2>
        <div className="milestones_list">
        {console.log("MilestoneList: Render", milestones)}
          {
             milestones.map(milestone => {
                 if(milestone.childId === child.id){
              return <MilestoneCard key={milestone.id} milestone={milestone} />}
            })
          }
          </div>
        </div>
        </>
    )


}
