import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import editModeReducer from "./editModeReducer"
import initialDataReducer from "./initialDataReducer"
import BooksReducer from "./BooksReducer"
import AuthorsReducer from "./AuthorsReducer"
import CategoriesReducer from "./CategoriesReducer"

export default history =>
  combineReducers({
    initialData: initialDataReducer,
    books: BooksReducer,
    authors: AuthorsReducer,
    categories: CategoriesReducer,
    editMode: editModeReducer,
    router: connectRouter(history)
  })
