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
      console.error('Failed to fetch API:', res.status, res.statusText, await res.text());
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

export async function getPublications(params: { per_page?: number; categoryId?: number } = {}): Promise<WPPublication[]> {
  const { per_page = 100, categoryId } = params;
  let endpoint = `/publikasi?_embed&per_page=${per_page}`;
  
  if (categoryId) {
    endpoint += `&categories=${categoryId}`;
  }
  
  try {
    const data = await fetchAPI(endpoint);
    return data || [];
  } catch (error) {
    console.error("Error fetching publications:", error);
    return [];
  }
}

export async function getPublicationBySlug(slug: string): Promise<WPPublication | null> {
  try {
    const data = await fetchAPI(`/publikasi?slug=${slug}&_embed`);
    if (data && data.length > 0) {
      return data[0];
    }
    return null;
  } catch (error) {
    console.error(`Error fetching publication by slug ${slug}:`, error);
    return null;
  }
}

export async function getPublicationCategories(): Promise<WPCategory[]> {
   try {
    // Fetches categories. WordPress REST API doesn't have a built-in way to get categories for a specific post type.
    // This fetches all non-empty categories. Ensure only relevant categories are used with the 'publikasi' CPT in WP Admin.
    const data = await fetchAPI(`/categories?_hide_empty=true&orderby=name&order=asc`);
    return data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
