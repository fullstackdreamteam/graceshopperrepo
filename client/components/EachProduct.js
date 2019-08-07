import React from 'react'
import {connect} from 'react-redux'
import {updateCartQty, deleteCartItem} from '../store/cart'
const EachProduct = props => {
  const product = props.product
  return (
    // <div className="card" style={{width: '23.5rem'}}>
    //           <img
    //             src="https://media.tmgcreative.com/2019/MAKO_1912019/Offshore-Boats_1932019/334-CC-Family-Edition_4671/Product-Beauty_1326546/334-CC-Family-Edition_img182565_700.jpg"
    //             className="card-img-top"
    //             alt=""
    //           />
    //           <div className="card-body">
    //             <p className="card-text">
    //               Fishing boats for the fishing enthusiast in you. Check out our
    //               wide variety of models.
    //             </p>
    //           </div>

    <div className="card" style={{width: '23.5rem'}}>
      <h5 className="card-header">
        {product.brand} {product.modelName}
      </h5>
      <img src={product.imageUrl} className="card-img-top" />
      <div className="card-body">
        <div className="card-text">
          <h5>Length: {product.length}ft</h5>
          <h5>Price: ${product.price}</h5>
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
                  <button className="btn btn-primary btn-sm" type="submit">
                    Update
                  </button>
                </label>
              </form>
              <button
                className="btn btn-outline-danger btn-sm"
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
            <div>
              <button
                className="btn btn-primary"
                type="button"
                id={product.id}
                onClick={props.toggleDetail}
              >
                More Details
              </button>
            </div>
          )}
        </div>
      </div>
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
