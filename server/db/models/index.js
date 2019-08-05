const User = require('./user')
const Order = require('./order')
const ProductType = require('./productType')
const OrderItem = require('./orderItem')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 *
 *
 */

Order.belongsTo(User)
User.hasMany(Order)

Order.belongsToMany(ProductType, {through: OrderItem})
ProductType.belongsToMany(Order, {through: OrderItem})

OrderItem.belongsTo(ProductType)
ProductType.hasMany(OrderItem)

module.exports = {
  User,
  Order,
  ProductType,
  OrderItem
}
