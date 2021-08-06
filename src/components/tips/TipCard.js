import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { FavTipContext } from "../favoritetips/FavoriteTipsProvider"
import "./Tip.css"
import { TipContext } from "./TipProvider"


export const TipCard = ({ tip }) => {
    const { deleteTip } = useContext(TipContext)
    const { favTip, addFavTip, getFavTip } = useContext(FavTipContext)
    const history = useHistory();
    const currentUser = parseInt(localStorage.getItem("autrack_user"))

    useEffect(() => {
        getFavTip()
    }, [])

    const tipDelete = () => {
        deleteTip(tip.id)
    }
    
    let favs = favTip.find((favtip) => currentUser === favtip.currentUserId && favtip.tipId === tip.id)
    console.log("favtip", favTip)

    const addNewFavTip = () => {
        const newFavTipObj = {
            currentUserId: currentUser,
            tipId: tip.id
        }
        addFavTip(newFavTipObj)
        .then(() => history.push("/favtips"))
    }

    return (
        <>
            <div className="tip_card">
            <Link className="tip__link" to={`/tips/detail/${tip.id}`}><h3>{tip.title}</h3></Link>
            Posted by: {tip.parent.name}
            <br/>
            {new Date(tip.date).toLocaleDateString()}
            {tip.parentId === currentUser ? 
            <section className="buttons">
			<button className="btns" onClick={tipDelete}>Delete</button> 
            </section> : <section className="buttons">
            <>{favs ? "" : <button className="btns" onClick={addNewFavTip}>Favorite</button>}</>
            </section>
            }
            </div>
        </>
)}

