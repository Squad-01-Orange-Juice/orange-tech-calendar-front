import React, { useContext } from "react"
import {Routes as Router, Route, Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import AuthPage from "./pages/AuthPage"
import UserPage from "./pages/UserPage"
import OrgPage from "./pages/OrgPage"

type Props = {}

const Routes = (props: Props) => {
  return (
    <Router>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/org" element={<OrgPage />} />
    </Router>
  )
}

export default Routes
