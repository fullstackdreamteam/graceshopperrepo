const router = require('express').Router()
const {Order, User, ProductType} = require('../db/models')
const routerGateway = require('./utils')

router.get('/', routerGateway, async (req, res, next) => {
  const orders = await Order.findAll({
    include: [{model: User}, {model: ProductType}]
  })
  res.json(orders)
}) //add conditional (when admin is true)

// Thunk THis
router.get('/pastOrders', async (req, res, next) => {
  const items = await Order.findAll({
    where: {
      userId: req.user.id,
      completed: true
    },
    include: [{model: ProductType}]
  })

  res.json(items)
})

router.get('/cart', async (req, res, next) => {
  const items = await Order.findOne({
    where: {
      userId: req.user.id,
      completed: false
    },
    include: [{model: ProductType}]
  })
  res.json(items)
})

// Store guest cart
module.exports = router
