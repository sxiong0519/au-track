import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import "./AuTrack.css";
import { ChildProvider } from "./components/children/ChildProvider";


export const AuTrack = () => (
  <>
  <Route
      render={() => {
        if (localStorage.getItem("autrack_user")) {
          return (
            <>
            <ChildProvider>
              <ApplicationViews />
              </ChildProvider>
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

  <Route path="/login">
      <Login />
  </Route>
  <Route path="/register">
      <Register />
  </Route>  
  </>
)
