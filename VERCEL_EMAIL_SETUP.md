# Vercel E-Mail-Konfiguration für TheFroggers

## Übersicht
Die Kontaktformular-API wurde erfolgreich zu GitHub gepusht. Jetzt müssen Sie die Umgebungsvariablen in Vercel konfigurieren, damit das E-Mail-System funktioniert.

## Schritte für Vercel-Konfiguration

### 1. Gehen Sie zu Ihrem Vercel-Dashboard
- Öffnen Sie https://vercel.com/dashboard
- Wählen Sie Ihr `thefroggers-site` Projekt

### 2. Navigieren Sie zu den Einstellungen
- Klicken Sie auf "Settings" im Projekt
- Gehen Sie zu "Environment Variables"

### 3. Fügen Sie die folgenden Umgebungsvariablen hinzu:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=ihre-email@gmail.com
EMAIL_PASS=ihr-app-passwort
EMAIL_TO=info@thefroggers.io
```

### 4. Wichtige Hinweise für verschiedene E-Mail-Provider:

#### Gmail (Empfohlen für Tests):
1. Aktivieren Sie 2-Faktor-Authentifizierung
2. Erstellen Sie ein App-Passwort: https://myaccount.google.com/apppasswords
3. Verwenden Sie das App-Passwort für `EMAIL_PASS`

#### Outlook/Office 365:
```
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
```

#### Andere Provider:
- Yahoo: `smtp.mail.yahoo.com`
- GMX: `mail.gmx.net`
- Web.de: `smtp.web.de`

### 5. Deployment
Nach dem Hinzufügen der Umgebungsvariablen:
1. Klicken Sie auf "Save"
2. Vercel wird automatisch ein neues Deployment starten
3. Warten Sie, bis das Deployment abgeschlossen ist

## Testen in Vercel

1. Öffnen Sie Ihre Vercel-URL: `https://ihr-projekt.vercel.app/contact`
2. Füllen Sie das Formular aus
3. Überprüfen Sie:
   - Die Vercel Function Logs für Fehler
   - Das E-Mail-Postfach (EMAIL_TO Adresse)

## Fehlerbehebung in Vercel

### Logs überprüfen:
1. Gehen Sie zu "Functions" Tab in Vercel
2. Klicken Sie auf `api/contact`
3. Überprüfen Sie die Logs für Fehlermeldungen

### Häufige Probleme:
- **"E-Mail-Authentifizierung fehlgeschlagen"**: Überprüfen Sie EMAIL_USER und EMAIL_PASS
- **"Verbindung fehlgeschlagen"**: Überprüfen Sie EMAIL_HOST und EMAIL_PORT
- **Keine E-Mails kommen an**: Prüfen Sie Spam-Ordner

## Produktions-Empfehlungen

Für die Produktion empfehlen wir professionelle E-Mail-Services:

### 1. SendGrid (Vercel-Partner)
- Bis zu 100 E-Mails/Tag kostenlos
- Einfache Integration
- Bessere Zustellbarkeit

### 2. Resend
- Modern und entwicklerfreundlich
- Gute Dokumentation
- Free Tier verfügbar

### 3. Mailgun
- Zuverlässig
- Gute API
- Pay-as-you-go Preismodell

## Nächste Schritte

1. Konfigurieren Sie die Umgebungsvariablen in Vercel
2. Testen Sie das Kontaktformular
3. Überwachen Sie die Function Logs
4. Optional: Wechseln Sie zu einem professionellen E-Mail-Service für bessere Zuverlässigkeit
