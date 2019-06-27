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
        <div className="row" height="50">
          {this.state.products.map(p => (
            <div className="col-lg-4 col-md-12>">
              <div className="card mb-4">
                <img className=" card-img-top" src={p.image} alt="Product" />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.price}</p>
                  <p className="card-text">
                    <small className="text-muted">{p.numberInStock}</small>
                  </p>
                  <button className="btn btn-sm btn-danger float-right">
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
