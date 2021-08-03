import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { ProviderContext } from "./ProviderProvider";
import { ProviderCard } from "./ProviderCard";
import { ChildContext } from "../children/ChildProvider";
import { ProviderSearch } from "./ProviderSearch";
import { ChildProfilePic } from "../children/ChildProfilePic";

export const ProviderList = () => {

    const { searchTerms, providers, getProviders } = useContext(ProviderContext)
    const { getChildById } = useContext(ChildContext)
    const [child, setChild] = useState({})
    const [filteredProviders, setFiltered] = useState([]);

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

    useEffect(() => {
      if (searchTerms !== "") {
        const subset = sortedProviders.filter((provider) =>
          provider.name.toLowerCase().includes(searchTerms) ||
          provider.specialty.toLowerCase().includes(searchTerms) ||
          provider.description.toLowerCase().includes(searchTerms) ||
          provider.date.includes(searchTerms)
        );
       
        setFiltered(subset);
      } else {
        setFiltered(providers);
      }
    }, [searchTerms, providers]);

    const sortedProviders = providers.sort((a, b) => {
      return (
        new Date(...b.date.split('/')) - new Date(...a.date.split('/'))
      );
    });

    console.log("sort", sortedProviders)

    return (
        <>
          <h2>Providers</h2>
          <div className="wholeproviders">
            <div className="providersearches">
              <ChildProfilePic/>
              <ProviderSearch/>
         <div className="newproviderbtn"><button className="btns" onClick={() => 
                {history.push("/provider/create")}}>
                Add Provider</button></div>
                </div>      
        <div className="providers">
        <div className="providers_list">
        {console.log("ProviderList: Render", providers)}
          {
             filteredProviders.map(provider => {
                  if(provider.childId === parseInt(childId)){
              return <ProviderCard key={provider.id} provider={provider} />}
            })
          }
          </div>
        </div>
        </div>      
        </>
    )


}
