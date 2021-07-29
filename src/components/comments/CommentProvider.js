import React, { useState, createContext } from "react"


export const CommentContext = createContext()

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])


    const getComments = () => {
        return fetch("http://localhost:8088/comments?_expand=tip&_expand=parent")
        .then(res => res.json())
        .then(setComments)
    }

    const addComments = commentObj => {
        return fetch("http://localhost:8088/comments", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObj)
        })
        .then(getComments)
    }

    const getCommentById = (id) => {
        return fetch(`http://localhost:8088/comments/${id}?_expand=tips`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }

    const deleteComment = (id) => {
		return fetch(`http://localhost:8088/comments/${id}`,
		{method: "DELETE"})
		.then(getComments)
	}

	const updateComment = comment => {
		return fetch(`http://localhost:8088/comments/${comment.id}`, {
			method:"PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(comment)
		})
		.then(getComments)
	}


    return (
        <CommentContext.Provider value={{comments, getComments, addComments, getCommentById, deleteComment, updateComment}}>
            {props.children}
        </CommentContext.Provider>
    )



}