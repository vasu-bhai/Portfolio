require('dotenv').config();
const { Resend } = require('resend');

const apiKey = process.env.RESEND_API_KEY;
const emailTo = process.env.EMAIL_TO;

console.log('🔑 API Key set:', apiKey && apiKey !== 'your_resend_api_key_here' ? '✅ Yes' : '❌ No — still placeholder!');
console.log('📬 Sending to:', emailTo);

if (!apiKey || apiKey === 'your_resend_api_key_here') {
  console.log('\n👉 Go to https://resend.com → API Keys → Create → paste in .env as RESEND_API_KEY=re_...');
  process.exit(1);
}

const resend = new Resend(apiKey);

resend.emails.send({
  from: 'Portfolio Contact <onboarding@resend.dev>',
  to: emailTo,
  subject: '✅ Portfolio Email Test',
  html: '<h2>It works! 🎉</h2><p>Your portfolio contact form is sending emails correctly.</p>',
}).then((result) => {
  if (result.error) {
    console.error('\n❌ Send failed:', result.error.message);
  } else {
    console.log('\n✅ Email sent! ID:', result.data.id);
    console.log('📥 Check your inbox at:', emailTo);
  }
}).catch((err) => {
  console.error('\n❌ Error:', err.message);
});
