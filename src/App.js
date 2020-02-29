import React, { PureComponent } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Layout from "./containers/Layout"
import { connect } from "react-redux"
import { getInitialData } from "./store/actions/initialDataAction"
import Loading from "./components/Loading"
import BookListing from "./containers/BookListing"
import BookPage from "./containers/BookPage"
import AuthorPage from "./containers/AuthorPage"
import PrivateRoute from "./containers/PrivateRoute"
import BookForm from "./containers/BookForm"

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
          {/* Book Routes */}
          <Route exact path="/book/new" render={props => <BookForm {...props} />} />
          <Route exact path="/book/:bookId" render={props => <BookPage {...props} />} />
          <PrivateRoute exact path="/book/:bookId/edit" render={props => <BookForm {...props} />} />
          {/* Author Routes */}
          <PrivateRoute exact path="/author/new" render={props => <p>Author New</p>} />
          <Route exact path="/author/:authorId" render={props => <AuthorPage {...props} />} />
          <PrivateRoute exact path="/author/:authorId/edit" render={props => <p>Author Edit</p>} />
          {/* Categories Routes */}
          <PrivateRoute exact path="/category/new" render={props => <p>category New</p>} />
          <Route exact path="/category/:categoryId" render={props => <p>category page</p>} />
          <PrivateRoute
            exact
            path="/category/:categoryId/edit"
            render={props => <p>category Edit</p>}
          />
          {/* Home Page */}
          <Route exact path="/" render={() => <BookListing />} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    )
  }
}

const mapStateToProps = ({ initialData }) => ({
  initialData
})

const mapDispatchToProps = {
  getInitialData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
