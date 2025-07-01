"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpenCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/tentang', label: 'Tentang' },
  { href: '/riset', label: 'Riset' },
  { href: '/publikasi', label: 'Publikasi' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled || isOpen ? "bg-background/80 backdrop-blur-sm shadow-md border-b" : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookOpenCheck className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl text-primary">Ecifa.id</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost" 
              className={cn(
                "text-lg font-medium",
                pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
              )}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/kontak">Hubungi Kami</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center border-b pb-6">
                     <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                        <BookOpenCheck className="h-6 w-6 text-primary" />
                        <span className="font-bold text-lg text-primary">Ecifa.id</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-6 w-6" />
                      </Button>
                  </div>
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} 
                        className={cn(
                          "text-2xl font-medium transition-colors hover:text-primary",
                          pathname === link.href ? "text-primary" : "text-foreground/80"
                        )} 
                        onClick={() => setIsOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8">
                     <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold" size="lg">
                        <Link href="/kontak" onClick={() => setIsOpen(false)}>Hubungi Kami</Link>
                      </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
