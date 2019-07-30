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
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = ProductType
