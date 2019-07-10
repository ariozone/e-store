import React from "react"

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>Email address</label>
      <input
        type="email"
        className="form-control"
        id={props.name}
        value={account.username}
        onChange={this.handleChange}
        name={props.name}
      />
    </div>
  )
}
export default Input
