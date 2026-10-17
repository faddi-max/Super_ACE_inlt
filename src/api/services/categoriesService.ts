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

// ── Image URL helper ───────────────────────────────────────────────────────

/**
 * Normalise a category/product image URL returned by the API.
 *
 * The backend sometimes returns `http://` ngrok URLs which browsers block as
 * mixed content on HTTPS pages. Vite (dev & preview) has an `/uploads` proxy
 * that forwards requests to the ngrok host over HTTPS, so we strip the origin
 * and keep only the `/uploads/…` relative path.
 *
 * For any other absolute URL we at least upgrade `http://` → `https://`.
 */
export function formatImageUrl(imageUrl?: string | null): string | null {
  if (!imageUrl || typeof imageUrl !== "string" || !imageUrl.trim()) {
    return null;
  }

  const clean = imageUrl.trim();

  // Strip origin for ngrok upload paths → served via Vite dev/preview proxy
  if (clean.includes("augmented-glucose-platform.ngrok-free.dev/uploads/")) {
    const idx = clean.indexOf("/uploads/");
    return clean.substring(idx);
  }

  // Upgrade plain http:// to https:// for all other absolute URLs
  if (clean.startsWith("http://")) {
    return clean.replace("http://", "https://");
  }

  return clean;
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
   * Image URLs are normalised (http→https / ngrok→proxy path) before returning.
   * Cached for 5 minutes (default TTL).
   */
  async getCategoryDetail(slug: string, page = 1): Promise<ApiCategoryDetailResponse> {
    const endpoint = `/categories/${encodeURIComponent(slug)}${page > 1 ? `?page=${page}` : ""}`;
    const raw = await apiClient.get<ApiCategoryDetailResponse>(endpoint, { raw: true });

    // Normalise all image URLs so they load correctly in the browser
    const normalised: ApiCategoryDetailResponse = {
      ...raw,
      category: {
        ...raw.category,
        image: formatImageUrl(raw.category.image),
      },
      products: {
        ...raw.products,
        data: raw.products.data.map((product) => ({
          ...product,
          image: formatImageUrl(product.image),
          gallery: Array.isArray(product.gallery)
            ? product.gallery.map((g) => formatImageUrl(g) ?? g)
            : [],
        })),
      },
    };

    return normalised;
  },
};
