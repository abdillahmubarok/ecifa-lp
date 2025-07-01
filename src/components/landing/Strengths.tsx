import { Database, UsersRound, MapPin, Network } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const strengths = [
  { icon: Database, title: 'Berbasis Data & Bukti', description: 'Setiap rekomendasi kami didasarkan pada analisis data yang mendalam dan bukti empiris yang kuat.' },
  { icon: UsersRound, title: 'Tim Ahli Multidisiplin', description: 'Tim kami terdiri dari pakar pendidikan, ilmuwan data, sosiolog, dan teknolog dari berbagai latar belakang.' },
  { icon: MapPin, title: 'Fokus Konteks Indonesia', description: 'Kami memahami nuansa lokal dan merancang solusi yang relevan dengan realitas pendidikan di Indonesia.' },
  { icon: Network, title: 'Jaringan Kolaborasi Luas', description: 'Kolaborasi kami membentang dari pembuat kebijakan di tingkat nasional hingga praktisi di sekolah-sekolah.' },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mengapa Berkolaborasi dengan Kami?</h2>
          <p className="text-lg text-muted-foreground">
            Kami menawarkan pendekatan yang unik dan komprehensif, didukung oleh keunggulan yang menjadi fondasi kerja kami.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {strengths.map((item, index) => (
            <Card key={index} className="p-8 flex items-start gap-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
