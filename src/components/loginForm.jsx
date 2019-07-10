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
    console.log("Submited!", e)
  }

  handleChange = e => {
    const account = {
      ...this.state.account
    }
    if (e.currentTarget.id === "username") {
      account.username = e.currentTarget.value
    }
    if (e.currentTarget.id === "password")
      account.password = e.currentTarget.value

    this.setState({ account })
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
              value={this.state.account.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.account.password}
              onChange={this.handleChange}
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
