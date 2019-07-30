const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('order_item', {
  orderId: {
    type: Sequelize.INTEGER
  },
  productTypeId: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderItem
