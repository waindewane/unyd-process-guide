import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'UNYD Process Guide',
  description: 'Dates, session structures, negotiation timelines, examples and official links for recurring UN processes.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="cloudflare-web-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"91205ae297964b458c7aec9ecbdb78f7"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
