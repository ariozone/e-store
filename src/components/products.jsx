import React from "react"
import { getProducts } from "../services/fakeProductService"
import ListGroup from "./common/listGroup"
import { getCategories } from "../services/fakeCategoryService"
import Pagination from "./common/pagination"
import { paginate } from "../utils/paginate"
import Search from "./common/search"
import { Link } from "react-router-dom"

export default class Products extends React.Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "All Categories",
    pageSize: 6,
    currentPage: 1,
    searchQuery: ""
  }

  componentDidMount() {
    const products = getProducts()
    const categories = [{ _id: "", name: "All Categories" }, ...getCategories()]
    this.setState({ products, categories })
  }

  handleDelete = product => {
    const productsBeforeDelete = [...this.state.products]
    try {
      const products = productsBeforeDelete.filter(p => p !== product)
      this.setState({ products, searchQuery: "" })
    } catch (err) {
      console.error(err)
      this.setState({ products: productsBeforeDelete })
    }
  }

  handleSelectCat = category => {
    this.setState({
      selectedCategory: category,
      currentPage: 1,
      searchQuery: ""
    })
  }

  handlePageChanges = page => {
    this.setState({ currentPage: page })
  }

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      selectedCategory: "All Categories"
    })
  }

  render() {
    const {
      products: allProducts,
      categories,
      selectedCategory,
      pageSize,
      currentPage,
      searchQuery
    } = this.state

    let filtered = allProducts
    searchQuery
      ? (filtered = allProducts.filter(p =>
          p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        ))
      : (filtered =
          selectedCategory && selectedCategory._id
            ? allProducts.filter(p => p.category._id === selectedCategory._id)
            : allProducts)

    const products = paginate(filtered, currentPage, pageSize)

    return (
      <div className="row my-5">
        <div className="col-3 mx-5">
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
            There are {filtered.length}{" "}
            {selectedCategory.name === "All Categories"
              ? ""
              : selectedCategory.name}{" "}
            products available in the database.
          </h1>

          <Search onChange={this.handleSearch} value={searchQuery} />

          <div className="row">
            {products.map(p => (
              <div key={p._id} className="col-lg-4 col-md-12>">
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
                      Delete
                    </button>
                    <Link
                      className="btn btn-sm mx-2 btn-secondary float-right"
                      to={`/products/${p._id}`}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            itemsCount={filtered.length}
            onPageChange={this.handlePageChanges}
            pageSize={pageSize}
            currentPage={currentPage}
          />
          <Link to="/products/new" className="btn btn-secondary btn-block">
            Add New
          </Link>
        </div>
      </div>
    )
  }
}
