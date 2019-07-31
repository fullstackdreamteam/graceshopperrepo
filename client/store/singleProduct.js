import axios from 'axios'

const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'

const singleProduct = []

const getSingleProduct = product => {
  return {
    type: GET_SINGLE_PRODUCT,
    product
  }
}

export const getAsyncSingleProduct = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(getSingleProduct(data))
  }
}
export default function(state = singleProduct, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
