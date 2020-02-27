import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  background: #3498db;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const Logo = styled(Link)`
  font-size: 2rem;
  color: #fff;
`
