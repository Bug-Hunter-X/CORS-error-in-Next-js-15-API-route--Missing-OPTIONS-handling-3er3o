# Next.js 15 API Route CORS Error: Missing OPTIONS Handling

This repository demonstrates a common CORS error encountered in Next.js 15 API routes and provides a solution.

## Problem

When making requests to a Next.js 15 API route from a different origin (e.g., a client-side application running on a different domain), you might encounter CORS errors. This is often because the API route doesn't handle `OPTIONS` preflight requests correctly.

## Solution

The solution is to explicitly handle `OPTIONS` requests in your API route handler and set the appropriate `Allow` header to indicate which HTTP methods are allowed.