import React, {useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { ProviderContext } from "./ProviderProvider";
import { ProviderCard } from "./ProviderCard";

export const ProviderList = () => {

    const { providers, getProviders } = useContext(ProviderContext)
    const history = useHistory()


    useEffect(() => {
        console.log("LocationList: useEffect - getProviders")
        getProviders()
    }, [])

    return (
        <>
        
        <div className="providers">
        {console.log("ProviderList: Render", providers)}
          {
             providers.map(provider => {
              return <ProviderCard key={provider.id} provider={provider} />
            })
          }
          
        </div>
        </>
    )


}
