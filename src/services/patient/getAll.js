const { Patient } = require('../../database/models')

module.exports = async () => {
  Patient.findAll();
};