import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;
    
    const transporter = nodemailer.createTransporter({
      host: 'plesk2.living-bots.net',
      port: 465,
      secure: true,
      auth: {
        user: 'info@thefroggers.io',
        pass: 'dein_neues_plesk_passwort'
      }
    });

    await transporter.sendMail({
      from: 'info@thefroggers.io',
      to: 'info@thefroggers.io',
      subject: `🐸 TheFroggers Contact: ${subject || 'Neue Nachricht'}`,
      text: `Name: ${name}\nEmail: ${email}\nNachricht: ${message}`
    });
    
    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Email failed' });
  }
}
