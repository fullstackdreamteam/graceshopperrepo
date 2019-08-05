import axios from 'axios'
import {createBrowserHistory} from 'history'
export const history = createBrowserHistory()

const GET_ORDERS = 'GET_ORDERS'
const BUY = 'BUY'

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

export const asyncBuy = id => {
  return async dispatch => {
    await axios.put('/api/orders/buy', id)
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
