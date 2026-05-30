import type { Metadata } from 'next';
import { Inter, Open_Sans, Poppins, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PabrikaPH - Find Trusted Philippine Manufacturers',
  description:
    'Connect with verified Philippine manufacturers, suppliers, and wholesalers. Find reliable suppliers for your business in one trusted platform.',
  keywords: [
    'manufacturer',
    'supplier',
    'wholesale',
    'factory',
    'Philippines',
    'sourcing',
    'B2B',
  ],
  authors: [{ name: 'PabrikaPH Team' }],
  creator: 'PabrikaPH',
  publisher: 'PabrikaPH',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://pabrika.ph',
    siteName: 'PabrikaPH',
    title: 'PabrikaPH - Find Trusted Philippine Manufacturers',
    description:
      'Connect with verified Philippine manufacturers and suppliers',
    images: [
      {
        url: 'https://pabrika.ph/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PabrikaPH',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${openSans.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <body className="font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
