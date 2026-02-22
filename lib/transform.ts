import {
  Category,
  DrupalCategory,
  DrupalImage,
  DrupalMediaImage,
  DrupalPage,
  DrupalProduct,
  ImageData,
  JsonApiIncluded,
  Page,
  Product,
} from "@/types";

/**
 * Get the base URL for Drupal assets
 */
export function getDrupalBaseUrl(): string {
  return process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || "http://localhost:8080";
}

/**
 * Build full image URL from Drupal file URI
 */
export function getImageUrl(uri: string): string {
  if (!uri) return "";

  // If already a full URL, return as is
  if (uri.startsWith("http://") || uri.startsWith("https://")) {
    return uri;
  }

  // Handle Drupal public:// URIs
  if (uri.startsWith("public://")) {
    return `${getDrupalBaseUrl()}/sites/default/files/${uri.replace("public://", "")}`;
  }

  // Handle relative paths
  if (uri.startsWith("/")) {
    return `${getDrupalBaseUrl()}${uri}`;
  }

  return `${getDrupalBaseUrl()}/${uri}`;
}

/**
 * Find included resource by type and ID
 */
export function findIncluded<T extends JsonApiIncluded>(
  included: JsonApiIncluded[] | undefined,
  type: string,
  id: string,
): T | undefined {
  if (!included) return undefined;
  return included.find((item) => item.type === type && item.id === id) as
    | T
    | undefined;
}

/**
 * Extract image data from included resources
 */
export function extractImageData(
  mediaId: string | undefined,
  included: JsonApiIncluded[] | undefined,
): ImageData | undefined {
  if (!mediaId || !included) return undefined;

  // Find the media entity
  const media = findIncluded<DrupalMediaImage & JsonApiIncluded>(
    included,
    "media--image",
    mediaId,
  );

  if (!media) return undefined;

  // Get file reference from media
  const fileRef = media.relationships?.field_media_image?.data;
  if (!fileRef || Array.isArray(fileRef)) return undefined;

  // Find the file entity
  const file = findIncluded<DrupalImage & JsonApiIncluded>(
    included,
    "file--file",
    fileRef.id,
  );

  if (!file) return undefined;

  // Build image data
  const mediaImageField = media.attributes.field_media_image;

  return {
    url: getImageUrl(
      file.attributes.uri?.url || file.attributes.uri?.value || "",
    ),
    alt: mediaImageField?.alt || media.attributes.name || "",
    width: mediaImageField?.width,
    height: mediaImageField?.height,
  };
}

/**
 * Transform Drupal page to frontend Page type
 */
export function transformPage(
  drupalPage: DrupalPage,
  included?: JsonApiIncluded[],
): Page {
  const heroImageRef = drupalPage.relationships?.field_hero_image?.data;
  const heroImageId =
    heroImageRef && !Array.isArray(heroImageRef) ? heroImageRef.id : undefined;

  return {
    id: drupalPage.id,
    title: drupalPage.attributes.title,
    slug:
      drupalPage.attributes.field_slug ||
      drupalPage.attributes.path?.alias?.replace(/^\//, "") ||
      "",
    body:
      drupalPage.attributes.body?.processed ||
      drupalPage.attributes.body?.value ||
      "",
    heroImage: extractImageData(heroImageId, included),
    metaTitle:
      drupalPage.attributes.field_meta_title || drupalPage.attributes.title,
    metaDescription: drupalPage.attributes.field_meta_description || "",
    createdAt: drupalPage.attributes.created,
    updatedAt: drupalPage.attributes.changed,
  };
}

/**
 * Transform Drupal product to frontend Product type
 */
export function transformProduct(
  drupalProduct: DrupalProduct,
  included?: JsonApiIncluded[],
): Product {
  const imageRef = drupalProduct.relationships?.field_image?.data;
  const imageId =
    imageRef && !Array.isArray(imageRef) ? imageRef.id : undefined;

  const categoryRef = drupalProduct.relationships?.field_category?.data;
  const categoryId =
    categoryRef && !Array.isArray(categoryRef) ? categoryRef.id : undefined;

  // Find category in included
  let category: Category | undefined;
  if (categoryId && included) {
    const drupalCategory = findIncluded<DrupalCategory & JsonApiIncluded>(
      included,
      "taxonomy_term--category",
      categoryId,
    );
    if (drupalCategory) {
      category = transformCategory(drupalCategory as unknown as DrupalCategory);
    }
  }

  return {
    id: drupalProduct.id,
    title: drupalProduct.attributes.title,
    slug:
      drupalProduct.attributes.field_slug ||
      drupalProduct.attributes.path?.alias?.replace(/^\//, "") ||
      "",
    description:
      drupalProduct.attributes.field_description?.processed ||
      drupalProduct.attributes.field_description?.value ||
      "",
    image: extractImageData(imageId, included),
    category,
    nutritionalInfo:
      drupalProduct.attributes.field_nutritional_info?.processed ||
      drupalProduct.attributes.field_nutritional_info?.value ||
      "",
    ingredients:
      drupalProduct.attributes.field_ingredients?.processed ||
      drupalProduct.attributes.field_ingredients?.value ||
      "",
    metaTitle:
      drupalProduct.attributes.field_meta_title ||
      drupalProduct.attributes.title,
    metaDescription: drupalProduct.attributes.field_meta_description || "",
    createdAt: drupalProduct.attributes.created,
    updatedAt: drupalProduct.attributes.changed,
  };
}

/**
 * Transform Drupal category to frontend Category type
 */
export function transformCategory(drupalCategory: DrupalCategory): Category {
  return {
    id: drupalCategory.id,
    name: drupalCategory.attributes.name,
    slug:
      drupalCategory.attributes.field_slug ||
      drupalCategory.attributes.path?.alias?.replace(/^\//, "") ||
      "",
    description:
      drupalCategory.attributes.description?.processed ||
      drupalCategory.attributes.description?.value ||
      "",
  };
}

/**
 * Strip HTML tags from string
 */
export function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number = 150): string {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}
