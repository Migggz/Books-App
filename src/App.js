import React, { PureComponent } from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "./containers/Layout"
import { connect } from "react-redux"
import { getInitialData } from "./store/actions/initialDataAction"

class App extends PureComponent {
  componentDidMount() {
    if (this.props.initialData.isLoading) {
      this.props.getInitialData()
    }
  }

  render() {
    const { initialData } = this.props
    if (initialData.isLoading) return <h1>LOAAAAAAAAAADING</h1>

    return (
      <Layout>
        <Switch>
          <Route render={() => <div>Book Store Home Page</div>} />
          <Route exact path="/book" render={() => <div>Book Page</div>} />
          <Route exact path="/author" render={() => <div>Author Page</div>} />
          <Route exact path="/category" render={() => <div>Book Page</div>} />
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
