# E-Mail-Konfiguration für das Kontaktformular

## Übersicht
Das Kontaktformular ist jetzt vollständig implementiert und bereit, E-Mails zu versenden. Sie müssen nur noch die E-Mail-Konfiguration in der `.env.local` Datei anpassen.

## Konfigurationsschritte

### 1. Öffnen Sie die `.env.local` Datei
Die Datei wurde bereits erstellt und enthält Platzhalter für Ihre E-Mail-Konfiguration.

### 2. Konfigurieren Sie Ihre E-Mail-Einstellungen

#### Für Gmail:
1. Aktivieren Sie die 2-Faktor-Authentifizierung in Ihrem Google-Konto
2. Erstellen Sie ein App-Passwort:
   - Gehen Sie zu: https://myaccount.google.com/apppasswords
   - Wählen Sie "Mail" und "Anderes (benutzerdefinierter Name)"
   - Geben Sie "TheFroggers Contact Form" als Namen ein
   - Kopieren Sie das generierte Passwort

3. Aktualisieren Sie die `.env.local`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=ihre-email@gmail.com
EMAIL_PASS=ihr-app-passwort
EMAIL_TO=info@thefroggers.io
```

#### Für Outlook/Office 365:
```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_USER=ihre-email@outlook.com
EMAIL_PASS=ihr-passwort
EMAIL_TO=info@thefroggers.io
```

#### Für andere E-Mail-Provider:
- **Yahoo**: smtp.mail.yahoo.com (Port 587)
- **GMX**: mail.gmx.net (Port 587)
- **Web.de**: smtp.web.de (Port 587)

### 3. Starten Sie den Server neu
Nach dem Ändern der `.env.local` Datei:
1. Stoppen Sie den Server (Ctrl+C)
2. Starten Sie ihn neu mit: `npm run dev`

## Testen des Kontaktformulars

1. Öffnen Sie http://localhost:3001/contact
2. Füllen Sie das Formular aus
3. Klicken Sie auf "Send Message"
4. Überprüfen Sie:
   - Die Konsole für Erfolgsmeldungen
   - Das E-Mail-Postfach (EMAIL_TO Adresse)

## Fehlerbehebung

### "E-Mail-Authentifizierung fehlgeschlagen"
- Überprüfen Sie EMAIL_USER und EMAIL_PASS
- Für Gmail: Stellen Sie sicher, dass Sie ein App-Passwort verwenden
- Aktivieren Sie "Weniger sichere Apps" (nicht empfohlen für Produktion)

### "Verbindung zum E-Mail-Server fehlgeschlagen"
- Überprüfen Sie EMAIL_HOST und EMAIL_PORT
- Stellen Sie sicher, dass Ihre Firewall SMTP-Verbindungen erlaubt
- Versuchen Sie Port 465 mit `secure: true` in der route.ts

### E-Mails kommen nicht an
- Überprüfen Sie den Spam-Ordner
- Verifizieren Sie die EMAIL_TO Adresse
- Prüfen Sie die Server-Logs für Fehlermeldungen

## Sicherheitshinweise

- **Niemals** die `.env.local` Datei committen
- Verwenden Sie App-Passwörter statt Ihrer echten Passwörter
- Für Produktion: Verwenden Sie einen professionellen E-Mail-Service wie SendGrid, Mailgun oder Amazon SES

## Nächste Schritte

1. Konfigurieren Sie Ihre E-Mail-Einstellungen
2. Testen Sie das Formular
3. Optional: Fügen Sie weitere Funktionen hinzu:
   - Bestätigungs-E-Mail an den Absender
   - Speichern der Nachrichten in einer Datenbank
   - Rate-Limiting zum Schutz vor Spam
