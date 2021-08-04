import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import "./Provider.css"
import { ProviderContext } from "./ProviderProvider"


export const ProviderCard = ({ provider }) => {
    const { providerDelete } = useContext(ProviderContext)
    const history = useHistory()


    return (
        <>
        
            <section className="provider_card">
                <ul>
                    <li>Provider: {provider.name}</li>
                    <li>Specialty: {provider.specialty}</li>
                    <li>Care: {provider.description}</li>
                    <li>Date: {new Date(provider.date).toLocaleDateString()}</li>
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





