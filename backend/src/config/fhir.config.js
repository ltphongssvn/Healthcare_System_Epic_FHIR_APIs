// File: /backend/src/config/fhir.config.js
module.exports = {
  baseUrl: process.env.FHIR_BASE_URL,
  clientId: process.env.FHIR_CLIENT_ID,
  clientSecret: process.env.FHIR_CLIENT_SECRET,
  version: 'R4',
  timeout: 10000,
  headers: {
    'Accept': 'application/fhir+json',
    'Content-Type': 'application/fhir+json'
  }
};
