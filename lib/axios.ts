import axios, { AxiosError, AxiosInstance } from "axios";

/**
 * Generate Basic Auth header from credentials
 */
const getBasicAuthHeader = (): string => {
  const username = process.env.DRUPAL_API_USERNAME || "api_user";
  const password = process.env.DRUPAL_API_PASSWORD || "api_password";
  const credentials = Buffer.from(`${username}:${password}`).toString("base64");
  return `Basic ${credentials}`;
};

/**
 * Axios instance configured for Drupal JSON:API
 */
const drupalApi: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
    Authorization: getBasicAuthHeader(),
  },
  timeout: 30000,
});

// Request interceptor for logging and auth
drupalApi.interceptors.request.use(
  (config) => {
    // Ensure auth header is always present
    config.headers.Authorization = getBasicAuthHeader();

    // Log requests in development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Drupal API] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for error handling
drupalApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      // Server responded with error status
      console.error(
        `[Drupal API Error] ${error.response.status}: ${error.response.statusText}`,
      );
    } else if (error.request) {
      // Request made but no response received
      console.error("[Drupal API Error] No response received from server");
    } else {
      // Error in request configuration
      console.error("[Drupal API Error]", error.message);
    }
    return Promise.reject(error);
  },
);

export default drupalApi;
