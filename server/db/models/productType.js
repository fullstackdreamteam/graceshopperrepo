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
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  stock: {
    type: Sequelize.INTEGER
  }
})
// Instace methods for price -> convert to dollar

module.exports = ProductType
