'use client';
// Imprint Page
import { Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import React from 'react';
import styles from './page.module.scss';

export default function Imprint() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/imprint"
        title="Imprint - theFroggers"
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

          {/* IMPRINT TEXT - 100px tiefer, mittig */}
          <div className={styles.imprintSimple}>
            <h1>Imprint</h1>
            <p>Information obligation according to § 5 TMG.</p>
            <h2>ZAK</h2>
            <p>Großbeerenstr. 15, HH,</p>
            <p>10963 Berlin,</p>
            <p>Germany</p>
            <p>VAT ID: DE243487042</p>
            <p>Business ID: 14/603/00081</p>
            <p>Phone: +49 30 27998922</p>
            <p>Fax: +49 30 27998923</p>
            <p>Email: manfredzak@gmail.com</p>
            
            {/* Supervisory Authority */}
            <h2>Supervisory Authority</h2>
            <p>Tax Office Berlin Kreuzberg Friedrichshain</p>
            
            <h3>Address of the Supervisory Authority</h3>
            <p><strong>Professional Title:</strong> 3D Artist</p>
            
            {/* Privacy Policy Section */}
            <h2>Privacy Policy</h2>
            
            <h3>Introduction</h3>
            <p>This Privacy Policy aims to inform you about the types of personal data (hereinafter referred to as "data") we process, the purposes for which we process it, and the extent of the processing. This Privacy Policy applies to all data processing we carry out, both as part of our services and specifically on our websites, in mobile applications, and within external online presences, such as our social media profiles (collectively referred to as the "Online Offering"). The terms used are not gender-specific.</p>
            
            <p><strong>Last Updated:</strong> March 31, 2022</p>
            
            <h3>Contents</h3>
            <ul>
              <li>Introduction</li>
              <li>Responsible Party</li>
              <li>Overview of Data Processing</li>
              <li>Legal Basis</li>
              <li>Security Measures</li>
              <li>Data Transfer</li>
              <li>Data Processing in Third Countries</li>
              <li>Data Deletion</li>
              <li>Use of Cookies</li>
              <li>Provision of the Online Offering and Web Hosting</li>
              <li>Contact and Request Management</li>
              <li>Amendments to the Privacy Policy</li>
              <li>Data Subject Rights</li>
              <li>Definitions</li>
            </ul>
            
            <h3>Responsible Party</h3>
            <p><strong>ZAK</strong></p>
            <p>Großbeerenstr. 15, HH, 10963 Berlin, Germany</p>
            <p>Authorized Representative: Manfred Zak</p>
            <p>Email: manfredzak@gmail.com</p>
            <p><strong>Imprint:</strong> https://zak-artist.com/impressum/</p>
            
            <h3>Overview of Data Processing</h3>
            <p>The following overview summarizes the types of data we process, the purposes of processing, and the categories of affected persons.</p>
            
            <h4>Types of Processed Data</h4>
            <ul>
              <li>Basic Data</li>
              <li>Contact Data</li>
              <li>Content Data</li>
              <li>Usage Data</li>
              <li>Meta/Communication Data</li>
            </ul>
            
            <h4>Categories of Affected Persons</h4>
            <ul>
              <li>Communication Partners</li>
              <li>Users</li>
            </ul>
            
            <h4>Purposes of Processing</h4>
            <ul>
              <li>Fulfillment of contractual services and customer support</li>
              <li>Responding to contact requests and communication</li>
              <li>Providing our Online Offering and user-friendliness</li>
            </ul>
            
            {/* Legal Basis Section */}
            <h3>Legal Basis</h3>
            <p>The following section provides an overview of the legal bases of the GDPR on which we process personal data. Please note that additional national data protection regulations may apply in your or our country of residence. We will inform you of specific applicable legal bases within the Privacy Policy if relevant.</p>
            <ul>
              <li><strong>Contract fulfillment and pre-contractual inquiries</strong> (Art. 6(1)(b) GDPR)</li>
              <li><strong>Legal obligation</strong> (Art. 6(1)(c) GDPR)</li>
              <li><strong>Legitimate interests</strong> (Art. 6(1)(f) GDPR)</li>
            </ul>
            
            <h3>Security Measures</h3>
            <p>We implement appropriate technical and organizational security measures according to legal requirements, considering the state of technology, implementation costs, and the nature, scope, context, and purposes of the processing, as well as the varying probabilities and severity of the risk to the rights and freedoms of individuals.</p>
            <p><strong>SSL Encryption (https):</strong> To protect your data transmitted via our Online Offering, we use SSL encryption, recognizable by the "https://" prefix in your browser's address bar.</p>
            
            <h3>Data Transfer</h3>
            <p>In the context of processing personal data, we may transfer data to other entities, companies, independent organizational units, or individuals or otherwise disclose it to them. Recipients may include IT service providers or providers of services and content integrated into our website. In such cases, we comply with the legal requirements and establish contracts to protect your data.</p>
            
            <h3>Data Processing in Third Countries</h3>
            <p>If we process data in a third country (outside the EU or EEA), or if this occurs in connection with services of third parties, the disclosure or transfer of data takes place only in accordance with legal requirements.</p>
            
            <h3>Data Deletion</h3>
            <p>Data processed by us will be deleted in accordance with legal requirements once the permissions for processing have been withdrawn or other legal bases cease to apply.</p>
            
            <h3>Use of Cookies</h3>
            <p>Cookies are small text files or other storage markers that store information on end devices and retrieve information from them, such as login status, shopping cart contents, viewed content, or functions of an Online Offering. Cookies may be used for various purposes, such as functionality, security, and convenience of online services or analysis of visitor behavior.</p>
            
            <h3>General Notes on Withdrawal and Objection (Opt-Out)</h3>
            <p>Users can revoke their consent and object to data processing at any time, following legal requirements. Users can also declare their objection through their browser settings.</p>
            
            <h3>Providing the Online Offering and Web Hosting</h3>
            <p>To provide our Online Offering safely and efficiently, we use the services of one or more web hosting providers from whose servers (or managed servers) the Online Offering can be accessed.</p>
            
            <h3>Contact and Request Management</h3>
            <p>When contacting us (e.g., via contact form, email, phone, or social media), we process the information provided to respond to the inquiry and any requested actions.</p>
            
            {/* Final sections */}
            <h3>Amendments to the Privacy Policy</h3>
            <p>We recommend that you regularly review the content of our Privacy Policy. We will update the policy as required by changes in our data processing. We will notify you if changes require your participation (e.g., consent) or individual notification.</p>
            
            <h3>Data Subject Rights</h3>
            <p>According to the GDPR, you have various rights, particularly those arising from Articles 15 to 21 GDPR, including the right to object, the right to withdraw consent, the right to access, and the right to rectification, deletion, restriction, and data portability.</p>
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
        </div>
      </div>
    </>
  );
}