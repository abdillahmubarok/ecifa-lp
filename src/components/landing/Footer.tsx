import Link from 'next/link';
import { BookOpenCheck, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { Button } from '../ui/button';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpenCheck className="h-8 w-8" />
              <span className="font-bold text-2xl">Ecifa.id</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm">
              Riset dan pengembangan independen untuk transformasi pendidikan Indonesia.
            </p>
            <div className="flex space-x-2 mt-6">
              <Button asChild size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Link href="#" aria-label="LinkedIn"><Linkedin /></Link>
              </Button>
              <Button asChild size="icon" variant="ghost" className="hover:bg-primary-foreground/10">
                <Link href="#" aria-label="Twitter"><Twitter /></Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-4 text-lg">Navigasi</h4>
            <ul className="space-y-3">
              <li><Link href="/tentang" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tentang Kami</Link></li>
              <li><Link href="/riset" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Fokus Riset</Link></li>
              <li><Link href="/publikasi" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Publikasi</Link></li>
              <li><Link href="/kontak" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Kontak</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-bold mb-4 text-lg">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent"/>
                <a href="mailto:info@ecifa.id" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">info@ecifa.id</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent"/>
                <a href="mailto:kolaborasi@ecifa.id" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">kolaborasi@ecifa.id</a>
              </li>
            </ul>
          </div>

           <div className="md:col-span-3">
            <h4 className="font-bold mb-4 text-lg">Newsletter</h4>
            <p className="text-primary-foreground/70 mb-4 text-sm">Dapatkan update riset terbaru langsung di email Anda.</p>
            <NewsletterForm />
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          &copy; {currentYear} Ecifa.id. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
