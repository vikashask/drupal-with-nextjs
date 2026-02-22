import {
  Category,
  DrupalCategory,
  DrupalPage,
  DrupalProduct,
  JsonApiCollectionResponse,
  Page,
  Product,
} from "@/types";
import drupalApi from "./axios";
import {
  transformCategory,
  transformPage,
  transformProduct,
} from "./transform";

/**
 * ISR Revalidation time in seconds
 */
export const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME) || 60;

/**
 * Drupal JSON:API endpoints
 */
const ENDPOINTS = {
  pages: "/jsonapi/node/page",
  products: "/jsonapi/node/product",
  categories: "/jsonapi/taxonomy_term/category",
} as const;

/**
 * Build query string with includes and filters
 */
function buildQueryString(params: Record<string, string | string[]>): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, v));
    } else {
      searchParams.append(key, value);
    }
  });

  return searchParams.toString();
}

/**
 * Fetch all pages
 */
export async function fetchPages(): Promise<Page[]> {
  try {
    const query = buildQueryString({
      "filter[status]": "1",
      sort: "-created",
    });

    const response = await drupalApi.get<JsonApiCollectionResponse<DrupalPage>>(
      `${ENDPOINTS.pages}?${query}`,
    );

    return response.data.data.map((page) =>
      transformPage(page, response.data.included),
    );
  } catch (error) {
    console.error("Error fetching pages:", error);
    return [];
  }
}

/**
 * Fetch a single page by slug
 */
export async function fetchPageBySlug(slug: string): Promise<Page | null> {
  try {
    const query = buildQueryString({
      "filter[field_slug]": slug,
      "filter[status]": "1",
    });

    const response = await drupalApi.get<JsonApiCollectionResponse<DrupalPage>>(
      `${ENDPOINTS.pages}?${query}`,
    );

    if (response.data.data.length === 0) {
      return null;
    }

    return transformPage(response.data.data[0], response.data.included);
  } catch (error) {
    console.error(`Error fetching page with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetch homepage content
 */
export async function fetchHomepage(): Promise<Page | null> {
  return fetchPageBySlug("home");
}

/**
 * Fetch all products
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const query = buildQueryString({
      include: "field_category",
      "filter[status]": "1",
      sort: "-created",
    });

    const response = await drupalApi.get<
      JsonApiCollectionResponse<DrupalProduct>
    >(`${ENDPOINTS.products}?${query}`);

    return response.data.data.map((product) =>
      transformProduct(product, response.data.included),
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Fetch a single product by slug
 */
export async function fetchProductBySlug(
  slug: string,
): Promise<Product | null> {
  try {
    const query = buildQueryString({
      include: "field_category",
      "filter[field_slug]": slug,
      "filter[status]": "1",
    });

    const response = await drupalApi.get<
      JsonApiCollectionResponse<DrupalProduct>
    >(`${ENDPOINTS.products}?${query}`);

    if (response.data.data.length === 0) {
      return null;
    }

    return transformProduct(response.data.data[0], response.data.included);
  } catch (error) {
    console.error(`Error fetching product with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetch products by category
 */
export async function fetchProductsByCategory(
  categoryId: string,
): Promise<Product[]> {
  try {
    const query = buildQueryString({
      include: "field_category",
      "filter[field_category.id]": categoryId,
      "filter[status]": "1",
      sort: "-created",
    });

    const response = await drupalApi.get<
      JsonApiCollectionResponse<DrupalProduct>
    >(`${ENDPOINTS.products}?${query}`);

    return response.data.data.map((product) =>
      transformProduct(product, response.data.included),
    );
  } catch (error) {
    console.error(
      `Error fetching products for category "${categoryId}":`,
      error,
    );
    return [];
  }
}

/**
 * Fetch featured products (most recent)
 */
export async function fetchFeaturedProducts(
  limit: number = 4,
): Promise<Product[]> {
  try {
    const query = buildQueryString({
      include: "field_category",
      "filter[status]": "1",
      sort: "-created",
      "page[limit]": limit.toString(),
    });

    const response = await drupalApi.get<
      JsonApiCollectionResponse<DrupalProduct>
    >(`${ENDPOINTS.products}?${query}`);

    return response.data.data.map((product) =>
      transformProduct(product, response.data.included),
    );
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

/**
 * Fetch all categories
 */
export async function fetchCategories(): Promise<Category[]> {
  try {
    const query = buildQueryString({
      sort: "weight,name",
    });

    const response = await drupalApi.get<
      JsonApiCollectionResponse<DrupalCategory>
    >(`${ENDPOINTS.categories}?${query}`);

    return response.data.data.map(transformCategory);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

/**
 * Fetch a single category by slug
 */
export async function fetchCategoryBySlug(
  slug: string,
): Promise<Category | null> {
  try {
    const query = buildQueryString({
      "filter[field_slug]": slug,
    });

    const response = await drupalApi.get<
      JsonApiCollectionResponse<DrupalCategory>
    >(`${ENDPOINTS.categories}?${query}`);

    if (response.data.data.length === 0) {
      return null;
    }

    return transformCategory(response.data.data[0]);
  } catch (error) {
    console.error(`Error fetching category with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get all product slugs for static generation
 */
export async function getAllProductSlugs(): Promise<string[]> {
  try {
    const query = buildQueryString({
      "filter[status]": "1",
      "fields[node--product]": "field_slug",
    });

    const response = await drupalApi.get<
      JsonApiCollectionResponse<DrupalProduct>
    >(`${ENDPOINTS.products}?${query}`);

    return response.data.data
      .map((product) => product.attributes.field_slug)
      .filter(Boolean);
  } catch (error) {
    console.error("Error fetching product slugs:", error);
    // Return demo slugs for static export when backend is unavailable
    return ["product-1", "product-2", "product-3"];
  }
}

/**
 * Get all page slugs for static generation
 */
export async function getAllPageSlugs(): Promise<string[]> {
  try {
    const query = buildQueryString({
      "filter[status]": "1",
      "fields[node--page]": "field_slug",
    });

    const response = await drupalApi.get<JsonApiCollectionResponse<DrupalPage>>(
      `${ENDPOINTS.pages}?${query}`,
    );

    return response.data.data
      .map((page) => page.attributes.field_slug)
      .filter(Boolean);
  } catch (error) {
    console.error("Error fetching page slugs:", error);
    // Return demo slugs for static export when backend is unavailable
    return ["home", "about", "contact"];
  }
}
