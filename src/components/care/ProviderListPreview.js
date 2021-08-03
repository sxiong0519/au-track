import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { ProviderContext } from "./ProviderProvider";
import { ProviderCard } from "./ProviderCard";
import { ChildContext } from "../children/ChildProvider";

export const ProviderListPreview = () => {

    const { providers, getProviders } = useContext(ProviderContext)
    const { getChildById } = useContext(ChildContext)
    const [child, setChild] = useState({})

    const history = useHistory()

    const { childId } = useParams();

    const sortedProviders = providers.sort((a, b) => {
      return (
        new Date(...b.date.split('/')) - new Date(...a.date.split('/'))
      );
    });

    console.log("ditto", sortedProviders)

    useEffect(() => {
        console.log("LocationList: useEffect - getProviders")
        getChildById(childId)
        .then(getProviders())
        .then((response) => {
          setChild(response)
        })
    }, [])

    const providerMap = sortedProviders.map(provider => {
      if(provider.childId === child.id){
      return <ProviderCard key={provider.id} provider={provider} />}
    })

    const providerFilter = providerMap.filter((p) => {
      return p !== undefined
    })

    return (
        <>
        <div className="providers">
          <h2>Providers</h2>
        <div className="providers_list">
        {console.log("ProviderList: Render", providers)}
          {
             providerFilter.slice(0,3)
          }
          </div>
        </div>
        </>
    )


}
