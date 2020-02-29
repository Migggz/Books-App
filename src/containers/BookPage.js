import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { find } from "lodash"
import BookPreview from "../components/BookPreview"
import { Redirect } from "react-router-dom"

class BookPage extends PureComponent {
  render() {
    const { editMode, book, authors, categories, location } = this.props
    if (!book) return <Redirect to="/" />

    const author = find(authors, author => author.id === book.author)
    const category = find(categories, category => category.id === book.category)

    return (
      <BookPreview
        book={book}
        author={author}
        category={category}
        editMode={editMode}
        pathname={location.pathname}
      />
    )
  }
}

const mapStateToProps = ({ authors, categories, books, editMode }, ownProps) => ({
  editMode,
  authors,
  categories,
  book: find(books, book => book.id === ownProps.match.params.bookId)
})

export default connect(mapStateToProps)(BookPage)
