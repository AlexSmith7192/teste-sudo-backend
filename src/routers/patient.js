const express = require('express')

const { create, getAll, update } = require('../controllers/patient')
const multer = require('multer')
const multerConfig = require('../config/multer')
const dicomParser = require('../middlewares/dicomParser')

const router = express.Router()

router.post('/', multer(multerConfig).single('file'), dicomParser, create)
router.put('/', multer(multerConfig).single('file'), dicomParser, update)
router.get('/', getAll)

module.exports = router
