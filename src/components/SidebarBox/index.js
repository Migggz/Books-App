import React from "react"
import { Box, Title, Ul, Li, StyledLink } from "./SidebarBox.styled"
import { Scrollbars } from "react-custom-scrollbars"

export default function SidebarBox({ title, type, data }) {
  return (
    <Box>
      <Title>{title}</Title>
      <Scrollbars>
        <Ul>
          {data.map(el => (
            <Li key={el.id}>
              <StyledLink to={`/${type}/${el.id}`} title={type === "author" ? el.jobTitle : ""}>
                {el.name}
              </StyledLink>
            </Li>
          ))}
        </Ul>
      </Scrollbars>
    </Box>
  )
}
