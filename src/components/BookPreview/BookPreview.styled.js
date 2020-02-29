import styled from "styled-components"
import FallbackImg from "../FallbackImg"
import { Link } from "react-router-dom"

export const Wrapper = styled.article``
export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const EditBook = styled(Link)`
  font-size: 1.4rem;
  color: #fff;
  background: #3fc1c9;
  border-radius: 4px;
  font-weight: 500;
  padding: 4px 10px;
  line-height: 1;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  margin-left: 15px;
  span {
    line-height: 1.1;
    display: inline-block;
    margin-left: 5px;
  }
`
export const Data = styled.div`
  flex: 1 1 100%;
  padding: 0 20px 0 0;
`
export const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
`
export const BookImg = styled(FallbackImg)`
  display: block;
  min-width: 200px;
  height: 200px;
`
export const Ul = styled.ul``
export const Li = styled.li`
  white-space: nowrap;
  margin-bottom: 5px;
  &:last-of-type {
    margin-bottom: 0;
  }
`
export const Key = styled.span`
  font-weight: 500;
  margin-right: 5px;
`
export const Value = styled.span`
  font-style: italic;
`
export const Desc = styled.p`
  width: 100%;
  order: 3;
`
