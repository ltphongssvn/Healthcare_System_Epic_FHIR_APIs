// File: /backend/src/services/patient.service.js
const fhirClient = require('./fhir.client');

class PatientService {
  async getAggregatedSummary(patientId) {
    try {
      const [patient, medications, allergies, conditions] = await Promise.all([
        fhirClient.getResource('Patient', patientId),
        fhirClient.searchResource('MedicationRequest', { patient: patientId, status: 'active' }),
        fhirClient.searchResource('AllergyIntolerance', { patient: patientId }),
        fhirClient.searchResource('Condition', { patient: patientId, clinical-status: 'active' })
      ]);

      return {
        patient: this.formatPatient(patient),
        medications: this.formatMedications(medications),
        allergies: this.formatAllergies(allergies),
        conditions: this.formatConditions(conditions),
        lastUpdated: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to aggregate patient summary: ${error.message}`);
    }
  }

  formatPatient(patient) {
    return {
      id: patient.id,
      name: patient.name?.[0]?.text || 'Unknown',
      gender: patient.gender,
      birthDate: patient.birthDate
    };
  }

  formatMedications(bundle) {
    return bundle.entry?.map(entry => ({
      id: entry.resource.id,
      medication: entry.resource.medicationCodeableConcept?.text || 'Unknown',
      status: entry.resource.status
    })) || [];
  }

  formatAllergies(bundle) {
    return bundle.entry?.map(entry => ({
      id: entry.resource.id,
      substance: entry.resource.code?.text || 'Unknown',
      criticality: entry.resource.criticality,
      type: entry.resource.type
    })) || [];
  }

  formatConditions(bundle) {
    return bundle.entry?.map(entry => ({
      id: entry.resource.id,
      condition: entry.resource.code?.text || 'Unknown',
      clinicalStatus: entry.resource.clinicalStatus?.coding?.[0]?.code,
      onsetDate: entry.resource.onsetDateTime
    })) || [];
  }

  async updatePatientField(patientId, field, value) {
    const patchData = [
      { op: 'replace', path: `/${field}`, value }
    ];
    return await fhirClient.patchResource('Patient', patientId, patchData);
  }
}

module.exports = new PatientService();
