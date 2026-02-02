import type {Metadata} from 'next';
import { Poppins } from 'next/font/google'
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ChatBot from '@/components/landing/ChatBot';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Ecifa.id | Riset dan Inovasi Pendidikan Indonesia',
  description: 'Mendorong Transformasi Pendidikan Indonesia Melalui Riset dan Inovasi. Ecifa.id adalah lembaga riset dan pengembangan independen untuk sektor pendidikan.',
  keywords: 'riset pendidikan Indonesia, inovasi pendidikan, pengembangan kurikulum, teknologi pendidikan, kebijakan pendidikan Indonesia',
  icons: {
    icon: 'https://storage-mubarokah.s3.ap-southeast-3.amazonaws.com/ecifa-id/logo/ecifa-logo.webp',
    apple: 'https://storage-mubarokah.s3.ap-southeast-3.amazonaws.com/ecifa-id/logo/ecifa-logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-body antialiased bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <ChatBot />
        <Toaster />
      </body>
    </html>
  );
}
