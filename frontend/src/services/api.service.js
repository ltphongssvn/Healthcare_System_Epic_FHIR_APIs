// File: /frontend/src/services/api.service.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const patientAPI = {
  getPatientSummary: (patientId) => {
    const endpoint = patientId.startsWith('patient-') 
      ? `/mock/patients/${patientId}/summary`
      : `/patients/${patientId}/summary`;
    return apiClient.get(endpoint);
  },
  
  updatePatientField: (patientId, field, value) =>
    apiClient.patch(`/patients/${patientId}`, { field, value })
};

export default apiClient;
