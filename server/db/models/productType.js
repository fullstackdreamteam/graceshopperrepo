const Sequelize = require('sequelize')
const db = require('../db')

const ProductType = db.define('productType', {
  brand: {
    type: Sequelize.STRING
  },
  modelName: {
    type: Sequelize.STRING
  },
  length: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  stock: {
    type: Sequelize.INTEGER
  }
})

module.exports = ProductType
