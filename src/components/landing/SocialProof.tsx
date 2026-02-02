import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const partners = [
  { name: 'Kementerian Pendidikan', logo: 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/9/9c/Logo_Kemendikbud.png' },
  { name: 'Universitas Indonesia', logo: 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/id/0/0b/Logo_Universitas_Indonesia.png' },
  { name: 'Telkom Indonesia', logo: 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Telkom_Indonesia_2013.svg/1200px-Telkom_Indonesia_2013.svg.png' },
  { name: 'BRIN', logo: 'https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Logo_BRIN.png/1200px-Logo_BRIN.png' },
];

const testimonials = [
  {
    quote: "Riset Ecifa.id memberikan wawasan yang sangat mendalam bagi pengembangan kurikulum kami. Sangat relevan dengan konteks lokal.",
    author: "Dr. Ahmad Sudrajat",
    role: "Kepala Dinas Pendidikan Daerah"
  },
  {
    quote: "Kolaborasi dengan Ecifa.id membantu kami mengintegrasikan teknologi ke dalam kelas dengan cara yang benar-benar bermakna.",
    author: "Siti Aminah, M.Pd",
    role: "Kepala Sekolah Inovatif"
  },
  {
    quote: "Data yang disediakan Ecifa.id sangat akurat dan membantu kami mengambil keputusan kebijakan yang berbasis bukti.",
    author: "Budi Santoso",
    role: "Analis Kebijakan Publik"
  }
];

export function Partners() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground font-semibold mb-10 uppercase tracking-widest text-sm">Dipercaya Oleh Institusi Terkemuka</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <div key={i} className="relative w-32 h-12 md:w-40 md:h-16">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Apa Kata Mitra Kami</h2>
          <p className="text-lg text-muted-foreground">
            Dampak nyata dari riset dan kolaborasi kami di lapangan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-lg bg-background/50 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent/20 mb-4" />
                <p className="text-lg italic mb-6 text-foreground/80">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-primary">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
