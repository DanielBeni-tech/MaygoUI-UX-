import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maygo - Your Personal Health Ecosystem',
  description: 'Maygo is your personal health ecosystem, securely connected. Find medicines instantly, book appointments, and manage your health with AI assistance.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-surface-light antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
