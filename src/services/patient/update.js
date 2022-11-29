const { Patient } = require('../../database/models')

module.exports = async (
  PatientID,
  PatientName,
  StudyInstanceUID,
  StudyDescription
) => {
  const study = await Patient.findByPk(StudyInstanceUID)
  if (!study) return { error: { code: 404, message: 'Studo não existe.' } }

  const updated = await Patient.update(
    {
      PatientID,
      PatientName,
      StudyDescription
    },
    { where: { StudyInstanceUID } }
  )

  return updated
}
