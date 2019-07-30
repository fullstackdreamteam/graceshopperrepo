import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MyOrders from './myOrders'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div>
        <h3>MY ORDERS</h3>
        <MyOrders />
      </div>
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
