const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/userController')

router.get('/', applicationController.index)

router.get('/users', userController.index)
router.get('/users/:userId', userController.show)
router.post('/users', userController.create)
router.patch('/users/:userId', userController.update)
router.delete('/users/:userId', userController.delete)

module.exports = router
