import React, { Component } from "react"
import Input from "../components/common/input"

export default class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  }

  handleSubmit = e => {
    e.preventDefault()
    const errors = this.validateInput()
    console.log(errors)
    this.setState({ errors })
    if (errors) return
    console.log("Submited!")
  }

  handleChange = ({ currentTarget: input }) => {
    const account = {
      ...this.state.account
    }
    account[input.name] = input.value
    this.setState({ account })
  }

  validateInput = () => {
    const { account } = this.state
    const errors = {}
    if (account.username.trim() === "")
      errors.username = "Username is required."
    if (account.password.trim() === "")
      errors.password = "Password is required."
    return Object.keys(errors).length === 0 ? null : errors
  }

  render() {
    const { account } = this.state
    return (
      <div>
        <h1>Login Form</h1>
        <form className="my-5" onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            name={"username"}
            id={"username"}
            label={"Username"}
            onChange={this.handleChange}
            type={"email"}
          />
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={account.password}
              onChange={this.handleChange}
              name="password"
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
