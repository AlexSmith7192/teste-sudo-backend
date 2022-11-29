const dicomParser = require('dicom-parser')
const fs = require('fs')

module.exports = (req, _res, next) => {
  try {
    const dicomFileAsBuffer = fs.readFileSync('tmp/uploads/fileDicom.dcm')
    const dataSet = dicomParser.parseDicom(dicomFileAsBuffer)

    const patientName = dataSet.string('x00100010')
    console.log('Patient Name = ' + patientName)

    const pixelData = dataSet.elements.x7fe00010

    // req.body.PatientID = patientID
    // req.body.PatientName = patientName
    // req.body.StudyInstanceUID = studyInstanceUID
    // req.body.StudyDescription = studyDescription

    // const pixelDataBuffer = dicomParser.sharedCopy(
    //   dicomFileAsBuffer,
    //   pixelData.dataOffset,
    //   pixelData.length
    // )
  } catch (e) {
    return next(e)
  }
}
