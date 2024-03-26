import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from './components/Providers';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Botanix Certify',
  description: 'Music Copy write on chain',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black-dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
