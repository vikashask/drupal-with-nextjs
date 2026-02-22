// Re-export all lib modules
export { default as drupalApi } from "./axios";
export * from "./fetchDrupal";
export * from "./transform";

/**
 * Utility constants
 */
export const SITE_NAME = "Drupal Headless CMS";
export const SITE_DESCRIPTION = "A headless CMS powered by Drupal and Next.js";
export const DEFAULT_META_IMAGE = "/images/og-default.jpg";
