import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Laptop, Handshake, Megaphone } from 'lucide-react';

const missionItems = [
  { icon: BrainCircuit, title: 'Riset Multidisiplin' },
  { icon: Laptop, title: 'Teknologi Pembelajaran' },
  { icon: Handshake, title: 'Kolaborasi Strategis' },
  { icon: Megaphone, title: 'Diseminasi Riset' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mengenal Ecifa.id</h2>
          <p className="text-lg text-muted-foreground">
            Ecifa.id didirikan atas keprihatinan terhadap tantangan kompleks dalam sistem pendidikan Indonesia. Kami adalah lembaga independen yang berkomitmen untuk menyediakan landasan bukti yang kuat bagi para pengambil kebijakan, pendidik, dan inovator.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://placehold.co/600x800.png" alt="Diskusi tim Ecifa.id" layout="fill" objectFit="cover" data-ai-hint="academic discussion" />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Visi Kami</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Menjadi pusat unggulan riset pendidikan di Indonesia yang diakui secara nasional dan internasional, serta berkontribusi nyata pada peningkatan mutu dan pemerataan akses pendidikan.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-5">Misi Kami</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {missionItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg mt-1">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-lg">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">Deskripsi singkat misi</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
