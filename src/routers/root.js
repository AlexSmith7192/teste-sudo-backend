const express = require('express')

const patientRouter = require('./patient')

const root = express.Router()

root.use('/patient', patientRouter)

module.exports = root
