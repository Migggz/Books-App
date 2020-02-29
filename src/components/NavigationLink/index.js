import React from "react"
import { Disabled, NewBtn } from "./NavigationLink.styled"

export default function NavigationLink({ disabled, children, ...props }) {
  if (disabled) return <Disabled title="Edit Mode Only!">{children}</Disabled>
  return <NewBtn {...props}>{children}</NewBtn>
}
