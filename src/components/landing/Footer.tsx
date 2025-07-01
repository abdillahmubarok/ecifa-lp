import Link from 'next/link';
import { BookOpenCheck, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpenCheck className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-primary">Ecifa.id</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Riset dan pengembangan independen untuk transformasi pendidikan Indonesia.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin /></Link>
              <Link href="#" aria-label="Twitter" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter /></Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-bold text-primary mb-4 text-lg">Navigasi</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#focus" className="text-muted-foreground hover:text-primary transition-colors">Fokus Riset</Link></li>
              <li><Link href="#publications" className="text-muted-foreground hover:text-primary transition-colors">Publikasi</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-bold text-primary mb-4 text-lg">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li><a href="mailto:info@ecifa.id" className="text-muted-foreground hover:text-primary transition-colors">info@ecifa.id</a></li>
              <li><a href="mailto:kolaborasi@ecifa.id" className="text-muted-foreground hover:text-primary transition-colors">kolaborasi@ecifa.id</a></li>
              <li className="text-muted-foreground">Gedung Inovasi Lt. 5, Jakarta</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-background border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          &copy; {currentYear} Ecifa.id. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
