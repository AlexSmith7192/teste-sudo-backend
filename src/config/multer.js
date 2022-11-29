const multer = require('multer')
const path = require('path')

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (_req, file, cb) => {
      file.key = 'fileDicom.dcm'

      cb(null, file.key)
    }
  })
}
