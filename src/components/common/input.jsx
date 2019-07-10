import React from "react"

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor="username">Email address</label>
      <input
        type="email"
        className="form-control"
        id="username"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        value={account.username}
        onChange={this.handleChange}
        name="username"
      />
    </div>
  )
}
export default Input
