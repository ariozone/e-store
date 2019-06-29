import React from "react"
import { getProducts } from "../services/fakeProductService"
import ListGroup from "./common/listGroup"
import { getCategories } from "../services/fakeCategoryService"

export default class Products extends React.Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: ""
  }

  componentDidMount() {
    const products = getProducts()
    const categories = getCategories()
    this.setState({ products, categories })
  }

  handleDelete(product) {
    const productsBeforeDelete = [...this.state.products]
    try {
      const products = productsBeforeDelete.filter(p => p !== product)
      this.setState({ products })
    } catch (err) {
      console.error(err)
      this.setState({ products: productsBeforeDelete })
    }
  }

  handleSelectCat = category => {
    this.setState({ selectedCategory: category })
  }

  render() {
    const { products, categories, selectedCategory } = this.state
    return (
      <div className="row my-5">
        <div className="col-3">
          {
            <ListGroup
              categories={categories}
              onSelect={this.handleSelectCat}
              selectedCategory={selectedCategory}
            />
          }
        </div>
        <div className="col">
          <h1 className="my-5">
            There are {products.length} products available in the database.
          </h1>
          <div className="row">
            {products.map(p => (
              <div className="col-lg-4 col-md-12>">
                <div className="card mb-4">
                  <img className=" card-img-top" src={p.image} alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">${p.price}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        In stock: {p.numberInStock}
                      </small>
                    </p>
                    <button
                      className="btn btn-sm btn-danger float-right"
                      onClick={() => this.handleDelete(p)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
