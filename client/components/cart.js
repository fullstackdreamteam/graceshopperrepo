import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAsyncCart} from '../store/cart'
import EachProduct from './EachProduct'

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
              <button type="button">BUY</button>
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
  return {getAsyncCart: () => dispatch(getAsyncCart())}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart)
