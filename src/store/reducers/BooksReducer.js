import { SET_BOOKS } from "../actions/initialDataAction"

export const BOOKS = []

export default function(currentState = BOOKS, { type, payload }) {
  switch (type) {
    case SET_BOOKS: {
      return payload
    }
    default:
      return currentState
  }
}
