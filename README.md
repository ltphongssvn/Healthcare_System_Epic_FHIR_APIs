# Healthcare System - Epic FHIR APIs
# File: /README.md

## Overview
Healthcare system integrating Epic FHIR R4 APIs with Node.js backend and React frontend following Agile/Scrum and GitFlow workflows.

## Features

### 1. User-Friendly Operations
Aggregated patient summary endpoint combining:
- Medications (active)
- Allergies 
- Conditions (active)

### 2. Partial Updates
PATCH endpoint for updating specific patient record fields using JSON Patch format.

### 3. Webhooks
Real-time notifications for critical lab results with HMAC signature verification.

### 4. Versioning
FHIR R4 standard with backward compatibility.

## Architecture
```
Healthcare_System_Epic_FHIR_APIs/
├── backend/              # Node.js/Express API
│   ├── src/
│   │   ├── config/       # FHIR configuration
│   │   ├── controllers/  # Request handlers
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   └── webhooks/     # Webhook handlers
│   └── package.json
├── frontend/             # React application
│   ├── src/
│   │   ├── components/   # React components
│   │   └── services/     # API client
│   └── package.json
└── docs/
```

## Tech Stack

**Backend:**
- Node.js + Express
- Axios (FHIR API client)
- Helmet (Security)
- Morgan (Logging)

**Frontend:**
- React 18
- Axios (HTTP client)

**DevOps:**
- Git hooks (pre-commit)
- GitFlow branching
- Squash merges

## Quick Start

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Configure Epic FHIR credentials
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## API Endpoints

See [Backend README](backend/README.md)

## Development Workflow

See [BRANCHING_STRATEGY.md](BRANCHING_STRATEGY.md)

## Git Hooks

See [GIT_HOOKS_SETUP.md](GIT_HOOKS_SETUP.md)
