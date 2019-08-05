import axios from 'axios'

const GET_CART = 'GET_CART'
const DELETE_CART_ITEM = 'DELETE_CART_ITEM'
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'

const userCart = {}

const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

const deleteCartSingleItem = (id, obj) => {
  console.log(obj)
  return {
    type: DELETE_CART_ITEM,
    id,
    obj
  }
}

const updateCartQtyAction = obj => {
  return {
    type: UPDATE_CART_ITEM,
    obj
  }
}

export const getAsyncCart = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders/cart')
      dispatch(getCart(data))
    } catch (error) {
      console.error(error)
    }
  }
}
export const updateCartQty = object => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/orders/cart/updateQty', object)
      dispatch(updateCartQtyAction(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const deleteCartItem = object => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/orders', object)
      dispatch(deleteCartSingleItem(object.productTypeId, data))
    } catch (error) {
      console.error(error)
    }
  }
}
export default function(state = userCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case DELETE_CART_ITEM:
      return {
        ...state,
        productTypes: state.productTypes.filter(item => item.id !== action.id),
        total: action.obj.total
      }
    case UPDATE_CART_ITEM:
      return action.obj
    default:
      return state
  }
}
