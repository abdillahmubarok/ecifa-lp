import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { BrainCircuit, Laptop, Handshake, Megaphone, Database, UsersRound, MapPin, Network, Eye, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | Ecifa.id',
  description: 'Mengenal visi, misi, dan keunggulan Ecifa.id sebagai lembaga riset pendidikan terdepan di Indonesia.',
};

const missionItems = [
  { icon: BrainCircuit, title: 'Riset Multidisiplin', description: 'Menjalankan riset yang mendalam dengan pendekatan dari berbagai disiplin ilmu untuk memahami isu pendidikan secara holistik.' },
  { icon: Laptop, title: 'Teknologi Pembelajaran', description: 'Merancang dan mengevaluasi pemanfaatan teknologi untuk menciptakan pengalaman belajar yang efektif dan merata.' },
  { icon: Handshake, title: 'Kolaborasi Strategis', description: 'Membangun jaringan kerjasama dengan pemerintah, sekolah, industri, dan komunitas untuk implementasi solusi yang berdampak.' },
  { icon: Megaphone, title: 'Diseminasi Riset', description: 'Menyebarluaskan hasil riset secara luas dan mudah diakses untuk menginformasikan kebijakan dan praktik pendidikan.' },
];

const strengths = [
  { icon: Database, title: 'Berbasis Data & Bukti', description: 'Setiap rekomendasi kami didasarkan pada analisis data yang mendalam dan bukti empiris yang kuat.' },
  { icon: UsersRound, title: 'Tim Ahli Multidisiplin', description: 'Tim kami terdiri dari pakar pendidikan, ilmuwan data, sosiolog, dan teknolog dari berbagai latar belakang.' },
  { icon: MapPin, title: 'Fokus Konteks Indonesia', description: 'Kami memahami nuansa lokal dan merancang solusi yang relevan dengan realitas pendidikan di Indonesia.' },
  { icon: Network, title: 'Jaringan Kolaborasi Luas', description: 'Kolaborasi kami membentang dari pembuat kebijakan di tingkat nasional hingga praktisi di sekolah-sekolah.' },
];

export default function TentangPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">Tentang Ecifa.id</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Mendorong transformasi pendidikan Indonesia melalui riset, inovasi, dan kolaborasi strategis.</p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" alt="Diskusi tim Ecifa.id" layout="fill" objectFit="cover" data-ai-hint="team planning" />
            </div>
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
               <div className="text-center lg:text-left max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mengenal Kami</h2>
                <p className="text-lg text-muted-foreground">
                  Ecifa.id didirikan atas keprihatinan terhadap tantangan kompleks dalam sistem pendidikan Indonesia. Kami adalah lembaga independen yang berkomitmen untuk menyediakan landasan bukti yang kuat bagi para pengambil kebijakan, pendidik, dan inovator.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center lg:text-left">
                <div className="space-y-2">
                  <Eye className="h-10 w-10 mx-auto lg:mx-0 text-accent"/>
                  <h3 className="text-2xl font-bold text-primary">Visi Kami</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Menjadi pusat unggulan riset pendidikan yang berkontribusi nyata pada peningkatan mutu dan pemerataan akses pendidikan di Indonesia.
                  </p>
                </div>
                 <div className="space-y-2">
                  <Lightbulb className="h-10 w-10 mx-auto lg:mx-0 text-accent"/>
                  <h3 className="text-2xl font-bold text-primary">Misi Kami</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Menghasilkan riset berkualitas, mengembangkan inovasi, memfasilitasi kolaborasi, dan menyebarkan pengetahuan untuk transformasi pendidikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Misi Section */}
       <section id="mission" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Empat Pilar Misi Kami</h2>
            <p className="text-lg text-muted-foreground">
              Misi kami dijalankan melalui empat pilar utama yang saling bersinergi untuk menciptakan dampak maksimal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionItems.map((item, index) => (
              <Card key={index} className="flex flex-col text-center p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-t-4 border-accent rounded-xl animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-5">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-primary text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Keunggulan Kami</h2>
            <p className="text-lg text-muted-foreground">
              Kami menawarkan pendekatan yang unik dan komprehensif, didukung oleh keunggulan yang menjadi fondasi kerja kami.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {strengths.map((item, index) => (
              <Card key={index} className="p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
