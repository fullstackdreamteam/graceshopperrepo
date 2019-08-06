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
      brand: 'BassCat',
      modelName: 'Pantera II',
      length: 19,
      description:
        'The Pantera just might be one of the most easily recognized models in bass boats. At 19’1” in length, little has changed in the frame and for good reason. This is one of the most efficient and quickest boats on the market in any classification. Dual rod lockers sit outwards of two storages. A convenient sandwich tray is incorporated inside the fully insulated cooler. With the optional 43 gallons of fuel and a 200 horse engine, the Pantera II sets the pace with other brands running larger engines.',
      price: 30000,
      imageUrl:
        'https://img.nauticexpo.com/images_ne/photo-g/20784-6033423.jpg',
      stock: 91
    }),
    ProductType.create({
      brand: 'Starcraft Marine',
      modelName: 'Pontoon',
      length: 20,
      description:
        'Luxury lives here. Our top-of-the-line flagship pontoon boat series is all about pampering you and your family with plush furniture and carpeting, synthetic teak bow and stern flooring, four different layouts and an extended swim platform.',
      price: 27000,
      imageUrl:
        'https://cdp.azureedge.net/products/USA/SRC/2018/POWERBOATOUT/PONTOON/SX_23_C/50/2000000105.jpg',
      stock: 78
    }),
    ProductType.create({
      brand: 'Loew',
      modelName: 'FM 1800 SC',
      length: 18,
      description:
        'The FM 1800 SC reinvents what amenities, features, deck space and fishability you should expect in your next fishing boat. The FM 1800 SC features a driver’s side console with tournament level performance in a perfect size aluminum boat. At 17’ 10” long with a 95” beam, it is designed to be a tournament-class performer in a medium format design with ample storage and legendary Lowe ride',
      price: 26000,
      imageUrl:
        'https://images.loweboats.com/images/categories/2016-boat-card/large/2016-boat-card_225272.jpg',
      stock: 34
    }),
    ProductType.create({
      brand: 'Steamline',
      modelName: 'The 45',
      length: 45,
      description:
        'This high performance sport fishing center console is the perfect combination of speed and utility. Our double stepped hull was designed to offer higher speed capabilities, while also offering excellent fuel economy.',
      price: 32000,
      imageUrl:
        'https://streamlineboats.com/sites/default/files/glazed-builder/sl_26_tournament.jpg?fid=65',
      stock: 60
    }),
    ProductType.create({
      brand: 'Mako',
      modelName: '334 CC',
      length: 33,
      description:
        'This advanced, spacious offshore craft offers unsurpassed flexibility in the interior plus the overbuilt durability that has made MAKO legendary for half a century. It’s built on a hand-laid, 24°-deadrise Deep V hull with a unique notched transom for top performance and improved efficiency. Powered with up to 1050 horsepower, the 334 slices through the chop, rides dry and smooth, and has the range to handle any offshore quest.',
      price: 28400,
      imageUrl:
        'https://media.tmgcreative.com/2019/MAKO_1912019/Offshore-Boats_1932019/334-CC-Family-Edition_4671/Product-Beauty_1326546/334-CC-Family-Edition_img182565_700.jpg',
      stock: 44
    }),
    ProductType.create({
      brand: 'Pathfinder',
      modelName: '2005 TRS',
      length: 21,
      description:
        'A higher exterior freeboard, a roomy cockpit, and 16 degrees of deadrise make running and fishing in big water safe and comfortable. Add to that raised casting decks and plenty of storage, including undergunwale rod racks and in-deck boxes big enough for 5-gallon buckets, and this boat will out fish its size every trip.',
      price: 47700,
      imageUrl:
        'https://pathfinder.maverickboatgroup.com/wp-content/uploads/sites/8/2018/07/Fishing-2.jpg',
      stock: 77
    }),
    ProductType.create({
      brand: 'Island Hopper',
      modelName: '6man Banana Boat',
      length: 10,
      description:
        'Grab 5 buddies and go on a wild adventure on this cheap, affordable boat!',
      price: 790,
      imageUrl:
        'https://www.overtons.com/dw/image/v2/BCJK_PRD/on/demandware.static/-/Sites-global-master-catalog/default/dwbabe95a2/images/large/314052_1.jpg?sw=1350&sh=1000&sm=fit',
      stock: 250
    }),
    ProductType.create({
      brand: 'Thunder Jet',
      modelName: 'Luxor',
      length: 19,
      description:
        'Packed with standard features the 186 Rush offers the serious sportsman maximum deck space with the forward mounted windshield and intelligent splash well design. Built with our industry exclusive Tri-structure reverse chine and a delta keel bottom, getting you the most out of outboard performance with a safe, dry ride.',
      price: 21000,
      imageUrl:
        'https://www.thunderjet.com/wp-content/uploads/2013/08/Luxor-OB-view3.jpg',
      stock: 29
    }),
    ProductType.create({
      brand: 'EdgeWater',
      modelName: '230 CX',
      length: 23,
      description:
        'The EdgeWater 230CX boasts Single-Piece Infusion, a fully-finished bilge and more standard features than other boats in its class. Packaged with Yamaha Four Stroke power up to 300hp, this boat is sure to impress the family. It’s feature rich and has all of the comfort and performance an EdgeWater Dual Console is known for.',
      price: 24800,
      imageUrl:
        'https://www.ewboats.com/wp-content/uploads/Edgewater-230CX-Gallery-3.jpg',
      stock: 81
    }),
    ProductType.create({
      brand: 'Jeanneau',
      modelName: 'Sun Odyssey',
      length: 39,
      description:
        'Comfortable, spacious and seaworthy are the watchwords for this Sun Odyssey of 12 metres (39’). Incorporating the latest, most innovative technology of the line, the Sun Odyssey 389 offers speed, stability and good seakeeping. A true cruiser designed by Marc Lombard!',
      price: 190000,
      imageUrl:
        'http://features.boats.com/boat-content/files/2016/05/DY_160330_2909.jpg',
      stock: 19
    }),
    ProductType.create({
      brand: 'Larson',
      modelName: 'LXH190 OB',
      length: 14,
      description:
        "Catch some rays or catch up on a good book. The LXH 190 OB's wide beam and deep cockpit open up onboard space, with high-back recliners and bow cushions with armrest providing comfort for all. Edgy styling and responsive handling make this runabout a brilliant performer, too.",
      price: 31000,
      imageUrl:
        'https://larsonboats.blob.core.windows.net/media/1327/2016-larson-190-wb-running-heli-4868.jpg',
      stock: 101
    }),
    ProductType.create({
      brand: 'Campion',
      modelName: 'WS25',
      length: 9,
      description:
        'High-tech, high-performance, luxury, sport utility, express cruisers, runabouts, stern drives, outboards, sport cabin, bow rider, closed deck, wake and surf boats.',
      price: 21000,
      imageUrl:
        'https://campionboats.com/wp-content/uploads/2017/09/CAMPION-WS25-0813.jpg',
      stock: 47
    }),
    ProductType.create({
      brand: 'Bertram',
      modelName: 'The Bertram 61',
      length: 61,
      description:
        'THE BERTRAM 61 is revolutionizing the deep-vee hull in the 21st century, paying homage to the iconic 1980s Bertram 54. Advanced construction and state-of-the-art propulsion and technology provide unmatched performance, allowing this vessel to run smoother, faster and shallower than any other boat of this size. ',
      price: 1000000,
      imageUrl: 'https://www.bertram.com/assets/images/bertram61/thum/32.jpg',
      stock: 5
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
