import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = ({ children, ...rest }) => {
  const editMode = useSelector(state => state.editMode)
  return <Route {...rest} render={() => (editMode ? children : <Redirect to="/" />)} />
}

export default PrivateRoute
