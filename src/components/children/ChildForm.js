import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import "./Child.css"
import { ChildContext } from "./ChildProvider";



export const ChildForm = () => {
  const { addChildren, getChildById, updateChild } = useContext(ChildContext)
  
  const [isLoading, setIsLoading] = useState(true);

  const [child, setChild] = useState({})

  const { childId } = useParams();
  const history = useHistory();



  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newChild = { ...child }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newChild[event.target.id] = event.target.value
    // update state
    setChild(newChild)
  }

  const handleClickSaveChild = () => {
    if (child.name === undefined || child.image === undefined) {
        window.alert("Please complete the form")
    } else if (childId) {
        updateChild({
            id: child.id, 
            name: child.name,
            image: child.image,
            parentId: parseInt(localStorage.getItem("autrack_user"))
        })
        .then(() => history.push("/"))
    } else {
        const newChild = {
            name: child.name,
            image: child.image,
            parentId: parseInt(localStorage.getItem("autrack_user"))
      }
      addChildren(newChild)
        .then(() => history.push("/"))
      }
    }

  useEffect(() => {
    if (childId) {
        getChildById(childId)
            .then(child => {
                setChild(child)
                setIsLoading(false)
            })
    } else {
        setIsLoading(false)
    }
}, [])
    const uploadImage = async e => {
        
    }

return (
        <form className="childForm">
            <h1 className="childForm__title child_header">{childId ? "Update Child" : "New Child"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Enter child's name" value={child.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input type="text" id="image" required autoFocus className="form-control" placeholder="Upload an image" value={child.image} onChange={handleControlledInputChange} />
                </div>
            </fieldset> */}

            <input type="file" name="file" placeholder="Upload an image" onChange={uploadImage}/>
            <div className="buttons"><button className="btns" disabled={isLoading} onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveChild()
                }
            }>
                 {childId ? "Update child" : "Save child"}
            </button>{childId ? <button className="btns" onClick={() => history.push("/children")}>Cancel</button> :<button className="btns" onClick={() => history.goBack()}>Cancel</button>}
            </div>
        </form>
    )
}
