import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <React.Fragment>
    {isLoggedIn ? (
      <div>
        <nav className="navbar navbar-light" style={{backgroundColor: 'white'}}>
          <a className="navbar-brand" href="/ ">
            <img
              src="https://i.ibb.co/dGTPFvn/Boats-RUs-Small.png"
              style={{width: '35%'}}
            />
          </a>
          <div>
            <Link
              to="/"
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              Home
            </Link>
            <Link
              to="/products"
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              All Products
            </Link>
            <Link
              to="/history"
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              My Orders
            </Link>
            <Link
              to="/cart"
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              Cart
            </Link>
            <a
              href="#"
              onClick={handleClick}
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              Logout
            </a>
          </div>
        </nav>
      </div>
    ) : (
      <div>
        <nav className="navbar navbar-light" style={{backgroundColor: 'white'}}>
          <a className="navbar-brand" href="/ ">
            <img
              src="https://i.ibb.co/dGTPFvn/Boats-RUs-Small.png"
              style={{width: '35%'}}
            />
          </a>
          <div>
            <Link
              to="/"
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              Home
            </Link>
            <Link
              to="/products"
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              All Products
            </Link>
            <Link
              to="/login"
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              Login
            </Link>
            <Link
              to="/signup "
              style={{
                display: 'inline',
                padding: '10px',
                textDecoration: 'none',
                color: 'grey'
              }}
            >
              Signup
            </Link>
          </div>
        </nav>
      </div>
    )}
  </React.Fragment>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
