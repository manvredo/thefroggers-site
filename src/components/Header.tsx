"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, theFroggers, gallery } from "@/resources";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide fillWidth position="fixed" height="80" zIndex={9} />
      <Fade fillWidth position="fixed" top="0" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        style={{ justifyContent: 'center' }}
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth style={{ alignItems: 'center' }} textVariant="body-default-s">
          {/* theFroggers Logo */}
          <div style={{ marginRight: '8cm' }}>
            <img 
              src="/images/logo.png" 
              alt="theFroggers" 
              style={{
                width: '178px',
                height: '54px',
                cursor: 'pointer',
                objectFit: 'contain'
              }}
              onClick={() => window.location.href = '/'}
            />
          </div>
        </Flex>
        <Flex fillWidth style={{ justifyContent: 'center' }}>
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            style={{ justifyContent: 'center' }}
            zIndex={1}
          >
            <Flex gap="4" style={{ alignItems: 'center', fontFamily: "'Open Sans', sans-serif !important" }} textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <ToggleButton
                  prefixIcon="person"
                  href="/about"
                  label={about.label}
                  selected={pathname === "/about"}
                />
              )}
              {routes["/mint"] && (
                <ToggleButton
                  prefixIcon="grid"
                  href="/mint"
                  label={work.label}
                  selected={pathname.startsWith("/mint")}
                />
              )}
              {routes["/theFroggers"] && (
                <ToggleButton
                  prefixIcon="grid"
                  href="/theFroggers"
                  label={theFroggers.label}
                  selected={pathname.startsWith("/theFroggers")}
                />
              )}
              {routes["/community"] && (
                <ToggleButton
                  prefixIcon="book"
                  href="/community"
                  label={blog.label}
                  selected={pathname.startsWith("/community")}
                />
              )}
              {routes["/nfts"] && (
                <ToggleButton
                  prefixIcon="gallery"
                  href="/nfts"
                  label={gallery.label}
                  selected={pathname.startsWith("/nfts")}
                />
              )}
              {/* OpenSea Link statt Theme Toggle */}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <a 
                href="https://opensea.io/collection/thefroggers" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '8px',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <img 
                  src="/images/opensea_01.png" 
                  alt="OpenSea" 
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'contain'
                  }}
                />
              </a>
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          <Flex
            paddingRight="12"
            style={{ justifyContent: 'flex-end', alignItems: 'center' }}
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide>{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};