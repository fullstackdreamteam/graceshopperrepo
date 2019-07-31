import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MyOrders from './myOrders'
import Products from './Products'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email} to Boats-R-Us</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    orders: state.user.orders
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
