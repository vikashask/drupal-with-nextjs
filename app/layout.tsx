import { Footer, Header } from '@/components/layout';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Fresh & Healthy';
const siteSlogan = process.env.NEXT_PUBLIC_SITE_SLOGAN || 'Plant Based, Gluten Free, Made Fresh Daily';

export const metadata: Metadata = {
  title: {
    default: `${siteName} - ${siteSlogan}`,
    template: `%s | ${siteName}`,
  },
  description: siteSlogan,
  keywords: ['fresh food', 'healthy dips', 'plant based', 'gluten free', 'hummus', 'salads'],
  authors: [{ name: siteName }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
