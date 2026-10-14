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
};
