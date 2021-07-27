import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { ProviderContext } from "./ProviderProvider";
import { ProviderCard } from "./ProviderCard";
import { ChildContext } from "../children/ChildProvider";

export const ProviderList = () => {

    const { providers, getProviders } = useContext(ProviderContext)
    const { getChildById } = useContext(ChildContext)
    const [child, setChild] = useState({})

    const history = useHistory()

    const { childId } = useParams();

    useEffect(() => {
        console.log("LocationList: useEffect - getProviders")
        getChildById(childId)
        .then(getProviders())
        .then((response) => {
          setChild(response)
        })
    }, [])

    return (
        <>
        
        <div className="providers">
        {console.log("ProviderList: Render", providers)}
          {
             providers.map(provider => {
                  if(provider.childId === child.id){
              return <ProviderCard key={provider.id} provider={provider} />}
            })
          }
          
        </div>
        </>
    )


}
