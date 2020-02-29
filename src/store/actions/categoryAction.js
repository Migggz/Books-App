import { SET_CATEGORIES } from "./initialDataAction"

export const setCategories = categories => dispatch => {
  dispatch({
    type: SET_CATEGORIES,
    payload: categories
  })
}
