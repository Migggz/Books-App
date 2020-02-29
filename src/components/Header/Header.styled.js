import styled from "styled-components"
import { Link } from "react-router-dom"
import { rgba, resetButton } from "../../utils/style-utils"

export const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  background: ${({ editMode }) => (editMode ? "#fc5185" : "#3f72af")};
  box-shadow: 0px 2px 10px ${rgba("#000", 0.3)};
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  transition: 0.3s ease background;
`
export const Ribbon = styled.span`
  font-size: 1.2rem;
  color: #fff;
  background: #364f6b;
  border-radius: 4px;
  font-weight: 500;
  padding: 4px 10px;
  line-height: 1;
  white-space: nowrap;
  display: inline-block;
  margin-left: 15px;
`
export const Logo = styled(Link)`
  font-size: 2.8rem;
  color: #fff;
`
export const EditBtn = styled.button`
  ${resetButton()}
  background: ${({ editMode }) => (editMode ? "#fff" : "#fc5185")};
  border-radius: 4px;
  color: ${({ editMode }) => (editMode ? "#333" : "#fff")};;
  padding: 0 20px;
  font-weight: 500;
  transition: 0.3s ease all;
  &:active {
    background: #e44b79;
  }
`
