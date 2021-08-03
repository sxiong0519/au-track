import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import "./Tip.css"
import { TipContext } from "./TipProvider";



export const TipForm = () => {
  const { addTips, getTipById, updateTip } = useContext(TipContext)
  
  const [isLoading, setIsLoading] = useState(true);

  const [tip, setTip] = useState({})

  const { tipId } = useParams();
  const history = useHistory();

  
  const handleControlledInputChange = (event) => {
    const newTip = { ...tip }
    newTip[event.target.id] = event.target.value
    setTip(newTip)
  }

  const handleClickSaveTip = () => {
    if (tip.title === undefined || tip.description === undefined) {
        window.alert("Please complete the form")
    } else if (tipId) {
        updateTip({
            id: tip.id, 
            title: tip.title,
            date: Date.now(),
            description: tip.description,
            parentId: parseInt(localStorage.getItem("autrack_user"))
        })
        .then(() => history.push("/tips"))
    } else {
        const newTip = {
          title: tip.title,
          date: Date.now(),
          description: tip.description,
          parentId: parseInt(localStorage.getItem("autrack_user"))
      }
      addTips(newTip)
        .then(() => history.push("/tips"))
      }
    }

  useEffect(() => {
    if (tipId) {
        getTipById(tipId)
            .then(tip => {
                setTip(tip)
                setIsLoading(false)
            })
    } else {
        setIsLoading(false)
    }
}, [])


return (
        <form className="tipForm">
            <h2 className="tipForm__title tip_header">{tipId ? "Update tip" : "New tip"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Tip:</label>
                    <input type="text" id="title" required autoFocus className="form-control" placeholder="Enter a subject title" value={tip.title} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" required autoFocus className="form-control descriptiontip" placeholder="Enter a description" value={tip.description} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <div className="buttons"><button className="btns" disabled={isLoading} onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveTip()
                }
            }>
                 {tipId ? "Update tip" : "Save tip"}
            </button>{tipId ? <button className="btns" onClick={() => history.push("/tips")}>Cancel</button> :<button className="btns" onClick={() => history.goBack()}>Cancel</button>}
            </div>
        </form>
    )
}
