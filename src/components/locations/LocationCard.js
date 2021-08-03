import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Location.css"
import { LocationContext } from "./LocationProvider"



export const LocationCard = ({ location }) => {
    const { deleteLocation } = useContext(LocationContext)
    const history = useHistory();

    const locationDelete = () => {
        deleteLocation(location.id)
    }
    
    return (
        <>
            <div className="Location_card">
            <div className="location_title">
                {location.title}
                </div>
            {location.description}
            <br/>
            Address: {location.address}
            <br/>
            Posted by: {location.parent.name}
            
            {location.parentId === parseInt(localStorage.getItem("autrack_user")) ? 
            <section className="buttons">
			<button className="btns" onClick={locationDelete}>Delete</button>
            <button className="btns" onClick={() => {
                history.push(`/locations/edit/${location.id}`)
			        }}>Edit</button>
			</section> : ""}
            </div>
        </>
)}

