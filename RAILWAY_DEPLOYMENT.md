# Railway Deployment Guide
# File: /RAILWAY_DEPLOYMENT.md

## Deployed URLs

**Frontend:** https://healthcare-system-epic-fhir-apis.thanhphongle.net
**Backend:** https://backend-production-00e40.up.railway.app

## Deployment Steps
```bash
# 1. Login to Railway
railway login

# 2. Initialize project
railway init

# 3. Create backend service
railway add --service
# Select: Empty Service

# 4. Set backend environment variables
railway variables --set PORT=3000 --set NODE_ENV=production \
  --set FHIR_BASE_URL=http://hapi.fhir.org/baseR4 \
  --set FHIR_CLIENT_ID=test_client_id \
  --set FHIR_CLIENT_SECRET=test_secret_123 \
  --set WEBHOOK_SECRET=test_webhook_secret_minimum_32_characters_required

# 5. Deploy backend
railway up --service backend --detach

# 6. Generate backend domain
railway domain

# 7. Switch to frontend service
railway service
# Select: frontend

# 8. Set frontend environment variable
railway variables --set REACT_APP_API_URL=https://backend-production-00e00.up.railway.app/api

# 9. Deploy frontend
railway up --service frontend --detach
```

## Testing
```bash
# Backend health
curl https://backend-production-00e40.up.railway.app/health

# Frontend
curl -I https://healthcare-system-epic-fhir-apis.thanhphongle.net
```
