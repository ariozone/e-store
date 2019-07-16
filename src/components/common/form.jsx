import React, { Component } from "react"

export default class Form extends Component {
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
    return error ? error.details[0].message : null
  }

  render() {
    return <h1>Form</h1>
  }
}
