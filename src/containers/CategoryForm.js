import React, { PureComponent } from "react"
import { connect } from "react-redux"
import CategoryFormPreview from "../components/CategoryFormPreview"
import { find, findIndex } from "lodash"
import { setCategories } from "../store/actions/categoryAction"

class CategoryForm extends PureComponent {
  handleSubmit = data => {
    const { categories, setCategories, history, match } = this.props
    // Check if it Edit or Brand New Author
    if (match.path === "/category/new") {
      setCategories([data, ...categories])
    } else {
      const categoryIndex = findIndex(categories, category => category.id === data.id)
      setCategories([
        ...categories.slice(0, categoryIndex),
        data,
        ...categories.slice(categoryIndex + 1)
      ])
    }
    // Go Back in History
    history.goBack()
  }

  render() {
    const { selectedCategory, history } = this.props

    return (
      <CategoryFormPreview
        onSubmit={this.handleSubmit}
        selectedCategory={selectedCategory}
        history={history}
      />
    )
  }
}

const mapStateToProps = ({ editMode, categories }, ownProps) => ({
  categories,
  selectedCategory: editMode
    ? ownProps.match.path === "/category/new"
      ? null
      : find(categories, category => category.id === ownProps.match.params.categoryId)
    : null
})

const mapDispatchToProps = {
  setCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)
