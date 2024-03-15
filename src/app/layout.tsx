import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import './styles/animations.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jeff Mulkin - Software Engineer',
  description: "Hey there, I'm a Front End Sofware Engineer. Welcome to my personal website."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
