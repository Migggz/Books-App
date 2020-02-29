import React from "react"
import { Wrapper, Name, JobTitle, Bio, Heading } from "./AuthorPreview.styled"
// import { FaEdit } from "react-icons/fa"

export default function AuthorPreview({ author, books, editMode, pathname }) {
  return (
    <Wrapper>
      <Name>{author.name}</Name>
      <JobTitle>{author.jobTitle}</JobTitle>
      <Bio>{author.bio}</Bio>
      <Heading>Books</Heading>
    </Wrapper>
  )
}
