import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kontak & Kolaborasi | Ecifa.id',
  description: 'Hubungi kami untuk pertanyaan, media, atau peluang kolaborasi untuk memajukan pendidikan di Indonesia.',
};


export default function KontakPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">Kontak & Kolaborasi</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Kami membuka pintu untuk berdiskusi, bermitra, dan bekerjasama.</p>
        </div>
      </section>
      
      {/* Contact Info & CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-primary mb-4">Mari Terhubung</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Apakah Anda dari institusi pemerintah, lembaga pendidikan, perusahaan, atau seorang peneliti, kami siap mendengar ide dan gagasan Anda untuk memajukan pendidikan Indonesia.
              </p>
              <div className="space-y-6">
                <Card className="p-6 flex items-center gap-6 bg-white shadow-md">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-8 w-8 text-accent"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Email General</h3>
                    <a href="mailto:info@ecifa.id" className="text-muted-foreground hover:text-primary">info@ecifa.id</a>
                  </div>
                </Card>
                 <Card className="p-6 flex items-center gap-6 bg-white shadow-md">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-8 w-8 text-accent"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">Kolaborasi & Kemitraan</h3>
                    <a href="mailto:kolaborasi@ecifa.id" className="text-muted-foreground hover:text-primary">kolaborasi@ecifa.id</a>
                  </div>
                </Card>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
               <h2 className="text-3xl font-bold text-primary mb-4">Alamat Kantor</h2>
               <p className="text-muted-foreground mb-6">Kunjungi kami untuk diskusi lebih lanjut. Mohon buat janji temu terlebih dahulu.</p>
               <div className="space-y-4 text-lg">
                 <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>Gedung Inovasi Lt. 5, Jl. Pendidikan No. 1, Jakarta Pusat, Indonesia</span>
                 </div>
                 <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>(021) 123-4567</span>
                 </div>
               </div>
               <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.577189539347!2d106.8271520747471!3d-6.18732299380023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42e2a48b59d%3A0x1d473420b9255604!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen={false}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
