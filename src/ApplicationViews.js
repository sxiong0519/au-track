import React from "react"
import { Route } from "react-router-dom"
import { ProviderForm } from "./components/care/ProviderForm"
import { ProviderList } from "./components/care/ProviderList"
import { ProviderProvider } from "./components/care/ProviderProvider"
import { ChildDetail } from "./components/children/ChildDetail"
import { ChildForm } from "./components/children/ChildForm"
import { ChildProfilePic } from "./components/children/ChildProfilePic"
import { ChildProvider } from "./components/children/ChildProvider"
import { CommentForm } from "./components/comments/CommentForm"
import { CommentList } from "./components/comments/CommentList"
import { CommentProvider } from "./components/comments/CommentProvider"
import { LocationForm } from "./components/locations/LocationForm"
import { LocationList } from "./components/locations/LocationList"
import { LocationProvider } from "./components/locations/LocationProvider"
import { MilestoneForm } from "./components/milestones/MilestoneForm"
import { MilestoneList } from "./components/milestones/MilestoneList"
import { MilestoneProvider } from "./components/milestones/MilestoneProvider"
import { NavChild } from "./components/nav/NavChild"
import { NavHome } from "./components/nav/NavHome"
import { ParentProvider } from "./components/parents/ParentProvider"
import { TipDetail } from "./components/tips/TipDetail"
import { TipForm } from "./components/tips/TipForm"
import { TipList } from "./components/tips/TipList"
import { TipProvider } from "./components/tips/TipProvider"
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
                    <Route path ="/children/edit/:childId(\d+)">
                        <ChildForm/>
                    </Route>
                    <Route path="/children/create">
                        <ChildForm/>
                    </Route>
                    <Route exact path="/children/detail/:childId(\d+)">
                        <NavChild />
                        <ChildProfilePic/>
                        <ChildDetail />
                    </Route>
                    <Route exact path="/milestones/list/:childId(\d+)">
                        <NavChild />
                        <MilestoneList />
                    </Route>
                    <Route exact path="/milestone/create">
                        <MilestoneForm/>
                    </Route>
                    <Route path="/milestones/edit/:milestoneId(\d+)">
                        <MilestoneForm/>
                    </Route>
                    </ProviderProvider>
                    </MilestoneProvider>
                    <ProviderProvider>
                    <Route exact path="/providers/list/:childId(\d+)">    
                        <NavChild />
                        <ProviderList />
                    </Route>
                    <Route exact path="/provider/create">
                        <ProviderForm/>
                    </Route>
                    <Route path="/providers/edit/:providerId(\d+)">
                        <ProviderForm/>
                    </Route>
                </ProviderProvider>
            </ChildProvider>
            <ParentProvider>
            <TipProvider>
            <CommentProvider>
                <Route path="/tips/detail/:tipId(\d+)">
                    <NavHome/>
                    <TipDetail/>
                    <CommentList/>
                </Route>
                </CommentProvider>
                <Route path="/tips/edit/:tipId(\d+)">
                        <TipForm/>
                    </Route>
                    <Route path="/tips/create">
                        <TipForm/>
                    </Route>
                    <Route exact path="/tips">
                        <NavHome/>
                        <TipList />
                    </Route>
            </TipProvider>
            <LocationProvider>
                <Route path="/locations/edit/:locationId(\d+)">
                        <LocationForm/>
                    </Route>
                    <Route path="/locations/create">
                        <LocationForm/>
                    </Route>
                    <Route exact path="/locations">
                        <NavHome />
                        <LocationList />    
                    </Route>    
            </LocationProvider>    
            </ParentProvider>    
            
        </>
    )
}