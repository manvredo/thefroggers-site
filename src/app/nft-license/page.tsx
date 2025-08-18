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

          {/* NFT LICENSE TEXT */}
          <div className={styles.imprintSimple}>
            <h1>NFT License</h1>
            
            <p>Ownership of a <em>The Froggers</em> NFT grants you a license to use the artwork associated with the NFT ("Art"), which you may exercise for as long as you own the NFT ("NFT License").</p>
            
            <p>Our NFTs provide the owner with a limited license to use the Art represented by the NFT. This license is exclusive to the owner and is valid only as long as they retain ownership of the NFT.</p>
            
            <p>Your NFT License supplements our Terms of Service and outlines your rights regarding the Art in any <em>The Froggers</em> NFTs you hold.</p>
            
            <p>If you sell, trade, donate, or otherwise transfer ownership of your NFT (each a "Transfer"), the NFT License automatically transfers to the new owner. Upon Transfer, your rights to the Art end, and you must stop any ongoing use of the Art and Derivatives.</p>
            
            <h3>This License applies to the following Collections:</h3>
            <ul>
              <li>TheFroggers</li>
            </ul>
            
            <p>This NFT License (the "License"), along with our Terms of Service, governs your rights and responsibilities in relation to the NFT, including the associated Art and its Transfer, as defined below.</p>
            
            {/* Definitions and detailed terms */}
            <h2>1. Definitions</h2>
            <p><strong>"Art"</strong> refers to any image, design, drawing, or other graphic work represented by a The Froggers NFT that you own.</p>
            <p><strong>"The Froggers NFT"</strong> is an NFT offered by us under this NFT License.</p>
            <p><strong>"Creator Fee"</strong> is the amount due to The Froggers upon Transfer of a The Froggers NFT, as reflected in the NFT's smart contract.</p>
            <p><strong>"Marketplace"</strong> means any third-party exchange or market that collects and distributes the Creator Fee payable upon Transfer to The Froggers.</p>
            <p><strong>"Merchandise"</strong> means any physical or digital goods that are not NFTs.</p>
            <p><strong>"NFT"</strong> is any blockchain-tracked, non-fungible token included in the Collections to which this License applies.</p>
            <p><strong>"Own"</strong> refers to an NFT that you have purchased or acquired from a legitimate source, where proof of such purchase is recorded on the relevant blockchain.</p>
            <p><strong>"Transfer"</strong> includes any sale, trade, donation, or other transfer of ownership of a The Froggers NFT.</p>
            
            <h2>2. Ownership</h2>
            <p>This License grants you usage rights to the Art, but does not transfer ownership of the Art itself.</p>
            <p>The Creator (or its licensors) retains all legal rights, title, and interest in the Art and all associated intellectual property rights. Your rights to the Art are limited to those described in this License. The Creator reserves all rights to the Art not expressly granted by this License.</p>
            <p>Please support the community funded by the Creator Fee. Transfers should occur only on Marketplaces, and the Creator Fee is due upon Transfer unless a Marketplace pays it on your behalf.</p>
            
            <h2>3. Transfer</h2>
            <h3>How to Transfer:</h3>
            <p>You may only Transfer, or offer for Transfer, your The Froggers NFT on Marketplaces unless you receive prior written permission from us. When you list or offer your The Froggers NFT for Transfer, you must include a clear disclosure and link to this License, such as: "By purchasing this NFT, you agree to the applicable NFT License at https://thefroggers.io."</p>
            
            <h3>Creator Fee:</h3>
            <p>Upon any Transfer, the Creator Fee is due. You remain responsible for paying the Creator Fee unless a Marketplace collects it on your behalf.</p>
            
            <h3>Effect of Transfer:</h3>
            <p>When you Transfer your The Froggers NFT, this License automatically passes to the new owner. Upon Transfer, your rights under this License cease, and you must stop any use of the Art and Derivatives.</p>
            
            <h3>Residual Rights:</h3>
            <p>If your rights under this License end, physical embodiments of the Art that you lawfully authorized may continue to be owned by others as provided under the U.S. Copyright Act. You may not distribute, sell, or make available any remaining copies in your possession.</p>
            
            <h2>4. License</h2>
            <p>You may only use the Art:</p>
            <ul>
              <li>for your own non-commercial purposes;</li>
              <li>to create derivative works that differ significantly from the Art in other NFTs; and</li>
              <li>to commercialize your own Merchandise featuring the Art or your Derivatives.</li>
            </ul>
            
            <p>Subject to continued compliance with the terms of this License, the Creator grants you a worldwide, non-exclusive, royalty-free license to use the Art associated with your The Froggers NFTs solely for the following purposes:</p>
            <ul>
              <li>personal, non-commercial display and use;</li>
              <li>creating Derivatives based on the Art, provided they differ significantly from any other The Froggers NFT Art, as determined by us in our sole discretion; and</li>
              <li>commercializing Merchandise that includes, contains, or consists of the Art or your Derivatives.</li>
            </ul>
            
            <p>Sublicensing is permitted under a written agreement, provided that:</p>
            <ul>
              <li>sublicensed rights automatically end upon your Transfer of the The Froggers NFT, and are terminable by both the current Owner and us after Transfer; and</li>
              <li>you make reasonable efforts to disclose all sublicenses to potential buyers before any Transfer.</li>
            </ul>
            
            <h2>5. Restrictions</h2>
            <p>You may not use the Art or Derivatives in connection with hatred, violence, cruelty, or any infringing manner. Derivatives may not depict hate speech, intolerance, or any similar offensive content.</p>
            
            <h2>6. Unpermitted Use</h2>
            <p>If you are uncertain whether your intended use is permitted, please contact us. Violating this License may lead to termination, and the Creator may implement technical measures to restrict access to the Art. You may also be held responsible for any costs incurred in enforcing the terms of this License.</p>
            
            {/* German Version */}
            <h1>NFT-Lizenz</h1>
            
            <p>Der Besitz eines The Froggers NFTs gewährt dir eine Lizenz zur Nutzung des mit dem NFT verbundenen Kunstwerks („Kunst"), die du so lange ausüben kannst, wie du das NFT besitzt („NFT-Lizenz").</p>
            
            <p>Unsere NFTs gewähren dem Besitzer eine begrenzte Lizenz zur Nutzung der Kunst, die durch das NFT dargestellt wird. Diese Lizenz ist exklusiv für den Besitzer und gilt nur, solange er das NFT besitzt.</p>
            
            <p>Deine NFT-Lizenz ergänzt unsere Allgemeinen Geschäftsbedingungen und beschreibt deine Rechte in Bezug auf die Kunst der The Froggers NFTs, die du besitzt.</p>
            
            <p>Wenn du dein NFT verkaufst, tauschst, spendest oder anderweitig überträgst (jede Übertragung ist ein „Transfer"), wird die NFT-Lizenz automatisch auf den neuen Besitzer übertragen. Mit dem Transfer enden deine Rechte an der Kunst, und du musst jede fortlaufende Nutzung der Kunst und abgeleiteter Werke einstellen.</p>
            
            <h3>Diese Lizenz gilt für die folgenden Kollektionen:</h3>
            <ul>
              <li>TheFroggers</li>
            </ul>
            
            <p>Diese NFT-Lizenz (die „Lizenz") regelt zusammen mit unseren Allgemeinen Geschäftsbedingungen deine Rechte und Pflichten in Bezug auf das NFT, einschließlich der damit verbundenen Kunst und deren Übertragung, wie nachstehend definiert.</p>
            
            <h2>1. Definitionen</h2>
            <p><strong>„Kunst"</strong> bezeichnet jedes Bild, Design, Zeichnung oder andere grafische Arbeiten, die durch ein The Froggers NFT, das du besitzt, dargestellt wird.</p>
            <p><strong>„The Froggers NFT"</strong> ist ein NFT, das von uns im Rahmen dieser NFT-Lizenz angeboten wird.</p>
            <p><strong>„Creator Fee"</strong> ist der Betrag, der bei der Übertragung eines The Froggers NFTs gemäß dem Smart Contract des NFTs an The Froggers zu zahlen ist.</p>
            <p><strong>„Marktplatz"</strong> bedeutet jede Drittanbieterbörse oder -plattform, die die Creator Fee bei der Übertragung an The Froggers erhebt und verteilt.</p>
            <p><strong>„Merchandise"</strong> bezeichnet alle physischen oder digitalen Waren, die keine NFTs sind.</p>
            <p><strong>„NFT"</strong> ist ein beliebiger Blockchain-überwachter, nicht-fungibler Token, der in den Kollektionen enthalten ist, auf die diese Lizenz Anwendung findet.</p>
            <p><strong>„Besitzen"</strong> bedeutet, dass du ein NFT gekauft oder aus einer legitimen Quelle erworben hast, wobei der Nachweis des Kaufs auf der entsprechenden Blockchain aufgezeichnet ist.</p>
            <p><strong>„Transfer"</strong> umfasst den Verkauf, Tausch, die Spende oder jede andere Übertragung des Eigentums eines The Froggers NFTs.</p>
            
            <h2>2. Eigentum</h2>
            <p>Diese Lizenz gewährt dir Nutzungsrechte an der Kunst, überträgt jedoch nicht das Eigentum an der Kunst selbst.</p>
            <p>Der Schöpfer (oder seine Lizenzgeber) behält alle gesetzlichen Rechte, Titel und Interessen an der Kunst sowie alle damit verbundenen geistigen Eigentumsrechte. Deine Rechte an der Kunst sind auf die in dieser Lizenz beschriebenen Rechte beschränkt. Der Schöpfer behält sich alle Rechte an der Kunst vor, die nicht ausdrücklich durch diese Lizenz gewährt werden.</p>
            <p>Bitte unterstütze die Community, die durch die Creator Fee finanziert wird. Übertragungen sollten nur auf Marktplätzen erfolgen, und die Creator Fee ist bei der Übertragung fällig, es sei denn, ein Marktplatz zahlt sie in deinem Auftrag.</p>
            
            <h2>3. Übertragung</h2>
            <h3>Wie man überträgt:</h3>
            <p>Du darfst dein The Froggers NFT nur auf Marktplätzen übertragen oder zum Transfer anbieten, es sei denn, du erhältst vorher eine schriftliche Genehmigung von uns. Wenn du dein The Froggers NFT zum Transfer anbietest, musst du eine klare Offenlegung und einen Link zu dieser Lizenz angeben, wie zum Beispiel: „Durch den Kauf dieses NFTs stimmst du der geltenden NFT-Lizenz unter https://thefroggers.io zu."</p>
            
            <h3>Creator Fee:</h3>
            <p>Bei jeder Übertragung ist die Creator Fee fällig. Du bleibst für die Zahlung der Creator Fee verantwortlich, es sei denn, ein Marktplatz erhebt sie in deinem Auftrag.</p>
            
            <h3>Wirkung der Übertragung:</h3>
            <p>Wenn du dein The Froggers NFT überträgst, wird diese Lizenz automatisch auf den neuen Besitzer übertragen. Mit der Übertragung enden deine Rechte aus dieser Lizenz, und du musst jede Nutzung der Kunst und abgeleiteter Werke einstellen.</p>
            
            <h3>Residualrechte:</h3>
            <p>Wenn deine Rechte aus dieser Lizenz enden, können physische Ausführungen der Kunst, die du rechtmäßig autorisiert hast, weiterhin von anderen Besitzern gehalten werden, wie es im US-amerikanischen Urheberrechtsgesetz vorgesehen ist. Du darfst keine verbleibenden Kopien, die sich in deinem Besitz befinden, verbreiten, verkaufen oder zugänglich machen.</p>
            
            <h2>4. Lizenz</h2>
            <p>Du darfst die Kunst nur:</p>
            <ul>
              <li>für eigene nicht-kommerzielle Zwecke nutzen;</li>
              <li>abgeleitete Werke erstellen, die sich erheblich von der Kunst in anderen NFTs unterscheiden; und</li>
              <li>eigene Merchandise-Produkte, die die Kunst oder deine abgeleiteten Werke enthalten, kommerziell vermarkten.</li>
            </ul>
            
            <p>Unter der Bedingung der fortlaufenden Einhaltung der Bedingungen dieser Lizenz gewährt dir der Schöpfer eine weltweite, nicht-exklusive, lizenzgebührenfreie Lizenz zur Nutzung der Kunst, die mit deinem The Froggers NFT verbunden ist, ausschließlich zu folgenden Zwecken:</p>
            <ul>
              <li>persönliche, nicht-kommerzielle Anzeige und Nutzung;</li>
              <li>Erstellung von abgeleiteten Werken basierend auf der Kunst, vorausgesetzt, sie unterscheiden sich erheblich von anderen The Froggers NFT-Kunstwerken, wie es von uns nach eigenem Ermessen bestimmt wird; und</li>
              <li>Kommerzialisierung von Merchandise, das die Kunst oder deine abgeleiteten Werke enthält oder daraus besteht.</li>
            </ul>
            
            <p>Das Unterlizenzieren ist unter einer schriftlichen Vereinbarung gestattet, vorausgesetzt:</p>
            <ul>
              <li>die unterlizenzierte Rechte enden automatisch bei deiner Übertragung des The Froggers NFTs und können von beiden, dem aktuellen Eigentümer und uns, nach der Übertragung beendet werden; und</li>
              <li>du unternimmst angemessene Anstrengungen, alle Unterlizenzen potenziellen Käufern vor der Übertragung offenzulegen.</li>
            </ul>
            
            <h2>5. Einschränkungen</h2>
            <p>Du darfst die Kunst oder abgeleitete Werke nicht in Verbindung mit Hass, Gewalt, Grausamkeit oder in einer anderen rechtsverletzenden Weise verwenden. Abgeleitete Werke dürfen keine Hassrede, Intoleranz oder andere ähnliche anstößige Inhalte darstellen.</p>
            
            <h2>6. Unzulässige Nutzung</h2>
            <p>Wenn du dir unsicher bist, ob deine beabsichtigte Nutzung zulässig ist, kontaktiere uns bitte. Die Verletzung dieser Lizenz kann zur Beendigung führen, und der Schöpfer kann technische Maßnahmen ergreifen, um den Zugriff auf die Kunst zu beschränken. Du kannst auch für alle Kosten haftbar gemacht werden, die durch die Durchsetzung der Bedingungen dieser Lizenz entstehen.</p>
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