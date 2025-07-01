import Link from 'next/link';
import { BookOpenCheck, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpenCheck className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl text-primary">Ecifa.id</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Riset dan pengembangan independen untuk transformasi pendidikan Indonesia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#focus" className="text-muted-foreground hover:text-primary transition-colors">Fokus Riset</Link></li>
              <li><Link href="#publications" className="text-muted-foreground hover:text-primary transition-colors">Publikasi</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Hubungi Kami</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@ecifa.id" className="text-muted-foreground hover:text-primary transition-colors">info@ecifa.id</a></li>
              <li><a href="mailto:kolaborasi@ecifa.id" className="text-muted-foreground hover:text-primary transition-colors">kolaborasi@ecifa.id</a></li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          &copy; {currentYear} Ecifa.id. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
