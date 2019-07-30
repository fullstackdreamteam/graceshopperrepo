import React from 'react'
import OrderItem from './order-item'

const Order = props => {
  let order = props.order
  console.log(order)
  return (
    <div>
      {order.productItems.map &&
        order.productItems.map(items => {
          return <OrderItem key={items.id} item={items.productType} />
        })}
    </div>
  )
}

export default Order
