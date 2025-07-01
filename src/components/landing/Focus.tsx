import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookMarked, Cpu, FileCheck2, GraduationCap } from 'lucide-react';

const focusAreas = [
  { icon: BookMarked, title: 'Kurikulum & Pedagogi', description: 'Mengkaji dan mengembangkan model kurikulum serta pendekatan pembelajaran inovatif yang relevan dengan konteks Indonesia.' },
  { icon: Cpu, title: 'Teknologi Pendidikan (EdTech)', description: 'Menganalisis peran dan dampak teknologi dalam pendidikan, serta merancang solusi EdTech yang efektif dan inklusif.' },
  { icon: FileCheck2, title: 'Kebijakan & Evaluasi Pendidikan', description: 'Memberikan analisis berbasis data untuk perumusan kebijakan dan melakukan evaluasi program pendidikan.' },
  { icon: GraduationCap, title: 'Pengembangan Profesional Pendidik', description: 'Merancang program pengembangan profesional yang berkelanjutan untuk meningkatkan kompetensi guru dan dosen.' },
];

export default function Focus() {
  return (
    <section id="focus" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Area Fokus Kami</h2>
          <p className="text-lg text-muted-foreground">
            Riset dan pengembangan kami terpusat pada area-area kunci yang memiliki potensi transformatif bagi ekosistem pendidikan di Indonesia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <Card key={index} className="flex flex-col text-center p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border-t-4 border-accent rounded-xl">
               <div className="flex justify-center mb-5">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <area.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
              <CardHeader className="p-0 flex-grow">
                <CardTitle className="text-xl text-primary font-bold">{area.title}</CardTitle>
                <CardDescription className="mt-3 text-base leading-relaxed">{area.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
