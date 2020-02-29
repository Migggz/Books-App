import React from "react"
import { Wrapper, Name, JobTitle, Bio, Heading } from "./AuthorPreview.styled"
import { EditBook } from "../BookPreview/BookPreview.styled"
import { FaEdit } from "react-icons/fa"

export default function AuthorPreview({ author, books, editMode, pathname }) {
  return (
    <Wrapper>
      <Name>
        {author.name}
        {editMode && (
          <EditBook to={pathname + "/edit"}>
            <FaEdit />
            <span>Edit</span>
          </EditBook>
        )}
      </Name>
      <JobTitle>{author.jobTitle}</JobTitle>
      <Bio>{author.bio}</Bio>
      <Heading>Books</Heading>
    </Wrapper>
  )
}
