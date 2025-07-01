import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const publications = [
  {
    title: 'Dampak Pembelajaran Jarak Jauh terhadap Kesenjangan Akses',
    summary: 'Sebuah studi longitudinal yang mengkaji dampak PJJ selama pandemi terhadap siswa di wilayah urban dan rural.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'education students',
    link: '#',
  },
  {
    title: 'Efektivitas Platform EdTech Adaptif untuk Matematika SMA',
    summary: 'Evaluasi komparatif antara platform pembelajaran adaptif dengan metode konvensional dalam meningkatkan pemahaman matematika.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'technology math',
    link: '#',
  },
  {
    title: 'Model Pengembangan Profesional Guru Berbasis Komunitas Belajar',
    summary: 'Laporan implementasi dan evaluasi model PKB yang berfokus pada kolaborasi dan refleksi praktik mengajar.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'teachers meeting',
    link: '#',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Riset & Publikasi Terbaru</h2>
          <p className="text-lg text-muted-foreground">
            Jelajahi temuan terbaru kami yang memberikan wawasan mendalam tentang berbagai isu penting dalam dunia pendidikan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <Image
                src={pub.imageUrl}
                alt={pub.title}
                width={600}
                height={400}
                className="object-cover w-full h-48"
                data-ai-hint={pub.aiHint}
              />
              <CardHeader className="flex-grow">
                <CardTitle className="text-lg text-primary leading-snug">{pub.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{pub.summary}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80">
                  <Link href={pub.link}>
                    Baca Selengkapnya →
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
