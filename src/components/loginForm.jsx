import React, { Component } from "react"
export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form className="my-5">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </form>
      </div>
    )
  }
}
