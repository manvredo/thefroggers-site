'use client';
// NFT License Page
import { Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import React from 'react';
import styles from './page.module.scss';

export default function NFTLicense() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/nft-license"
        title="NFT License - theFroggers"
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

          {/* PRIVACY POLICY TEXT */}
          <div className={styles.imprintSimple}>
            <h1>Privacy Policy</h1>
            
            <p>This privacy policy explains how we, theFroggers, collect, use, and share personal data when you visit the website thefroggers.io or use any of the services offered (together with the website, the "Services"). By accessing or using the Services, you consent to the collection and processing of your data in accordance with this policy.</p>
            
            <h2>What personal data we collect</h2>
            <p>"Personal data" includes information that can identify or contact you, such as your name, email address, and other details you provide in connection with your use of our Services, including automatically collected data related to your usage. When you visit the website or use the Services through it, we may automatically collect data related to your device, such as information about your web browser, IP address, location, and cookies installed on your device. While browsing the website, we may use cookies to collect data about which pages you visit and how you interact with the website.</p>
            
            <p>For detailed information about cookies and how to disable them, please visit http://www.allaboutcookies.org. Please note that some of our Services require certain cookies. If all cookies are disabled, some features of the Services may not be available. Aside from the above-mentioned data, we do not collect additional personal data from users of the website or the Services. However, to access the Services, users must set up a wallet with a third-party provider.</p>
            
            <h2>Data from third parties</h2>
            <p>To use the Services, users must own an Ethereum wallet. If your wallet is used to mint or purchase a theFroggers NFT, your Ethereum account address will be transmitted to us by the platform where the wallet was created. Currently, we do not receive any personal data from third parties. Any data received from third parties in the future will also be subject to this privacy policy.</p>
            
            <h2>External websites and services</h2>
            <p>Our Services may contain links to third-party websites or applications, such as for account linking or payment services. However, we have no control over the privacy practices or content of these third-party providers. Therefore, we take no responsibility for how your data is handled on these sites. Please note that this privacy policy does not apply to third-party websites. If you navigate from our Services to another site, please review their privacy policies before submitting any personal data.</p>
            
            <h2>Use of your personal data</h2>
            <p>We primarily use your personal data to process orders and requests related to our Services. Additional purposes include:</p>
            <ul>
              <li>Analyzing usage data to identify trends and improve your experience and our service offerings;</li>
              <li>Resolving technical issues, preventing fraud, and protecting against abuse to ensure the security of our systems;</li>
              <li>Collecting and analyzing aggregated data, such as visitor numbers and demographic patterns;</li>
              <li>Fulfilling legal requirements and responding to regulatory requests;</li>
              <li>Protecting our business interests.</li>
            </ul>
            
            <p>In addition, we may use cookies and other technologies to store your preferences and provide you with personalized content tailored to your use of the Services. This data will be analyzed in aggregated form, so it does not allow for direct identification. Such aggregated information may be shared with our partners and business associates to improve the Services.</p>
            
            <h2>Sharing of personal data</h2>
            <p>We will only share your personal data with trusted partners and service providers who assist us in providing the Services, such as in web hosting and cybersecurity. In the event of a merger, acquisition, or similar corporate restructuring, your data may be transferred to the acquiring entity. We will inform you about such changes if necessary. Additionally, we may disclose your data if required by law or to protect our rights and the security of our Services.</p>
            
            <h2>Sale of personal data</h2>
            <p>theFroggers will not sell or rent your personal data to third parties without your explicit consent.</p>
            
            <h2>Storage and processing in other countries</h2>
            <p>Your personal data may be stored and processed in the United States or other countries where theFroggers or its service providers operate. If you are located in the European Union or another region with specific privacy laws, you consent to the transfer of your data to countries with potentially different privacy regulations.</p>
            
            <h2>Retention of personal data</h2>
            <p>We will retain your personal data as long as necessary to fulfill our legal obligations or until you request the deletion of your data.</p>
            
            <h2>Security of your personal data</h2>
            <p>We take commercially reasonable measures to ensure the security of your data, including encryption. However, we cannot guarantee that your data will be fully protected when transmitted to us.</p>
            
            <h2>Children</h2>
            <p>Our Services are not intended for individuals under 18 years of age. We do not knowingly collect data from individuals under 18 years old.</p>
            
            <h2>Your rights</h2>
            <p>You have the right to access, correct, update, or delete your personal data at any time. Please contact us at the address below to make such requests.</p>
            
            <h2>Opt-out for direct marketing</h2>
            <p>You may opt out of the use of your data for direct marketing purposes at any time by contacting us. If needed, you can also disable notifications or advertisements on your mobile device.</p>
            
            <h2>Rights of residents of the European Economic Area (EEA)</h2>
            <p>If you are located in the EEA, you have the right to access, correct, update, or delete your personal data.</p>
            
            <h2>Rights of California consumers</h2>
            <p>California residents have specific rights regarding their personal data, including the right to opt-out of the sale of their data or request the deletion of their data.</p>
            
            <h2>Changes to the privacy policy</h2>
            <p>This privacy policy is effective as of the date above. Any changes will be posted on our website and will take effect as of the date of posting.</p>
            
            <h2>Contact us</h2>
            <p>If you have any questions about this privacy policy or wish to make a request regarding your personal data, please contact us at info@thefroggers.io.</p>
            
            {/* German Version */}
            <h1>Datenschutzerklärung</h1>
            
            <p>Diese Datenschutzerklärung erklärt, wie wir, theFroggers, personenbezogene Daten erheben, verwenden und weitergeben, wenn du die Website thefroggers.io besuchst oder einen unserer Dienste nutzt (zusammen mit der Website als „Dienste" bezeichnet). Indem du auf die Dienste zugreifst oder diese nutzt, stimmst du der Erhebung und Verarbeitung deiner Daten gemäß dieser Erklärung zu.</p>
            
            <h2>Erhobene personenbezogene Daten</h2>
            <p>„Personenbezogene Daten" umfasst Informationen, die dich identifizieren oder mit dir in Kontakt treten lassen, wie zum Beispiel dein Name, deine E-Mail-Adresse und andere Details, die du im Zusammenhang mit der Nutzung unserer Dienste angibst, einschließlich automatisch gesammelter Daten, die mit deiner Nutzung verbunden sind. Wenn du die Website besuchst oder die Dienste darüber nutzt, können wir automatisch Daten zu deinem Gerät erheben, wie Informationen über deinen Webbrowser, deine IP-Adresse, deinen Standort und Cookies, die auf deinem Gerät installiert sind. Beim Surfen auf der Website können wir Cookies verwenden, um Daten darüber zu sammeln, welche Seiten du besuchst und wie du mit der Website interagierst.</p>
            
            <p>Für detaillierte Informationen zu Cookies und wie du sie deaktivieren kannst, besuche bitte http://www.allaboutcookies.org. Beachte bitte, dass einige unserer Dienste bestimmte Cookies erfordern. Wenn alle Cookies deaktiviert sind, können einige Funktionen der Dienste möglicherweise nicht verfügbar sein. Abgesehen von den oben genannten Daten erheben wir keine zusätzlichen personenbezogenen Daten von Nutzern der Website oder der Dienste. Um jedoch auf die Dienste zuzugreifen, müssen die Nutzer ein Wallet bei einem Drittanbieter einrichten.</p>
            
            <h2>Daten von Dritten</h2>
            <p>Um die Dienste zu nutzen, müssen die Nutzer ein Ethereum-Wallet besitzen. Wenn dein Wallet verwendet wird, um ein theFroggers NFT zu prägen oder zu kaufen, wird deine Ethereum-Kontoadresse von der Plattform, auf der das Wallet erstellt wurde, an uns übermittelt. Derzeit erhalten wir keine personenbezogenen Daten von Dritten. Zukünftige Daten, die wir von Dritten erhalten, unterliegen ebenfalls dieser Datenschutzerklärung.</p>
            
            <h2>Externe Websites und Dienste</h2>
            <p>Unsere Dienste können Links zu Websites oder Anwendungen von Drittanbietern enthalten, zum Beispiel für die Kontoverknüpfung oder Zahlungsdienste. Wir haben jedoch keine Kontrolle über die Datenschutzpraktiken oder Inhalte dieser Drittanbieter. Daher übernehmen wir keine Verantwortung dafür, wie deine Daten auf diesen Seiten behandelt werden. Bitte beachte, dass diese Datenschutzerklärung nicht für Websites Dritter gilt. Wenn du von unseren Diensten auf eine andere Seite navigierst, überprüfe bitte deren Datenschutzerklärungen, bevor du personenbezogene Daten übermittelst.</p>
            
            <h2>Verwendung deiner personenbezogenen Daten</h2>
            <p>Wir verwenden deine personenbezogenen Daten in erster Linie, um Bestellungen und Anfragen im Zusammenhang mit unseren Diensten zu bearbeiten. Weitere Zwecke umfassen:</p>
            <ul>
              <li>Analyse von Nutzungsdaten, um Trends zu identifizieren und deine Erfahrung sowie unser Serviceangebot zu verbessern;</li>
              <li>Lösung technischer Probleme, Betrugsprävention und Schutz vor Missbrauch, um die Sicherheit unserer Systeme zu gewährleisten;</li>
              <li>Erhebung und Analyse aggregierter Daten, wie Besucherzahlen und demografische Muster;</li>
              <li>Erfüllung gesetzlicher Anforderungen und Beantwortung behördlicher Anfragen;</li>
              <li>Schutz unserer geschäftlichen Interessen.</li>
            </ul>
            
            <p>Zusätzlich können wir Cookies und andere Technologien verwenden, um deine Präferenzen zu speichern und dir personalisierte Inhalte basierend auf deiner Nutzung der Dienste anzubieten. Diese Daten werden in aggregierter Form analysiert, sodass eine direkte Identifizierung nicht möglich ist. Solche aggregierten Informationen können mit unseren Partnern und Geschäftspartnern geteilt werden, um die Dienste zu verbessern.</p>
            
            <h2>Weitergabe personenbezogener Daten</h2>
            <p>Wir geben deine personenbezogenen Daten nur an vertrauenswürdige Partner und Dienstleister weiter, die uns bei der Bereitstellung der Dienste unterstützen, z. B. bei der Web-Hosting und Cybersicherheit. Im Falle einer Fusion, Übernahme oder ähnlichen Unternehmensumstrukturierung können deine Daten an das erwerbende Unternehmen übertragen werden. Wir werden dich über solche Änderungen informieren, wenn dies erforderlich ist. Darüber hinaus können wir deine Daten offenlegen, wenn dies gesetzlich vorgeschrieben ist oder zum Schutz unserer Rechte und der Sicherheit unserer Dienste erforderlich ist.</p>
            
            <h2>Verkauf personenbezogener Daten</h2>
            <p>theFroggers wird deine personenbezogenen Daten ohne deine ausdrückliche Zustimmung nicht an Dritte verkaufen oder vermieten.</p>
            
            <h2>Speicherung und Verarbeitung in anderen Ländern</h2>
            <p>Deine personenbezogenen Daten können in den Vereinigten Staaten oder anderen Ländern gespeichert und verarbeitet werden, in denen theFroggers oder seine Dienstleister tätig sind. Wenn du dich in der Europäischen Union oder einer anderen Region mit speziellen Datenschutzgesetzen befindest, stimmst du der Übertragung deiner Daten in Länder mit möglicherweise abweichenden Datenschutzbestimmungen zu.</p>
            
            <h2>Aufbewahrung personenbezogener Daten</h2>
            <p>Wir werden deine personenbezogenen Daten so lange aufbewahren, wie es erforderlich ist, um unseren rechtlichen Verpflichtungen nachzukommen oder bis du die Löschung deiner Daten verlangst.</p>
            
            <h2>Sicherheit deiner personenbezogenen Daten</h2>
            <p>Wir ergreifen wirtschaftlich angemessene Maßnahmen, um die Sicherheit deiner Daten zu gewährleisten, einschließlich der Verschlüsselung. Wir können jedoch nicht garantieren, dass deine Daten bei der Übertragung an uns vollständig geschützt sind.</p>
            
            <h2>Kinder</h2>
            <p>Unsere Dienste sind nicht für Personen unter 18 Jahren bestimmt. Wir sammeln wissentlich keine Daten von Personen unter 18 Jahren.</p>
            
            <h2>Deine Rechte</h2>
            <p>Du hast das Recht, jederzeit auf deine personenbezogenen Daten zuzugreifen, diese zu korrigieren, zu aktualisieren oder zu löschen. Bitte kontaktiere uns unter der unten angegebenen Adresse, um solche Anfragen zu stellen.</p>
            
            <h2>Opt-out für Direktmarketing</h2>
            <p>Du kannst jederzeit der Verwendung deiner Daten für Direktmarketing-Zwecke widersprechen, indem du uns kontaktierst. Falls erforderlich, kannst du auch Benachrichtigungen oder Werbung auf deinem mobilen Gerät deaktivieren.</p>
            
            <h2>Rechte der Bewohner des Europäischen Wirtschaftsraums (EWR)</h2>
            <p>Wenn du dich im EWR befindest, hast du das Recht, auf deine personenbezogenen Daten zuzugreifen, diese zu korrigieren, zu aktualisieren oder zu löschen.</p>
            
            <h2>Rechte der kalifornischen Verbraucher</h2>
            <p>Bewohner Kaliforniens haben spezifische Rechte in Bezug auf ihre personenbezogenen Daten, einschließlich des Rechts, dem Verkauf ihrer Daten zu widersprechen oder die Löschung ihrer Daten zu verlangen.</p>
            
            <h2>Änderungen der Datenschutzerklärung</h2>
            <p>Diese Datenschutzerklärung ist ab dem oben genannten Datum gültig. Änderungen werden auf unserer Website veröffentlicht und treten mit dem Datum der Veröffentlichung in Kraft.</p>
            
            <h2>Kontakt</h2>
            <p>Wenn du Fragen zu dieser Datenschutzerklärung hast oder eine Anfrage bezüglich deiner personenbezogenen Daten stellen möchtest, kontaktiere uns bitte unter info@thefroggers.io.</p>

            {/* Terms of Use Section */}
            <h1>Terms of Use</h1>
            
            <p>These Terms of Use form a binding legal agreement between you and theFroggers. Please read them carefully before using our services.</p>
            
            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, theFroggers, its subsidiaries, affiliates, officers, employees, agents, partners, and licensors will not be liable for any damages of any kind arising from the use or inability to use the services, websites, content, or other linked sites, including but not limited to direct, indirect, special, incidental, consequential, or punitive damages. This includes personal injury, pain and suffering, emotional distress, loss of revenue or profits, loss of business opportunities, data loss, or other damages, whether in tort (including negligence), breach of contract, or otherwise, even if such damages were foreseeable.</p>
            
            <p>This limitation of liability does not apply to damages caused by gross negligence or willful misconduct on our part. It does not apply to liabilities that cannot be excluded or limited under applicable law. In no event shall the liability of theFroggers exceed the amount you actually paid to us in the twelve months preceding the claim. You acknowledge that theFroggers provides the services based on these limitations of liability and the disclaimer in Section 15, and that without these disclaimers and limitations, the provision of the services would not be possible.</p>
            
            <h2>Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless theFroggers, its affiliates, licensors, and service providers, as well as their officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns, from and against any and all claims, liabilities, damages, judgments, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or related to your violation of these Terms of Use or your use of the services.</p>
            
            <h2>Applicable Law and Jurisdiction</h2>
            <p>All questions relating to the services and these Terms of Use, as well as all disputes or claims arising from or related to them, are governed by the laws of the State of New York. Any legal actions must be initiated exclusively in the federal courts of the United States or the courts of the State of New York.</p>
            
            <h2>Contact Information</h2>
            <p>For questions or feedback regarding these Terms of Use, please contact us at info@thefroggers.io or visit thefroggers.io.</p>
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