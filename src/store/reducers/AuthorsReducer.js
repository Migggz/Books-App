import { SET_AUTHORS } from "../actions/initialDataAction"

export const AUTHORS = []

export default function(currentState = AUTHORS, { type, payload }) {
  switch (type) {
    case SET_AUTHORS: {
      return payload
    }
    default:
      return currentState
  }
}
