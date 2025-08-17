'use client';
// Contact Page - Updated mit eigenem Email-System
import { Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import React, { useState } from 'react';
import styles from './page.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Error zurücksetzen wenn User tippt
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // An deine eigene Vercel API Route senden
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log('✅ Email gesendet:', result.messageId);
      } else {
        throw new Error(result.error || 'Unbekannter Fehler');
      }
    } catch (error) {
      console.error('❌ Email-Fehler:', error);
      setError(error instanceof Error ? error.message : 'Fehler beim Senden der Nachricht. Bitte versuche es später noch einmal.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/contact"
        title="Contact Us - theFroggers"
        description="Welcome to theFroggers - Unique NFT Collection. Enter the digital frog universe."
        image={`/api/og/generate?title=${encodeURIComponent("theFroggers NFT")}`}
      />
      {/* Desktop - 1 */}
      <div className={styles.container}>
        <div className={styles.desktop}>
          {/* BG_02 */}
          <div className={styles.bgContainer}></div>
          {/* Frogger_speechBubble_01 */}
          <div className={styles.froggerBubble}></div>
          {/* Ribbit, Ribbit From Pond to Pixel Hey! */}
          <div className={styles.textRibbit}>
            Ribbit, Ribbit From Pond to Pixel Hey!
          </div>
          {/* We are 10,000 Froggers. One Blockchain. Endless Hops */}
          <div className={styles.textFroggers}>
            We are 10,000 Froggers. One Blockchain. Endless Hops
          </div>
          {/* Frogs in the Metaverse — Because Why Not? */}
          <div className={styles.textMetaverse}>
            Frogs in the Metaverse — Because Why Not?
          </div>
          {/* Social Media Icons */}
          <div className={styles.youtube}></div>
          <div className={styles.twitter}></div>
          <div className={styles.instagram}></div>
          {/* Logo_Halo_01 */}
          <div className={styles.logoHalo}>
            <video 
              className={styles.logoVideo}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/Frog_Halo_01.mp4" type="video/mp4" />
            </video>
          </div>

          {/* CONTACT FORM - NOW ON THE LEFT */}
          {/* Contact Heading */}
          <div className={styles.contactHeading}>
            CONTACT US
          </div>

          {/* Contact Subtitle */}
          <div className={styles.contactSubtitle}>
            Got questions about TheFroggers? We&apos;d love to hear from you! 
            Drop us a message and we&apos;ll hop back to you soon.
          </div>

          {/* Contact Form Container */}
          <div className={styles.formContainer}>
            
            {/* Error Message */}
            {error && (
              <div style={{
                marginBottom: '16px',
                padding: '12px',
                background: 'rgba(216, 0, 0, 0.2)',
                border: '2px solid #D80000',
                borderRadius: '6px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: 300,
                fontSize: '14px',
                color: '#D80000'
              }}>
                ❌ {error}
              </div>
            )}
            
            {/* Name Input */}
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.inputField}
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.inputField}
                placeholder="your@email.com"
              />
            </div>

            {/* Subject Input */}
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="What's this about?"
              />
            </div>

            {/* Message Textarea */}
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textareaField}
                placeholder="Tell us what's on your mind..."
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success Message */}
            {isSubmitted && (
              <div className={styles.successMessage}>
                🐸 Thanks for your message! We&apos;ll hop back to you soon.
              </div>
            )}
          </div>

          {/* GOOGLE MAPS - NOW ON THE RIGHT */}
          <div className={styles.mapsLabel}>Find Us</div>
          <div className={styles.googleMaps}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.123456789!2d13.123456!3d52.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA3JzI0LjQiTiAxM8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TheFroggers Location"
            />
          </div>

          {/* GOOGLE MAPS LINKS */}
          <a 
            href="https://maps.google.com/maps?q=DEINE_ADRESSE"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              left: '850px',
              top: '860px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 300,
              fontSize: '14px',
              color: '#86B700',
              textDecoration: 'none',
              zIndex: 10
            }}
          >
            📍 Größere Karte öffnen
          </a>

          <a 
            href="https://www.google.com/maps/dir//DEINE_ADRESSE"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              left: '850px', 
              top: '880px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 300,
              fontSize: '14px',
              color: '#AD9900',
              textDecoration: 'none',
              zIndex: 10
            }}
          >
            🚗 Route planen
          </a>

        </div>
      </div>
    </>
  );

}