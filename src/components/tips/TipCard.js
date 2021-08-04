import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Tip.css"
import { TipContext } from "./TipProvider"


export const TipCard = ({ tip }) => {
    const { deleteTip } = useContext(TipContext)

    const tipDelete = () => {
        deleteTip(tip.id)
    }
    
    return (
        <>
            <div className="tip_card">
            <Link className="tip__link" to={`/tips/detail/${tip.id}`}><h3>{tip.title}</h3></Link>
            Posted by: {tip.parent.name}
            <br/>
            {new Date(tip.date).toLocaleDateString()}
            {tip.parentId === parseInt(localStorage.getItem("autrack_user")) ? 
            <section className="buttons">
			<button className="btns" onClick={tipDelete}>Delete</button> 
            </section> : ""}
            </div>
        </>
)}

