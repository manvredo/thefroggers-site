import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css'

import classNames from "classnames";
import { Flex } from "@once-ui-system/core";
import { Providers } from '@/components';
import { fonts } from '@/resources';

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
          {children}
        </body>
      </Providers>
    </Flex>
  );
}
