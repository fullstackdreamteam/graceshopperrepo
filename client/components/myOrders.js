import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAsyncOrders} from '../store/orders'

class MyOrders extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.getAsyncOrders()
  }
  render() {
    let {orders} = this.props

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Order #</th>
              <th>Brand</th>
              <th>Make</th>
              <th>Length</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
            {orders.map &&
              orders.map(order => {
                return (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    {order.productTypes.map(product => {
                      return (
                        <div>
                          <td>{product.brand}</td>
                          <td>{product.make}</td>
                          <td>{product.length}</td>
                          <td>{product.description}</td>
                          <td>{product.price}</td>
                        </div>
                      )
                    })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAsyncOrders: () => dispatch(getAsyncOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
