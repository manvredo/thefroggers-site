import { MDXRemote } from 'next-mdx-remote/rsc';
import { Heading, Text, SmartLink } from '@once-ui-system/core';
import Image from 'next/image';
import { ReactElement } from 'react';

const components = {
  h1: ({ children }: any) => <Heading as="h1" variant="display-strong-l">{children}</Heading>,
  h2: ({ children }: any) => <Heading as="h2" variant="display-strong-m">{children}</Heading>,
  h3: ({ children }: any) => <Heading as="h3" variant="display-strong-s">{children}</Heading>,
  h4: ({ children }: any) => <Heading as="h4" variant="heading-strong-l">{children}</Heading>,
  h5: ({ children }: any) => <Heading as="h5" variant="heading-strong-m">{children}</Heading>,
  h6: ({ children }: any) => <Heading as="h6" variant="heading-strong-s">{children}</Heading>,
  p: ({ children }: any) => <Text variant="body-default-m">{children}</Text>,
  a: ({ href, children }: any) => <SmartLink href={href}>{children}</SmartLink>,
  img: ({ src, alt }: any) => <Image src={src} alt={alt || ''} width={800} height={600} style={{ width: '100%', height: 'auto' }} />,
  code: ({ children }: any) => <code style={{ backgroundColor: 'var(--neutral-alpha-weak)', padding: '0.2em 0.4em', borderRadius: '4px' }}>{children}</code>,
  pre: ({ children }: any) => <pre style={{ overflow: 'auto', backgroundColor: 'var(--neutral-alpha-weak)', padding: '1em', borderRadius: '8px' }}>{children}</pre>,
};

interface CustomMDXProps {
  source: string;
  components?: Record<string, (props: any) => ReactElement>;
}

export function CustomMDX({ source, components: customComponents }: CustomMDXProps) {
  return (
    <MDXRemote 
      source={source} 
      components={{ ...components, ...customComponents }}
    />
  );
}
