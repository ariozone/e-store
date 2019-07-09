import React, { Component } from "react"
import { getCategories } from "../services/fakeCategoryService"

export default class ProductForm extends Component {
  state = {
    categories: []
  }
  componentDidMount() {
    const categories = getCategories()
    this.setState({ categories })
  }
  render() {
    return (
      <form>
        <h3 className="my-5">Product ID: {this.props.match.params.id}</h3>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Select Category</label>
          <select className="form-control" id="category">
            {this.state.categories.map(c => (
              <option key={c._id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" className="form-control" id="price" />
        </div>
        <div className="form-group">
          <label htmlFor="numberInStock">Number in Stock</label>
          <input type="text" className="form-control" id="numberInStock" />
        </div>
      </form>
    )
  }
}
