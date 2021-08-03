import React, { useContext, useEffect, useState } from "react"
import { TipContext } from "./TipProvider"
import "./Tip.css"
import { useParams, useHistory } from "react-router-dom"
import { ParentContext } from "../parents/ParentProvider"
import { CommentForm } from "../comments/CommentForm"


export const TipDetail = () => {
    const { getTipById, deleteTip } = useContext(TipContext)
    const { parents, getParents } = useContext(ParentContext)

    const [tip, setTip] = useState({})

    const { tipId } = useParams();
    const history = useHistory();

    const tipDelete = () => {
        deleteTip(tip.id)
    }

    useEffect(() => {
        getTipById(tipId)
        .then(getParents())
        .then((response) =>{
            setTip(response)
        })
    }, [])

    return (
        <>
        <div className="tip_detail">
            <h2>{tip.title}</h2>
            {tip.description}
            <br/>
            Posted by: {tip.parent?.name}
            <p/>
            </div>
            {tip.parentId === parseInt(localStorage.getItem("autrack_user")) ? 
            <section className="buttons tipbtns">
			<button className="btns" onClick={tipDelete}>Delete</button>
            <button className="btns" onClick={() => {
                history.push(`/tips/edit/${tip.id}`)
			        }}>Edit</button>
			</section> : ""}
            <CommentForm tip={tip}/>
        </>
    )

}