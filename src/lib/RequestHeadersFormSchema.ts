'use client';

import * as z from 'zod';

// Define a schema for HTTP request headers
const HttpHeadersSchema = z.object({
  'Content-Type': z.string(),
  Authorization: z.string(),
  // Add other headers you expect in your request
});

// Define a schema for the entire HTTP request
const HttpRequestSchema = z.object({
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
  url: z.string(),
  body: z.string(),
  // You can use specific types for the body, like z.string(), z.object(), etc.
  headers: HttpHeadersSchema,
});

// Usage example
const validHttpRequest = {
  method: 'POST',
  url: 'https://example.com/api/resource',
  body: 'Some request body',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YourTokenHere',
  },
};

try {
  // Validate the HTTP request using the schema
  const validatedHttpRequest = HttpRequestSchema.parse(validHttpRequest);
  console.log('Valid HTTP Request:', validatedHttpRequest);
} catch (error) {
  console.error('Invalid HTTP Request:', error);
}
