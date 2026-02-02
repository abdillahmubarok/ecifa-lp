'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-destructive/10 p-6 rounded-full mb-8">
        <AlertTriangle className="h-16 w-16 text-destructive" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Terjadi Kesalahan</h1>
      <p className="text-muted-foreground max-w-md mb-10 text-lg">
        Maaf, sistem mengalami kendala teknis saat memproses permintaan Anda.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => reset()} size="lg" variant="default">
          <RefreshCcw className="mr-2 h-5 w-5" /> Coba Lagi
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="/">Kembali ke Beranda</a>
        </Button>
      </div>
    </div>
  );
}
