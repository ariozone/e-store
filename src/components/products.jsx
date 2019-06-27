import React from "react"
import { getProducts } from "../services/fakeProductService"

export default class Products extends React.Component {
  state = {
    products: []
  }
  componentDidMount() {
    let products = [...this.state.products]
    products = getProducts()
    this.setState({ products })
  }
  render() {
    return (
      <React.Fragment>
        <h1>Products</h1>
        <div className="row">
          {this.state.products.map(p => (
            <div className="card">{p.name}</div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
