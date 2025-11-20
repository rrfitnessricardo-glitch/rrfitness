/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // ⬅️ Esta línea es clave para exportar a carpeta "out"
  basePath: '/rrfitness', // ⬅️ Base path para GitHub Pages
  assetPrefix: '/rrfitness', // ⬅️ Prefijo para assets (CSS, JS, imágenes)
}

export default nextConfig
