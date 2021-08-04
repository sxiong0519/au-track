import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { TipContext } from "../tips/TipProvider";
import "./Comment.css"
import { CommentContext } from "./CommentProvider";



export const CommentForm = ({ tip }) => {
  const { addComments, getCommentById, updateComment } = useContext(CommentContext)
  const { tips, getTips } = useContext(TipContext)
  
  const [isLoading, setIsLoading] = useState(true);

  const [comment, setComment] = useState({})

  const { commentId } = useParams();

  const history = useHistory();




  const handleControlledInputChange = (event) => {
    const newComment = { ...comment }
    newComment[event.target.id] = event.target.value
    setComment(newComment)
  }

  const handleClickSaveComment = () => {
    if (comment.comment === "") {
        window.alert("Please complete the form")
    } else if (commentId) {
        updateComment({
            id: comment.id,
            comment: comment.comment,
            date: Date.now(),
            tipId: comment.tipId,
            parentId: parseInt(localStorage.getItem("autrack_user"))
        })
          .then(() => history.push(`/tips/detail/${tip.id}`))
        } else {
        const newComment = {
            comment: comment.comment,
            date: Date.now(),
            tipId: tip.id,
            parentId: parseInt(localStorage.getItem("autrack_user"))
      }
      addComments(newComment)
        .then(() => history.push(`/tips/detail/${tip.id}`))
      }
    }

    useEffect(() => {
        getTips().then(() => 
      { if (commentId) {
          getCommentById(commentId)
              .then(comment => {
                  setComment(comment)
                  setIsLoading(false)
      })
      } else {
          setIsLoading(false)
      }
      })
  }, [])

  console.log("tip", tip.id)

return (
        <form className="commentForm">
            <h2 className="commentForm__title comment_header">{commentId ? "Update comment" : "Start a conversation:"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <input type="text" id="comment" required autoFocus className="form-control" placeholder="Enter a comment" value={comment.comment} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <div className="buttons"><button className="btns" disabled={isLoading} onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveComment()
                    setComment({comment:""})
                }
            }>
            Save comment
            </button>
            <button className="btns" onClick={setComment}>Cancel</button>    </div>
        </form>
    )
}
