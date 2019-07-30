import React from 'react'

const OrderItem = props => {
  let item = props.item

  return (
    <p>
      {item.brand}, {item.modelName}
    </p>
  )
}

export default OrderItem
