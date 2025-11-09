// File: /backend/src/webhooks/lab.webhook.js
const crypto = require('crypto');

class LabWebhookHandler {
  verifySignature(payload, signature, secret) {
    const hmac = crypto.createHmac('sha256', secret);
    const digest = hmac.update(JSON.stringify(payload)).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
  }

  async handleLabResult(payload) {
    const { patient, observation, status, criticalFlag } = payload;
    
    if (criticalFlag === 'critical') {
      console.log(`CRITICAL LAB RESULT for patient ${patient.id}`);
      // Trigger notification logic here
      return {
        notified: true,
        patient: patient.id,
        observation: observation.code,
        timestamp: new Date().toISOString()
      };
    }
    
    return { notified: false, reason: 'Not critical' };
  }

  async processWebhook(req, res) {
    try {
      const signature = req.headers['x-webhook-signature'];
      const secret = process.env.WEBHOOK_SECRET;
      
      if (!this.verifySignature(req.body, signature, secret)) {
        return res.status(401).json({ error: 'Invalid signature' });
      }

      const result = await this.handleLabResult(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new LabWebhookHandler();
