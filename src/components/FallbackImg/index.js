import React from "react"
export default props => {
  const setDefault = e =>
    (e.target.src = "https://via.placeholder.com/250x200?text=Image+Broken+:(")
  return <img alt="" {...props} onError={setDefault} />
}
