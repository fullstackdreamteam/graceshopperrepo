const router = require('express').Router()
const {Order, User, ProductType, ProductItem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  const orders = await Order.findAll({
    include: [
      {model: User},
      {model: ProductItem, include: {model: ProductType}}
    ]
  })
  res.json(orders)
})
