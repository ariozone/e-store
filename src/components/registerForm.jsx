import React from "react"
import Form from "../components/common/form"
export default class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="my-5">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    )
  }
}
