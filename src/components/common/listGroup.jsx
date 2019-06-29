import React from "react"

export default function ListGroup(props) {
  const { selectedCategory, onSelect, categories } = props
  return (
    <div>
      <ul class="list-group">
        {categories.map(c => (
          <li
            className={
              c === selectedCategory
                ? "list-group-item active"
                : "list-group-item"
            }
            key={c._id}
            onClick={() => onSelect(c)}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
