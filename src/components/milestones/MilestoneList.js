import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { MilestoneContext } from "./MilestoneProvider";
import { MilestoneCard } from "./MilestoneCard";
import { ChildContext } from "../children/ChildProvider";
import { MilestoneSearch } from "./MilestoneSearch";
import { ChildProfilePic } from "../children/ChildProfilePic";

export const MilestoneList = () => {

    const { searchTerms, milestones, getMilestones } = useContext(MilestoneContext)
    const {children, getChildById} = useContext(ChildContext)
    const [filteredMilestones, setFiltered] = useState([]);
    const history = useHistory()

    const [child, setChild] = useState({})

    
    const { childId } = useParams();

    useEffect(() => {
        console.log("useEffect", childId)
        getChildById(childId)
        .then(getMilestones())
        .then((response) => {
            setChild(response)
        })
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
          const subset = sortedMilestones.filter((milestone) =>
            milestone.milestone.toLowerCase().includes(searchTerms) ||
            milestone.description.toLowerCase().includes(searchTerms)
          );
         
          setFiltered(subset);
        } else {
          setFiltered(milestones);
        }
      }, [searchTerms, milestones]);

      const sortedMilestones = milestones.sort((a, b) => {
        return (
          new Date(...b.date.split('/')) - new Date(...a.date.split('/'))
        );
      });

      

    return (
        <> 
        <h2>Milestones</h2>
            <div className="wholemilestones">
                <div className="milestonessearches">
                    <ChildProfilePic/>
                    <MilestoneSearch/>
                    <div className="newmilestonebtn"><button className="btns" onClick={() => 
                        {history.push("/milestone/create")}}>
                        Add Milestone</button></div>
                </div>
                <div className="milestones_list">
                    {console.log("MilestoneList: Render", milestones)}
                    {
                        filteredMilestones.map(milestone => {
                            if(milestone.childId === parseInt(childId)){
                        return <MilestoneCard key={milestone.id} milestone={milestone} />}
                        })
                    }
                </div>
            </div>
        </>
    )


}
