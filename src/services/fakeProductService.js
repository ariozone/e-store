import * as categoriesAPI from "./fakeCategoryService"

const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Cup Cakes",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "food" },
    numberInStock: 6,
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/01/raspberry-cupcake-768x512.jpg",
    price: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Pizza",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "food" },
    numberInStock: 5,
    image:
      "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=6&m=938742222&s=170667a&w=0&h=px8dFDNHHwmCGbnyGnSGcTOerEG7-493JqZ39rlPWWw=",
    price: 9.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Vacume",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "home" },
    numberInStock: 8,
    image:
      "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 135
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Tennis Racket",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "sports" },
    numberInStock: 7,
    image:
      "https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 115
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Golf Clubs",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "sports" },
    numberInStock: 7,
    image:
      "https://images.pexels.com/photos/424766/pexels-photo-424766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 207
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Soccer Shoes",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "sports" },
    numberInStock: 7,
    image:
      "https://images.pexels.com/photos/274385/pexels-photo-274385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 55
  },
  {
    _id: "5b21ca3eeb7f6fbccd47281f",
    name: "Soccer Ball",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "sports" },
    numberInStock: 7,
    image:
      "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
    price: 15
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Iron",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "home" },
    numberInStock: 7,
    image:
      "https://images.pexels.com/photos/60058/iron-home-appliances-small-appliances-60058.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 24
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Google Assistant",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "home" },
    numberInStock: 4,
    image:
      "https://images.pexels.com/photos/1072851/pexels-photo-1072851.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 35
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Soup",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "food" },
    numberInStock: 7,
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/eating-korean-bibimbap-and-kimchi-768x512.jpg",
    price: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd361721",
    name: "Kabobs",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "food" },
    numberInStock: 3,
    image:
      "https://images.pexels.com/photos/72160/bbq-dinner-grilled-grill-72160.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 13.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd371711",
    name: "Salad",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "food" },
    numberInStock: 5,
    image:
      "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
    price: 5
  }
]

export function getProducts() {
  return products
}

export function getProduct(id) {
  return products.find(p => p._id === id)
}

export function saveProduct(product) {
  let productInDb = products.find(p => p._id === product._id) || {}
  productInDb.name = product.name
  productInDb.category = categoriesAPI.categories.find(
    c => c._id === product.categoryId
  )
  productInDb.numberInStock = product.numberInStock
  productInDb.price = product.price
  productInDb.image = product.image

  if (!productInDb._id) {
    productInDb._id = Date.now().toString()
    products.push(productInDb)
  }

  return productInDb
}

export function deleteProduct(id) {
  let productInDb = products.find(p => p._id === id)
  products.splice(products.indexOf(productInDb), 1)
  return productInDb
}
