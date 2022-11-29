const { Patient } = require('../../database/models')

module.exports = async (
  PatientID,
  PatientName,
  StudyInstanceUID,
  StudyDescription
) => {
  const study = await Patient.findOne({ where: StudyInstanceUID })
  if (study) return { error: { code: 409, message: 'Studo já existe.' } }

  const created = await Patient.Create({
    PatientID,
    PatientName,
    StudyInstanceUID,
    StudyDescription
  })

  return created
}
