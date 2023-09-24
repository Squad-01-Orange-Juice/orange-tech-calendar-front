import React, { useContext } from "react"
import {Routes as Router, Route, Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import AuthPage from "./pages/AuthPage"
import UserPage from "./pages/UserPage"
import OrgPage from "./pages/OrgPage"

type Props = {}

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)

  if(!authenticated) return <Navigate to="/auth" replace />
}

const Routes = (props: Props) => {
  return (
    <Router>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<PrivateRoutes />}> 
        <Route path="/" element={<UserPage />} />
        <Route path="/" element={<OrgPage />} />
      </Route>
    </Router>
  )
}

export default Routes
