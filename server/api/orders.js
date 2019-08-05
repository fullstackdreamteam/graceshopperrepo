const router = require('express').Router()
const {Order, User, ProductType, OrderItem} = require('../db/models')
const routerGateway = require('./utils')

router.get('/', routerGateway, async (req, res, next) => {
  const orders = await Order.findAll({
    include: [{model: User}, {model: ProductType}]
  })
  res.json(orders)
}) //add conditional (when admin is true)

router.post('/', async (req, res, next) => {
  const newItem = await OrderItem.create(req.body)
  res.sendStatus(201)
})

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
  await items.calTotal()

  res.json(items)
})

router.put('/cart/updateQty', async (req, res, next) => {
  const item = await Order.findOne({
    where: {id: req.body.orderId},
    include: [{model: ProductType}]
  })
  const order = await OrderItem.findOne({
    where: {
      orderId: req.body.orderId,
      productTypeId: req.body.productTypeId
    }
  })
  await order.update({
    quantity: req.body.quantity
  })
  await item.calTotal()
  res.send(item)
})

router.put('/', async (req, res, next) => {
  const item = await Order.findOne({
    where: {id: req.body.orderId},
    include: [{model: ProductType}]
  })
  await OrderItem.destroy({
    where: {
      orderId: req.body.orderId,
      productTypeId: req.body.productTypeId
    }
  })
  await item.calTotal()
  // console.log(item)
  res.send(item)
})

router.get('/eager', async (req, res, next) => {
  const order = await OrderItem.findOne({
    where: {
      orderId: 1
    },
    include: [{model: ProductType}]
  })
  res.send(order)
})

// Store guest cart
module.exports = router
