import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'

const userOrders = []

const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

export const getAsyncOrders = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/orders/pastOrders')
    dispatch(getOrders(data))
  }
}

export const addAsyncCart = obj => {
  return async dispatch => {
    await axios.post('/api/orders', obj)
  }
}
export default function(state = userOrders, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}
