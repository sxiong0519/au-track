import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { LocationCard } from "./LocationCard";
import { LocationContext } from "./LocationProvider";
import { LocationSearch } from "./LocationSearch";



export const LocationList = () => {
    const { searchTerms, locations, getLocations } = useContext(LocationContext)
    const [filteredLocations, setFiltered] = useState([]);
    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
      if (searchTerms !== "") {
        // If the search field is not blank, display matching locations
        const subset = locations.filter((location) =>
          location.title.toLowerCase().includes(searchTerms)
        );
       
        setFiltered(subset);
      } else {
        // If the search field is blank, display all locations
        setFiltered(locations);
      }
    }, [searchTerms, locations]);

    return (
        <>
        <h2>Locations</h2>
        <div className="wholelocations">
        <div className="locationsearches">
          <LocationSearch/>
          <p/>
          <div className="newlocationbtn"><button className="btns" onClick={() => {history.push("/locations/create")}}>
			Got a New Location?</button></div>
        </div>
        <div className="locations">
        <div className="locations_list">
        {console.log("LocationList: Render", locations)}
          {
             filteredLocations.map(location => {
              return <LocationCard key={location.id} location={location} />
            })
          }
          </div>
          </div>
        </div>
        </>
    )


}
 