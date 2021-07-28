import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ChildContext } from "../children/ChildProvider";
import "./Milestone.css"
import { MilestoneContext } from "./MilestoneProvider";



export const MilestoneForm = () => {
  const { addMilestones, getMilestoneById, updateMilestone } = useContext(MilestoneContext)
  const { children, getChildren } = useContext(ChildContext)
  
  const [isLoading, setIsLoading] = useState(true);

  const [milestone, setMilestone] = useState({})

  const { milestoneId } = useParams();
  const history = useHistory();

  
  const handleControlledInputChange = (event) => {
  const newMilestone = { ...milestone }
    newMilestone[event.target.id] = event.target.value
    setMilestone(newMilestone)
  }

  const handleClickSaveMilestone = () => {
    if (milestone.milestone === undefined || milestone.description === undefined || milestone.date === undefined) {
        window.alert("Please complete the form")
    } else if (milestoneId) {
        updateMilestone({
            id: milestone.id,
            milestone: milestone.milestone,
            date: milestone.date,
            description: milestone.description,
            image: milestone.image,
            childId: parseInt(milestone.childId)
        })
        .then(() => history.push(`/milestones/list/${milestone.childId}`))
    } else {
        const newMilestone = {
            id: milestone.id,
            milestone: milestone.milestone,
            date: milestone.date,
            description: milestone.description,
            image: milestone.image,
            childId: parseInt(milestone.childId)
      }
      addMilestones(newMilestone)
        .then(() => history.push(`/milestones/list/${milestone.childId}`))
      }
    }

  useEffect(() => {
      getChildren().then(() => 
    { if (milestoneId) {
        getMilestoneById(milestoneId)
            .then(milestone => {
                setMilestone(milestone)
                setIsLoading(false)
    })
    } else {
        setIsLoading(false)
    }
    })
}, [])

console.log("boom", milestone.childId)

return (
        <form className="milestoneForm">
            <h1 className="milestoneForm__title milestone_header">{milestoneId ? "Update milestone" : "New milestone"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="milestone">Milestone:</label>
                    <input type="text" id="milestone" required autoFocus className="form-control" placeholder="Enter a milestone" value={milestone.milestone} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" required autoFocus className="form-control" placeholder="Enter a description" value={milestone.description} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" required autoFocus className="form-control" placeholder="Enter a date" value={milestone.date} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="text" id="image" required autoFocus className="form-control" placeholder="Enter an image" value={milestone.image} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
          <div className="form-group">
            <label htmlFor="child">Child: </label>
            <select value={milestone.childId} name="childId" id="childId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a Child</option>
              {children.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
            <div className="buttons"><button className="btns" disabled={isLoading} onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveMilestone()
                }
            }>
                 {milestoneId ? "Update milestone" : "Save milestone"}
            </button>
        {milestoneId ? <button className="btns" onClick={() => 
            history.push(`/milestones/list/${milestone.childId}`)}>Cancel</button> :
            <button className="btns" onClick={() => history.goBack()}>Cancel</button>}
            </div>
        </form>
    )
}
