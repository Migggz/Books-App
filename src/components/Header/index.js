import React from "react"
import { HeaderWrapper, Logo, EditBtn, Ribbon, ButtonsWrapper } from "./Header.styled"
import NavigationLink from "../NavigationLink"

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
              <ButtonsWrapper>
                <NavigationLink to="/book/new">Add Book</NavigationLink>
                <NavigationLink to="/author/new" disabled={!editMode}>
                  Add Author
                </NavigationLink>
                <NavigationLink to="/category/new" disabled={!editMode}>
                  Add Category
                </NavigationLink>
                <EditBtn editMode={editMode} onClick={onEditMode}>
                  {editMode ? "Exit Edit Mode" : "Edit Mode"}
                </EditBtn>
              </ButtonsWrapper>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}
