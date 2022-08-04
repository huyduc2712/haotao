// users
const userModel = require('./user_model')
const bcrypt = require('bcryptjs')

exports.login = async (username) => {
  // try {
  //   let user = users.filter((item) => item.username === username)
  //   if (user.length > 0) {
  //     if (user[0].password === password) {
  //       return user[0]
  //     }
  //   }
  //   return null
  // } catch (error) {
  //   throw new Error('Co loi xay ra!')
  // }
  return await userModel.find({ username })
}

exports.signin = async (username) => {
  try {
    let user = await userModel.find({ username })
    if (user.length > 0) {
      return user[0]
    }
    return null
  } catch (error) {
    throw new Error('Co loi xay ra!')
  }
}

exports.signup = async (username, password) => {
  const p = new userModel({ username, password })
  return await p.save()
}

exports.check = async (username) => {
  try {
    let user = await userModel.find({ username })
    if (user.length > 0) {
      return true
    }
    return false
  } catch (error) {
    throw new Error('Co loi xay ra!')
  }
}
var users = [
  { id: 1, username: 'admin', password: 'admin' },
  { id: 2, username: 'user', password: 'user' },
]
