// File: /backend/src/controllers/patient.controller.js
const patientService = require('../services/patient.service');

class PatientController {
  async getAggregatedSummary(req, res) {
    try {
      const { patientId } = req.params;
      const summary = await patientService.getAggregatedSummary(patientId);
      res.json(summary);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async patchPatientField(req, res) {
    try {
      const { patientId } = req.params;
      const { field, value } = req.body;
      
      if (!field || value === undefined) {
        return res.status(400).json({ error: 'Field and value required' });
      }

      const result = await patientService.updatePatientField(patientId, field, value);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PatientController();
