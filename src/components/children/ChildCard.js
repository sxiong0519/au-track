import React from "react"
import { Link } from "react-router-dom"
import "./Child.css"


export const ChildCard = ({ child }) => {
    
    return (
        <>
            <section className="child_card">
                <div className="child"><h3>{child.name}</h3>
                    <div className="childimg">
                        <Link to={`/children/detail/${child.id}`}><img src={child.image} alt="" className="child_image" />
                        </Link>
                    </div>    
                </div>
            </section>
        </>
)}





