import { ErrorResponse } from '../helpers/errorResponse.js';
import { sendEmail } from '../helpers/sendmail.js';

export async function send({ subject, text, email }) {
  const info = await sendEmail({
    subject: subject,
    text: `${text}, you can contact me with this email ${email}`,
  });
  if (info.response.startsWith('250')) return 'Your email has been sent';
  else throw new ErrorResponse('Failed to send email', 400);
}
