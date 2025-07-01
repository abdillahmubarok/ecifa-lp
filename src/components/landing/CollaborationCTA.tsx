import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CollaborationCTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 md:py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Mari Bersama Memajukan Pendidikan Indonesia
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-10">
          Kami percaya kolaborasi adalah kunci. Apakah Anda dari institusi pemerintah, lembaga pendidikan, perusahaan, atau seorang peneliti, kami membuka pintu untuk bekerjasama.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-7 text-xl font-bold">
          <Link href="mailto:kolaborasi@ecifa.id">
            Hubungi Kami
          </Link>
        </Button>
      </div>
    </section>
  );
}
