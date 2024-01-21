const Patient = require('../models/patientModel');

exports.registerPatient = async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);

    res.status(201).json({ message: 'Patient registered successfully', patient: newPatient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
