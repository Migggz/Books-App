import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { headerNewButton } from "../../utils/style-utils"

export const Disabled = styled.span`
  ${headerNewButton()}
  background: #aaa;
`

export const NewBtn = styled(NavLink)`
  ${headerNewButton()}
`
