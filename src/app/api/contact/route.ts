import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({
    message: "TheFroggers Contact API endpoint",
    status: "ready"
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Bitte fülle alle Pflichtfelder aus" 
        },
        { status: 400 }
      );
    }

    // E-Mail-Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-Mail-Optionen
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject || 'Neue Nachricht von TheFroggers Kontaktformular',
      text: `
Name: ${name}
E-Mail: ${email}
Betreff: ${subject || 'Kein Betreff'}

Nachricht:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #86B700;">Neue Nachricht von TheFroggers Kontaktformular</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Betreff:</strong> ${subject || 'Kein Betreff'}</p>
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Nachricht:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Diese E-Mail wurde über das Kontaktformular auf thefroggers.io gesendet.
          </p>
        </div>
      `,
    };

    // E-Mail senden
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ E-Mail erfolgreich gesendet:', info.messageId);
    
    return NextResponse.json({
      success: true,
      message: "Nachricht erfolgreich gesendet",
      messageId: info.messageId
    });
    
  } catch (error) {
    console.error('❌ E-Mail-Fehler:', error);
    
    // Detailliertere Fehlermeldungen
    let errorMessage = "Fehler beim Senden der Nachricht";
    if (error instanceof Error) {
      if (error.message.includes('auth')) {
        errorMessage = "E-Mail-Authentifizierung fehlgeschlagen. Bitte Konfiguration prüfen.";
      } else if (error.message.includes('ECONNREFUSED')) {
        errorMessage = "Verbindung zum E-Mail-Server fehlgeschlagen.";
      } else {
        errorMessage = error.message;
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
