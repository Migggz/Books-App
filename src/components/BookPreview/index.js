import React from "react"
import {
  Wrapper,
  BookImg,
  Inner,
  Data,
  Title,
  Ul,
  Li,
  Key,
  Value,
  Desc,
  EditBook
} from "./BookPreview.styled"
import { FaEdit } from "react-icons/fa"

export default function BookPreview({ book, author, category, editMode, pathname }) {
  return (
    <Wrapper>
      <Inner>
        <Data>
          <Title>
            {book.title}
            {editMode && (
              <EditBook to={pathname + "/edit"}>
                <FaEdit />
                <span>Edit</span>
              </EditBook>
            )}
          </Title>
          <Ul>
            <Li>
              <Key>By:</Key>
              <Value>{author.name}</Value>
            </Li>
            <Li>
              <Key>Number Of Pages:</Key>
              <Value>{book.pagesNumber}</Value>
            </Li>
            <Li>
              <Key>Publish Year:</Key>
              <Value>{book.publishYear}</Value>
            </Li>
            <Li>
              <Key>ISBN:</Key>
              <Value>{book.isbn}</Value>
            </Li>
            <Li>
              <Key>Classification:</Key>
              <Value>{category.name}</Value>
            </Li>
          </Ul>
        </Data>
        <BookImg src={book.image} />
      </Inner>
      <Desc>{book.description}</Desc>
    </Wrapper>
  )
}
