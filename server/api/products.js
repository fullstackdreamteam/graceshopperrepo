const router = require('express').Router()
const {ProductType} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  const products = await ProductType.findAll()
  res.json(products)
})

router.get('/:id', async (req, res, next) => {
  const singleProduct = await ProductType.findOne({
    where: {id: req.params.id}
  })
  res.json(singleProduct)
})
