import styled from "styled-components"
import { rgba } from "../../utils/style-utils"
import { Link } from "react-router-dom"

export const Box = styled.div`
  height: 300px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 5px ${rgba("#000", 0.2)};
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Title = styled.h2`
  text-transform: capitalize;
  width: 100%;
  font-size: 2.2rem;
  background: #364f6b;
  font-weight: 500;
  padding: 10px 20px;
  white-space: nowrap;
  color: #fff;
  box-shadow: 0 2px 8px ${rgba("#000", 0.2)};
`

export const Ul = styled.ul`
  padding: 10px 20px 20px;
`
export const Li = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  &:before {
    content: "";
    display: block;
    min-width: 8px;
    max-width: 8px;
    min-height: 8px;
    max-height: 8px;
    border-radius: 50%;
    background: #bbb;
    margin-right: 10px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`
export const StyledLink = styled(Link)`
  font-size: 1.6rem;
  color: #364f6b;
  white-space: nowrap;
`
