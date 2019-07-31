const Sequelize = require('sequelize')
const db = require('../db')

const ProductType = db.define('productType', {
  brand: {
    type: Sequelize.ENUM
  },
  modelName: {
    type: Sequelize.STRING
  },
  length: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  stock: {
    type: Sequelize.INTEGER
  }
})
// Instace methods for price -> convert to dollar
module.exports = ProductType
