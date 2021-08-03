import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import "./Location.css"
import { LocationContext } from "./LocationProvider";



export const LocationForm = () => {
  const { addLocations, getLocationById, updateLocation } = useContext(LocationContext)
  
  const [isLoading, setIsLoading] = useState(true);

  const [location, setLocation] = useState({})

  const { locationId } = useParams();
  const history = useHistory();



  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newLocation = { ...location }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newLocation[event.target.id] = event.target.value
    // update state
    setLocation(newLocation)
  }

  const handleClickSaveLocation = () => {
    if (location.title === undefined || location.description === undefined || location.address === undefined) {
        window.alert("Please complete the form")
    } else if (locationId) {
        updateLocation({
            id: location.id,
            title: location.title,
            description: location.description,
            date: Date.now(),
            address: location.address,
            parentId: parseInt(localStorage.getItem("autrack_user"))
        })
          .then(() => history.push("/locations"))
        } else {
        const newLocation = {
          title: location.title,
          description: location.description,
          date: Date.now(),
          address: location.address,
          parentId: parseInt(localStorage.getItem("autrack_user"))
      }
      addLocations(newLocation)
        .then(() => history.push("/locations"))
      }
    }

  useEffect(() => {
    if (locationId) {
        getLocationById(locationId)
            .then(location => {
                setLocation(location)
                setIsLoading(false)
            })
    } else {
        setIsLoading(false)
    }
}, [])


return (
        <form className="LocationForm">
            <h1 className="LocationForm__title Location_header">{locationId ? "Update Location" : "New Location"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Subject:</label>
                    <input type="text" id="title" required autoFocus className="form-control" placeholder="Enter a subject title" value={location.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" required autoFocus className="form-control" placeholder="Enter a description" value={location.description} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" required autoFocus className="form-control" placeholder="Enter an address" value={location.address} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <div className="buttons"><button className="btns" disabled={isLoading} onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveLocation()
                }
            }>
                 {locationId ? "Update Location" : "Save Location"}
            </button>{locationId ? <button className="btns" onClick={() => history.push("/locations")}>Cancel</button> :<button className="btns" onClick={() => history.goBack()}>Cancel</button>}
            </div>
        </form>
    )
}
