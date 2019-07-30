import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Order from './order'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const {orders} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div>
        <h3>MY ORDERS</h3>
        <ul>
          {orders.map &&
            orders.map(order => {
              return (
                <li key={order.id}>
                  Order Number: {order.id}
                  <Order order={order} />
                </li>
              )
            })}
        </ul>
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
