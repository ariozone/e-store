import React from "react"

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        {...props.rest}
      />
    </div>
  )
}
export default Input
