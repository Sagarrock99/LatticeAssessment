const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Patient = require('./patientModel');
const Hospital = require('./hospitalModel');

const Psychiatrist = sequelize.define('Psychiatrist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Psychiatrist.belongsTo(Hospital, { foreignKey: 'hospitalId' });

Psychiatrist.hasMany(Patient, { as: 'Patients', foreignKey: 'psychiatristId' });

module.exports = Psychiatrist;
