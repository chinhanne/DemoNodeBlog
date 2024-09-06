const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')

// :slug là một route parameter động trong URL.
router.use('/search', siteController.search)
router.use('/', siteController.index)


module.exports = router