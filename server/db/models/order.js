const Sequelize = require('sequelize')
const OrderItem = require('./orderItem')
const ProductType = require('./productType')
const db = require('../db')

const Order = db.define('order', {
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

// Add Total price to the model?

// Order.prototype.total = async function() {
//   const item = await OrderItem.findAll({
//     where: {
//       orderId: this.id
//     }
//   })

//   return item.reduce((acc, val) => {
//     return acc + val.price
//   }, 0)
// }

Order.prototype.calTotal = async function() {
  try {
    const itemsList = await OrderItem.findAll({
      where: {
        orderId: this.id
      },
      include: [{model: ProductType}]
    })
    //console.log(itemsList[0].productType.price)
    let totalVal = itemsList.reduce((acc, val) => {
      return acc + val.productType.price * val.quantity
    }, 0)
    this.total = totalVal
    await this.save()
  } catch (error) {
    console.error(error)
  }
}

const newCart = async order => {
  try {
    if (order.completed) {
      await Order.create({userId: order.userId})
    }
  } catch (error) {
    console.error(error)
  }
}

Order.afterUpdate(newCart)

module.exports = Order
