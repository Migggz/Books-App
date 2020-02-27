import React, { PureComponent, Fragment } from "react"
import Header from "../components/Header"

class Layout extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3">Sidebar</div>
            <div className="col-9">{children}</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Layout
