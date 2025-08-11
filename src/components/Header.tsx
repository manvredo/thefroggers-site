"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, theFroggers, gallery } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
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
            <Flex gap="4" style={{ alignItems: 'center' }} textVariant="body-default-s" suppressHydrationWarning>
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
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
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
