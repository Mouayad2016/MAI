const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.titan.email',
  port: 465,
  secure: true,
  auth: {
    user: process.env.INFO_EMAIL,
    pass: process.env.INFO_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  timeout: 60000,
});

module.exports = { transporter };
