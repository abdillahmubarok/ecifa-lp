import { getPublicationBySlug } from '@/services/wordpress';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Calendar, Tag } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const publication = await getPublicationBySlug(params.slug);
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
  const publication = await getPublicationBySlug(params.slug);

  if (!publication) {
    notFound();
  }

  const imageUrl = publication._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = publication._embedded?.['wp:term']?.[0] ?? [];
  const publicationDate = format(new Date(publication.date), 'dd MMMM yyyy');


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
                         <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{publicationDate}</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Tag className="h-4 w-4" />
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(cat => (
                                        <Badge key={cat.id} variant="secondary">{cat.name}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

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
