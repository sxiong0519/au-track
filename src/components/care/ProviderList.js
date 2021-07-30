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

    console.log("provider child", childId)

    return (
        <>
         <div className="newproviderbtn"><button className="btns" onClick={() => 
                {history.push("/provider/create")}}>
                Add Provider</button></div>
        <div className="providers">
          <h2>Providers</h2>
        <div className="providers_list">
        {console.log("ProviderList: Render", providers)}
          {
             providers.map(provider => {
                  if(provider.childId === parseInt(childId)){
              return <ProviderCard key={provider.id} provider={provider} />}
            })
          }
          </div>
        </div>
        </>
    )


}
