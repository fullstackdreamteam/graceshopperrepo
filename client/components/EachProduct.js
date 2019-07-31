import React from 'react'

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
      <button type="button" id={product.id} onClick={props.clickHandler}>
        More Details
      </button>
    </div>
  )
}

export default EachProduct
