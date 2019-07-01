import React from "react"

const Pagination = props => {
  const { handlePageChanges } = props
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={() => handlePageChanges}>
            {1}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
