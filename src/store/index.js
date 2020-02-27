import { createStore, applyMiddleware, compose } from "redux"
import { createBrowserHistory } from "history"
import { routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import createRootReducer from "./reducers"
import { loadPersistedState, savePersistedState } from "../services/LocalStorageService"
import { throttle } from "lodash"
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

// Load State from Local Storage
const persistedState = loadPersistedState()

// Export Store
export default function configureStore(options) {
  const store = createStore(
    createRootReducer(history),
    persistedState,
    composeEnhancers(applyMiddleware(...middleware))
  )

  store.subscribe(
    throttle(() => {
      const state = store.getState()
      savePersistedState({
        initialData: state.initialData,
        books: state.books,
        authors: state.authors,
        categories: state.categories
      })
    }, 1000)
  )
  return store
}
