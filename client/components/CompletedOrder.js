import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class CompletedOrder extends Component {
  render() {
    return (
      <div>
        <h1>Thank You for shopping with Boats-R-Us!</h1>
        <Link to="/products">Continue Shopping</Link>
      </div>
    )
  }
}
