// File: /backend/src/routes/webhook.routes.js
const express = require('express');
const router = express.Router();
const labWebhook = require('../webhooks/lab.webhook');

// POST /api/webhooks/lab - Handle critical lab results
router.post('/lab', (req, res) => labWebhook.processWebhook(req, res));

module.exports = router;
