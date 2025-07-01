import Hero from '@/components/landing/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked, Cpu, FileCheck2, GraduationCap, ArrowRight, Database, UsersRound, MapPin, Network, Megaphone, Handshake, Laptop, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const focusAreas = [
  { icon: BookMarked, title: 'Kurikulum & Pedagogi' },
  { icon: Cpu, title: 'Teknologi Pendidikan' },
  { icon: FileCheck2, title: 'Kebijakan & Evaluasi' },
  { icon: GraduationCap, title: 'Pengembangan Pendidik' },
];

const publications = [
  {
    title: 'Dampak Pembelajaran Jarak Jauh',
    summary: 'Studi longitudinal dampak PJJ terhadap siswa di wilayah urban dan rural.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'education students',
    link: '#',
  },
  {
    title: 'Efektivitas Platform EdTech Adaptif',
    summary: 'Evaluasi komparatif platform pembelajaran adaptif dengan metode konvensional.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'technology math',
    link: '#',
  },
  {
    title: 'Model Pengembangan Profesional Guru',
    summary: 'Laporan implementasi dan evaluasi model PKB berbasis komunitas belajar.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'teachers meeting',
    link: '#',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Us Summary */}
      <section id="about-summary" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl animate-fade-in-up">
              <Image src="https://placehold.co/600x800.png" alt="Diskusi tim Ecifa.id" layout="fill" objectFit="cover" data-ai-hint="academic discussion" />
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
      <section id="publications-summary" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Riset & Publikasi Terbaru</h2>
            <p className="text-lg text-muted-foreground">
              Jelajahi temuan terbaru kami yang memberikan wawasan mendalam tentang berbagai isu penting dalam dunia pendidikan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card rounded-2xl group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden h-56">
                  <Image
                    src={pub.imageUrl}
                    alt={pub.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={pub.aiHint}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl text-primary font-bold leading-snug flex-grow">{pub.title}</h3>
                  <p className="text-muted-foreground text-base mt-2">{pub.summary}</p>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/publikasi">
                Lihat Semua Publikasi <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
