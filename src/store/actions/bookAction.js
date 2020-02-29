import { SET_BOOKS } from "./initialDataAction"

export const setBooks = books => dispatch => {
  dispatch({
    type: SET_BOOKS,
    payload: books
  })
}
