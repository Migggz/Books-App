import { SET_AUTHORS } from "./initialDataAction"

export const setAuthors = authors => dispatch => {
  dispatch({
    type: SET_AUTHORS,
    payload: authors
  })
}
