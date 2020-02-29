import React, { Fragment, PureComponent } from "react"
import { connect } from "react-redux"
import { filter, find } from "lodash"
import { Redirect } from "react-router-dom"
import CategoryPreview from "../components/CategoryPreview"
import BookListing from "./BookListing"

class CategoryPage extends PureComponent {
  render() {
    const { category, books, editMode, location } = this.props
    const relatedBooks = filter(books, book => book.category === category.id)

    if (!category) return <Redirect to="/" />
    return (
      <Fragment>
        <CategoryPreview
          category={category}
          editMode={editMode}
          books={relatedBooks}
          pathname={location.pathname}
        />
        {relatedBooks.length > 0 ? (
          <BookListing books={relatedBooks} pageSize={3} />
        ) : (
          <span>Current Category Has no Books :(</span>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ books, categories, editMode }, ownProps) => ({
  editMode,
  books,
  category: find(categories, category => category.id === ownProps.match.params.categoryId)
})

export default connect(mapStateToProps)(CategoryPage)
