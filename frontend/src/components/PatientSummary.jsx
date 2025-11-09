// File: /frontend/src/components/PatientSummary.jsx
import React, { useState, useEffect } from 'react';
import { patientAPI } from '../services/api.service';

const PatientSummary = ({ patientId }) => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const response = await patientAPI.getPatientSummary(patientId);
        setSummary(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (patientId) fetchSummary();
  }, [patientId]);

  if (loading) return <div>Loading patient summary...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!summary) return <div>No patient data</div>;

  return (
    <div className="patient-summary">
      <h2>Patient Summary</h2>
      
      <section>
        <h3>Patient Info</h3>
        <p>ID: {summary.patient.id}</p>
        <p>Name: {summary.patient.name}</p>
        <p>Gender: {summary.patient.gender}</p>
        <p>Birth Date: {summary.patient.birthDate}</p>
      </section>

      <section>
        <h3>Medications ({summary.medications.length})</h3>
        {summary.medications.map(med => (
          <div key={med.id}>
            {med.medication} - {med.status}
          </div>
        ))}
      </section>

      <section>
        <h3>Allergies ({summary.allergies.length})</h3>
        {summary.allergies.map(allergy => (
          <div key={allergy.id}>
            {allergy.substance} - {allergy.criticality}
          </div>
        ))}
      </section>

      <section>
        <h3>Conditions ({summary.conditions.length})</h3>
        {summary.conditions.map(condition => (
          <div key={condition.id}>
            {condition.condition} - {condition.clinicalStatus}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PatientSummary;
