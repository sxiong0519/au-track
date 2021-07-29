import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import "./Child.css"
import { ChildContext } from "./ChildProvider"


export const ChildProfilePic = () => {
    const { getChildById } = useContext(ChildContext)
    const [child, setChild] = useState({})
    

    const { childId } = useParams();

    useEffect(() => {
        console.log("LocationList: useEffect .....")
        getChildById(childId)
        .then((response) => {
          setChild(response)
        })
    }, [])
    return (
        <>
        <div className="detailheader">
        <Link to={`/children/detail/${child.id}`}><img src={child.image} alt="" className="detailimg" />
                        </Link><h3>{child.name}</h3>
        </div>
        </>
)}





