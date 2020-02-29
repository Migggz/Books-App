import React from "react"
import { Wrapper, Name } from "../AuthorPreview/AuthorPreview.styled"
import { EditBook } from "../BookPreview/BookPreview.styled"
import { FaEdit } from "react-icons/fa"

export default function CategoryPreview({ category, editMode, pathname }) {
  return (
    <Wrapper>
      <Name mb={30}>
        {category.name}
        {editMode && (
          <EditBook to={pathname + "/edit"}>
            <FaEdit />
            <span>Edit</span>
          </EditBook>
        )}
      </Name>
    </Wrapper>
  )
}
