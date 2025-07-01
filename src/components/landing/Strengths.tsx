import { Database, Users2, MapPin, Network } from 'lucide-react';

const strengths = [
  { icon: Database, title: 'Berbasis Data & Bukti', description: 'Setiap rekomendasi kami didasarkan pada analisis data yang mendalam dan bukti empiris yang kuat.' },
  { icon: Users2, title: 'Tim Ahli Multidisiplin', description: 'Tim kami terdiri dari pakar pendidikan, ilmuwan data, sosiolog, dan teknolog dari berbagai latar belakang.' },
  { icon: MapPin, title: 'Fokus Konteks Indonesia', description: 'Kami memahami nuansa lokal dan merancang solusi yang relevan dengan realitas pendidikan di Indonesia.' },
  { icon: Network, title: 'Jaringan Luas', description: 'Kolaborasi kami membentang dari pembuat kebijakan di tingkat nasional hingga praktisi di sekolah-sekolah.' },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mengapa Berkolaborasi dengan Kami?</h2>
          <p className="text-lg text-muted-foreground">
            Kami menawarkan pendekatan yang unik dan komprehensif, didukung oleh keunggulan yang menjadi fondasi kerja kami.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <item.icon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
