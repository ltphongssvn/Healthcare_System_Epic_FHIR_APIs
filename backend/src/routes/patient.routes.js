// File: /backend/src/routes/patient.routes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

// GET /api/patients/:patientId/summary - Aggregated patient summary
router.get('/:patientId/summary', patientController.getAggregatedSummary);

// PATCH /api/patients/:patientId - Partial update patient field
router.patch('/:patientId', patientController.patchPatientField);

module.exports = router;
