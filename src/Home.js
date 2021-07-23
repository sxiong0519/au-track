import React from "react";
import { ChildList } from "./components/children/ChildList"
import { ChildProvider } from "./components/children/ChildProvider"
import { Route } from "react-router";

export const Home = () => (
    <>
        <ChildProvider>
            <Route>
                <ChildList />
            </Route>
        </ChildProvider>
    </>
)