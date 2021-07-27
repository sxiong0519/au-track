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
    console.log("filter" , foundChild)
    console.log("child" , child)

    return (
        <>
        
        <div className="milestones">
        {console.log("MilestoneList: Render", milestones)}
          {
             milestones.map(milestone => {
                 if(milestone.childId === child.id){
              return <MilestoneCard key={milestone.id} milestone={milestone} />}
            })
          }
          
        </div>
        </>
    )


}
