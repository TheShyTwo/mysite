const SiteController = require('../app/controllers/SiteController')

const router = new require('express').Router()

router.get('/login', SiteController.login)
router.get('/logout', SiteController.logout)
router.get('/user', SiteController.user)
router.get('/', SiteController.index)

router.post('/login', SiteController.handleLogin)

module.exports = router