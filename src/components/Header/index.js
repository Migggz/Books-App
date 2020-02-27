import React from "react"
import { HeaderWrapper, Logo } from "./Header.styled"

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h1>
                <Logo to="/">Book Store</Logo>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}
