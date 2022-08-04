const productModel = require('./product_model')

const get = async (page, size) => {
  //const items = products.slice((page - 1) * size, page * size)
  const items = await productModel
    .find({})
    .skip((page - 1) * size)
    .limit(size)
  return items
}

const getById = async (id) => {
  // const product = products.find(
  //   (product) => product._id.toString() == id.toString(),
  // )
  // return product
  return await productModel.findById(id).populate('category')
}

const insert = async (product) => {
  // insert into products (name, price, quantity, iamge, category)
  //values (product.name, product.price, product.quantity, product.image, product.category)
  // const p = {
  //   _id: products.length + 1,
  //   name: product.name,
  //   price: product.price,
  //   quantity: product.quantity,
  //   image: product.image,
  //   category: product.category,
  // }
  //products.push(p)
  const p = new productModel(product)
  await p.save()
}

const update = async (id, product) => {
  // update product in products
  // const p = products.find((product) => product._id.toString() == id.toString())
  // p.name = product.name
  // p.price = product.price
  // p.quantity = product.quantity
  // p.image = product.image ? product.image : p.image
  // p.category = product.category

  if (!product.image) {
    delete product.image
  }
  await productModel.findByIdAndUpdate(id, product)
}

const remove = async (id) => {
  // delete product in products where id = id
  // products = products.filter((p) => p._id.toString() != id.toString())
  await productModel.findByIdAndDelete(id)
}

module.exports = { get, getById, insert, update, remove }

var products = [
  {
    _id: 1,
    name: 'Iphone X',
    price: 28,
    quantity: 30,
    category: 2,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 2,
    name: 'Iphone XS',
    price: 64,
    quantity: 83,
    category: 17,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 3,
    name: 'Iphone XS Max',
    price: 56,
    quantity: 53,
    category: 14,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 4,
    name: 'Iphone XR',
    price: 16,
    quantity: 52,
    category: 10,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 5,
    name: 'Iphone 11',
    price: 45,
    quantity: 29,
    category: 2,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 6,
    name: 'Iphone 11 Pro',
    price: 75,
    quantity: 46,
    category: 19,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 7,
    name: 'Iphone 11 Pro Max',
    price: 3,
    quantity: 6,
    category: 1,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 8,
    name: 'Iphone 11 Pro Max',
    price: 72,
    quantity: 27,
    category: 1,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 9,
    name: 'Iphone 11 Pro Max',
    price: 46,
    quantity: 47,
    category: 1,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 10,
    name: 'Oyonder',
    price: 18,
    quantity: 54,
    category: 7,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 11,
    name: 'Meemm',
    price: 13,
    quantity: 23,
    category: 1,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 12,
    name: 'Skalith',
    price: 44,
    quantity: 5,
    category: 10,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 13,
    name: 'Rooxo',
    price: 63,
    quantity: 4,
    category: 13,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 14,
    name: 'Katz',
    price: 27,
    quantity: 40,
    category: 11,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 15,
    name: 'Aibox',
    price: 2,
    quantity: 99,
    category: 1,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 16,
    name: 'Yambee',
    price: 51,
    quantity: 28,
    category: 2,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 17,
    name: 'Zooxo',
    price: 12,
    quantity: 15,
    category: 7,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 18,
    name: 'Yamia',
    price: 23,
    quantity: 35,
    category: 2,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 19,
    name: 'Divape',
    price: 76,
    quantity: 79,
    category: 5,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
  {
    _id: 20,
    name: 'Flashdog',
    price: 13,
    quantity: 2,
    category: 7,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/250260/iphone-13-pro-512gb-5-1.jpg',
  },
]
