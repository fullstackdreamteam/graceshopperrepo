import React from 'react'
import {connect} from 'react-redux'
import {updateCartQty, deleteCartItem} from '../store/cart'
const EachProduct = props => {
  const product = props.product
  return (
    <div>
      <img src={product.imageUrl} style={{width: '50%'}} />
      <h3>
        {product.brand} {product.modelName}
      </h3>
      <h4>Length: {product.length}</h4>
      <h4>Price: {product.price}</h4>
      <button type="button" id={product.id} onClick={props.toggleDetail}>
        More Details
      </button>
      {props.isCart ? (
        <div>
          <form
            onSubmit={event => {
              event.preventDefault()
              let obj = {
                orderId: props.cart.id,
                productTypeId: product.id,
                quantity: parseInt(event.target.qty.value)
              }
              props.updateCartQty(obj)
            }}
          >
            <label>
              QTY:
              <input
                type="number"
                name="qty"
                defaultValue={props.qty}
                min="1"
                max="10"
              />
              <button type="submit">Update</button>
            </label>
          </form>
          <button
            type="button"
            id={product.id}
            name={props.cart.id}
            onClick={event => {
              event.preventDefault()
              let obj = {
                orderId: +event.target.name,
                productTypeId: +event.target.id
              }
              console.log(obj)
              props.deleteCartItem(obj)
            }}
          >
            delete
          </button>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCartItem: obj => dispatch(deleteCartItem(obj)),
    updateCartQty: obj => dispatch(updateCartQty(obj))
  }
}

export default connect(null, mapDispatchToProps)(EachProduct)
