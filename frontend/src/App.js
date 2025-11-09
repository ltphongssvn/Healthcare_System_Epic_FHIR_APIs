// File: /frontend/src/App.js
import React, { useState } from 'react';
import './App.css';
import PatientSummary from './components/PatientSummary';

function App() {
  const [patientId, setPatientId] = useState('');
  const [activePatientId, setActivePatientId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setActivePatientId(patientId);
  };

  return (
    <div className="App">
      <header>
        <h1>Healthcare System - FHIR R4</h1>
      </header>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <button type="submit">Load Patient</button>
      </form>

      {activePatientId && <PatientSummary patientId={activePatientId} />}
    </div>
  );
}

export default App;
