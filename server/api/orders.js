const router = require('express').Router()
const {Order, User, ProductType, OrderItem} = require('../db/models')
const routerGateway = require('./utils')

router.get('/', routerGateway, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [{model: User}, {model: ProductType}]
    })
    res.json(orders)
  } catch (error) {
    next(error)
  }
}) //add conditional (when admin is true)

router.post('/', async (req, res, next) => {
  try {
    await OrderItem.create(req.body)
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

// Thunk THis
router.get('/pastOrders', async (req, res, next) => {
  try {
    const items = await Order.findAll({
      where: {
        userId: req.user.id,
        completed: true
      },
      include: [{model: ProductType}]
    })

    res.json(items)
  } catch (error) {
    next(error)
  }
})

router.get('/cart', async (req, res, next) => {
  try {
    const items = await Order.findOne({
      where: {
        userId: req.user.id,
        completed: false
      },
      include: [{model: ProductType}]
    })
    await items.calTotal()

    res.json(items)
  } catch (error) {
    next(error)
  }
})

router.put('/cart/updateQty', async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error)
  }
})

router.put('/buy', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {id: req.body.orderId} //send prop
    })
    await order.update({
      completed: true
    })
    res.sendStatus(201) // send object?
  } catch (error) {
    next(error)
  }
})

// Store guest cart
module.exports = router
