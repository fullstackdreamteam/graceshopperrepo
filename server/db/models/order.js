const Sequelize = require('sequelize')
const OrderItem = require('./orderItem')
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

module.exports = Order
