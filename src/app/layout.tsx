import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Ecifa.id | Riset dan Inovasi Pendidikan Indonesia',
  description: 'Mendorong Transformasi Pendidikan Indonesia Melalui Riset dan Inovasi. Ecifa.id adalah lembaga riset dan pengembangan independen untuk sektor pendidikan.',
  keywords: 'riset pendidikan Indonesia, inovasi pendidikan, pengembangan kurikulum, teknologi pendidikan, kebijakan pendidikan Indonesia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
