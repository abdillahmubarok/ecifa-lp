import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Laptop, Handshake, Megaphone } from 'lucide-react';

const missionItems = [
  { icon: BrainCircuit, title: 'Riset Multidisiplin' },
  { icon: Laptop, title: 'Teknologi Pembelajaran' },
  { icon: Handshake, title: 'Kolaborasi Strategis' },
  { icon: Megaphone, title: 'Penyebaran Hasil Riset' },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mengenal Ecifa.id</h2>
          <p className="text-lg text-muted-foreground">
            Ecifa.id didirikan atas keprihatinan terhadap tantangan kompleks dalam sistem pendidikan Indonesia. Kami adalah lembaga independen yang berkomitmen untuk menyediakan landasan bukti yang kuat bagi para pengambil kebijakan, pendidik, dan inovator.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Visi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi pusat unggulan riset pendidikan di Indonesia yang diakui secara nasional dan internasional, serta berkontribusi nyata pada peningkatan mutu dan pemerataan akses pendidikan.
            </p>
            <h3 className="text-2xl font-semibold text-primary pt-4">Misi Kami</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {missionItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <Image src="https://placehold.co/600x400.png" alt="Diskusi tim Ecifa.id" layout="fill" objectFit="cover" data-ai-hint="academic discussion" />
          </div>
        </div>
      </div>
    </section>
  );
}
