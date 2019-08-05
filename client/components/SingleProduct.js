import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAsyncSingleProduct} from '../store/singleProduct'
import {addAsyncCart} from '../store/orders'
import {getAsyncCart} from '../store/cart'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getAsyncSingleProduct(id)
    this.props.getAsyncCart()
  }
  clickHandler(event) {
    event.preventDefault()
    let productID = this.props.singleProduct.id
    let productIDArr = this.props.cart.productTypes.map(item => item.id)
    if (!productIDArr.includes(productID)) {
      let obj = {
        quantity: event.target.qty.value,
        price: this.props.singleProduct.price,
        orderId: this.props.cart.id,
        productTypeId: this.props.singleProduct.id
      }

      this.props.addAsyncCart(obj)
    } else console.log('This Item Already Exists') // Change this later
  }
  render() {
    return (
      <div>
        <p>{this.state.price}</p>
        <img src={this.props.singleProduct.imageUrl} style={{width: '50%'}} />
        <h3>
          {this.props.singleProduct.brand} {this.props.singleProduct.modelName}
        </h3>
        <h4>Length: {this.props.singleProduct.length}</h4>
        <h4>Price: {this.props.singleProduct.price}</h4>
        <h5>Description:</h5>
        <h5>{this.props.singleProduct.description}</h5>
        <form onSubmit={this.clickHandler}>
          <label>
            QTY:
            <input type="number" name="qty" />
          </label>
          <button type="submit" id={this.props.singleProduct.id}>
            Add to Cart
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.singleProduct,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAsyncSingleProduct: id => dispatch(getAsyncSingleProduct(id)),
    addAsyncCart: obj => dispatch(addAsyncCart(obj)),
    getAsyncCart: () => dispatch(getAsyncCart())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
