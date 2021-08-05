import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ParentContext } from "../parents/ParentProvider"
import { FavTipContext } from "./FavoriteTipsProvider"


export const FavTipCard = ({ favTip }) => {
    const { deleteFavTip } = useContext(FavTipContext)
    const { parents, getParents } = useContext(ParentContext)

    useEffect(() => {
        getParents()
    }, [])
    
    const parent = parents.find((p) => p.id === favTip.tip.parentId)
    console.log("parents", parent)

    const unfavorite = () => {
        deleteFavTip(favTip.id)
    }
    
    return (
        <>
            <div className="tip_card">
            <Link className="tip__link" to={`/tips/detail/${favTip.tipId}`}><h3>{favTip.tip.title}</h3></Link>
            Posted by: {parent?.name}
            <br/>
            {new Date(favTip.tip.date).toLocaleDateString()}
            {favTip.currentUserId === parseInt(localStorage.getItem("autrack_user")) ? 
            <section className="buttons">
			<button className="btns" onClick={unfavorite}>Delete</button> 
            </section> : ""}
            </div>
        </>
)}

