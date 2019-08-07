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
      // <div className="card" style={{width: '23.5rem'}}>
      // <h5 className="card-header">
      //   {product.brand} {product.modelName}
      // </h5>
      // <img src={product.imageUrl} className="card-img-top" />
      // <div className="card-body">
      //   <div className="card-text">
      //     <h5>Length: {product.length}</h5>
      //     <h5>Price: {product.price}</h5>
      //     {props.isCart ? (
      //       <div>
      //     <ul class="list-group list-group-flush">
      //   <li class="list-group-item">Cras justo odio</li>
      //   <li class="list-group-item">Dapibus ac facilisis in</li>
      //   <li class="list-group-item">Vestibulum at eros</li>
      // </ul>
      <div className="card">
        <h5 className="card-header">
          {this.props.singleProduct.brand} {this.props.singleProduct.modelName}
        </h5>
        <p>{this.state.price}</p>
        <center>
          <img src={this.props.singleProduct.imageUrl} style={{width: '50%'}} />
        </center>
        <div className="card-body">
          <ul clasName="list-group list-group-flush">
            <li className="list-group-item">
              {this.props.singleProduct.description}
            </li>
            <li className="list-group-item">
              Length: {this.props.singleProduct.length}
            </li>
            <li className="list-group-item">
              Price: {this.props.singleProduct.price}
            </li>
          </ul>
          <div className="card-body">
            <form onSubmit={this.clickHandler}>
              <label>
                QTY:
                <input
                  type="number"
                  defaultValue="1"
                  name="qty"
                  min="1"
                  max="10"
                />
              </label>
              <button
                className="btn btn-outline-success"
                type="submit"
                id={this.props.singleProduct.id}
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
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
