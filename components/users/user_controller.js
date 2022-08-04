const userService = require('./user_service')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = async (username, password) => {
  try {
    return await userService.login(username, password)
  } catch (error) {
    throw new Error('Co loi xay ra!')
  }
}

exports.signup = async (username, password) => {
  try {
    const check = await userService.check(username)
    if (check) {
      throw new Error('Username da ton tai!')
      return
    }
    const hashPassword = await bcryptjs.hashSync(password, 10)
    return await userService.signup(username, hashPassword)
  } catch (error) {
    throw new Error(error.messafe || 'Co loi xay ra!')
  }
}

exports.signin = async (username, password) => {
  try {
    const user = await userService.signin(username, password)
    if (user) {
      const check = await bcryptjs.compareSync(password, user.password)
      if (check) {
        return user
      } else {
        throw new Error('Password khong dung!')
      }
    } else {
      throw new Error('Username khong ton tai!')
    }
  } catch (error) {
    throw new Error(error.message || 'Co loi xay ra!')
  }
}
