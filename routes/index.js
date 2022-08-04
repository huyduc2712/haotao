var express = require('express')
var router = express.Router()

const userController = require('../components/users/user_controller')

/*
 * 1. đăng nhập
 * http://localhost:3000/dang-nhap
 */
router.get('/dang-nhap', function (req, res, next) {
  if (req.session && req.session.user) {
    res.redirect('/san-pham')
  } else {
    res.render('login')
  }
})

router.post('/dang-nhap', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await userController.login(username, password)
    if (user) {
      req.session.user = user
      res.redirect('/san-pham')
    } else {
      res.redirect('/dang-nhap')
    }
  } catch (error) {
    res.render('error')
  }
})

/* 2. đăng xuất
 * http://localhost:3000/dang-xuat */
router.get('/dang-xuat', function (req, res, next) {
  req.session.destroy(function (err) {
    res.redirect('/dang-nhap')
  })
})

module.exports = router
