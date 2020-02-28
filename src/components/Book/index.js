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
  PublishYear
} from "./Book.styled"

export default function Book({ id, image, title, description, pagesNumber, publishYear }) {
  const setDefault = e => {
    e.target.src = "https://via.placeholder.com/250x200?text=Image+Broken+:("
  }

  return (
    <BookWrapper>
      <StyledLink to={`/book/${id}`}>
        <BookImg onError={setDefault} src={image} alt={title} />
        <Inner>
          <div>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </div>
          <Footer>
            <PageNumber>
              <bold>Page Num:</bold>
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
