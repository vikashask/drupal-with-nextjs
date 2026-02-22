"use client";

import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from "@/lib/fetchDrupal";
import { Category, Product } from "@/types";
import { useCallback, useEffect, useState } from "react";

interface UseProductsOptions {
  categoryId?: string;
  initialData?: Product[];
}

interface UseProductsReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Client-side hook for fetching products
 * Use this only when you need client-side interactivity (filtering, pagination)
 * Prefer server components with fetchProducts() for static/ISR pages
 */
export function useProducts(
  options: UseProductsOptions = {},
): UseProductsReturn {
  const { categoryId, initialData = [] } = options;
  const [products, setProducts] = useState<Product[]>(initialData);
  const [isLoading, setIsLoading] = useState(!initialData.length);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = categoryId
        ? await fetchProductsByCategory(categoryId)
        : await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, [categoryId]);

  useEffect(() => {
    if (!initialData.length) {
      fetchData();
    }
  }, [fetchData, initialData.length]);

  return { products, isLoading, error, refetch: fetchData };
}

interface UseCategoriesReturn {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Client-side hook for fetching categories
 */
export function useCategories(
  initialData: Category[] = [],
): UseCategoriesReturn {
  const [categories, setCategories] = useState<Category[]>(initialData);
  const [isLoading, setIsLoading] = useState(!initialData.length);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch categories",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!initialData.length) {
      fetchData();
    }
  }, [fetchData, initialData.length]);

  return { categories, isLoading, error, refetch: fetchData };
}
