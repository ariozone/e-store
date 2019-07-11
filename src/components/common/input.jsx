import React from "react"

const Input = ({ name, onChange, label, type, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        id={name}
        name={name}
        onChange={onChange}
        type={type}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}
export default Input
