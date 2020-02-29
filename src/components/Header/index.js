import React from "react"
import { HeaderWrapper, Logo, EditBtn, Ribbon } from "./Header.styled"

export default function Header({ editMode, onEditMode }) {
  return (
    <HeaderWrapper editMode={editMode}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>
                <Logo to="/">Book Store</Logo>
                {editMode && <Ribbon>Edit Mode</Ribbon>}
              </h1>
              <EditBtn editMode={editMode} onClick={onEditMode}>
                {editMode ? "Exit Edit Mode" : "Edit Mode"}
              </EditBtn>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}
