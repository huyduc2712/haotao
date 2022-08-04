var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')

const userController = require('../components/users/user_controller')

router.post('/signup', async function (req, res, next) {
  try {
    const { username, password } = req.body
    const user = await userController.signup(username, password)
    console.log(user)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/signin', async function (req, res, next) {
  try {
    const { username, password } = req.body
    const user = await userController.signin(username, password)
    res.status(200).json(user)
  } catch (error) {
    res.status(501).json({ error: error.message })
  }
})

module.exports = router
