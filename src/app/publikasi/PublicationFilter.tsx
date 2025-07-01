'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { WPCategory } from '@/types/wordpress';
import { Filter } from 'lucide-react';

interface PublicationFilterProps {
  categories: WPCategory[];
  currentCategorySlug?: string;
}

export default function PublicationFilter({ categories, currentCategorySlug }: PublicationFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleValueChange = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug === 'all') {
      params.delete('kategori');
    } else {
      params.set('kategori', slug);
    }
    router.push(`/publikasi?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Filter className="h-5 w-5 text-muted-foreground" />
      <Select value={currentCategorySlug || 'all'} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Filter kategori..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua Kategori</SelectItem>
          {categories.map(category => (
            <SelectItem key={category.id} value={category.slug}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
