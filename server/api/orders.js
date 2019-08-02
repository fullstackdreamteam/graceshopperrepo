const router = require('express').Router()
const {Order, User, ProductType, OrderItem} = require('../db/models')
const {routerGateway} = require('./utils')

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
// Reduce Price
// Add a prop to a object
// Send that object
router.get('/cart', async (req, res, next) => {
  const items = await Order.findOne({
    where: {
      userId: req.user.id,
      completed: false
    },
    include: [{model: ProductType}]
  })

  let totalVal = items.productTypes.reduce((acc, val) => {
    return acc + val.price * val.order_item.quantity
  }, 0)

  let newCartObj = items
  newCartObj.dataValues.total = totalVal
  res.json(newCartObj)
})

router.put('/cart/updateQty', async (req, res, next) => {
  const order = await OrderItem.findOne({
    where: {
      orderId: req.body.orderId,
      productTypeId: req.body.productTypeId
    }
  })
  await order.update({
    quantity: req.body.quantity
  })
  res.sendStatus(201)
})

router.put('/', async (req, res, next) => {
  await OrderItem.destroy({
    where: {
      orderId: req.body.orderId,
      productTypeId: req.body.productTypeId
    }
  })

  res.sendStatus(201)
})

// Store guest cart
module.exports = router
