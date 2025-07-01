'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const allPublications = [
  {
    year: '2024',
    title: 'Dampak Pembelajaran Jarak Jauh terhadap Kesenjangan Akses',
    summary: 'Sebuah studi longitudinal yang mengkaji dampak PJJ selama pandemi terhadap siswa di wilayah urban dan rural.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'education students',
    link: '#',
  },
  {
    year: '2024',
    title: 'Efektivitas Platform EdTech Adaptif untuk Matematika SMA',
    summary: 'Evaluasi komparatif antara platform pembelajaran adaptif dengan metode konvensional dalam meningkatkan pemahaman matematika.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'technology math',
    link: '#',
  },
  {
    year: '2023',
    title: 'Model Pengembangan Profesional Guru Berbasis Komunitas Belajar',
    summary: 'Laporan implementasi dan evaluasi model PKB yang berfokus pada kolaborasi dan refleksi praktik mengajar.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'teachers meeting',
    link: '#',
  },
  {
    year: '2023',
    title: 'Analisis Kebijakan Zonasi Sekolah Terhadap Pemerataan Kualitas',
    summary: 'Studi kasus di 5 kota besar Indonesia mengenai dampak kebijakan sistem zonasi penerimaan siswa baru.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'school building',
    link: '#',
  },
   {
    year: '2022',
    title: 'Literasi Digital di Kalangan Guru Sekolah Dasar',
    summary: 'Survei nasional yang memetakan tingkat kompetensi digital guru dan tantangan yang dihadapi di era pasca-pandemi.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'teacher laptop',
    link: '#',
  },
  {
    year: '2022',
    title: 'Peran Orang Tua dalam Pendampingan Belajar Anak',
    summary: 'Kajian kualitatif tentang berbagai strategi pendampingan belajar oleh orang tua dan dampaknya pada motivasi siswa.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'parent child study',
    link: '#',
  },
];

export default function PublikasiPage() {
  const [filterYear, setFilterYear] = useState('all');

  const years = useMemo(() => ['all', ...Array.from(new Set(allPublications.map(p => p.year)))], []);

  const filteredPublications = useMemo(() => {
    if (filterYear === 'all') {
      return allPublications;
    }
    return allPublications.filter(p => p.year === filterYear);
  }, [filterYear]);

  return (
     <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">Riset & Publikasi</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Temuan dan wawasan terbaru dari riset kami untuk memajukan pendidikan.</p>
        </div>
      </section>

      <section id="publications" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-3xl font-bold text-primary">Semua Publikasi</h2>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select value={filterYear} onValueChange={setFilterYear}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Filter tahun..." />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>
                      {year === 'all' ? 'Semua Tahun' : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((pub, index) => (
              <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <Image
                    src={pub.imageUrl}
                    alt={pub.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={pub.aiHint}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm font-bold py-1 px-3 rounded-full">{pub.year}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <CardHeader className="p-0 flex-grow">
                    <CardTitle className="text-xl text-primary font-bold leading-snug">{pub.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-3 flex-grow">
                    <p className="text-muted-foreground text-base">{pub.summary}</p>
                  </CardContent>
                  <CardFooter className="p-0 mt-6">
                    <Button asChild variant="link" className="p-0 text-accent font-semibold hover:text-accent/80">
                      <Link href={pub.link}>
                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
          {filteredPublications.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">Tidak ada publikasi untuk tahun yang dipilih.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
