// File: /backend/src/routes/mock.routes.js
const express = require('express');
const router = express.Router();

const mockPatients = {
  'patient-001': {
    patient: { id: 'patient-001', name: 'John Smith', gender: 'male', birthDate: '1985-06-15' },
    medications: [
      { id: 'm1', medication: 'Lisinopril 10mg Tablet', status: 'active' },
      { id: 'm2', medication: 'Metformin 500mg Tablet', status: 'active' },
      { id: 'm3', medication: 'Atorvastatin 20mg Tablet', status: 'active' }
    ],
    allergies: [
      { id: 'a1', substance: 'Penicillin', criticality: 'high', type: 'allergy' },
      { id: 'a2', substance: 'Latex', criticality: 'low', type: 'intolerance' }
    ],
    conditions: [
      { id: 'c1', condition: 'Type 2 Diabetes Mellitus', clinicalStatus: 'active', onsetDate: '2018-03-10' },
      { id: 'c2', condition: 'Essential Hypertension', clinicalStatus: 'active', onsetDate: '2020-01-15' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-002': {
    patient: { id: 'patient-002', name: 'Sarah Johnson', gender: 'female', birthDate: '1992-03-22' },
    medications: [
      { id: 'm4', medication: 'Levothyroxine 75mcg Tablet', status: 'active' },
      { id: 'm5', medication: 'Omeprazole 20mg Capsule', status: 'active' }
    ],
    allergies: [
      { id: 'a3', substance: 'Sulfa drugs', criticality: 'high', type: 'allergy' },
      { id: 'a4', substance: 'Shellfish', criticality: 'high', type: 'allergy' }
    ],
    conditions: [
      { id: 'c3', condition: 'Hypothyroidism', clinicalStatus: 'active', onsetDate: '2019-05-12' },
      { id: 'c4', condition: 'Gastroesophageal Reflux Disease', clinicalStatus: 'active', onsetDate: '2021-08-20' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-003': {
    patient: { id: 'patient-003', name: 'Michael Chen', gender: 'male', birthDate: '1978-11-08' },
    medications: [
      { id: 'm6', medication: 'Albuterol Inhaler 90mcg', status: 'active' },
      { id: 'm7', medication: 'Fluticasone Nasal Spray', status: 'active' },
      { id: 'm8', medication: 'Montelukast 10mg Tablet', status: 'active' }
    ],
    allergies: [
      { id: 'a5', substance: 'Aspirin', criticality: 'high', type: 'allergy' },
      { id: 'a6', substance: 'Pollen', criticality: 'low', type: 'intolerance' }
    ],
    conditions: [
      { id: 'c5', condition: 'Asthma', clinicalStatus: 'active', onsetDate: '2010-02-15' },
      { id: 'c6', condition: 'Allergic Rhinitis', clinicalStatus: 'active', onsetDate: '2015-04-01' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-004': {
    patient: { id: 'patient-004', name: 'Emily Rodriguez', gender: 'female', birthDate: '1988-07-19' },
    medications: [
      { id: 'm9', medication: 'Sertraline 50mg Tablet', status: 'active' },
      { id: 'm10', medication: 'Vitamin D3 2000 IU Capsule', status: 'active' }
    ],
    allergies: [
      { id: 'a7', substance: 'Codeine', criticality: 'high', type: 'allergy' }
    ],
    conditions: [
      { id: 'c7', condition: 'Major Depressive Disorder', clinicalStatus: 'active', onsetDate: '2020-06-10' },
      { id: 'c8', condition: 'Vitamin D Deficiency', clinicalStatus: 'active', onsetDate: '2022-01-05' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-005': {
    patient: { id: 'patient-005', name: 'David Wilson', gender: 'male', birthDate: '1965-02-28' },
    medications: [
      { id: 'm11', medication: 'Warfarin 5mg Tablet', status: 'active' },
      { id: 'm12', medication: 'Metoprolol 50mg Tablet', status: 'active' },
      { id: 'm13', medication: 'Rosuvastatin 10mg Tablet', status: 'active' }
    ],
    allergies: [
      { id: 'a8', substance: 'Iodine contrast', criticality: 'high', type: 'allergy' }
    ],
    conditions: [
      { id: 'c9', condition: 'Atrial Fibrillation', clinicalStatus: 'active', onsetDate: '2019-09-12' },
      { id: 'c10', condition: 'Coronary Artery Disease', clinicalStatus: 'active', onsetDate: '2017-03-20' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-006': {
    patient: { id: 'patient-006', name: 'Lisa Martinez', gender: 'female', birthDate: '1995-09-14' },
    medications: [
      { id: 'm14', medication: 'Ethinyl Estradiol/Norgestimate Tablet', status: 'active' },
      { id: 'm15', medication: 'Iron Supplement 325mg', status: 'active' }
    ],
    allergies: [
      { id: 'a9', substance: 'Erythromycin', criticality: 'high', type: 'allergy' }
    ],
    conditions: [
      { id: 'c11', condition: 'Iron Deficiency Anemia', clinicalStatus: 'active', onsetDate: '2023-02-18' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-007': {
    patient: { id: 'patient-007', name: 'Robert Taylor', gender: 'male', birthDate: '1970-12-05' },
    medications: [
      { id: 'm16', medication: 'Insulin Glargine 100 units/mL', status: 'active' },
      { id: 'm17', medication: 'Metformin 1000mg Tablet', status: 'active' },
      { id: 'm18', medication: 'Lisinopril 20mg Tablet', status: 'active' }
    ],
    allergies: [
      { id: 'a10', substance: 'Sulfonamides', criticality: 'high', type: 'allergy' },
      { id: 'a11', substance: 'Eggs', criticality: 'high', type: 'allergy' }
    ],
    conditions: [
      { id: 'c12', condition: 'Type 1 Diabetes Mellitus', clinicalStatus: 'active', onsetDate: '1985-06-10' },
      { id: 'c13', condition: 'Diabetic Nephropathy', clinicalStatus: 'active', onsetDate: '2018-11-22' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-008': {
    patient: { id: 'patient-008', name: 'Jennifer Brown', gender: 'female', birthDate: '1982-04-30' },
    medications: [
      { id: 'm19', medication: 'Gabapentin 300mg Capsule', status: 'active' },
      { id: 'm20', medication: 'Duloxetine 60mg Capsule', status: 'active' }
    ],
    allergies: [
      { id: 'a12', substance: 'Morphine', criticality: 'high', type: 'allergy' }
    ],
    conditions: [
      { id: 'c14', condition: 'Fibromyalgia', clinicalStatus: 'active', onsetDate: '2019-07-15' },
      { id: 'c15', condition: 'Chronic Pain Syndrome', clinicalStatus: 'active', onsetDate: '2020-03-08' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-009': {
    patient: { id: 'patient-009', name: 'James Anderson', gender: 'male', birthDate: '1958-08-17' },
    medications: [
      { id: 'm21', medication: 'Tamsulosin 0.4mg Capsule', status: 'active' },
      { id: 'm22', medication: 'Finasteride 5mg Tablet', status: 'active' },
      { id: 'm23', medication: 'Amlodipine 10mg Tablet', status: 'active' }
    ],
    allergies: [
      { id: 'a13', substance: 'Penicillin', criticality: 'high', type: 'allergy' },
      { id: 'a14', substance: 'NSAIDs', criticality: 'high', type: 'allergy' }
    ],
    conditions: [
      { id: 'c16', condition: 'Benign Prostatic Hyperplasia', clinicalStatus: 'active', onsetDate: '2020-05-12' },
      { id: 'c17', condition: 'Hypertension', clinicalStatus: 'active', onsetDate: '2015-09-20' }
    ],
    lastUpdated: new Date().toISOString()
  },
  'patient-010': {
    patient: { id: 'patient-010', name: 'Maria Garcia', gender: 'female', birthDate: '1990-01-25' },
    medications: [
      { id: 'm24', medication: 'Hydroxychloroquine 200mg Tablet', status: 'active' },
      { id: 'm25', medication: 'Prednisone 10mg Tablet', status: 'active' },
      { id: 'm26', medication: 'Calcium Carbonate 500mg', status: 'active' }
    ],
    allergies: [
      { id: 'a15', substance: 'Tetracycline', criticality: 'high', type: 'allergy' }
    ],
    conditions: [
      { id: 'c18', condition: 'Systemic Lupus Erythematosus', clinicalStatus: 'active', onsetDate: '2018-04-15' },
      { id: 'c19', condition: 'Osteopenia', clinicalStatus: 'active', onsetDate: '2022-06-10' }
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
