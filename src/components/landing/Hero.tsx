import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white"
    >
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Kolaborasi riset pendidikan"
        fill
        className="object-cover"
        data-ai-hint="research collaboration"
        priority
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 container px-4 mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Mendorong Transformasi Pendidikan Indonesia Melalui Riset dan Inovasi
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8">
          Ecifa.id adalah lembaga riset dan pengembangan yang berdedikasi untuk menciptakan solusi berbasis data bagi tantangan pendidikan di Indonesia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#about">Pelajari Lebih Lanjut</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="#publications">Lihat Riset Kami</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
