import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { TipContext } from "../tips/TipProvider"
import "./Comment.css"
import { CommentContext } from "./CommentProvider"



export const CommentCard = ({ comment }) => {
    const { deleteComment } = useContext(CommentContext)
    const { getTipById } = useContext(TipContext)
    const history = useHistory();

    const [tip, setTip] = useState({})

    const { tipId } = useParams()

    const commentDelete = () => {
        deleteComment(comment.id)
    }

    useEffect(() => {
        getTipById(tipId)
        .then((response) => {
            setTip(response)
        })
    }, [])

    return (
        <>
            <div className="comment_card">
            <h4>{comment.parent.name}:</h4>
            {comment.comment} 
            <br/>
            {new Date(comment.date).toLocaleDateString()} 
                {comment.parentId === parseInt(localStorage.getItem("autrack_user")) ? 
                    <section className="buttons">
                        <button className="btns" onClick={commentDelete}>Delete</button>
                    </section> : ""}         
            </div>
            
        </>
)}

