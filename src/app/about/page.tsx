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
            [At theFroggers, our mission is to provide a platform that excites both collectors and art enthusiasts through innovative use of blockchain technology and digital art. ]
          </div>

          {/* OUR_MSSION_Text_02 */}
          <div className={styles.ourMissionText02}>
            [We aim to build a thriving community centered around collaborative storytelling and creative interactions.]
          </div>
          
          {/* NEUES LOGO */}
          <div className={styles.logoOverlay}></div>
        </div>
      </div>
    </>
  );
}