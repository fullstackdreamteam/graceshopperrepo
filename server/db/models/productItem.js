const Sequelize = require('sequelize')
const db = require('../db')

const ProductItem = db.define('productItem')

module.exports = ProductItem
