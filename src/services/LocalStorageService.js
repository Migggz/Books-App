const BOOKS_STORE = "BOOKS_STORE"

export const loadPersistedState = () => {
  try {
    const serializedState = localStorage.getItem(BOOKS_STORE)
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    console.log("Error Load Persisted State: ", err)
    return undefined
  }
}

export const savePersistedState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(BOOKS_STORE, serializedState)
  } catch (err) {
    console.log("Error Save State to Local Storage: ", err)
  }
}
