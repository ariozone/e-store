import React from "react"
import Products from "./components/products"
import "./App.css"
import { Route, Switch, Redirect } from "react-router-dom"
import Customers from "./components/customers"
import ProductForm from "./components/productForm"
import Sales from "./components/sales"
import NotFound from "./components/notFound"
import NavBar from "./components/navBar"

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path={"/products"} component={Products} />
          <Route path={"/customers"} component={Customers} />
          <Route path={"/products/:id"} component={ProductForm} />
          <Route path={"/sales"} component={Sales} />
          <Route path={"/notFound"} component={NotFound} />
          <Route
            path={"/productForm/:id"}
            render={props => <ProductForm {...props} />}
          />
          <Redirect from={"/"} exact to={"/products"} />
          <Redirect to={"/notFound"} />
        </Switch>
      </div>
    </React.Fragment>
  )
}

export default App
