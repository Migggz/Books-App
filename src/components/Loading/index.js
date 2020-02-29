import React from "react"
import { Loader, Spinner, ImgSpinner } from "./Loading.styled"

export default function Loading() {
  return (
    <Loader>
      <Spinner />
    </Loader>
  )
}

export const ImageLoadingSpinner = () => (
  <ImgSpinner>
    <Spinner />
  </ImgSpinner>
)
