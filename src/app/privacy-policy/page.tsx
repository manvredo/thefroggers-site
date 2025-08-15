'use client';

// Privacy Policy Page
import { Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import React from 'react';
import styles from './page.module.scss';

export default function PrivacyPolicy() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/privacy-policy"
        title="Privacy Policy - theFroggers"
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
        </div>
      </div>
    </>
  );
}
