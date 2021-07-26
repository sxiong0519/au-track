import React, {useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { MilestoneContext } from "./MilestoneProvider";
import { MilestoneCard } from "./MilestoneCard";

export const MilestoneList = () => {

    const { milestones, getMilestones } = useContext(MilestoneContext)
    const history = useHistory()


    useEffect(() => {
        console.log("LocationList: useEffect - getMilestones")
        getMilestones()
    }, [])

    return (
        <>
        
        <div className="milestones">
        {console.log("CustomerList: Render", milestones)}
          {
             milestones.map(milestone => {
              return <MilestoneCard key={milestone.id} milestone={milestone} />
            })
          }
          
        </div>
        </>
    )


}
