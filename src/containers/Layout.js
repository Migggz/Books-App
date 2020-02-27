import React, { PureComponent, Fragment } from "react"
import Header from "../components/Header"
import SidebarBox from "../components/SidebarBox"
import { connect } from "react-redux"

class Layout extends PureComponent {
  render() {
    const { children, categories, authors } = this.props

    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <aside>
                <SidebarBox title="categories" type="category" data={categories} />
                <SidebarBox title="authors" type="author" data={authors} />
              </aside>
            </div>
            <div className="col-9">{children}</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ books, authors, categories }) => ({
  authors,
  categories,
  books
})

export default connect(mapStateToProps)(Layout)
