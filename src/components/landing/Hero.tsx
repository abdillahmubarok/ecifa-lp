import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative h-screen min-h-[700px] flex items-center -mt-20 bg-primary"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Kolaborasi riset pendidikan modern"
        fill
        className="object-cover"
        data-ai-hint="modern education"
        priority
      />
      
      <div className="relative z-20 container px-4 mx-auto text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Mendorong Transformasi Pendidikan Melalui Riset & Inovasi
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Ecifa.id adalah lembaga riset dan pengembangan independen yang menciptakan solusi berbasis data untuk tantangan pendidikan di Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-7 text-lg font-bold">
              <Link href="/tentang">Pelajari Lebih Lanjut</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-10 py-7 text-lg font-bold">
              <Link href="/riset">Lihat Riset Kami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
