const express = require('express')
const SiteControllers = require('../app/controllers/SiteControllers')

const router = express.Router()

router.get('/', SiteControllers.index)

module.exports = router