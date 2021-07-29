import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProviderList } from "../care/ProviderList";
import { ProviderListPreview } from "../care/ProviderListPreview";
import { ProviderContext, ProviderProvider} from "../care/ProviderProvider";
import { MilestoneCard } from "../milestones/MilestoneCard";
import { MilestoneList } from "../milestones/MilestoneList";
import { MilestoneListPreview } from "../milestones/MilestoneListPreview";
import { MilestoneContext, MilestoneProvider } from "../milestones/MilestoneProvider";
import { ChildContext } from "./ChildProvider";





export const ChildDetail = () => {

    const { children, getChildById } = useContext(ChildContext)
    const [child, setChild] = useState({})
    const { milestones, getMilestones } = useContext(MilestoneContext)
    const { providers, getProviders } = useContext(ProviderContext)

    const { childId } = useParams();
    
    let milestoneChild = milestones.filter(c => c.childId === child.id)
    let providerChild = providers.filter(p => p.childId === child.id)

    useEffect(() => {
        console.log("useEffect", childId)
        getChildById(childId)
        .then(getMilestones())
        .then(getProviders())
        .then((response) => {
            setChild(response)
        })
    }, [])
    console.log("filter" , providerChild)
    console.log("child" , child)
    return (
        <>
        <div className="childdetail">
        <div className="childdetail_milestone">
            {milestoneChild ? <MilestoneProvider>
                <MilestoneListPreview />
                </MilestoneProvider> : "false"}
            <div className="detail_link">
            <Link to={`/milestones/list/${child.id}`}>View All Milestones</Link>
            </div>
            </div>
        <div className="childdetail_provider">
            {providerChild ? <> <ProviderProvider>
                <ProviderListPreview />
            </ProviderProvider> </> : "false"}
            <div className="detail_link">
            <Link to={`/providers/list/${child.id}`}>View All Providers</Link>
        </div>
        </div>
        </div>
        </>
    )
}