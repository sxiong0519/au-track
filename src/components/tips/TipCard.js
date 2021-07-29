import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Tip.css"
import { TipContext } from "./TipProvider"


export const TipCard = ({ tip }) => {
    const { deleteTip } = useContext(TipContext)
    const history = useHistory();

    const tipDelete = () => {
        deleteTip(tip.id)
    }
    
    return (
        <>
            <div className="tip_card">
            <Link to={`/tips/detail/${tip.id}`}><h2>{tip.title}</h2></Link>
            <br/>
            Posted by: {tip.parent.name}
            </div>
            {tip.parentId === parseInt(localStorage.getItem("autrack_user")) ? 
            <section className="buttons">
			<button className="btns" onClick={tipDelete}>Delete</button>
            <button className="btns" onClick={() => {
                history.push(`/tips/edit/${tip.id}`)
			        }}>Edit</button>
			</section> : ""}
        </>
)}

