import type { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://react-native-kernel.vercel.app'),
  title: {
    default: 'react-native-kernel',
    template: '%s – react-native-kernel',
  },
  description:
    'An all-in-one, zero-dependency native utility toolkit for React Native — system info, networking, and secure storage, with more on the way.',
  applicationName: 'react-native-kernel',
  keywords: [
    'react-native',
    'turbo module',
    'new architecture',
    'device info',
    'network state',
    'secure storage',
    'offline sync',
  ],
};

const banner = (
  <Banner storageKey="rnk-v0">
    react-native-kernel is in active development (v0.0.0) — APIs may change before v1.
  </Banner>
);

const navbar = (
  <Navbar
    logo={<b>react-native-kernel</b>}
    projectLink="https://github.com/your-org/react-native-kernel"
  />
);

const footer = (
  <Footer>
    {new Date().getFullYear()} © react-native-kernel. Built with Nextra.
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/your-org/kernel-docs/tree/main"
          footer={footer}
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
