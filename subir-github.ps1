# Script para subir tu página a GitHub Pages
# Ejecuta este script en PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Configuración para GitHub Pages" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si Git está instalado
try {
    $gitVersion = git --version
    Write-Host "✓ Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git no está instalado. Por favor instálalo desde: https://git-scm.com/" -ForegroundColor Red
    exit 1
}

# Verificar si ya existe un repositorio Git
if (Test-Path .git) {
    Write-Host "✓ Repositorio Git ya inicializado" -ForegroundColor Green
} else {
    Write-Host "Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
    Write-Host "✓ Repositorio Git inicializado" -ForegroundColor Green
}

# Agregar todos los archivos
Write-Host ""
Write-Host "Agregando archivos al repositorio..." -ForegroundColor Yellow
git add .

# Hacer commit
Write-Host "Creando commit inicial..." -ForegroundColor Yellow
git commit -m "Initial commit - Página lista para GitHub Pages"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Siguiente paso:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Ve a https://github.com y crea un nuevo repositorio" -ForegroundColor Yellow
Write-Host "2. NO marques 'Initialize with README'" -ForegroundColor Yellow
Write-Host "3. Copia la URL de tu repositorio (ejemplo: https://github.com/tu-usuario/tu-repositorio.git)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Luego ejecuta estos comandos:" -ForegroundColor Cyan
Write-Host ""
Write-Host "  git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git" -ForegroundColor White
Write-Host "  git branch -M main" -ForegroundColor White
Write-Host "  git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "Después, en GitHub:" -ForegroundColor Cyan
Write-Host "  Settings > Pages > Source: GitHub Actions" -ForegroundColor White
Write-Host ""
Write-Host "¡Tu página estará disponible en:" -ForegroundColor Green
Write-Host "  https://TU_USUARIO.github.io/TU_REPOSITORIO" -ForegroundColor Green
Write-Host ""

