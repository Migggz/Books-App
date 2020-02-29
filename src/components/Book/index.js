import React from "react"
import {
  BookWrapper,
  Title,
  BookImg,
  StyledLink,
  Inner,
  Desc,
  Footer,
  PageNumber,
  PublishYear,
  BoldText,
  EditBook
} from "./Book.styled"
import { FaEdit } from "react-icons/fa"

export default function Book({
  editMode,
  id,
  image,
  title,
  description,
  pagesNumber,
  publishYear
}) {
  return (
    <BookWrapper>
      {editMode && (
        <EditBook to={`/book/${id}/edit`}>
          <FaEdit />
          <span>Edit</span>
        </EditBook>
      )}
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
