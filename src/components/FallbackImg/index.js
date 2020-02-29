import React from "react"
import Img from "react-image"
import { ImageLoadingSpinner } from "../Loading"

export default props => {
  return (
    <Img
      {...props}
      src={[props.src, "https://via.placeholder.com/250x200?text=Image+Broken+:("]}
      loader={<ImageLoadingSpinner />}
    />
  )
}
