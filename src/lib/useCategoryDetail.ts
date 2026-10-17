import { useEffect, useState } from "react";
import { categoriesService } from "@/api";
import type { ApiCategoryDetail, ApiProduct, ApiProductsPagination } from "@/api";

type Status = "idle" | "loading" | "success" | "error";

export interface UseCategoryDetailResult {
  category: ApiCategoryDetail | null;
  products: ApiProduct[];
  pagination: ApiProductsPagination | null;
  status: Status;
  loadPage: (page: number) => void;
}

/**
 * Fetches a single category's metadata + paginated product list.
 * Re-fetches whenever the slug or page changes.
 *
 * Usage:
 *   const { category, products, pagination, status, loadPage } = useCategoryDetail(slug);
 */
export function useCategoryDetail(slug: string | undefined): UseCategoryDetailResult {
  const [category, setCategory] = useState<ApiCategoryDetail | null>(null);
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [pagination, setPagination] = useState<ApiProductsPagination | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;
    setStatus("loading");

    categoriesService
      .getCategoryDetail(slug, page)
      .then((data) => {
        if (cancelled) return;
        setCategory(data.category);
        setProducts(data.products.data);
        setPagination(data.products.meta);
        setStatus("success");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [slug, page]);

  // Reset page to 1 when slug changes
  useEffect(() => {
    setPage(1);
    setCategory(null);
    setProducts([]);
    setPagination(null);
    setStatus("idle");
  }, [slug]);

  return { category, products, pagination, status, loadPage: setPage };
}
