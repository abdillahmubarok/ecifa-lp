import type { WPPublication, WPCategory } from '@/types/wordpress';

const API_URL = 'https://ecifa.id/wp-json/wp/v2';

async function fetchAPI(endpoint: string) {
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };
  
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers,
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      console.error('Failed to fetch API:', res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      return null;
    }
    return json;
  } catch (error) {
    console.error(`Error fetching endpoint ${endpoint}:`, error);
    return null;
  }
}

const MOCK_PUBLICATIONS: WPPublication[] = [
  {
    id: 1,
    date: new Date().toISOString(),
    slug: 'transformasi-digital-pendidikan',
    title: { rendered: 'Transformasi Digital di Sekolah Menengah Indonesia' },
    excerpt: { rendered: 'Penelitian mendalam mengenai adopsi teknologi pembelajaran di sekolah menengah selama lima tahun terakhir.' },
    content: { rendered: '<p>Transformasi digital telah menjadi pilar utama dalam pembaruan sistem pendidikan di Indonesia. Riset ini mengeksplorasi tantangan dan peluang dalam integrasi teknologi di sekolah menengah.</p>' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800' }],
      'wp:term': [[{ id: 1, name: 'Riset Teknologi', slug: 'riset-teknologi' }]]
    },
    acf: { penulis: 'Tim Riset Ecifa', tahun_publikasi: '2024' }
  },
  {
    id: 2,
    date: new Date().toISOString(),
    slug: 'evaluasi-kurikulum-merdeka',
    title: { rendered: 'Evaluasi Dampak Kurikulum Merdeka pada Siswa SD' },
    excerpt: { rendered: 'Analisis awal mengenai efektivitas implementasi kurikulum baru terhadap hasil belajar literasi dan numerasi.' },
    content: { rendered: '<p>Kurikulum Merdeka membawa angin segar bagi pendidikan dasar. Evaluasi ini menunjukkan peningkatan fleksibilitas guru dalam mengajar sesuai kemampuan siswa.</p>' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800' }],
      'wp:term': [[{ id: 2, name: 'Kebijakan', slug: 'kebijakan' }]]
    },
    acf: { penulis: 'Dr. Sarah Wijaya', tahun_publikasi: '2023' }
  },
  {
    id: 3,
    date: new Date().toISOString(),
    slug: 'pedagogi-inklusif',
    title: { rendered: 'Membangun Ekosistem Pedagogi Inklusif' },
    excerpt: { rendered: 'Strategi praktis bagi guru untuk menciptakan lingkungan belajar yang ramah bagi semua anak dengan kebutuhan beragam.' },
    content: { rendered: '<p>Inklusivitas bukan sekadar menempatkan siswa berkebutuhan khusus di kelas reguler, melainkan menciptakan sistem yang mendukung keberagaman belajar.</p>' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800' }],
      'wp:term': [[{ id: 3, name: 'Pedagogi', slug: 'pedagogi' }]]
    },
    acf: { penulis: 'Budi Hartono, M.Pd', tahun_publikasi: '2024' }
  }
];

export async function getPublications(params: { per_page?: number; categoryId?: number } = {}): Promise<WPPublication[]> {
  const { per_page = 100, categoryId } = params;
  let endpoint = `/publikasi?_embed&per_page=${per_page}`;
  
  if (categoryId) {
    endpoint += `&categories=${categoryId}`;
  }
  
  try {
    const data = await fetchAPI(endpoint);
    if (!data || data.length === 0) {
      return MOCK_PUBLICATIONS.slice(0, per_page);
    }
    return data;
  } catch (error) {
    return MOCK_PUBLICATIONS.slice(0, per_page);
  }
}

export async function getPublicationBySlug(slug: string): Promise<WPPublication | null> {
  try {
    const data = await fetchAPI(`/publikasi?slug=${slug}&_embed`);
    if (data && data.length > 0) {
      return data[0];
    }
    return MOCK_PUBLICATIONS.find(p => p.slug === slug) || null;
  } catch (error) {
    return MOCK_PUBLICATIONS.find(p => p.slug === slug) || null;
  }
}

export async function getPublicationCategories(): Promise<WPCategory[]> {
   try {
    const data = await fetchAPI(`/categories?_hide_empty=true&orderby=name&order=asc`);
    return data || [];
  } catch (error) {
    return [];
  }
}
