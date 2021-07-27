import React from "react"
import { Link } from "react-router-dom"
import "./Provider.css"


export const ProviderCard = ({ provider }) => {
    
    return (
        <>
            <section className="provider_card">
                {provider.name}
            </section>
        </>
)}





