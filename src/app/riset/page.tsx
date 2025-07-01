import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookMarked, Cpu, FileCheck2, GraduationCap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Area Fokus Riset | Ecifa.id',
  description: 'Jelajahi area fokus riset kami, mulai dari kurikulum dan pedagogi hingga kebijakan pendidikan dan pengembangan profesional pendidik.',
};

const focusAreas = [
  { 
    icon: BookMarked, 
    title: 'Kurikulum & Pedagogi', 
    description: 'Mengkaji dan mengembangkan model kurikulum serta pendekatan pembelajaran inovatif yang relevan dengan konteks Indonesia. Kami meneliti bagaimana kurikulum dapat dirancang agar lebih adaptif, inklusif, dan mampu menjawab tantangan masa depan.' 
  },
  { 
    icon: Cpu, 
    title: 'Teknologi Pendidikan (EdTech)', 
    description: 'Menganalisis peran dan dampak teknologi dalam proses belajar mengajar. Riset kami mencakup evaluasi platform EdTech, pengembangan alat bantu belajar digital, dan integrasi teknologi yang efektif di dalam kelas.' 
  },
  { 
    icon: FileCheck2, 
    title: 'Kebijakan & Evaluasi Pendidikan', 
    description: 'Memberikan analisis berbasis data untuk perumusan kebijakan pendidikan yang lebih baik. Kami juga melakukan evaluasi dampak dari berbagai program dan intervensi pendidikan untuk memastikan efektivitasnya.' 
  },
  { 
    icon: GraduationCap, 
    title: 'Pengembangan Profesional Pendidik', 
    description: 'Merancang dan meneliti model pengembangan profesional yang berkelanjutan untuk guru dan dosen. Tujuannya adalah untuk meningkatkan kompetensi, motivasi, dan kesejahteraan pendidik di seluruh Indonesia.' 
  },
];

export default function RisetPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">Area Fokus Riset</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Landasan riset kami untuk transformasi pendidikan yang berdampak.</p>
        </div>
      </section>

      {/* Focus Section */}
      <section id="focus" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Riset untuk Perubahan</h2>
            <p className="text-lg text-muted-foreground">
              Riset dan pengembangan kami terpusat pada area-area kunci yang memiliki potensi transformatif bagi ekosistem pendidikan di Indonesia. Setiap area fokus didukung oleh tim ahli dan metodologi yang kuat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {focusAreas.map((area, index) => (
              <Card key={index} className="flex flex-col md:flex-row items-start text-left p-8 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-l-4 border-accent rounded-xl animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <area.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl text-primary font-bold mb-3">{area.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{area.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
