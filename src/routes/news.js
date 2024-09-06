const express = require('express')
const router = express.Router()
const newController = require('../app/controllers/NewController')

// :slug là một route parameter động trong URL.
router.use('/:slug', newController.show)
router.use('/', newController.index)


module.exports = router