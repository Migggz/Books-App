import { SET_MODE } from "../actions/editModeAction"

export const EDIT_MODE = false

export default function(currentState = EDIT_MODE, { type, payload }) {
  switch (type) {
    case SET_MODE: {
      return payload
    }
    default:
      return currentState
  }
}
