import React from "react"
import {
  BookWrapper,
  BookImg,
  Title,
  StyledLink,
  Inner,
  Desc,
  Footer,
  PageNumber,
  PublishYear,
  BoldText
} from "./Book.styled"

export default function Book({ id, image, title, description, pagesNumber, publishYear }) {
  return (
    <BookWrapper>
      <StyledLink to={`/book/${id}`}>
        <BookImg src={image} alt={title} />
        <Inner>
          <div>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </div>
          <Footer>
            <PageNumber>
              <BoldText>Page Num:</BoldText>
              {pagesNumber}
            </PageNumber>
            <PublishYear>
              Published: <time dateTime={publishYear}>{publishYear}</time>
            </PublishYear>
          </Footer>
        </Inner>
      </StyledLink>
    </BookWrapper>
  )
}
