/**
 * Generic JSON:API Response Types
 */

export interface JsonApiResponse<T> {
  data: T;
  included?: JsonApiIncluded[];
  links?: JsonApiLinks;
  meta?: JsonApiMeta;
}

export interface JsonApiCollectionResponse<T> {
  data: T[];
  included?: JsonApiIncluded[];
  links?: JsonApiLinks;
  meta?: JsonApiMeta;
}

export interface JsonApiLinks {
  self?: JsonApiLink;
  next?: JsonApiLink;
  prev?: JsonApiLink;
  first?: JsonApiLink;
  last?: JsonApiLink;
}

export interface JsonApiLink {
  href: string;
  meta?: Record<string, unknown>;
}

export interface JsonApiMeta {
  count?: number;
  [key: string]: unknown;
}

export interface JsonApiIncluded {
  type: string;
  id: string;
  attributes: Record<string, unknown>;
  relationships?: Record<string, JsonApiRelationship>;
  links?: JsonApiLinks;
}

export interface JsonApiRelationship {
  data: JsonApiResourceIdentifier | JsonApiResourceIdentifier[] | null;
  links?: JsonApiLinks;
}

export interface JsonApiResourceIdentifier {
  type: string;
  id: string;
  meta?: Record<string, unknown>;
}

export interface JsonApiError {
  status: string;
  title: string;
  detail?: string;
  source?: {
    pointer?: string;
    parameter?: string;
  };
}

export interface JsonApiErrorResponse {
  errors: JsonApiError[];
}
