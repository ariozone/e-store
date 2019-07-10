import React, { Component } from "react"
import Input from "../components/common/input"
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

  handleChange = ({ currentTarget: input }) => {
    const account = {
      ...this.state.account
    }
    account[input.name] = input.value
    this.setState({ account })
  }

  render() {
    const { account } = this.state
    return (
      <div>
        <h1>Login Form</h1>
        <form className="my-5" onSubmit={this.handleSubmit}>
          <Input />
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
