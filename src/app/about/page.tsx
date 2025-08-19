'use client';

// About Page

import { Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import React from 'react';
import styles from './page.module.scss';

export default function About() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/about"
        title="About - theFroggers"
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

          {/* Frogger_About_01 */}
          <div className={styles.froggerAbout}></div>

          {/* 10000Froggers_01 */}
          <div className={styles.tenThousandFroggers}></div>

          {/* frog_01 */}
          <div className={styles.frog_01 }></div>

          {/* Froggers_01 */}
          <div className={styles.froggersText}>Froggers</div>

          {/* TheFroggers collection text */}
          <div className={styles.collectionText}>
            TheFroggers is a collection of 10,000 unique NFTs on the blockchain, created by Manvredo in January 2022 to expand and develop the story of the Froggers in the 3D world of Frogtopia.
          </div>

          {/* Ballon_Yellow_Laugh 1 */}
          <div className={styles.ballonYellowLaugh}></div>

          {/* ABOUT */}
          <div className={styles.aboutTitle}>ABOUT</div>

          {/* Ballon_Yellow_Frogger 1 */}
          <div className={styles.ballonYellowFrogger}></div>

          {/* OUR MISSION */}
          <div className={styles.ourMissionTitle}>OUR MISSION</div>

          {/* OUR_MSSION_Text_01 */}
          <div className={styles.ourMissionText01}>
            At theFroggers, our mission is to provide a platform that excites both collectors and art enthusiasts through innovative use of blockchain technology and digital art. 
          </div>

          {/* OUR_MSSION_Text_02 */}
          <div className={styles.ourMissionText02}>
            We aim to build a thriving community centered around collaborative storytelling and creative interactions.
          </div>

          {/* ORIGINS_Text_01 */}
          <div className={styles.originsText01}>
            The idea behind TheFroggers stemmed from the vision to create an engaging digital world where creativity, community, and technology converge. Each of the 10,000 Froggers was designed with individual character and style, forming a diverse and vibrant urban society within the metaverse.
          </div>

          {/* Ballon_White_Heart 1 */}
          <div className={styles.ballonWhiteHeart}></div>

          {/* ORIGINS */}
          <div className={styles.originsTitle}>ORIGINS</div>

          {/* Frogtopia: The World of Froggers */}
          <div className={styles.frogtopiaTitle}>
            Frogtopia: The World of Froggers
          </div>

          {/* Rectangle_02 */}
          <div className={styles.rectangle02}></div>

          {/* Frogtopia_Text_01 */}
          <div className={styles.frogtopiaText01}>
            Frogtopia is a vibrant 3D world within the metaverse, the beating heart of the Frogger community. Here, all Froggers live, leap, and express themselves in countless unique ways. Each one is truly one-of-a-kind: individually dressed in styles that range from sharp business suits to wild party gear, magical robes, or laid-back streetwear, and rich in character, with personalities as diverse as the world they inhabit. Some are dreamers, floating through life with roller skates and glowing butterflies, others are tough bosses draped in golden chains, while wanderers roam with harmonicas and stories to tell.
          </div>

          {/* Frogtopia_Text_02 */}
          <div className={styles.frogtopiaText02}>
            In Frogtopia, the Froggers are never still. They dance in neon discos, paint and invent in buzzing studios, and trade, argue, or celebrate in the busy streets of the Metropolis. Every Frogger adds their own spark to the chaos and charm of this digital society, making it as unpredictable as it is alive. And the best part? Somewhere in this world, there&apos;s a Frogger that mirrors you.
          </div>

          {/* NEUES LOGO */}
          <div className={styles.logoOverlay}></div>

          {/* --- HIER KOMMEN DIE 5 NEUEN KLASSEN --- */}
          {/* Rectangle_01 */}
          <div className={styles.rectangle01}></div>

          {/* Vision Title */}
          <div className={styles.visionTitle}>Our Vision</div>

          {/* Vision Text 01 */}
          <div className={styles.visionText01}>
            With a clear vision for the future, we strive to establish TheFroggers as a leading entertainment brand in the metaverse. We aim to push the boundaries of digital art and collectibles while upholding values of creativity, inclusivity, and innovation.
          </div>

          {/* Future Developments */}
          <div className={styles.futureTitle}>Future Developments</div>

          {/* Future Text 01 */}
          <div className={styles.futureText01}>
            We are committed to continuously expanding and deepening the world of Frogtopia. Planned future developments include animated content, interactive games, comics, and merchandise, enhancing the Froggers&apos; experience and creating new opportunities for our community.
          </div>
						
          {/* GET IN TOUCH BUTTON SECTION */}
          {/* Rectangle_01 - Button Background */}
          <div className={styles.buttonBackground}></div>
          
          {/* Get in touch Text */}
          <div className={styles.buttonText}>
            Get in touch
          </div>
        </div>
      </div>
    </>
  );
}