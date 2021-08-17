import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import "./Child.css"
import { ChildContext } from "./ChildProvider";



export const ChildForm = () => {
  const { addChildren, getChildById, updateChild } = useContext(ChildContext)
  
  const [isLoading, setIsLoading] = useState(true);
  const [ loading, setLoading ] = useState(false);
  const [image, setImage] = useState("")

  const [child, setChild] = useState({})

  const { childId } = useParams();
  const history = useHistory();


  const handleControlledInputChange = (event) => {
    const newChild = { ...child }
    newChild[event.target.id] = event.target.value
    setChild(newChild)
  }

  const handleClickSaveChild = () => {
    if (child.name === undefined) {
        window.alert("Please complete the form")
    } else if (childId) {
        updateChild({
            id: child.id, 
            name: child.name,
            image: image || child.image,
            parentId: parseInt(localStorage.getItem("autrack_user"))
        })
        .then(() => history.push("/"))
    } else {
        const newChild = {
            name: child.name,
            image: image,
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
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'autrack')
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/${{secrets.CLOUDINARY_API_KEY}}/image/upload",
        {
            method:'PUT',
            body: data
        })

        const file= await res.json()

        setImage(file.secure_url)
        setLoading(false)
    }

    console.log(${{secrets.CLOUDINARY_API_KEY}})

return (
        <form className="childForm">
            <h1 className="childForm__title child_header">{childId ? "Update Child" : "New Child"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Enter child's name" value={child.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <input type="file" placeholder="Upload an image" onChange={uploadImage}/> 
            <br/>

            {loading? <>Loading...</> : (<img src={image}/>)}
            <div className="buttons"><button className="btns" disabled={isLoading} onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveChild()
                }
            }>
                 {childId ? "Update child" : "Save child"}
            </button>{childId ? <button className="btns" onClick={() => history.push("/")}>Cancel</button> :<button className="btns" onClick={() => history.goBack()}>Cancel</button>}
            </div>
        </form>
    )
}
