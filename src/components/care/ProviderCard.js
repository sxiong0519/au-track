import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Provider.css"
import { ProviderContext } from "./ProviderProvider"


export const ProviderCard = ({ provider }) => {
    const { providerDelete } = useContext(ProviderContext)
    const history = useHistory()


    return (
        <>
        
            <section className="provider_card">
                <ul>
                    <li>{provider.name}</li>
                    <li>{provider.specialty}</li>
                    <li>{provider.description}</li>
                    <li>{provider.date}</li>
                </ul>
                <center>
                <div className="buttons">
                    <button className="btns" onClick={providerDelete}>Delete</button>
                    <button className="btns" onClick={() => {
                        history.push(`/providers/edit/${provider.id}`)
                        }}>Edit</button>
                </div>
                </center>
            </section>
            
        </>
)}





