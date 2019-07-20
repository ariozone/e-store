import React from "react"
import Form from "./common/form"
import { getCategories } from "../services/fakeCategoryService"
import Joi from "joi-browser"

export default class ProductForm extends Form {
  state = {
    data: { name: "", catergoryId: "", numberInStock: "", price: "" },
    error: {}
  }
  schema = {
    _id: Joi.string(),
    name: Joi.string().required(),
    categoryId: Joi.string().required()
  }
  componentDidMount() {
    const categories = getCategories()
    this.setState({ categories })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push("/")
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name", "text")}
        {this.renderInput("category", "Category", "text")}
        {this.renderInput("numberInStoch", "In Stock", "number")}
        {this.renderInput("price", "Price", "number")}
        {this.renderButton("Save")}
        {/* // <h3 className="my-5">Product ID: {this.props.match.params.id}</h3>
        // <div className="form-group">
        //   <label htmlFor="name">Product Name</label>
        //   <input type="text" className="form-control" id="name" />
        // </div>
        // <div className="form-group">
        //   <label htmlFor="category">Select Category</label>
        //   <select className="form-control" id="category">
        //     {this.state.categories.map(c => (
        //       <option key={c._id}>{c.name}</option>
        //     ))}
        //   </select>
        // </div> */}
        {/* // <div className="form-group">
        //   <label htmlFor="price">Price</label>
        //   <input type="text" className="form-control" id="price" />
        // </div>
        // <div className="form-group">
        //   <label htmlFor="numberInStock">Number in Stock</label>
        //   <input type="text" className="form-control" id="numberInStock" />
        // </div>
        // <div className="form-group">
        //   <label htmlFor="imageUrl">Image URL</label>
        //   <input type="text" className="form-control" id="imageUrl" />
        // </div>

        // <button type="submit" className="btn btn-secondary btn-block my-5">
        //   Save
        // </button> */}
      </form>
    )
  }
}
