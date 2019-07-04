import React from "react"
import Products from "./components/products"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Customers from "./components/customers"
import ProductForm from "./components/productForm"
import Sales from "./components/sales"
import NotFound from "./components/notFound"

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path={"/products"} component={Products} />
        <Route path={"/customers"} component={Customers} />
        <Route path={"/productForm"} component={ProductForm} />
        <Route path={"/sales"} component={Sales} />
        <Route path={"/notFound"} component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
