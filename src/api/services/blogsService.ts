import { apiClient } from "../apiClient";

export interface ApiBlogCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  posts_count: number;
}

export interface ApiBlogPostCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ApiBlogSeo {
  type?: string;
  key?: string;
  path?: string;
  url?: string;
  title?: string;
  meta_title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  og?: {
    type?: string;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    site_name?: string;
    locale?: string;
  };
  article?: {
    published_time?: string;
    modified_time?: string;
    section?: string;
    tag?: string[];
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  html?: string;
}

export interface ApiBlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  tags: string[];
  category: ApiBlogPostCategory;
  is_featured: boolean;
  reading_minutes: number;
  views: number;
  published_at: string;
  seo?: ApiBlogSeo;
  meta?: {
    title?: string;
    description?: string;
  };
  related?: ApiBlogPost[];
}

export interface ApiBlogPaginationLink {
  url: string | null;
  label: string;
  page?: number | null;
  active: boolean;
}

export interface ApiBlogPaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  links?: ApiBlogPaginationLink[];
  path?: string;
  per_page: number;
  to: number | null;
  total: number;
}

export interface ApiBlogsResponse {
  data: ApiBlogPost[];
  links?: {
    first?: string | null;
    last?: string | null;
    prev?: string | null;
    next?: string | null;
  };
  meta?: ApiBlogPaginationMeta;
}

export interface GetBlogsParams {
  category?: string;
  search?: string;
  page?: number;
}

export function formatBlogImageUrl(imageUrl?: string | null): string {
  if (!imageUrl || typeof imageUrl !== "string" || !imageUrl.trim()) {
    return "";
  }

  let clean = imageUrl.trim();

  // If the image is on the ngrok dev host uploads path, use the proxied path
  if (clean.includes("augmented-glucose-platform.ngrok-free.dev/uploads/")) {
    const uploadIndex = clean.indexOf("/uploads/");
    return clean.substring(uploadIndex);
  }

  // Prepend domain for relative paths if not already absolute
  if (clean.startsWith("/")) {
    clean = `https://augmented-glucose-platform.ngrok-free.dev${clean}`;
  }

  // Convert http:// to https://
  if (clean.startsWith("http://")) {
    clean = clean.replace("http://", "https://");
  }

  return clean;
}

export const blogsService = {
  /**
   * Fetches blog categories from GET /blog-categories
   */
  async getBlogCategories(): Promise<ApiBlogCategory[]> {
    try {
      const response = await apiClient.get<ApiBlogCategory[]>("/blog-categories");
      console.log("Blogs API categories response:", response);
      return Array.isArray(response) ? response : [];
    } catch (err) {
      console.error("Failed to fetch blog categories:", err);
      return [];
    }
  },

  /**
   * Fetches paginated blogs from GET /blogs with optional category, search, and page query params
   */
  async getBlogs(params: GetBlogsParams = {}): Promise<ApiBlogsResponse> {
    try {
      const searchParams = new URLSearchParams();

      if (params.category && params.category !== "all") {
        searchParams.append("category", params.category);
      }

      if (params.search && params.search.trim()) {
        searchParams.append("search", params.search.trim());
      }

      if (params.page && params.page > 1) {
        searchParams.append("page", String(params.page));
      }

      const queryString = searchParams.toString();
      const endpoint = queryString ? `/blogs?${queryString}` : "/blogs";

      const response = await apiClient.get<ApiBlogsResponse>(endpoint, {
        raw: true,
      });

      console.log("Blogs API list response:", response);

      if (response && Array.isArray(response.data)) {
        return {
          data: response.data.map((post) => ({
            ...post,
            image: formatBlogImageUrl(post.image),
          })),
          links: response.links,
          meta: response.meta,
        };
      }

      return { data: [] };
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      return { data: [] };
    }
  },

  /**
   * Fetches a single blog post by slug from GET /blogs/:slug
   */
  async getBlogBySlug(slug: string): Promise<ApiBlogPost | null> {
    try {
      const response = await apiClient.get<{
        data?: ApiBlogPost;
        related?: ApiBlogPost[];
      }>(`/blogs/${slug}`, { raw: true });

      console.log("Blog single post response:", response);

      const postData = response?.data || (response as unknown as ApiBlogPost);

      if (postData && postData.title) {
        return {
          ...postData,
          image: formatBlogImageUrl(postData.image),
          related: Array.isArray(response?.related)
            ? response.related.map((item) => ({
                ...item,
                image: formatBlogImageUrl(item.image),
              }))
            : [],
        };
      }
      return null;
    } catch (err) {
      console.error(`Failed to fetch blog for slug "${slug}":`, err);
      return null;
    }
  },
};
