import React from "react"
import { Link } from "react-router-dom"
import "./Provider.css"


export const ProviderCard = ({ provider }) => {
    
    return (
        <>
            <section className="provider_card">
                <ul>
                    <li>{provider.name}</li>
                    <li>{provider.specialty}</li>
                    <li>{provider.description}</li>
                </ul>
            </section>
        </>
)}





