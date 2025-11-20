import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper para rutas de assets con basePath para GitHub Pages
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/rrfitness'
  // Asegurar que el path empiece con /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // Si ya tiene el basePath, no lo agregamos de nuevo
  if (cleanPath.startsWith(basePath)) {
    return cleanPath
  }
  return `${basePath}${cleanPath}`
}
