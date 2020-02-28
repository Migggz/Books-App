import React, { PureComponent } from "react"
import { connect } from "react-redux"
import Book from "../components/Book"
import Pagination from "../components/Pagination"

class BookListing extends PureComponent {
  state = {
    pageSize: 5,
    currentPage: 1
  }
  handlePageChange = current => {
    this.setState({
      currentPage: current
    })
  }

  render() {
    const { books } = this.props
    const { currentPage, pageSize } = this.state

    // Logic Behind Pagination
    const indexOfLastBook = currentPage * pageSize
    const indexOfFirstBook = indexOfLastBook - pageSize
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

    return (
      <main>
        {currentBooks.map(book => (
          <Book key={book.id} {...book} />
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

const mapStateToProps = ({ books }) => ({
  books
})

export default connect(mapStateToProps)(BookListing)
