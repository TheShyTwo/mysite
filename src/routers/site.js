const express = require('express')
const SiteControllers = require('../app/controllers/SiteControllers')

const router = express.Router()

router.get('/login', SiteControllers.login)
router.get('/user', SiteControllers.user)
router.get('/logout', SiteControllers.logout)
router.get('/', SiteControllers.index)

router.post('/login', SiteControllers.handleLogin)

module.exports = router