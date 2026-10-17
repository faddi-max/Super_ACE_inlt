import { apiClient } from "../apiClient";

// ── Types ──────────────────────────────────────────────────────────────────

export interface ApiCategoryMeta {
  title: string | null;
  description: string | null;
}

export interface ApiCategory {
  id: number;
  parent_id: number | null;
  name: string;
  subheading: string | null;
  slug: string;
  description: string | null;
  image: string | null;
  products_count: number;
  children: ApiCategory[];
  meta: ApiCategoryMeta;
}

// ── Category detail types (GET /categories/:slug) ─────────────────────────

export interface ApiCategoryParent {
  id: number;
  name: string;
  slug: string;
}

export interface ApiProduct {
  id: number;
  name: string;
  slug: string;
  sku: string;
  category: { id: number; name: string; slug: string };
  short_description: string | null;
  image: string | null;
  gallery: string[];
  fabric: string | null;
  sizes: string[];
  colors: string[];
  moq: string | null;
  customisation: string | null;
  is_featured: boolean;
  meta: ApiCategoryMeta;
  updated_at: string;
}

export interface ApiPaginationLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface ApiProductsPagination {
  current_page: number;
  from: number | null;
  last_page: number;
  links: ApiPaginationLink[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
}

export interface ApiProductsResponse {
  data: ApiProduct[];
  links: { first: string | null; last: string | null; prev: string | null; next: string | null };
  meta: ApiProductsPagination;
}

export interface ApiCategoryDetail extends ApiCategory {
  parent: ApiCategoryParent | null;
}

export interface ApiCategoryDetailResponse {
  category: ApiCategoryDetail;
  products: ApiProductsResponse;
}

// ── Service ────────────────────────────────────────────────────────────────

export const categoriesService = {
  /**
   * Fetch the full category tree.
   * Returns only top-level categories; each has a `children` array.
   * Cached for 5 minutes (default TTL).
   */
  getCategories(): Promise<ApiCategory[]> {
    return apiClient.get<ApiCategory[]>("/categories");
  },

  /**
   * Fetch a single category with its products by slug.
   * Returns both the category metadata and a paginated products list.
   * Cached for 5 minutes (default TTL).
   */
  getCategoryDetail(slug: string, page = 1): Promise<ApiCategoryDetailResponse> {
    const endpoint = `/categories/${encodeURIComponent(slug)}${page > 1 ? `?page=${page}` : ""}`;
    return apiClient.get<ApiCategoryDetailResponse>(endpoint, { raw: true });
  },
};
