const express = require('express')
const morgan = require('morgan')

const root = require('../routers/root')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (_req, res) => {
  res.send('No ar!')
})

app.use(root)

module.exports = app
