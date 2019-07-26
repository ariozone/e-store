import React from "react"
import Form from "./common/form"
import { getCategories } from "../services/fakeCategoryService"
import Joi from "joi-browser"
import { getProduct } from "../services/fakeProductService"

export default class ProductForm extends Form {
  state = {
    data: {
      name: "",
      catergoryId: "",
      numberInStock: "",
      price: "",
      imageUrl: ""
    },
    categories: [],
    errors: {}
  }

  schema = {
    _id: Joi.string(),
    name: Joi.string()
      .required()
      .label("Name"),
    categoryId: Joi.string()
      .required()
      .label("Category"),
    numberInStoch: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("In Stock"),
    price: Joi.number()
      .required()
      .min(0)
      .max(1000)
      .label("Price"),
    imageUrl: Joi.string()
  }

  componentDidMount() {
    const categories = getCategories()
    this.setState({ categories })
    const productId = this.props.match.params.id
    if (productId === "new") return

    const product = getProduct(productId)
    if (!product) return this.props.history.replace("/notFound")

    this.setState({ data: this.mapToViewModel(product) })
  }

  // The RESTful APIs we have on the server are general purpose. This data will use in several pages. Each page needs a piece of that data. The data might be different from what we want to display on our page. Thats why we create a view model.

  mapToViewModel(product) {
    return {
      _id: product._id,
      name: product.name,
      categoryId: product.category._id,
      numberInStoch: product.numberInStoch,
      price: product.price,
      imageUrl: product.imageUrl
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <h1 className="my-5">Product ID: {this.props.match.params.id}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name", "text")}
          {this.renderSelect("categorId", "Category", this.state.categories)}
          {this.renderInput("numberInStoch", "In Stock", "number")}
          {this.renderInput("price", "Price", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    )
  }
}
