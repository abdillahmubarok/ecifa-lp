import type { WPPublication, WPCategory } from '@/types/wordpress';

const API_URL = 'https://be.ecifa.id/wp-json/wp/v2';

async function fetchAPI(endpoint: string) {
  const headers = { 'Content-Type': 'application/json' };
  
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
    // Fetches standard post categories. Adjust if a custom taxonomy is used.
    const data = await fetchAPI(`/categories?_hide_empty=true&orderby=name&order=asc`);
    return data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
