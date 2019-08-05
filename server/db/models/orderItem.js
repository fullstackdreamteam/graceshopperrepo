const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('order_item', {
  // orderId: {
  //   type: Sequelize.INTEGER
  // },
  // productTypeId: {
  //   type: Sequelize.INTEGER
  // },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 50
    }
  },
  price: {
    type: Sequelize.INTEGER
  }
}) //add price

//PREFORM LOGIC ON THE MODELS: Add instance methods on the model to create fat models and skinny controllers.
// Copying Price, Updating Tabels, Adding Total price of an order,

module.exports = OrderItem
