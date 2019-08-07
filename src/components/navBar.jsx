import React from "react"
import { Link, NavLink } from "react-router-dom"

const NavBar = props => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
      <Link className='navbar-brand' to='/'>
        <i className='fas fa-cash-register' /> E Store
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/products'>
              Products
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/customers'>
              Customers
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/sales'>
              Sales
            </NavLink>
          </li>
        </ul>
        <ul className='navbar-nav float-right'>
          <li className='nav-item align-right'>
            <NavLink className='nav-link' to='/login'>
              Login
            </NavLink>
          </li>
          <li className='navbar-nav align-right'>
            <NavLink className='nav-link' to='/register'>
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
