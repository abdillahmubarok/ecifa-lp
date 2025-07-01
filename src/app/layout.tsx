import type {Metadata} from 'next';
import { Poppins } from 'next/font/google'
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

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
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
