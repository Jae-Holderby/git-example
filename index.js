var express = require('express')
var server = express()
var jae = require('./me.json')
var port = process.env.PORT || 8080

server.get('/', function (request, response) {
  response.send("I did it!")
})

server.get('/about', function (request, response) {
  response.send("What is there to talk about? Get a job!")
})

server.get('/jae', function (request, response) {
  response.json(jae)
})

server.get('/contact', function (request, response) {
  response.send("<h1>Please call the cops</h1>")
})

server.get('*', function (request, response) {
  response.status(404)
  response.send("<img src='https://media.giphy.com/media/DGrIBb99B574A/giphy.gif'>")
})

server.listen(port)
