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
          {/* ABOUT */}
          <div className={styles.aboutBalloon}></div>
          {/* Ballon_Yellow_Frogger 1 */}
          <div className={styles.ballonYellowFrogger}></div>
          
          {/* DEIN NEUES LOGO an Position X: 1245px, Y: 119px */}
          <div
            style={{
              position: "absolute",
              left: "1245px",
              top: "119px",
              width: "280.41px",
              height: "75.15px",
              backgroundImage: "url('/images/Logo_01 copy.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.21,
              zIndex: 1,
              pointerEvents: "none"
            }}
          />
          
          {/* ABOUT Text */}
          <div
            style={{
              position: "absolute",
              left: "294px",
              top: "390.86px",
              width: "211.72px",
              height: "82.62px",
              fontFamily: "'Annie Use Your Telescope'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "52px",
              color: "#BFBFBF",
              zIndex: 10
            }}
          >
            ABOUT
          </div>
          
          {/* Text_01 */}
          <div
            style={{
              position: "absolute",
              left: "313px",
              top: "508px",
              width: "239px",
              height: "200px",
              fontFamily: "'Outfit'",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "20px",
              lineHeight: "25px",
              color: "#AD9900",
              zIndex: 10
            }}
          >
            TheFroggers is a collection of 10,000 unique NFTs on the blockchain, created by Manvredo in January 2022 to expand and develop the story of the Froggers in the 3D world of Frogtopia.
          </div>
          
          {/* Ballon_Yellow_Laugh */}
          <div
            style={{
              position: "absolute",
              left: "316px",
              top: "395px",
              width: "374.39px",
              height: "374.39px",
              backgroundImage: "url('/images/Ballon_Yellow_Laugh.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "3px solid #9D8B00",
              borderRadius: "15px",
              zIndex: 9
            }}
          />
        </div>
      </div>
    </>
  );
}