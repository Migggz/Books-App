import React, { PureComponent } from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "./containers/Layout"
import { connect } from "react-redux"
import { getInitialData } from "./store/actions/initialDataAction"
import Loading from "./components/Loading"
import BookListing from "./containers/BookListing"

class App extends PureComponent {
  componentDidMount() {
    if (this.props.initialData.isLoading) {
      this.props.getInitialData()
    }
  }

  render() {
    const { initialData } = this.props
    if (initialData.isLoading) return <Loading />

    return (
      <Layout>
        <Switch>
          {/* TODO: if Edit Mode render the edit form of each page */}
          <Route exact path="/book/:id" render={() => <div>Book Page</div>} />
          <Route exact path="/author/:authorId" render={() => <div>Author</div>} />
          <Route exact path="/category/:categoryId" render={() => <div>Category Page</div>} />
          <Route exact path="/" render={() => <BookListing />} />
        </Switch>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  initialData: state.initialData
})

const mapDispatchToProps = {
  getInitialData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
