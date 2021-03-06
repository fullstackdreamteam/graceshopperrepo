import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

const allProducts = []

const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

export const getAsyncProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products/')
      dispatch(getProducts(data))
    } catch (error) {
      console.error(error)
    }
  }
}
export default function(state = allProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
