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

    //console.log(this.props.cart)

    return (
      <div>
        <h3>My Cart</h3>
        <div className="row">
          <div />
          {this.props.cart.productTypes &&
            this.props.cart.productTypes.map(item => {
              return (
                <div className="col">
                  <EachProduct
                    key={item.id}
                    product={item}
                    isCart={true}
                    qty={item.order_item.quantity}
                    cart={this.props.cart}
                  />
                </div>
              )
            })}
        </div>
        <div>
          <div>
            <h3>
              Total Price:
              {this.props.cart.total}
            </h3>
          </div>
          <div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                if (this.props.cart.productTypes.length === 0) {
                  console.log('error')
                } else {
                  this.props.asyncBuy({orderId: this.props.cart.id})
                  this.props.history.push('/completed')
                }
              }}
            >
              Checkout
            </button>
          </div>
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
