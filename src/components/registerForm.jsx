import React from "react"
import Form from "../components/common/form"
import Joi from "joi-browser"

export default class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} }
  schema = {
    username: Joi.string()
      .required()
      .min(5)
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
    name: Joi.string()
      .required()
      .min(2)
      .label("Name")
  }
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
