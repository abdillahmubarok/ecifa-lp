import type { WPPublication } from '@/types/wordpress';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface PublicationCardProps {
  publication: WPPublication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const imageUrl = publication._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070';
  const category = publication._embedded?.['wp:term']?.[0]?.[0];
  const publicationDate = format(new Date(publication.date), 'dd MMM yyyy');
  const penulis = publication.acf?.penulis;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl group h-full">
      <div className="relative overflow-hidden">
        <Link href={`/publikasi/${publication.slug}`} aria-label={publication.title.rendered}>
          <Image
            src={imageUrl}
            alt={publication.title.rendered}
            width={600}
            height={400}
            className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="publication cover"
          />
        </Link>
        {category && (
          <Badge variant="default" className="absolute top-4 left-4 bg-accent text-accent-foreground shadow-md">
            {category.name}
          </Badge>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <CardHeader className="p-0 flex-grow">
          <Link href={`/publikasi/${publication.slug}`}>
            <CardTitle 
              className="text-xl text-primary font-bold leading-snug hover:text-accent transition-colors line-clamp-2"
              dangerouslySetInnerHTML={{ __html: publication.title.rendered }}
            />
          </Link>
        </CardHeader>
        <CardContent className="p-0 mt-3 flex-grow">
          <div
            className="text-muted-foreground text-base line-clamp-3"
            dangerouslySetInnerHTML={{ __html: publication.excerpt.rendered }}
          />
        </CardContent>
        <CardFooter className="p-0 mt-6 flex justify-between items-end">
            <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{publicationDate}</span>
                </div>
                {penulis && (
                    <div className="flex items-center gap-2 truncate">
                        <User className="h-4 w-4" />
                        <span className="truncate">{penulis}</span>
                    </div>
                )}
            </div>
            <Button asChild variant="link" className="p-0 text-accent font-semibold hover:text-accent/80 self-end">
              <Link href={`/publikasi/${publication.slug}`}>
                Baca <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
