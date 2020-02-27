import { SET_CATEGORIES } from "../actions/initialDataAction"

export const CATEGORIES = []

export default function(currentState = CATEGORIES, { type, payload }) {
  switch (type) {
    case SET_CATEGORIES: {
      return payload
    }
    default:
      return currentState
  }
}
