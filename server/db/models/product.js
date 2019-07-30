const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  qty: {
    type: Sequelize.INTEGER,
    defaultValue: 99
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Product
