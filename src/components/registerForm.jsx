import React, { Component } from "react"
import Form from "../components/common/form"
export default class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} }
}
