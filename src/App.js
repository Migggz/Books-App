import React from "react"
import { Button } from "@material-ui/core"
import { Route, Switch } from "react-router-dom"
import Layout from "./containers/Layout"
function App() {
  return (
    <Layout>
      <Switch>
        <Route
          render={() => (
            <Button variant="contained" color="primary">
              Book Store
            </Button>
          )}
        />
        <Route exact path="/book" render={() => <div>Book Page</div>} />
        <Route exact path="/author" render={() => <div>Author Page</div>} />
        <Route exact path="/category" render={() => <div>Book Page</div>} />
        <Route exact path="/" render={() => <div>Home</div>} />
      </Switch>
    </Layout>
  )
}

export default App
