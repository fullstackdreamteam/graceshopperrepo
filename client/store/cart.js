import axios from 'axios'

const GET_CART = 'GET_CART'
const DELETE_CART_ITEM = 'DELETE_CART_ITEM'

const userCart = {}

const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

const deleteCartSingleItem = id => {
  return {
    type: DELETE_CART_ITEM,
    id
  }
}

export const getAsyncCart = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/orders/cart')
    dispatch(getCart(data))
  }
}
export const updateCartQty = async object => {
  await axios.put('/api/orders/cart/updateQty', object)
}

export const deleteCartItem = object => {
  return async dispatch => {
    await axios.put('/api/orders', object)
    dispatch(deleteCartSingleItem(object.productTypeId))
  }
}
export default function(state = userCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case DELETE_CART_ITEM:
      return {
        ...state,
        productTypes: state.productTypes.filter(item => item.id !== action.id)
      }
    default:
      return state
  }
}
