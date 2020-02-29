import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = props => {
  const editMode = useSelector(state => state.editMode)
  const render = editMode ? props.render : () => <Redirect to="/" />
  return <Route {...props} render={render} />
}

export default PrivateRoute
