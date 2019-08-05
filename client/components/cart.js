import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAsyncCart} from '../store/cart'
import EachProduct from './EachProduct'
import {asyncBuy} from '../store/orders'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.getAsyncCart()
  }
  render() {
    //  let productTypes = Array(cart.productTypes)
    console.log(this.props.cart.id)
    //console.log(this.props.cart)

    return (
      <div>
        <p>my Cart</p>
        {this.props.cart.productTypes &&
          this.props.cart.productTypes.map(item => {
            return (
              <EachProduct
                key={item.id}
                product={item}
                isCart={true}
                qty={item.order_item.quantity}
                cart={this.props.cart}
              />
            )
          })}
        <div />
        <div>
          <h3>
            Total Price:
            {this.props.cart.total}
            <div>
              <button
                type="button"
                onClick={() =>
                  this.props.asyncBuy({orderId: this.props.cart.id})
                }
              >
                BUY
              </button>
            </div>
          </h3>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {cart: state.cart}
}

const mapDispatchtoProps = dispatch => {
  return {
    getAsyncCart: () => dispatch(getAsyncCart()),
    asyncBuy: id => dispatch(asyncBuy(id))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart)
