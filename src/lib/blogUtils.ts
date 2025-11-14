import type { BlogPost, BlogData } from './types';
import blogData from '../data/blog.json';

/**
 * Get all published blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  return blogData.posts
    .filter(post => post.published)
    .sort((a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogData.posts.find(post => post.slug === slug && post.published);
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return getAllPosts()
    .filter(post => post.featured)
    .slice(0, limit);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts()
    .filter(post => post.category.toLowerCase() === category.toLowerCase());
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts()
    .filter(post => post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase()));
}

/**
 * Get related posts based on tags and category
 */
export function getRelatedPosts(post: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts();

  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .map(p => {
      let score = 0;

      // Same category = higher score
      if (p.category === post.category) score += 3;

      // Shared tags
      const sharedTags = p.tags.filter(tag => post.tags.includes(tag));
      score += sharedTags.length;

      return { post: p, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);

  return relatedPosts;
}

/**
 * Get all unique tags with post counts
 */
export function getAllTags(): Array<{ name: string; count: number }> {
  const tagCounts = new Map<string, number>();

  getAllPosts().forEach(post => {
    post.tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get all categories
 */
export function getAllCategories() {
  return blogData.categories;
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string) {
  return blogData.categories.find(cat => cat.slug === slug);
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Generate static paths for dynamic routes
 */
export function getStaticPaths() {
  return getAllPosts().map(post => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
