import Hero from '@/components/landing/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked, Cpu, FileCheck2, GraduationCap, ArrowRight, Database, UsersRound, MapPin, Network, Megaphone, Handshake, Laptop, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getPublications } from '@/services/wordpress';
import PublicationCard from '@/components/cards/PublicationCard';
import { Partners, Testimonials } from '@/components/landing/SocialProof';

const focusAreas = [
  { icon: BookMarked, title: 'Kurikulum & Pedagogi' },
  { icon: Cpu, title: 'Teknologi Pendidikan' },
  { icon: FileCheck2, title: 'Kebijakan & Evaluasi' },
  { icon: GraduationCap, title: 'Pengembangan Pendidik' },
];

export default async function Home() {
  const latestPublications = await getPublications({ per_page: 3 }) ?? [];

  return (
    <>
      <Hero />
      <Partners />

      {/* About Us Summary */}
      <section id="about-summary" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl animate-fade-in-up">
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" alt="Diskusi tim Ecifa.id" fill className="object-cover" data-ai-hint="academic discussion" />
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Lembaga Riset Independen untuk Pendidikan Indonesia</h2>
              <p className="text-lg text-muted-foreground">
                Ecifa.id didirikan atas keprihatinan terhadap tantangan kompleks dalam sistem pendidikan Indonesia. Kami menyediakan landasan bukti yang kuat bagi para pengambil kebijakan, pendidik, dan inovator untuk mendorong transformasi.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-8 w-8 text-accent" />
                  <span className="font-semibold">Riset Multidisiplin</span>
                </div>
                <div className="flex items-center gap-3">
                  <Laptop className="h-8 w-8 text-accent" />
                  <span className="font-semibold">Teknologi Pembelajaran</span>
                </div>
                <div className="flex items-center gap-3">
                  <Handshake className="h-8 w-8 text-accent" />
                  <span className="font-semibold">Kolaborasi Strategis</span>
                </div>
                <div className="flex items-center gap-3">
                  <Megaphone className="h-8 w-8 text-accent" />
                  <span className="font-semibold">Diseminasi Riset</span>
                </div>
              </div>
              <Button asChild size="lg" className="mt-6">
                <Link href="/tentang">
                  Pelajari Visi & Misi Kami <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Summary */}
      <section id="focus-summary" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Area Fokus Riset</h2>
            <p className="text-lg text-muted-foreground">
              Riset kami terpusat pada area-area kunci yang memiliki potensi transformatif bagi ekosistem pendidikan di Indonesia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="text-center p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-5">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <area.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl text-primary font-bold">{area.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/riset">
                Lihat Detail Area Riset <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Publications Summary */}
      <section id="publications-summary" className="py-20 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Riset & Publikasi Terbaru</h2>
            <p className="text-lg text-muted-foreground">
              Jelajahi temuan terbaru kami yang memberikan wawasan mendalam tentang berbagai isu penting dalam dunia pendidikan.
            </p>
          </div>
          
          {latestPublications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPublications.map((pub, index) => (
                 <div key={pub.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <PublicationCard publication={pub} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-muted-foreground">Gagal memuat publikasi. Silakan coba lagi nanti.</p>
            </div>
          )}

           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/publikasi">
                Lihat Semua Publikasi <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Memajukan Pendidikan Indonesia?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Mari berkolaborasi untuk menciptakan solusi pendidikan yang berbasis data dan berdampak nyata bagi generasi mendatang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
              <Link href="/kontak">Mulai Kolaborasi</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10 font-bold px-8">
              <Link href="/tentang">Pelajari Visi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
