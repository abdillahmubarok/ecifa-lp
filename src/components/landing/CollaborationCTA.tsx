import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CollaborationCTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mari Bersama Memajukan Pendidikan Indonesia
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">
          Kami percaya kolaborasi adalah kunci. Apakah Anda dari institusi pemerintah, lembaga pendidikan, perusahaan, atau seorang peneliti, kami membuka pintu untuk bekerjasama.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="mailto:kolaborasi@ecifa.id">
            Hubungi Kami untuk Kolaborasi
          </Link>
        </Button>
      </div>
    </section>
  );
}
