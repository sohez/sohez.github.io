/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRUCIAL for GitHub Pages static hosting
  output: 'export', 
  
  // FIX for the build failure on GitHub's servers
  images: {
    unoptimized: true, 
  },
  
  // Add your basePath if needed, e.g., if repo name is 'portfolio-site'
  // basePath: '/portfolio-site', 
};

module.exports = nextConfig;
