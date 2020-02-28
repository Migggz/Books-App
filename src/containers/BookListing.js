import React, { PureComponent } from "react"
import { connect } from "react-redux"
import Book from "../components/Book"

class BookListing extends PureComponent {
  render() {
    const { books } = this.props

    return (
      <main>
        {books.slice(1, 4).map(book => (
          <Book key={book.id} {...book} />
        ))}
      </main>
    )
  }
}

const mapStateToProps = ({ books }) => ({
  books
})

export default connect(mapStateToProps)(BookListing)
