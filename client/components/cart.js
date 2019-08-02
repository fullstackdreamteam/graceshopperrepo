import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAsyncCart} from '../store/cart'
import EachProduct from './EachProduct'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
    //this.setTotal = this.setTotal.bind(this)
  }
  componentDidMount() {
    this.props.getAsyncCart()
    this.setState({
      total: this.props.cart.total
    })
  }

  // setTotal() {
  //   let totalVal =
  //     this.props.cart.productTypes &&
  //     this.props.cart.productTypes.reduce((acc, val) => {
  //       return acc + val.price * val.order_item.quantity
  //     }, this.state.total)
  //   console.log(totalVal)
  //   this.setState({total: totalVal})
  // }

  render() {
    //  let productTypes = Array(cart.productTypes)

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
