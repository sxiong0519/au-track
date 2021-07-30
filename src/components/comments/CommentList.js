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
    const history = useHistory()

    useEffect(() => {
        console.log("useEffect", tipId)
        getComments().then(() => {
            getTipById(tipId)
        })
        .then((response) => {
            setTip(response)
        })
    }, [])

    return (
        <>
        <div className="comments">
        <h2>Comments</h2>
        <div className="comments_list">
        {console.log("CommentList: Render", comments)}
          {
             comments.map(comment => {
                 if (comment.tipId === parseInt(tipId)){
              return <CommentCard key={comment.id} comment={comment} />}
            })
          }
          </div>
        </div>
        </>
    )


}
 