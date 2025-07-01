import { getPublications, getPublicationCategories } from '@/services/wordpress';
import PublicationCard from '@/components/cards/PublicationCard';
import PublicationFilter from './PublicationFilter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Riset & Publikasi | Ecifa.id',
  description: 'Temuan dan wawasan terbaru dari riset kami untuk memajukan pendidikan.',
};

export default async function PublikasiPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  
  const categories = await getPublicationCategories() ?? [];
  
  const currentCategorySlug = typeof searchParams.kategori === 'string' ? searchParams.kategori : undefined;
  
  const currentCategory = currentCategorySlug 
    ? categories.find(cat => cat.slug === currentCategorySlug)
    : undefined;
  
  const publications = await getPublications({ categoryId: currentCategory?.id }) ?? [];

  return (
     <>
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
            <PublicationFilter categories={categories} currentCategorySlug={currentCategorySlug} />
          </div>

          {publications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publications.map((pub, index) => (
                <div key={pub.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PublicationCard publication={pub} />
                </div>
              ))}
            </div>
          ) : (
             <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">Tidak ada publikasi yang ditemukan.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
