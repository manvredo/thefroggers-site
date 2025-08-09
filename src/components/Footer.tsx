import { Flex, SmartLink, Text, Button } from "@once-ui-system/core";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Flex
      as="footer"
      fillWidth
      padding="24"
      horizontal="center"
      mobileDirection="column"
      style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.3)'
      }}
    >
      <Flex
        className={styles.mobile}
        maxWidth="l"
        paddingY="16"
        paddingX="16"
        gap="24"
        direction="column"
        horizontal="center"
      >
        
        {/* Footer Links */}
        <Flex 
          gap="24" 
          horizontal="center" 
          mobileDirection="column"
          wrap
        >
          <SmartLink href="/privacy-policy">
            <Button variant="tertiary" size="s">
              PRIVACY POLICY
            </Button>
          </SmartLink>
          
          <SmartLink href="/shop">
            <Button variant="tertiary" size="s">
              SHOP
            </Button>
          </SmartLink>
          
          <SmartLink href="/contact">
            <Button variant="tertiary" size="s">
              CONTACT US
            </Button>
          </SmartLink>
          
          <SmartLink href="/terms">
            <Button variant="tertiary" size="s">
              TERMS & CONDITIONS
            </Button>
          </SmartLink>
          
          <SmartLink href="/nft-license">
            <Button variant="tertiary" size="s">
              NFT LICENSE
            </Button>
          </SmartLink>
          
          <SmartLink href="/imprint">
            <Button variant="tertiary" size="s">
              IMPRINT
            </Button>
          </SmartLink>
        </Flex>

        {/* Copyright */}
        <Flex horizontal="center">
          <Text 
            variant="body-default-s" 
            onBackground="neutral-weak"
          >
            © {currentYear} theFroggers - All rights reserved
          </Text>
        </Flex>
        
      </Flex>
      <Flex height="40" show="s"></Flex>
    </Flex>
  );
};
