import {
  INITIAL_DATA_REQUEST,
  INITIAL_DATA_FAILURE,
  INITIAL_DATA_SUCCESS
} from "../actions/initialDataAction"

export const INITIAL_DATA = {
  isLoading: true,
  error: null
}

export default function(currentState = INITIAL_DATA, { type, payload }) {
  switch (type) {
    case INITIAL_DATA_REQUEST:
      return {
        ...currentState,
        isLoading: true
      }
    case INITIAL_DATA_SUCCESS:
      return {
        ...currentState,
        isLoading: false
      }
    case INITIAL_DATA_FAILURE:
      return {
        ...currentState,
        isLoading: false,
        error: payload
      }
    default:
      return currentState
  }
}
