export const INITIAL_DATA_REQUEST = "GET_INITIAL_DATA_REQUEST"
export const INITIAL_DATA_SUCCESS = "GET_INITIAL_DATA_SUCCESS"
export const INITIAL_DATA_FAILURE = "GET_INITIAL_DATA_FAILURE"

export const SET_BOOKS = "SET_BOOKS"
export const SET_AUTHORS = "SET_AUTHORS"
export const SET_CATEGORIES = "SET_CATEGORIES"

export const getInitialData = () => dispatch => {
  dispatch({
    type: INITIAL_DATA_REQUEST
  })

  return fetch("./books.json")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: INITIAL_DATA_SUCCESS
      })
      dispatch({
        type: SET_BOOKS,
        payload: data.books
      })
      dispatch({
        type: SET_AUTHORS,
        payload: data.authors
      })
      dispatch({
        type: SET_CATEGORIES,
        payload: data.categories
      })
    })
    .catch(err => {
      dispatch({
        type: INITIAL_DATA_FAILURE
      })
    })
}
