import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ChildContext } from "../children/ChildProvider";
import "./Provider.css"
import { ProviderContext } from "./ProviderProvider";



export const ProviderForm = () => {
  const { addProviders, getProviderById, updateProvider } = useContext(ProviderContext)
  const { children, getChildren } = useContext(ChildContext)
  
  const [isLoading, setIsLoading] = useState(true);

  const [provider, setProvider] = useState({})

  const { providerId } = useParams();
  const history = useHistory();

  
  const handleControlledInputChange = (event) => {
  const newProvider = { ...provider }
    newProvider[event.target.id] = event.target.value
    setProvider(newProvider)
  }

  const handleClickSaveProvider = () => {
    if (provider.name === undefined || provider.specialty === undefined || provider.description === undefined || provider.date === undefined) {
        window.alert("Please complete the form")
    } else if (providerId) {
        updateProvider({
            id: provider.id,
            name: provider.name,
            specialty: provider.specialty,
            description: provider.description,
            date: provider.date,
            childId: parseInt(provider.childId)
        })
        .then(() => history.push(`/providers/list/${provider.childId}`))
    } else {
        const newProvider = {
            name: provider.name,
            specialty: provider.specialty,
            description: provider.description,
            date: provider.date,
            childId: parseInt(provider.childId)
      }
      addProviders(newProvider)
        .then(() => history.push(`/providers/list/${provider.childId}`))
      }
    }

  useEffect(() => {
      getChildren().then(() => 
    { if (providerId) {
        getProviderById(providerId)
            .then(provider => {
                setProvider(provider)
                setIsLoading(false)
    })
    } else {
        setIsLoading(false)
    }
    })
}, [])

return (
        <form className="providerForm">
            <h1 className="providerForm__title provider_header">{providerId ? "Update provider" : "New provider"}</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="provider">Provider:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Enter provider name" value={provider.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input type="text" id="specialty" required autoFocus className="form-control" placeholder="Therapy, medical, etc..." value={provider.specialty} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" required autoFocus className="form-control" placeholder="Enter a description" value={provider.description} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" required autoFocus className="form-control" placeholder="Enter a date" value={provider.date} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
          <div className="form-group">
            <label htmlFor="child">Child: </label>
            <select value={provider.childId} name="childId" id="childId" className="form-control" onChange={handleControlledInputChange}>
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
                    handleClickSaveProvider()
                }
            }>
                 {providerId ? "Update provider" : "Save provider"}
            </button>
        {providerId ? <button className="btns" onClick={() => 
            history.push(`/providers/list/${provider.childId}`)}>Cancel</button> :
            <button className="btns" onClick={() => history.goBack()}>Cancel</button>}
            </div>
        </form>
    )
}
