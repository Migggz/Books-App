import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import editModeReducer from "./editModeReducer"

export default history =>
  combineReducers({
    editMode: editModeReducer,
    router: connectRouter(history)
  })
