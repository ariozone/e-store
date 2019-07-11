import React, { Component } from "react"
import Input from "../components/common/input"
import Joi from "joi-browser"

export default class LoginForm extends Component {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  }

  schema = {
    accout: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return
    console.log("Submited!")
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateOnChange(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = {
      ...this.state.data
    }
    data[input.name] = input.value

    this.setState({ data, errors })
  }

  validate = () => {
    const errors = Joi.validate(this.state.data, this.schema)
    console.log(errors)

    // return Object.keys(errors).length === 0 ? null : errors
  }

  validateOnChange = input => {
    if (input.name === "username") {
      if (input.value.length < 3)
        return "Username must be at least 3 characters long."
    }
    if (input.name === "password") {
      if (input.value.length < 5)
        return "Password must be at least 5 characters long."
    }
  }

  render() {
    const { data, errors } = this.state
    return (
      <div>
        <h1>Login Form</h1>
        <form className="my-5" onSubmit={this.handleSubmit}>
          <Input
            value={data.username}
            name={"username"}
            id={"username"}
            label={"Username"}
            onChange={this.handleChange}
            type={"email"}
            error={errors.username}
          />
          <Input
            value={data.password}
            name={"password"}
            id={"password"}
            label={"Password"}
            onChange={this.handleChange}
            type={"password"}
            error={errors.password}
          />

          <button type="submit" className="btn btn-secondary btn-block my-5">
            Login
          </button>
        </form>
      </div>
    )
  }
}
