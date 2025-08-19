'use client';

// Landing Page - Root (/) - RESPONSIVE VERSION
import { Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import React from 'react';
import styles from './page.module.scss';

export default function Landing() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/"
        title="theFroggers - Enter the Frogger World"
        description="Welcome to theFroggers - Unique NFT Collection. Enter the digital frog universe."
        image={`/api/og/generate?title=${encodeURIComponent("theFroggers NFT")}`}
      />

      <div className={styles.container}>
        {/* Background Container */}
        <div className={styles.bgContainer}></div>
        
        <div className={styles.desktop}>
          {/* Header Section - Flexbox Layout */}
          <div className={styles.headerSection}>
            
            {/* Left Section - Frogger Bubble */}
            <div className={styles.leftSection}>
              <div className={styles.froggerBubble}></div>
            </div>

            {/* Center Section - Text Elements */}
            <div className={styles.centerSection}>
              <div className={styles.textRibbit}>
                Ribbit, Ribbit From Pond to Pixel Hey!
              </div>
              <div className={styles.textFroggers}>
                We are 10,000 Froggers. One Blockchain. Endless Hops
              </div>
              <div className={styles.textMetaverse}>
                Frogs in the Metaverse — Because Why Not?
              </div>
            </div>

            {/* Right Section - Social Media & Logo */}
            <div className={styles.rightSection}>
              {/* Social Media Icons */}
              <div className={styles.socialIcons}>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.socialIcon} ${styles.youtube}`}
                  aria-label="YouTube"
                ></a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.socialIcon} ${styles.twitter}`}
                  aria-label="Twitter/X"
                ></a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.socialIcon} ${styles.instagram}`}
                  aria-label="Instagram"
                ></a>
              </div>

              {/* Logo Halo Video */}
              <div className={styles.logoHalo}>
                <video 
                  className={styles.logoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="theFroggers Logo Animation"
                >
                  <source src="/videos/Frog_Halo_01.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Main Video Section */}
          <div className={styles.videoSection}>
            <div className={styles.stage}>
              <video 
                className={styles.stageVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="theFroggers Introduction Video"
              >
                <source src="/videos/theFroggers_Intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}