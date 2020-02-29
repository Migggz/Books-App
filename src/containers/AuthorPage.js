import React, { Fragment, PureComponent } from "react"
import { connect } from "react-redux"
import { filter, find } from "lodash"
import { Redirect } from "react-router-dom"
import AuthorPreview from "../components/AuthorPreview"
import BookListing from "./BookListing"

class BookPage extends PureComponent {
  render() {
    const { author, books, editMode, location } = this.props
    const relatedBooks = filter(books, book => book.author === author.id)

    if (!author) return <Redirect to="/" />
    return (
      <Fragment>
        <AuthorPreview
          author={author}
          editMode={editMode}
          books={relatedBooks}
          pathname={location.pathname}
        />
        <BookListing books={relatedBooks} pageSize={3} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ books, authors, editMode }, ownProps) => ({
  editMode,
  books,
  author: find(authors, author => author.id === ownProps.match.params.authorId)
})

export default connect(mapStateToProps)(BookPage)
