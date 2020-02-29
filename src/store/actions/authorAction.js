import { SET_AUTHORS } from "./initialDataAction"

export const setAuthors = books => dispatch => {
  dispatch({
    type: SET_AUTHORS,
    payload: books
  })
}
