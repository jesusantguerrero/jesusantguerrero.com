import { Resend } from 'resend';
export const sendEmail = ({ email, subject, message}: { email: string, message: string, subject: string}, apiKey?: string) => {

const resend = new Resend(apiKey);

(async function () {
  const { error } = await resend.emails.send({
    from: 'My Site <onboarding@resend.dev>',
    to: import.meta.env.MY_EMAIL ?? 'jesusant.guerrero@gmail.com',
    subject: subject ?? 'contact form',
    html: message + ' Email: ' + email,
  });

  if (error) {
    return console.error({ error });
  }
})();
}