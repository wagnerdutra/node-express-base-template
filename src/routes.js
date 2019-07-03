const routes = require('express').Router()
const validator = require('express-validation')

const HelloWorldController = require('./app/controllers/HelloWorldController')

const HelloWorld = require('./app/validators/HelloWorld')

routes.get('/', HelloWorldController.getMessage)
routes.post('/', validator(HelloWorld), HelloWorldController.postMessage)

module.exports = routes
