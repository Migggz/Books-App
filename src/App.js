import React, { PureComponent } from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "./containers/Layout"
import { connect } from "react-redux"
import { getInitialData } from "./store/actions/initialDataAction"
import Loading from "./components/Loading"

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
          <Route exact path="/book/:id" render={() => <div>Book Page</div>} />
          <Route exact path="/author/:authorId" render={() => <div>Author Page</div>} />
          <Route exact path="/category/:categoryId" render={() => <div>Category Page</div>} />
          <Route exact path="/" render={() => <div>Home</div>} />
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
