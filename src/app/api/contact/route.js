// src/app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Form-Daten aus dem Request holen
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, Email und Message sind erforderlich' }, 
        { status: 400 }
      );
    }

    // SMTP Transporter mit deinen Environment Variables
    const transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST,        // mail.dnslinq.de
      port: parseInt(process.env.EMAIL_PORT), // 587
      secure: false,                       // false für Port 587 (STARTTLS)
      auth: {
        user: process.env.EMAIL_USER,      // info@thefroggers.io
        pass: process.env.EMAIL_PASSWORD   // dein Passwort
      },
      tls: {
        rejectUnauthorized: false          // Für manche Server nötig
      }
    });

    // Email-Inhalt zusammenstellen
    const emailContent = {
      from: process.env.EMAIL_USER,        // info@thefroggers.io
      to: process.env.EMAIL_TO,            // info@thefroggers.io
      subject: `🐸 TheFroggers Contact: ${subject || 'Neue Nachricht'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #070F12; padding: 30px; border-radius: 10px; color: white;">
            <h2 style="color: #86B700; margin-bottom: 20px;">🐸 Neue TheFroggers Nachricht</h2>
            
            <div style="background-color: rgba(54, 54, 54, 0.8); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #AD9900; margin-top: 0;">Kontakt-Informationen:</h3>
              <p><strong style="color: #86B700;">Name:</strong> ${name}</p>
              <p><strong style="color: #86B700;">Email:</strong> ${email}</p>
              <p><strong style="color: #86B700;">Betreff:</strong> ${subject || 'Kein Betreff'}</p>
            </div>
            
            <div style="background-color: rgba(54, 54, 54, 0.8); padding: 20px; border-radius: 8px;">
              <h3 style="color: #AD9900; margin-top: 0;">Nachricht:</h3>
              <p style="line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #606060; text-align: center;">
              <p style="color: #BFBFBF; font-size: 12px; margin: 0;">
                Diese Nachricht wurde über das TheFroggers Contact Form gesendet
              </p>
            </div>
          </div>
        </div>
      `,
      // Plain text Alternative
      text: `
        Neue TheFroggers Nachricht
        
        Name: ${name}
        Email: ${email}
        Betreff: ${subject || 'Kein Betreff'}
        
        Nachricht:
        ${message}
        
        ---
        Gesendet über TheFroggers Contact Form
      `
    };

    // Email senden
    const info = await transporter.sendMail(emailContent);
    
    console.log('Email gesendet:', info.messageId);

    // Erfolgreiche Antwort
    return Response.json({ 
      success: true, 
      message: 'Email erfolgreich gesendet!',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Email-Fehler:', error);
    
    return Response.json(
      { 
        error: 'Fehler beim Senden der Email', 
        details: error.message 
      }, 
      { status: 500 }
    );
  }
}