import styled from "styled-components"
import { Link } from "react-router-dom"
import { rgba } from "../../utils/style-utils"

export const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  background: #3f72af;
  box-shadow: 0px 2px 10px ${rgba("#000", 0.3)};
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`
export const Logo = styled(Link)`
  font-size: 2.8rem;
  color: #fff;
`
