import { JsonApiResourceIdentifier } from "./jsonapi";

/**
 * Drupal Media/Image Types
 */
export interface DrupalImage {
  type: "file--file";
  id: string;
  attributes: {
    uri: {
      url: string;
      value: string;
    };
    filename: string;
    filemime: string;
    filesize: number;
  };
}

export interface DrupalMediaImage {
  type: "media--image";
  id: string;
  attributes: {
    name: string;
    field_media_image?: {
      alt: string;
      title?: string;
      width: number;
      height: number;
    };
  };
  relationships?: {
    field_media_image?: {
      data: JsonApiResourceIdentifier | null;
    };
  };
}

/**
 * Page Content Type
 */
export interface DrupalPage {
  type: "node--page";
  id: string;
  attributes: {
    drupal_internal__nid: number;
    title: string;
    status: boolean;
    created: string;
    changed: string;
    path: {
      alias: string;
      pid: number;
      langcode: string;
    };
    field_slug: string;
    body?: {
      value: string;
      format: string;
      processed: string;
      summary?: string;
    };
    field_meta_title?: string;
    field_meta_description?: string;
  };
  relationships?: {
    field_hero_image?: {
      data: JsonApiResourceIdentifier | null;
    };
  };
}

/**
 * Product Content Type
 */
export interface DrupalProduct {
  type: "node--product";
  id: string;
  attributes: {
    drupal_internal__nid: number;
    title: string;
    status: boolean;
    created: string;
    changed: string;
    path: {
      alias: string;
      pid: number;
      langcode: string;
    };
    field_slug: string;
    field_description?: {
      value: string;
      format: string;
      processed: string;
    };
    field_nutritional_info?: {
      value: string;
      format: string;
      processed: string;
    };
    field_ingredients?: {
      value: string;
      format: string;
      processed: string;
    };
    field_meta_title?: string;
    field_meta_description?: string;
  };
  relationships?: {
    field_image?: {
      data: JsonApiResourceIdentifier | null;
    };
    field_category?: {
      data: JsonApiResourceIdentifier | null;
    };
  };
}

/**
 * Category Taxonomy Term
 */
export interface DrupalCategory {
  type: "taxonomy_term--category";
  id: string;
  attributes: {
    drupal_internal__tid: number;
    name: string;
    description?: {
      value: string;
      format: string;
      processed: string;
    };
    field_slug: string;
    weight: number;
    path: {
      alias: string;
      pid: number;
      langcode: string;
    };
  };
}
