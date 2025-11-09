# Backend - Healthcare System FHIR APIs
# File: /backend/README.md

## Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your Epic FHIR credentials
npm start
```

## API Endpoints

### Patient Summary
```
GET /api/patients/:patientId/summary
```
Returns aggregated patient data (medications, allergies, conditions).

### Update Patient Field
```
PATCH /api/patients/:patientId
Body: { "field": "name", "value": "New Name" }
```

### Lab Webhook
```
POST /api/webhooks/lab
Header: x-webhook-signature
```
Receives critical lab result notifications.

## Environment Variables
See `.env.example`
