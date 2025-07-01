// Type definitions for WordPress REST API responses

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

export interface WPPublication {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  categories: number[];
  tags: any[];
  _embedded: {
    'wp:featuredmedia'?: WPMedia[];
    'wp:term'?: WPCategory[][];
  };
}
