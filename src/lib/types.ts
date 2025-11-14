export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedDate: string;
  updatedDate: string;
  featured: boolean;
  featuredImage: FeaturedImage;
  tags: string[];
  category: string;
  readTime: number;
  seo: SEO;
  published: boolean;
}

export interface Author {
  name: string;
  email: string;
  avatar: string;
}

export interface FeaturedImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface BlogData {
  posts: BlogPost[];
  categories: Category[];
}
