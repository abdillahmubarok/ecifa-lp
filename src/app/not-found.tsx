import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-primary/10 p-6 rounded-full mb-8">
        <FileQuestion className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-muted-foreground max-w-md mb-10 text-lg">
        Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          <ArrowLeft className="mr-2 h-5 w-5" /> Kembali ke Beranda
        </Link>
      </Button>
    </div>
  );
}
