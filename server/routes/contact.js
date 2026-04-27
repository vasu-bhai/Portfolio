const express = require('express');
const { body, validationResult } = require('express-validator');
const { Resend } = require('resend');
const Contact = require('../models/Contact');

const router = express.Router();

// Helper: send notification email to portfolio owner
async function sendNotificationEmail({ name, email, subject, message }) {
  const resend = new Resend(process.env.RESEND_API_KEY); // lazy init — safe on startup
  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.EMAIL_TO,
    reply_to: email,
    subject: `📬 New Contact: ${subject}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0f172a;color:#e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:24px 32px;">
          <h2 style="margin:0;font-size:22px;color:#fff;">📬 New Portfolio Message</h2>
        </div>
        <div style="padding:32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#94a3b8;width:80px;">Name</td>
                <td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Email</td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#818cf8;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Subject</td>
                <td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #1e293b;margin:20px 0;" />
          <p style="color:#94a3b8;margin:0 0 8px;">Message:</p>
          <div style="background:#1e293b;border-radius:8px;padding:16px;white-space:pre-wrap;line-height:1.6;">${message}</div>
          <p style="margin:24px 0 0;font-size:12px;color:#475569;">Hit reply to respond directly to ${name}.</p>
        </div>
      </div>
    `,
  });
}

// ── Validation middleware ─────────────────────────────────────────────────────
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 200 }),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 5000 }),
];

// POST /api/contact — Save message & send email notification
router.post('/', validateContact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    // 1. Save to MongoDB
    const contact = await Contact.create({ name, email, subject, message });

    // 2. Send email notification (non-blocking)
    sendNotificationEmail({ name, email, subject, message })
      .then(() => console.log(`✅ Email sent to ${process.env.EMAIL_TO} for message from ${email}`))
      .catch((err) => console.error('❌ Email notification error:', err.message));

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: contact,
    });
  } catch (error) {
    console.error('Contact save error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// GET /api/contact — Retrieve all messages (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    console.error('Contact fetch error:', error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
