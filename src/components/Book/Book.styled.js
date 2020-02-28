import styled from "styled-components"
import { Link } from "react-router-dom"

export const BookWrapper = styled.article`
  margin-bottom: 20px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  color: #333;
`
export const Inner = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 10px 15px 5px;
  flex-direction: column;
  justify-content: space-between;
`
export const BookImg = styled.img`
  display: block;
  min-width: 250px;
  max-width: 250px;
  height: 200px;
  object-fit: cover;
`
export const Title = styled.h3`
  font-size: 1.8rem;
  max-height: ${1.33333 * 18 * 2}px;
  overflow: hidden;
  margin-bottom: 10px;
`
export const Desc = styled.p`
  font-size: 1.6rem;
  color: #777;
  height: ${1.33333 * 16 * 4}px;
  overflow: hidden;
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  font-size: 1.4rem;
  border-top: 1px solid #eee;
  padding-top: 10px;
`
export const BoldText = styled.span`
  font-weight: 500;
  color: #444;
  margin-right: 5px;
`
export const PageNumber = styled.div`
  white-space: nowrap;
  color: #555;
`
export const PublishYear = styled.div`
  white-space: nowrap;
  color: #444;
  font-weight: 500;
  time {
    font-weight: 400;
    color: #555;
    margin-left: 5px;
  }
`
