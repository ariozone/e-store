import React from "react"
import Products from "./components/products"
import "./App.css"
import { Route, Switch, Redirect } from "react-router-dom"
import Customers from "./components/customers"
import ProductForm from "./components/productForm"
import Sales from "./components/sales"
import NotFound from "./components/notFound"
import NavBar from "./components/navBar"
import LoginForm from "./components/loginForm"
import RegisterForm from "./components/registerForm"

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path={"/products"} component={Products} />
          <Route path={"/customers"} component={Customers} />
          <Route path={"/productForm"} component={ProductForm} />
          <Route path={"/sales"} component={Sales} />
          <Route path={"/login"} component={LoginForm} />
          <Route path={"/register"} component={RegisterForm} />
          <Route path={"/notFound"} component={NotFound} />
          <Route
            path={"/product/:id"}
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
