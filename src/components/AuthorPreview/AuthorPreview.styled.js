import styled, { css } from "styled-components"

export const Wrapper = styled.article``
export const Name = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 5px;
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `}
`
export const JobTitle = styled.span`
  display: block;
  font-size: 1.8rem;
  font-weight: 500;
  font-style: italic;
  color: #666;
  margin-bottom: 20px;
`
export const Bio = styled.p`
  margin-bottom: 40px;
`
export const Heading = styled.h3`
  margin-bottom: 20px;
`
