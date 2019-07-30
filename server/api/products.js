const router = require('express').Router()
const {ProductType} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  // const products = await ProductItem.findAll({
  //   include: [{model: ProductType}]
  // })
  // res.json(products)
})
