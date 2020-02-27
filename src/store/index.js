import { createStore, applyMiddleware, compose } from "redux"
import { createBrowserHistory } from "history"
import { routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import createRootReducer from "./reducers"

// History
export const history = createBrowserHistory()

// Redux Devtools || normal compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Middlewares
const middleware = [routerMiddleware(history), thunk]

// if Development add logger to middlewares
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middleware.push(logger)
}

// Export Store
export default function configureStore(preloadedState = {}, options) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  )
  return store
}
