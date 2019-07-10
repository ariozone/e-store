import React, { Component } from "react"
export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form className="my-5">
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
        </form>
      </div>
    )
  }
}
