import React from "react"

export default function ListGroup(props) {
  return (
    <div>
      <ul class="list-group">
        {props.categories.map(c => (
          <li
            className="list-group-item"
            key={c._id}
            onClick={() => props.onSelect(c)}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
