const serviceUpdate = require('../../services/patient/update')

module.exports = async (req, res, next) => {
  const { patientID, patientName, studyInstanceUID, studyDescription } =
    req.body

  try {
    const studyUpdated = serviceUpdate(
      PatientID,
      PatientName,
      StudyInstanceUID,
      StudyDescription
    )

    if (studyUpdated.error) {
      return res
        .status(reportCreated.error.code)
        .json(reportCreated.error.message)
    }

    return res.status(200).json(studyUpdated)
  } catch (e) {
    return next(e)
  }
}
