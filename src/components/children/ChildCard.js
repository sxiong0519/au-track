import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Child.css"
import { ChildContext } from "./ChildProvider"


export const ChildCard = ({ child }) => {
    const { deleteChild } = useContext(ChildContext)
    const history = useHistory();

    const childDelete = () => {
        deleteChild(child.id)
    }

    return (
        <>
        <center>
            <section className="child_card">
                <div className="child"><h3>{child.name}</h3>
                    <div className="childimg">
                        <Link to={`/children/detail/${child.id}`}><img src={child.image} alt="" className="child_image" />
                        </Link>
                    </div>    
                </div>
                {child.parentId === parseInt(localStorage.getItem("autrack_user")) ? 
                    <section className="buttons">
                    <button className="btns" onClick={childDelete}>Delete</button>
                    <button className="btns" onClick={() => {
                        history.push(`/children/edit/${child.id}`)
                            }}>Edit</button>
                    </section> : ""}
            </section>
        </center>
        </>
)}





