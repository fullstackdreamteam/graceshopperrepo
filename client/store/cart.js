import axios from 'axios'

const GET_CART = 'GET_CART'

const userCart = {}

const getCart = cart => {
  return {
    type: GET_CART,
    cart
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

export const deleteCartItem = async object => {
  await axios.put('/api/orders', object)
}
export default function(state = userCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
