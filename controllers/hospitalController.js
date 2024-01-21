const Hospital = require('../models/hospitalModel');
const Psychiatrist = require('../models/psychiatristModel');
const Patient = require('../models/patientModel');

exports.getPsychiatristsAndPatients = async (req, res) => {
  try {
    const { hospitalId } = req.body;


    const hospital = await Hospital.findByPk(hospitalId);

    const psychiatrists = await Psychiatrist.findAll({
      attributes: ['id', 'name', [sequelize.fn('COUNT', sequelize.col('Patients.id')), 'patientsCount']],
      include: [{
        model: Patient,
        as: 'Patients',
        attributes: [],
      }],
      group: ['Psychiatrist.id'],
    });

    const totalPatientsCount = psychiatrists.reduce((acc, psychiatrist) => acc + psychiatrist.dataValues.patientsCount, 0);

    res.json({
      hospitalName: hospital.name,
      totalPsychiatristCount: psychiatrists.length,
      totalPatientsCount: totalPatientsCount,
      psychiatristDetails: psychiatrists.map(psychiatrist => ({
        id: psychiatrist.id,
        name: psychiatrist.name,
        patientsCount: psychiatrist.dataValues.patientsCount,
      })),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
