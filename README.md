# Healthcare System - Epic FHIR APIs
# File: /README.md

## Overview
Healthcare system integrating Epic FHIR R4 APIs with Node.js backend and React frontend.

## Applied Concepts

### 1. User-Friendly Operations
- Aggregated patient summary endpoint combining medications, allergies, conditions

### 2. Partial Updates  
- PATCH endpoints for updating specific patient record fields

### 3. Webhooks
- Real-time notifications for critical lab results

### 4. Versioning Strategy
- FHIR R4 versioning with backward compatibility

## Architecture
```
Healthcare_System_Epic_FHIR_APIs/
├── backend/          # Node.js/Express API server
│   ├── src/
│   │   ├── routes/   # API routes
│   │   ├── controllers/
│   │   ├── services/ # FHIR integration
│   │   └── webhooks/
│   └── package.json
├── frontend/         # React application
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## Tech Stack

**Backend:**
- Node.js + Express
- FHIR Client libraries
- Webhook handlers

**Frontend:**
- React
- Axios for API calls
- FHIR resource rendering

## Development Setup

See `/backend/README.md` and `/frontend/README.md` for specific setup instructions.
