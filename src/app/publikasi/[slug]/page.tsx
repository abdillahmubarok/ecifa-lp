import { getPublicationBySlug } from '@/services/wordpress';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Tag, User, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const publication = await getPublicationBySlug(slug);
  if (!publication) {
    return { title: 'Publikasi Tidak Ditemukan' };
  }
  
  const description = publication.excerpt.rendered.replace(/<[^>]*>?/gm, '').trim();
  const title = publication.title.rendered.replace(/<[^>]*>?/gm, '').trim();

  return {
    title: `${title} | Ecifa.id`,
    description: description,
  };
}

export default async function PublicationDetailPage({ params }: Props) {
  const { slug } = await params;
  const publication = await getPublicationBySlug(slug);

  if (!publication) {
    notFound();
  }

  const imageUrl = publication._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = publication._embedded?.['wp:term']?.[0] ?? [];
  const { penulis, tahun_publikasi, doi, download_file } = publication.acf || {};

  return (
    <>
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <article className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-xl">
                    <div className="mb-8 text-center">
                        <h1 
                            className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight"
                            dangerouslySetInnerHTML={{ __html: publication.title.rendered }}
                        />
                    </div>
                    
                    <Card className="mb-12 bg-secondary/50 p-6 rounded-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                            {penulis && (
                                <div className="flex items-start gap-3">
                                    <User className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Penulis</p>
                                        <p className="font-semibold text-primary">{penulis}</p>
                                    </div>
                                </div>
                            )}
                            {tahun_publikasi && (
                                <div className="flex items-start gap-3">
                                    <Calendar className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Tahun Publikasi</p>
                                        <p className="font-semibold text-primary">{tahun_publikasi}</p>
                                    </div>
                                </div>
                            )}
                            {categories.length > 0 && (
                                 <div className="flex items-start gap-3">
                                    <Tag className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Kategori</p>
                                        <p className="font-semibold text-primary">{categories[0].name}</p>
                                    </div>
                                </div>
                            )}
                            {doi && (
                                <div className="flex items-start gap-3 sm:col-span-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-1 flex-shrink-0"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
                                    <div>
                                        <p className="text-sm text-muted-foreground">DOI</p>
                                        <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary break-all hover:underline">{doi}</a>
                                    </div>
                                </div>
                            )}
                            {download_file && download_file.url && (
                                <div className="flex items-start gap-3">
                                    <Download className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                         <p className="text-sm text-muted-foreground">Dokumen</p>
                                        <Button asChild size="sm" variant="link" className="p-0 h-auto font-semibold text-base">
                                            <a href={download_file.url} target="_blank" rel="noopener noreferrer">
                                                Unduh File
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Card>

                    {imageUrl && (
                        <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg mb-12">
                            <Image
                                src={imageUrl}
                                alt={publication.title.rendered}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                    
                    <div 
                        className="prose lg:prose-xl max-w-none text-foreground prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-primary"
                        dangerouslySetInnerHTML={{ __html: publication.content.rendered }}
                    />
                </article>
            </div>
        </section>
    </>
  )
}
