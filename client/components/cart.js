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
        <p>my Cart</p>
        {this.props.cart.productTypes &&
          this.props.cart.productTypes.map(item => {
            return <EachProduct key={item.id} product={item} />
          })}
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
