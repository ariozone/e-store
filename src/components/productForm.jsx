import React, { Component } from "react"

export default class ProductForm extends Component {
  state = {
    categories: this.props.categories
  }
  render() {
    return (
      <form>
        <div class="form-group">
          <label htmlFor="name">Product Name</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label htmlFor="category">Select Category</label>
          <select class="form-control" id="category">
            this.props.categories.map(c =>
            <option>c.name</option>)
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" class="form-control" id="price" />
        </div>
        <div class="form-group">
          <label htmlFor="numberInStock">Number in Stock</label>
          <input type="text" class="form-control" id="numberInStock" />
        </div>
      </form>
    )
  }
}
