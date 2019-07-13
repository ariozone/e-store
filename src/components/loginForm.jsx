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
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5)
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
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    })
    if (!error) return null
    const errors = {}
    for (let property of error.details) {
      errors[property.path[0]] = property.message
    }

    return errors
  }

  validateOnChange = input => {
    const targetInput = { [input.name]: input.value } // computed properties in ES6
    const schema = { [input.name]: this.schema[input.name] }
    const { error } = Joi.validate(targetInput, schema)
    if (!error) return null
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
