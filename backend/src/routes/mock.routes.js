// File: /backend/src/routes/mock.routes.js
const express = require('express');
const router = express.Router();

const mockPatients = {
  'patient-001': {
    patient: { id: 'patient-001', name: 'John Smith', gender: 'male', birthDate: '1985-06-15' },
    medications: [
      { id: 'm1', medication: 'Lisinopril 10mg Tablet', status: 'active' },
      { id: 'm2', medication: 'Metformin 500mg Tablet', status: 'active' }
    ],
    allergies: [
      { id: 'a1', substance: 'Penicillin', criticality: 'high', type: 'allergy' },
      { id: 'a2', substance: 'Latex', criticality: 'low', type: 'intolerance' }
    ],
    conditions: [
      { id: 'c1', condition: 'Type 2 Diabetes', clinicalStatus: 'active', onsetDate: '2018-03-10' },
      { id: 'c2', condition: 'Hypertension', clinicalStatus: 'active', onsetDate: '2020-01-15' }
    ],
    lastUpdated: new Date().toISOString()
  }
};

router.get('/:patientId/summary', (req, res) => {
  const data = mockPatients[req.params.patientId];
  if (!data) return res.status(404).json({ error: 'Patient not found' });
  res.json(data);
});

module.exports = router;
