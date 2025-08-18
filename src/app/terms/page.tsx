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

          {/* TERMS AND CONDITIONS TEXT */}
          <div className={styles.imprintSimple}>
            <h1>Terms and Conditions</h1>
            
            <h2>Eligibility and Consent</h2>
            <p>These Terms and Conditions constitute an agreement between you and ZAK theFroggers ("theFroggers", "we", or "us"). The terms outlined here, along with all documents incorporated by reference (collectively, the "Terms of Use"), govern your access to and use of our services—whether you are accessing them as a guest or a registered user. "Services" refers to all websites, content, tools, apps, features, and other services provided by theFroggers. The term "Platform" includes all our services, including—but not limited to—the theFroggers gaming platform at thefroggers.io, which allows interaction with theFroggers NFT tokens ("Gaming Platform").</p>
            
            <p>Please read the Terms of Use carefully before using the services. By using the services or by clicking "Accept" or "Agree" to these Terms of Use, if such an option is provided, you agree to be bound by these Terms of Use and our Privacy Policy, which is incorporated by reference into this agreement. If you do not agree to these Terms of Use, you are prohibited from using the services. The services are available only to users who are at least 18 years old.</p>
            
            <p>By using the services, you represent and warrant that you are of legal age and capable of entering into a binding contract with theFroggers. Additionally, you warrant that you are not affiliated with any company offering comparable services, and that you meet all the access requirements. If you do not meet these requirements, you are not permitted to use the services.</p>
            
            <h2>Changes to the Terms of Use</h2>
            <p>We reserve the right to change and update these Terms of Use at our discretion from time to time. Any modifications will take effect immediately upon posting and apply to all subsequent access to and use of the services. Changes to the dispute resolution provisions regarding applicable law and jurisdiction will not affect disputes of which the parties were already aware before the change was posted. If you continue to use the services after the revised Terms of Use have been posted, this will be considered as your consent to the changes. Therefore, we recommend that you regularly review this page for updates, as the changes are binding for you.</p>
            
            <h2>Access to the Services; Account Registration and Security</h2>
            <p>We reserve the right to add, change, or remove content, materials, product offerings, or other services at our discretion and without prior notice. There is no guarantee that the services will be available at all times, and we accept no liability if parts or all of the services are temporarily or permanently unavailable. Occasionally, access to certain areas or to the entire services may be restricted, even for registered users. It is your responsibility to make the necessary arrangements to access the services.</p>
            
            <p>To use the services or specific resources of theFroggers for buyers, it may be necessary to provide login credentials or other information. All data you provide for registration and use of the services must be accurate, current, and complete. By providing this data, which may also include information specific to buyer-only features, you agree that its processing will be subject to our Privacy Policy, and that we may act in accordance with this Privacy Policy.</p>
            
            <p>If you choose or receive a username, password, or other security information as part of our security procedures, these must be kept strictly confidential and not shared with third parties. You further confirm that your account is for your personal use only and agree not to grant any third party—whether professionally or personally—access to the services using your credentials. If you become aware of any unauthorized access or security breach related to your username or password, please notify us immediately.</p>
            
            <p>If you access your account from a public or shared computer, you are responsible for logging out at the end of the session to protect your data. Please ensure that others using the same computer do not gain access to your password or personal information. We reserve the right to deactivate your username, password, or other access credentials if we detect violations of these Terms of Use.</p>
            
            <h2>Intellectual Property Rights</h2>
            <p>All content, features, and functions of the services—including, but not limited to, information, software, text, graphics, images, videos, audio, and their design, selection, and arrangement—are the property of theFroggers, its licensors, or other material providers and are protected by U.S. and international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            
            <p>We grant you a limited, personal, non-exclusive, and non-transferable license to access and use the services, but only to the extent expressly set forth herein. You may not reproduce, distribute, license, sell, modify, create derivative works, publicly display or perform, re-publish, transmit, download, or store content from the services, except in the following cases:</p>
            
            <ul>
              <li>Your computer may temporarily store content in RAM while accessing and viewing it.</li>
              <li>Browser-cached files may be stored if required for enhanced display.</li>
              <li>A reasonable number of pages of the services may be printed for personal, non-commercial use, but not for further distribution or publication.</li>
              <li>If social media or interactive features provide specific content, actions permitted by these features are allowed.</li>
            </ul>
            
            <h3>It is prohibited to:</h3>
            <ul>
              <li>Modify content from the services unless expressly allowed.</li>
              <li>Remove or alter copyright, trademark, or other proprietary notices from copies.</li>
            </ul>
            
            <p>If you violate these terms by printing, copying, modifying, downloading, or granting third parties access to materials from the services, you will immediately lose your right to use the services, and we reserve the right to demand the return of any copies or their destruction. No rights or titles to the content or services themselves are transferred to you, and all rights not expressly granted remain the property of theFroggers. Any use not expressly permitted by these Terms of Use constitutes a violation of these terms and may infringe upon copyright, trademark, and other laws.</p>
            
            <p>The name "theFroggers," including all theFroggers logos and all related names, logos, product and service names, designs, and slogans, are trademarks of theFroggers and may not be used without our prior written consent. Other names, logos, product and service names, designs, and slogans appearing in the services are trademarks of their respective owners.</p>
            
            <h2>Prohibited Uses</h2>
            <p>The use of the services is permitted solely for lawful purposes and in accordance with these Terms of Use. You agree not to use the services:</p>
            <ul>
              <li>In a way that competes with our business model.</li>
              <li>In violation of applicable local, national, or international laws and regulations, including but not limited to data or software export control regulations from the U.S. or other countries.</li>
              <li>To send, receive, upload, download, use, or reuse content that violates the content standards of these Terms of Use.</li>
              <li>To transmit mass advertisements or other promotional material such as "junk mail," "chain letters," "spam," or similar solicitations.</li>
            </ul>
            
            <p>You further agree not to engage in any behavior that may limit or interfere with other users' enjoyment or use of the services or that, in our sole discretion, may harm theFroggers or other users or expose them to liability risks.</p>
            
            <h3>Additionally, you agree not to:</h3>
            <ul>
              <li>Use the services in a way that may overload, disable, damage, or impair the services, or interfere with others' use, including participating in real-time activities.</li>
              <li>Use automated technologies such as robots, spiders, or similar methods to access the services, or to monitor and replicate content without express permission.</li>
              <li>Use a manual process to monitor or copy content unless explicitly authorized, and without our prior written consent.</li>
              <li>Apply devices, software, or routines that may interfere with the proper functioning of the services.</li>
              <li>Introduce harmful software such as viruses, trojans, worms, logic bombs, or similar harmful content.</li>
              <li>Attempt to gain unauthorized access to parts of the services, servers, computers, or databases connected to the services, or disrupt them.</li>
              <li>Affect the services through denial-of-service or distributed denial-of-service attacks.</li>
              <li>Take any other action that may disrupt the proper functioning of the services.</li>
            </ul>
            
            <h2>User Contributions</h2>
            <p>The services may currently or in the future include interactive features ("Interactive Services") that allow you to upload, submit, post, display, transmit, or otherwise make available content, materials, or other data ("User Contributions") to the services. All user contributions you create must comply with the content standards set forth in these Terms of Use.</p>
            
            <p>By submitting User Contributions through the services, you agree that these contributions will be considered non-confidential and non-proprietary. By providing a User Contribution, you grant us, our affiliates, service providers, and their licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and transmit such content for any purpose. These rights include marketing purposes and will be carried out in accordance with our Privacy Policy and your account settings.</p>
            
            <h2>Monitoring and Enforcement; Termination</h2>
            <p>We reserve the right to:</p>
            <ul>
              <li>Remove or refuse to post User Contributions at our sole discretion, for any reason or without reason.</li>
              <li>Take any actions we deem necessary or appropriate, especially if we believe that a User Contribution violates these Terms of Use, including content standards, infringes upon intellectual property rights or other rights of any person or entity, threatens the personal safety of users or the public, or exposes theFroggers to legal risk.</li>
              <li>Disclose your identity or other information about you to third parties who claim that materials you have posted infringe their rights, including intellectual property or privacy rights.</li>
              <li>Initiate legal action, including referring cases to law enforcement authorities, for illegal or unauthorized use of the services.</li>
              <li>Terminate or suspend your access to all or part of the services in the event of a violation of these Terms of Use.</li>
              <li>Terminate your access to all or part of the services at any time, with or without notice or cause, immediately.</li>
            </ul>
            
            <h2>Content Standards</h2>
            <p>These content standards apply to all User Contributions and the use of Interactive Services. All User Contributions must fully comply with applicable federal, state, local, and international laws and regulations. Specifically, User Contributions must not:</p>
            <ul>
              <li>Contain material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, incendiary, or otherwise objectionable.</li>
              <li>Promote sexually explicit or pornographic content, violence, or discrimination based on race, gender, religion, nationality, disability, sexual orientation, or age.</li>
              <li>Infringe upon intellectual property rights or other rights of third parties or contain content that we are not lawfully authorized to use.</li>
              <li>Violate the legal rights of others, including the right to privacy and the right to public display, or contain material that could lead to civil or criminal liability.</li>
              <li>Be misleading or deceptive.</li>
              <li>Promote illegal activities or support, encourage, or instigate unlawful acts.</li>
              <li>Cause annoyance, inconvenience, or unnecessary anxiety, or cause others to be upset, disturbed, or embarrassed.</li>
            </ul>
            
            <h2>Copyright Infringement</h2>
            <p>We take copyright infringement very seriously and will respond to notices that comply with applicable laws. If you believe that materials available through the services infringe your copyright, you may request the removal of these materials (or access to them) from the services by sending a written notice to our designated Copyright Agent.</p>
            
            <h2>Reliance on Information</h2>
            <p>The information provided through our services is for general informational purposes only. We make no guarantees as to the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is at your own risk. We will not be liable for any damages or losses resulting from reliance on this content, whether for you or other users of the services.</p>
            
            <h2>Website Updates</h2>
            <p>Use of our services is at your own risk. We reserve the right to update the content on our websites regularly. However, the content on our sites may not always be complete or up-to-date. Material on the website may be outdated, and we are under no obligation to update it.</p>
            
            <h2>Information About You and Your Use of the Services</h2>
            <p>All information we collect in connection with the use of the services is subject to our Privacy Policy. By using the services, you consent to the actions we take regarding your data as outlined in our Privacy Policy.</p>
            
            <h2>Purchases</h2>
            <p>All purchases made through our platform are subject to these Terms and any additional terms relevant to such purchases on the platform. You are required to review and agree to these terms. If you do not agree to or review the applicable terms for online purchases, you should refrain from making any purchases through our services.</p>
            
            <h2>Links from the Services; Third Parties</h2>
            <p>If our services contain links to third-party websites or resources, these links are provided for your convenience. This includes links to third-party marketplaces and advertisements, such as banner ads and sponsored links. We have no control over the content of these external sites and accept no responsibility for them. We are not liable for any damages or losses caused by the use of such sites. If you choose to click on an external link, you do so at your own risk and are subject to the terms of use and privacy policies of the third-party websites. You agree to comply with all applicable terms of use and privacy policies of third parties that interact with our services or from which our services are accessed.</p>
            
            <h2>Disclaimer</h2>
            <p>It is your responsibility to take appropriate security precautions to meet your specific requirements for protection against viruses and the accuracy of data input and output. Additionally, you should have a means outside of the website to restore lost data. To the maximum extent permitted by applicable law, we do not accept liability for losses or damages caused by Distributed Denial-of-Service (DDoS) attacks, viruses, or other harmful technological materials that may infect your device, programs, data, or other property, whether through the use of the services, the website, or features provided through the services, or by downloading materials published on the service pages or linked websites.</p>
            
            <p>Your use of the services and all associated content and features is at your own risk. The services, websites, their content, and all items or features accessible through the services are provided "as is" and "as available" without any express or implied warranties. We do not guarantee the completeness, security, reliability, quality, accuracy, or availability of the services. We do not assume any responsibility for error-free performance, uninterrupted availability, virus-free content, or the presence of harmful components in the services or the servers providing them. We do not guarantee that the services, their content, or features will meet your expectations. To the maximum extent permitted by applicable law, we exclude all warranties, including but not limited to implied warranties of merchantability, non-infringement, and fitness for a particular purpose, to the extent permitted by applicable law.</p>
            
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, theFroggers, its affiliates, licensors, service providers, employees, agents, officers, and directors will not be liable for any damages of any kind arising from the use or inability to use the services, websites, content, or other linked sites, including but not limited to direct, indirect, special, incidental, consequential, or punitive damages. This includes personal injury, pain and suffering, emotional distress, loss of revenue or profits, loss of business opportunities, data loss, or other damages, whether in tort (including negligence), breach of contract, or otherwise, even if such damages were foreseeable.</p>
            
            <p>This limitation of liability does not apply to damages caused by gross negligence or willful misconduct on our part. It does not apply to liabilities that cannot be excluded or limited under applicable law. In no event shall the liability of theFroggers exceed the amount you actually paid to us in the twelve months preceding the claim. You acknowledge that theFroggers provides the services based on these limitations of liability and the disclaimer in Section 15, and that without these disclaimers and limitations, the provision of the services would not be possible.</p>
            
            <h2>Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless theFroggers, its affiliates, licensors, and service providers, as well as their officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns, from and against any and all claims, liabilities, damages, judgments, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or related to your violation of these Terms of Use or your use of the services. This includes, but is not limited to, your user contributions, the use of content, features, or products of the services not expressly permitted by these Terms of Use, or the use of information obtained through the services.</p>
            
            <h2>Arbitration; Waiver of Court Proceeding</h2>
            <p>You agree that any disputes between you and us or any of our officers, directors, or employees acting in their capacity (whether or not third parties are involved) regarding your relationship with us, including but not limited to disputes related to these Terms of Use, your use of the services, and your rights to privacy and publicity, will be resolved through binding, individual arbitration under the rules of JAMS, Inc. ("JAMS") for consumer disputes. You and we expressly waive the right to a trial by jury.</p>
            
            <p>However, we or you may seek injunctive relief or other appropriate remedies in a competent state or federal court in the case of actual or threatened infringement or misappropriation of intellectual property rights. Please note that discovery and appeal rights in arbitration are typically more limited than in court proceedings, and some rights you or we would have in a court may not be available in arbitration.</p>
            
            <h2>Small Claims Court; Waiver of Class Action</h2>
            <p>You may alternatively bring your claim before your local "small claims" court, provided that this is permitted by the rules of the court and the claim falls within its jurisdiction, unless the case is transferred, removed, or contested in another court. You may only assert claims in your own name. Neither you nor we will participate in any class action or class arbitration for claims under this agreement. You expressly waive your right to participate in any class action or as a class representative or class member in any class action, including but not limited to, the right to class arbitration or the consolidation of individual arbitrations. You also agree not to participate in claims brought in a private attorney general action or in a representative capacity or involving consolidated claims in which we are a party.</p>
            
            <h2>Procedure</h2>
            <p>These dispute resolution provisions are governed by the Federal Arbitration Act and not by the respective state arbitration laws. If JAMS is unable or unwilling to schedule a hearing within one hundred sixty (160) days of filing the case, we or you may choose to have the arbitration conducted by the American Arbitration Association. The arbitrator's award may be enforced in any competent court. Notwithstanding any other legal provisions, the arbitrator will not grant claims for damages, remedies, or awards that contradict these Terms of Use.</p>
            
            <h2>30-Day Opt-Out Period</h2>
            <p>If you do not wish to be bound by the arbitration and class action waiver provisions in this Dispute Resolution section, you must notify us in writing within thirty (30) days of the date you first accept these Terms of Use (or within a longer period if required by law). In this case, you must resolve all disputes against us in court under the applicable law and jurisdiction provisions. Your written notification must be sent to the address provided at the end of these Terms of Use.</p>
            
            <h2>Severability Clause</h2>
            <p>If any of the provisions regarding class actions and other claims on behalf of third parties in this section are deemed unenforceable, the entire preceding wording of this Dispute Resolution section becomes invalid. The Dispute Resolution section, including the arbitration agreement and the class action waiver, remains in effect even after the termination of your relationship with us.</p>
            
            <h2>Applicable Law and Jurisdiction</h2>
            <p>All questions relating to the services and these Terms of Use, as well as all disputes or claims arising from or related to them (including non-contractual disputes or claims), are governed by the laws of the State of New York and are interpreted in accordance with these laws, without regard to any potential conflicts with the laws of other jurisdictions. Any legal actions, lawsuits, or proceedings arising from these Terms of Use or the services must be initiated exclusively in the federal courts of the United States or the courts of the State of New York. You waive any objections regarding the jurisdiction of these courts and the venue at these locations.</p>
            
            <h2>Waiver and Severability Clause</h2>
            <p>If theFroggers waives a provision of these Terms of Use, it does not imply a continuous waiver of this or any other provision. Failure to enforce a right or provision does not constitute a permanent waiver. If any provision of these Terms of Use is found by a competent court to be invalid, illegal, or unenforceable, that provision will be deleted or reduced to the minimum necessary, so that the remaining provisions will continue in full force and effect.</p>
            
            <h2>Entire Agreement</h2>
            <p>These Terms of Use, along with our Privacy Policy, constitute the complete and sole agreement between you and theFroggers regarding the use of the services and replace any prior agreements, whether written or oral, regarding the services.</p>
            
            <h2>Your Feedback and Inquiries</h2>
            <p>The services are operated by theFroggers, located at 545 Channelside Drive A2408, Tampa, FL 33602. All notices of copyright infringement should be sent to the designated copyright agent mentioned in these Terms of Use, according to the instructions provided there. For all other feedback, technical inquiries, or communications regarding the services, please contact: thefroggers.io</p>
            
            <h2>Additional Terms for Buyers and Registered Users</h2>
            <p>We are pleased that you are interested in theFroggers platform, which is specifically intended for buyers of theFroggers NFTs and other registered users (hereinafter referred to as the "Platform").</p>
            
            <h3>Eligibility and Acceptance</h3>
            <p>These Terms of Use form an agreement between you and theFroggers ("theFroggers," "we," or "us"). They apply to your access to and use of the services provided by theFroggers (collectively referred to as the "theFroggers Platform"), specifically for buyers of NFTs and other registered users. Please read these terms carefully before using the theFroggers Platform. By using the theFroggers Platform or clicking "Accept" or "Agree" when this option is presented to you, you agree to these terms, as well as the Terms and Conditions and Privacy Policy, which are also incorporated into the agreement. We recommend that you read the section on disputes and class action waivers thoroughly, as it concerns your rights. If you do not agree to these terms or any of the provisions contained within, you may not use the theFroggers Platform. The use of theFroggers Platform is only permitted for individuals aged 18 or older. By using theFroggers Platform, you confirm that you meet the required age and legal requirements for entering into a contract with theFroggers. If you do not meet these requirements, you may not use the theFroggers Platform.</p>
            
            <h3>The theFroggers Platform</h3>
            <p>The theFroggers website is publicly accessible for browsing information and limited interaction. The theFroggers Platform enables buyers and other registered users (hereinafter referred to as "Buyers") to purchase theFroggers NFTs. Buyers are subject to these additional terms, as well as the general Terms and Conditions governing general access to the website.</p>
            
            <h3>Accounts and Registration</h3>
            <p>To use the theFroggers Platform as a buyer, you need a valid Metamask crypto wallet and an Ethereum address. You agree to use the theFroggers Platform only in conjunction with the offered services. Only real users are allowed to set up a buyer account. Each user may only use one account per person. You are required to provide us with complete and up-to-date registration information upon request, which may include your name, a valid email address (that was not created solely for accessing the theFroggers Platform), and a valid Ethereum address. Failure to comply with these requirements constitutes a violation of these terms.</p>
            
            <p>You may not (1) use another person's name to impersonate them; (2) use a name that infringes on another person's rights; (3) use offensive usernames; (4) register for more than one account; (5) register with false or fraudulent information. We reserve the right to refuse registration or suspend an account if you violate these terms. You are responsible for all activities on your account and must keep your password secure. If you detect a security breach or unauthorized use of your account, you must notify us immediately. We may terminate your account at any time without notice if you violate these terms.</p>
            
            <h3>Use of the theFroggers Platform</h3>
            <p>By using the theFroggers Platform, you agree to:</p>
            <ul>
              <li>Use the platform in accordance with all applicable laws and comply with all legal obligations related to the use of third-party services through the platform.</li>
              <li>Use the platform solely for personal, non-commercial purposes and not share or resell information or services, except if you are selling theFroggers NFTs you have purchased.</li>
              <li>Only use payment methods authorized by theFroggers.</li>
              <li>Not attempt to circumvent the platform's terms or encourage others to do so.</li>
              <li>Allow theFroggers to collect and store data on your use of the platform.</li>
              <li>Only maintain one account and not misuse it through multiple email addresses or login credentials.</li>
            </ul>
            
            <h3>Payments</h3>
            <p>When you purchase a theFroggers NFT, the entire transaction takes place on the Ethereum blockchain. All sales are final, and refunds are not provided. theFroggers has no control over transactions or the Ethereum network and cannot offer refunds. You are responsible for all risks associated with transactions, including financial losses resulting from the purchase or sale of theFroggers NFTs. You agree that all payments processed through the theFroggers Platform are final, and you will not contest any fees or payments made to third parties. The purchase of a theFroggers NFT and all related transactions require the payment of a gas fee on Ethereum, in addition to the purchase price of the theFroggers NFT.</p>
            
            <h3>Changes and Terminations</h3>
            <p>We may make changes to the theFroggers Platform at any time, including adding, changing, or removing content, features, or pricing, without prior notice. Similarly, we may discontinue or modify the theFroggers Platform at our discretion without notice. However, you retain the rights acquired prior to any changes or the termination of access, unless otherwise specified by applicable law.</p>
            
            <h3>Disclaimers and Risk Awareness</h3>
            <p><strong>A. Disclaimers:</strong> The theFroggers Platform is provided "as is," without any express or implied warranties, including but not limited to warranties of title, merchantability, fitness for a particular purpose, or non-infringement of third-party rights. theFroggers does not guarantee the accuracy, completeness, or reliability of the materials available on the platform or the platform itself. All use of the theFroggers Platform is at your own risk, including financial losses from trading theFroggers NFTs.</p>
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