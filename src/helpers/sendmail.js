import nodemailer from 'nodemailer';
import { ErrorResponse } from './errorResponse.js';

export const sendEmail = async ({ subject, text }) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Personal Portfolio" ${process.env.EMAIL_SENDER}`,
    to: process.env.EMAIL_TO,
    subject: subject,
    html: text,
  };

  try {
    const mailInfo = await transporter.sendMail(mailOptions);
    return mailInfo;
  } catch (error) {
    throw new ErrorResponse(error, 400);
  }
};
