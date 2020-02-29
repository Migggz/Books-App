import React, { PureComponent, Fragment } from "react"
import Header from "../components/Header"
import SidebarBox from "../components/SidebarBox"
import { connect } from "react-redux"
import { setEditMode } from "../store/actions/editModeAction"

class Layout extends PureComponent {
  handleEditMode = () => {
    this.props.setEditMode(!this.props.editMode)
  }

  render() {
    const { children, categories, authors, editMode } = this.props

    return (
      <Fragment>
        <Header editMode={editMode} onEditMode={this.handleEditMode} />
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

const mapStateToProps = ({ authors, categories, editMode }) => ({
  authors,
  categories,
  editMode
})

const mapDispatchToProps = {
  setEditMode
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
