import React, { Component } from "react"
export default class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log("Submited!")
  }
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form className="my-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email address</label>
            <input
              type="email"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-secondary btn-block my-5">
            Login
          </button>
        </form>
      </div>
    )
  }
}
