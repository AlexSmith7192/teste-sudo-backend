const serviceCreate = require('../../services/patient/create')

module.exports = async (req, res, next) => {
  const { patientID, patientName, studyInstanceUID, studyDescription } =
    req.body

  try {
    // const studyCreated = serviceCreate(PatientID, PatientName, StudyInstanceUID, StudyDescription);

    // if(studyCreated.error){
    //   return res.status(reportCreated.error.code).json(reportCreated.error.message);
    // }
    // console.log(req.file)
    // console.log(studyInstanceUID)
    return res.status(200).json({ patientName })

    // return res.status(201).json(studyCreated);
  } catch (e) {
    return next(e)
  }
}
