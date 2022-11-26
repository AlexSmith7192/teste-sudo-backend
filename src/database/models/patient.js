// src/models/user.model.js

const PatientModel = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    PatientID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    },
    PatientName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    StudyInstanceUID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      }
    },
    StudyDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
  });

  return Patient;
};

module.exports = PatientModel;