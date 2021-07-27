import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { LocationCard } from "./LocationCard";
import { LocationContext } from "./LocationProvider";



export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])
    return (
        <>
        
        <div className="locations">
        <h2>Locations</h2>
        <div className="locations_list">
        {console.log("LocationList: Render", locations)}
          {
             locations.map(location => {
              return <LocationCard key={location.id} location={location} />
            })
          }
          </div>
        </div>
        </>
    )


}
