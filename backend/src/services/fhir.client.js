// File: /backend/src/services/fhir.client.js
const axios = require('axios');
const fhirConfig = require('../config/fhir.config');

class FHIRClient {
  constructor() {
    this.client = axios.create({
      baseURL: fhirConfig.baseUrl,
      timeout: fhirConfig.timeout,
      headers: fhirConfig.headers
    });
  }

  async getResource(resourceType, id) {
    try {
      const response = await this.client.get(`/${resourceType}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`FHIR GET failed: ${error.message}`);
    }
  }

  async searchResource(resourceType, params) {
    try {
      const response = await this.client.get(`/${resourceType}`, { params });
      return response.data;
    } catch (error) {
      throw new Error(`FHIR search failed: ${error.message}`);
    }
  }

  async patchResource(resourceType, id, patchData) {
    try {
      const response = await this.client.patch(
        `/${resourceType}/${id}`,
        patchData,
        { headers: { 'Content-Type': 'application/json-patch+json' } }
      );
      return response.data;
    } catch (error) {
      throw new Error(`FHIR PATCH failed: ${error.message}`);
    }
  }
}

module.exports = new FHIRClient();
