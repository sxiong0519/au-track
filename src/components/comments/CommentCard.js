import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Comment.css"
import { CommentContext } from "./CommentProvider"



export const CommentCard = ({ comment }) => {
    // const { deletecomment } = useContext(CommentContext)
    // const history = useHistory();

    // const commentDelete = () => {
    //     deletecomment(comment.id)
    // }
    
    return (
        <>
            <div className="comment_card">
            {comment.comment}
            {comment.parent.name}
            </div>
        </>
)}

