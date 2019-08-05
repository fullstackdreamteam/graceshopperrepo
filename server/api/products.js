const router = require('express').Router()
const {ProductType} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await ProductType.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await ProductType.findOne({
      where: {id: req.params.id}
    })
    res.json(singleProduct)
  } catch (error) {
    next(error)
  }
})
