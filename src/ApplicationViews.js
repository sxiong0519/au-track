import React from "react"
import { Route } from "react-router-dom"
import { ProviderList } from "./components/care/ProviderList"
import { ProviderProvider } from "./components/care/ProviderProvider"
import { ChildDetail } from "./components/children/ChildDetail"
import { ChildProvider } from "./components/children/ChildProvider"
import { MilestoneList } from "./components/milestones/MilestoneList"
import { MilestoneProvider } from "./components/milestones/MilestoneProvider"
import { NavChild } from "./components/nav/NavChild"
import { NavHome } from "./components/nav/NavHome"
import { Home } from "./Home"



export const ApplicationViews = () => {
    return (
        <>
            <ChildProvider>
                <MilestoneProvider>
                <ProviderProvider>
                <Route exact path="/">
                    <NavHome />
                    <Home />
                </Route>
                <Route exact path="/children/detail/:childId(\d+)">
                    <NavChild />
                    <ChildDetail />
                </Route>
                <Route exact path="/milestones/list/:childId(\d+)">
                    <NavChild />
                    <MilestoneList />
                </Route>
                </ProviderProvider>
                </MilestoneProvider>
                <ProviderProvider>
                <Route exact path="/providers/list/:childId(\d+)">    
                    <NavChild />
                    <ProviderList />
                </Route>
                </ProviderProvider>
            </ChildProvider>
            
        </>
    )
}