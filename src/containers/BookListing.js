import React, { PureComponent } from "react"
import { connect } from "react-redux"
import Book from "../components/Book"
import Pagination from "../components/Pagination"

class BookListing extends PureComponent {
  state = {
    // ! Anti-Pattern to copying props to state, but it is safe in this case
    pageSize: this.props.pageSize || 5,
    currentPage: 1
  }
  handlePageChange = current => {
    this.setState({
      currentPage: current
    })
  }

  render() {
    const { books, editMode } = this.props
    const { currentPage, pageSize } = this.state

    // Logic Behind Pagination
    const indexOfLastBook = currentPage * pageSize
    const indexOfFirstBook = indexOfLastBook - pageSize
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

    return (
      <main>
        {currentBooks.map(book => (
          <Book editMode={editMode} key={book.id} {...book} />
        ))}
        <Pagination
          onPageChange={this.handlePageChange}
          itemsCount={books.length}
          itemsPerPage={this.state.pageSize}
        />
      </main>
    )
  }
}

const mapStateToProps = ({ books, editMode }, ownProps) => ({
  books: ownProps.books || books,
  editMode
})

export default connect(mapStateToProps)(BookListing)
