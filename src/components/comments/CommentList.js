import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { TipContext } from "../tips/TipProvider";
import { CommentCard } from "./CommentCard";
import { CommentContext } from "./CommentProvider";



export const CommentList = () => {
    const { comments, getComments } = useContext(CommentContext)
    const { tips, getTipById } = useContext(TipContext)
    const { tipId } = useParams()
    const [tip, setTip] = useState({})

    useEffect(() => {
        console.log("useEffect", tipId)
        getComments().then(() => {
            getTipById(tipId)
        })
        .then((response) => {
            setTip(response)
        })
    }, [])

    const filteredComments = comments.filter(c => c.tipId === parseInt(tipId))
    console.log("fil", filteredComments)
    return (
        <>
        <div className="comments">
        <h2>Comments:</h2>
        <div className="comments_list">
        {console.log("CommentList: Render", comments)}
          { filteredComments.length > 0 ? filteredComments.map(comment => {
              return <CommentCard key={comment.id} comment={comment} />}) : "Be the first to comment"
           }
          </div>
        </div>
        </>
    )


}
 