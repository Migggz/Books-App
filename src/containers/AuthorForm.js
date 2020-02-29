import React, { PureComponent } from "react"
import { connect } from "react-redux"
import AuthorFormPreview from "../components/AuthorFormPreview"
import { find, findIndex } from "lodash"
import { setAuthors } from "../store/actions/authorAction"

class AuthorForm extends PureComponent {
  handleSubmit = data => {
    const { authors, setAuthors, history, match } = this.props
    // Check if it Edit or Brand New Author
    if (match.path === "/author/new") {
      setAuthors([data, ...authors])
    } else {
      const authorIndex = findIndex(authors, author => author.id === data.id)
      setAuthors([...authors.slice(0, authorIndex), data, ...authors.slice(authorIndex + 1)])
    }
    // Go Back in History
    history.goBack()
  }

  render() {
    const { selectedAuthor, history } = this.props

    return (
      <AuthorFormPreview
        onSubmit={this.handleSubmit}
        selectedAuthor={selectedAuthor}
        history={history}
      />
    )
  }
}

const mapStateToProps = ({ editMode, authors }, ownProps) => ({
  authors,
  selectedAuthor: editMode
    ? ownProps.match.path === "/author/new"
      ? null
      : find(authors, author => author.id === ownProps.match.params.authorId)
    : null
})

const mapDispatchToProps = {
  setAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorForm)
