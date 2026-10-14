import { useEffect, useState } from "react";
import { categoriesService } from "@/api";
import type { ApiCategory } from "@/api";

type Status = "idle" | "loading" | "success" | "error";

export interface UseCategoriesResult {
  categories: ApiCategory[];
  status: Status;
}

/**
 * Fetches the product category tree from GET /api/v1/categories.
 * Returns an empty array while loading or on error so the UI can
 * fall back to static content gracefully.
 */
export function useCategories(): UseCategoriesResult {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    categoriesService
      .getCategories()
      .then((data) => {
        if (!cancelled) {
          setCategories(data);
          setStatus("success");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, status };
}
