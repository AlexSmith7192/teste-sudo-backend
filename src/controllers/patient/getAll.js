const patientService = require('../../services/patient')

module.exports = async (_req, res, next) => {
  try {
    const patients = await patientService.getAll()
    return res.status(200).json(patients)
  } catch (e) {
    return next(e)
  }
}
