/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` writes a plain HTML site to ./out, ready for
  // PHP/shared hosting (upload the contents of ./out to public_html).
  output: "export",
  // /about/ -> about/index.html, so clean URLs work without any server rewrite rules.
  trailingSlash: true,
  // No image optimization server on static hosting.
  images: { unoptimized: true },
};

export default nextConfig;
