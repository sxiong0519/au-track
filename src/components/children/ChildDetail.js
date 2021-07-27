import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProviderList } from "../care/ProviderList";
import { ProviderProvider } from "../care/ProviderProvider";
import { MilestoneCard } from "../milestones/MilestoneCard";
import { MilestoneList } from "../milestones/MilestoneList";
import { MilestoneContext, MilestoneProvider } from "../milestones/MilestoneProvider";
import { ChildContext } from "./ChildProvider";





export const ChildDetail = () => {

    const { children, getChildById } = useContext(ChildContext)
    const [child, setChild] = useState({})
    const { milestones, getMilestones } = useContext(MilestoneContext)

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
        <div className="childdetail">
        <div className="detailheader">
        <img className="detailimg" src={child.image} /><h3>{child.name}</h3>
        </div>
        <div className="childdetail_milestone">
            {foundChild ? <><MilestoneProvider><MilestoneList /></MilestoneProvider></> : "false"}
            <div className="detail_link">
            <Link to={`/milestones/list/${child.id}`}>View All Milestones</Link>
            </div>
            </div>
        <div className="childdetail_provider">
            <ProviderProvider>
                <ProviderList />
            </ProviderProvider>
            <div className="detail_link">
            <Link to={`/providers`}>View All Providers</Link>
        </div>
        </div>
        </div>
        </>
    )
}