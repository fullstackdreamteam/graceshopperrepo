'use strict'

const db = require('../server/db')
const {User, ProductType, Order, OrderItem} = require('../server/db/models')

// async function seed() {
//   await db.sync({force: true})
//   console.log('db synced!')

//   const users = await Promise.all([
//     User.create({email: 'cody@email.com', password: '123'}),
//     User.create({email: 'murphy@email.com', password: '123'})
//   ])

//   console.log(`seeded ${users.length} users`)
//   console.log(`seeded successfully`)
// }
async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'a@email.com', password: '1'}),
    User.create({email: 'b@email.com', password: '1'}),
    User.create({email: 'c@email.com', password: '1'})
  ])

  const products = await Promise.all([
    ProductType.create({
      brand: 'Toyota',
      modelName: 'Dingy 420',
      length: 18,
      description: 'Descrip For Dingy',
      price: 10000,
      imageUrl:
        'https://cdn11.bigcommerce.com/s-vueqk7orc6/images/stencil/1200x1800/products/1141/3864/C420LP__52486.1555519508.png?c=2',
      stock: 546
    }),
    ProductType.create({
      brand: 'Yamaha',
      modelName: 'Hawk 76',
      length: 21,
      description: 'Descrip For Hawk',
      price: 20000,
      imageUrl:
        'https://images.boats.com/resize/1/52/51/6995251_20190221105139834_1_LARGE.jpg?t=1550746299000',
      stock: 78
    }),
    ProductType.create({
      brand: 'Kawasaki',
      modelName: 'Weiner 6900',
      length: 21,
      description: 'Descrip For Weiner',
      price: 30000,
      imageUrl:
        'https://cdp.azureedge.net/products/USA/KA/2019/PWC/PWCSING/JET_SKI_SX-R/50/EBONY_-_LIME_GREEN/2000000020.jpg',
      stock: 66
    })
  ])

  // const orders = await Promise.all([
  //   Order.create({userId: 1, completed: false}),
  //   Order.create({userId: 2, completed: true}),
  //   Order.create({userId: 2, completed: false})
  // ])

  const orderitems = await Promise.all([
    OrderItem.create({orderId: 1, productTypeId: 1, quantity: 2}),
    OrderItem.create({orderId: 1, productTypeId: 3, quantity: 3}),
    OrderItem.create({orderId: 2, productTypeId: 2, quantity: 1}),
    OrderItem.create({orderId: 3, productTypeId: 1, quantity: 4})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  //console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderitems.length} relationships in order_items`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
