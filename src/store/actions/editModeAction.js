export const SET_MODE = "SET_MODE"

export const setEditMode = editMode => dispatch =>
  dispatch({
    type: SET_MODE,
    payload: editMode
  })
