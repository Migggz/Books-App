import React, { PureComponent } from "react"
import { connect } from "react-redux"
import BookFormPreview from "../components/BookFormPreview"
import { find, findIndex } from "lodash"
import { setBooks } from "../store/actions/bookAction"

class BookForm extends PureComponent {
  handleSubmit = data => {
    const { books, setBooks, history, match } = this.props
    const newBook = {
      ...data,
      category: data.category.id,
      author: data.author.id
    }
    // Check if it Edit or Brand New Book
    if (match.path === "/book/new") {
      setBooks([newBook, ...books])
    } else {
      const bookIndex = findIndex(books, book => book.id === data.id)
      setBooks([...books.slice(0, bookIndex), newBook, ...books.slice(bookIndex + 1)])
    }
    // Go Back in History
    history.goBack()
  }

  render() {
    const { selectedBook, authors, categories, history } = this.props
    return (
      <BookFormPreview
        onSubmit={this.handleSubmit}
        book={selectedBook}
        authors={authors}
        categories={categories}
        history={history}
        selectedBook={selectedBook}
      />
    )
  }
}

const mapStateToProps = ({ editMode, books, authors, categories }, ownProps) => ({
  books,
  authors,
  categories,
  selectedBook: editMode
    ? ownProps.match.path === "/book/new"
      ? null
      : find(books, book => book.id === ownProps.match.params.bookId)
    : null
})

const mapDispatchToProps = {
  setBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)
