import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { MilestoneContext } from "./MilestoneProvider";
import { MilestoneCard } from "./MilestoneCard";
import { ChildContext } from "../children/ChildProvider";

export const MilestoneListPreview = () => {

    const { milestones, getMilestones } = useContext(MilestoneContext)
    const {children, getChildById} = useContext(ChildContext)
    const history = useHistory()

    const [child, setChild] = useState({})

    
    const { childId } = useParams();

    const sortedMilestones = milestones.sort((a, b) => {
        return (
          new Date(...b.date.split('/')) - new Date(...a.date.split('/'))
        );
      });
  

    useEffect(() => {
        console.log("useEffect", childId)
        getChildById(childId)
        .then(getMilestones())
        .then((response) => {
            setChild(response)
        })
    }, [])

    const milestoneMap = sortedMilestones.map(milestone => {
        if(milestone.childId === child.id){
    return <MilestoneCard key={milestone.id} milestone={milestone} />}
    })
    
    const milestoneFilter = milestoneMap.filter((m) =>{ 
            return m !== undefined})

            console.log("milestoneFilter" ,milestoneFilter)

    return (
        <>
            <div className="milestones">
            <h2>Milestones</h2>
            <div className="newmilestonebtn"><button className="btns" onClick={() => 
                        {history.push("/milestone/create")}}>
                        Add Milestone</button></div>
            <div className="milestones_list">
            {console.log("MilestoneList: Render", milestoneMap)}
            {
                milestoneFilter.slice(0,3)
            }
            </div>
            </div>
        </>
    )


}
