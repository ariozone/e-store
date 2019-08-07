import React, { useState, useEffect } from "react"
import { getProducts } from "../services/fakeProductService"
import ListGroup from "./common/listGroup"
import { getCategories } from "../services/fakeCategoryService"
import Pagination from "./common/pagination"
import { paginate } from "../utils/paginate"
import Search from "./common/search"
import { Link } from "react-router-dom"

const Products = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectCategory] = useState("All Categories")
  const [pageSize, setPageSize] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const products = getProducts()
    const categories = [{ _id: "", name: "All Categories" }, ...getCategories()]
    setProducts(products)
    setCategories(categories)
    setPageSize(6)
  }, [])

  const handleDelete = product => {
    const productsBeforeDelete = [...products]
    try {
      const products = productsBeforeDelete.filter(p => p !== product)

      setProducts(products)
      setSearchQuery("")
    } catch (err) {
      console.error(err)

      setProducts(productsBeforeDelete)
    }
  }

  const handleSelectCat = category => {
    setSelectCategory(category)
    setCurrentPage(1)
    setSearchQuery("")
  }

  const handlePageChanges = page => {
    setCurrentPage(page)
  }

  const handleSearch = query => {
    setSearchQuery(query)
    setCurrentPage(1)
    setSelectCategory("All Categories")
  }

  let filtered = products
  searchQuery
    ? (filtered = products.filter(p =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      ))
    : (filtered =
        selectedCategory && selectedCategory._id
          ? products.filter(p => p.category._id === selectedCategory._id)
          : products)

  const productsAfterPagination = paginate(filtered, currentPage, pageSize)

  return (
    <div className='row my-5'>
      <div className='col-3 mx-5'>
        {
          <ListGroup
            categories={categories}
            onSelect={handleSelectCat}
            selectedCategory={selectedCategory}
          />
        }
      </div>
      <div className='col'>
        <h1 className='my-5'>
          There are {filtered.length}{" "}
          {selectedCategory.name === "All Categories"
            ? ""
            : selectedCategory.name}{" "}
          products available in the database.
        </h1>

        <Search onChange={handleSearch} value={searchQuery} />

        <div className='row'>
          {productsAfterPagination.map(p => (
            <div key={p._id} className='col-lg-4 col-md-12>'>
              <div className='card mb-4'>
                <img className=' card-img-top' src={p.imageUrl} alt='Product' />
                <div className='card-body'>
                  <h5 className='card-title'>{p.name}</h5>
                  <p className='card-text'>${p.price}</p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      In stock: {p.numberInStock}
                    </small>
                  </p>
                  <button
                    className='btn btn-sm btn-danger float-right'
                    onClick={() => handleDelete(p)}
                  >
                    Delete
                  </button>
                  <Link
                    className='btn btn-sm mx-2 btn-secondary float-right'
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
          onPageChange={handlePageChanges}
          pageSize={pageSize}
          currentPage={currentPage}
        />
        <Link to='/products/new' className='btn btn-secondary btn-block'>
          Add New
        </Link>
      </div>
    </div>
  )
}
export default Products
