import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills ? about.technical.skills.map((skill) => skill.title) : [],
    },
  ];
  
  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        {/* Background Container */}
        <div className={styles.bgContainer}></div>
        
        {/* Frogger Bubble */}
        <div className={styles.froggerBubble}></div>
        
        {/* Text Elements */}
        <div className={styles.textRibbit}>
          We are the bridge between the real and digital worlds, where our stories continue to evolve and new adventures await.
        </div>
        <div className={styles.textFroggers}>
          TheFroggers is a collection of 10,000 unique NFTs living in the vibrant world of Frogtopia.
        </div>
        <div className={styles.textMetaverse}>
          Join us in exploring the infinite possibilities of the metaverse, where creativity knows no bounds.
        </div>
        
        {/* Social Icons */}
        <a href="https://youtube.com/@thefroggers" className={styles.youtube}></a>
        <a href="https://twitter.com/thefroggers" className={styles.twitter}></a>
        <a href="https://instagram.com/thefroggers.io" className={styles.instagram}></a>
        
        {/* Logo with Video */}
        <div className={styles.logoHalo}>
          <video className={styles.logoVideo} autoPlay muted loop>
            <source src="/videos/logo-animation.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Frogger Images */}
        <div className={styles.froggerAbout}></div>
        <div className={styles.tenThousandFroggers}></div>
        <div className={styles.froggersText}>Froggers</div>
        <div className={styles.aboutBalloon}></div>
        <div className={styles.ballonYellowFrogger}></div>
        
        {/* TheFroggers Logo an der gewünschten Position */}
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
      </div>
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
    </div>
  );
}