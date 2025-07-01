import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative h-[90vh] min-h-[600px] flex items-center"
    >
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Kolaborasi riset pendidikan modern"
        fill
        className="object-cover"
        data-ai-hint="modern education"
        priority
      />
      
      <div className="relative z-20 container px-4 mx-auto text-left text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Mendorong Transformasi Pendidikan Indonesia Melalui Riset dan Inovasi
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
            Ecifa.id adalah lembaga riset dan pengembangan yang berdedikasi untuk menciptakan solusi berbasis data bagi tantangan pendidikan di Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg">
              <Link href="#about">Pelajari Lebih Lanjut</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-lg">
              <Link href="#publications">Lihat Riset Kami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
