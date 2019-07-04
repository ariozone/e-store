import React from "react"
import Products from "./components/products"
import "./App.css"
import { Route } from "react-router-dom"
import Customers from "./components/customers"
import ProductForm from "./components/productForm"
import Sales from "./components/sales"
import NotFound from "./components/notFound"

function App() {
  return (
    <div className="container">
      <Products />
    </div>
  )
}

export default App
