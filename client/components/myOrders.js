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
    let orders = this.props.orders

    return (
      <div>
        <h1>My Past Orders</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order #</th>
              <th scope="col">Brand</th>
              <th scope="col">Model Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => {
              let counter = 0
              return order.productTypes.map(product => {
                counter++
                if (counter === order.productTypes.length) {
                  return (
                    <React.Fragment>
                      <tr>
                        <td>{order.id}</td>
                        <td>{product.brand}</td>
                        <td>{product.modelName}</td>
                        <td>{product.order_item.quantity}</td>
                        <td>{product.price * product.order_item.quantity}</td>
                      </tr>

                      <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td>TOTAL: {order.total}</td>
                      </tr>
                    </React.Fragment>
                  )
                } else {
                  return (
                    <React.Fragment>
                      <tr>
                        <td>{order.id}</td>
                        <td>{product.brand}</td>
                        <td>{product.modelName}</td>
                        <td>{product.order_item.quantity}</td>
                        <td>{product.price * product.order_item.quantity}</td>
                      </tr>
                    </React.Fragment>
                  )
                }
              })
            })}
            {/* {orders.map &&
              orders.map(order => {
                return (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    {order.productTypes.map(product => {
                      return (
                        <div key={product.id}>
                          <td>{product.brand}</td>
                          <td>{product.modelName}</td>

                          <td>{product.price}</td>
                        </div>
                      )
                    })}
                  </tr>
                )
              })} */}
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
