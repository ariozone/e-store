import React from "react"
import Input from "../components/common/input"
import Joi from "joi-browser"
import Form from "../components/common/form"

export default class LoginForm extends Form {
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

  doSubmit = () => {
    console.log("submitted.")
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
            type={"text"}
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
        </form>
      </div>
    )
  }
}
