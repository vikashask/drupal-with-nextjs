// Re-export all types for easy importing
export * from "./drupal";
export * from "./jsonapi";

/**
 * Normalized/Transformed Types for Frontend Use
 */

export interface Page {
  id: string;
  title: string;
  slug: string;
  body: string;
  heroImage?: ImageData;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  image?: ImageData;
  category?: Category;
  nutritionalInfo?: string;
  ingredients?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface ImageData {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * API Response Helper Types
 */
export interface ApiResponse<T> {
  data: T | null;
  error?: string;
  isLoading?: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
