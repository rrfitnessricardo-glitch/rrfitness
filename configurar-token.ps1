# Script para configurar el Personal Access Token de GitHub
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Configuración de Token de GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Para hacer push a GitHub necesitas un Personal Access Token." -ForegroundColor Yellow
Write-Host ""
Write-Host "Pasos rápidos:" -ForegroundColor Cyan
Write-Host "1. Ve a: https://github.com/settings/tokens" -ForegroundColor White
Write-Host "2. Clic en 'Generate new token' > 'Generate new token (classic)'" -ForegroundColor White
Write-Host "3. Nombre: 'PageFitRicardo'" -ForegroundColor White
Write-Host "4. Selecciona: ✅ repo (todos)" -ForegroundColor White
Write-Host "5. Selecciona: ✅ workflow" -ForegroundColor White
Write-Host "6. Clic en 'Generate token'" -ForegroundColor White
Write-Host "7. COPIA el token (empieza con ghp_)" -ForegroundColor White
Write-Host ""
Write-Host "Luego ejecuta:" -ForegroundColor Cyan
Write-Host '  git remote set-url origin https://TU_TOKEN@github.com/rrfitnessricardo-glitch/rrfitness.git' -ForegroundColor Green
Write-Host ""
Write-Host "O simplemente haz 'git push origin main' y cuando pida:" -ForegroundColor Cyan
Write-Host "  Username: rrfitnessricardo-glitch" -ForegroundColor White
Write-Host "  Password: (pega tu token aquí)" -ForegroundColor White
Write-Host ""

$token = Read-Host "Si ya tienes el token, pégalo aquí (o presiona Enter para hacerlo después)"
if ($token) {
    $remoteUrl = "https://$token@github.com/rrfitnessricardo-glitch/rrfitness.git"
    git remote set-url origin $remoteUrl
    Write-Host ""
    Write-Host "✓ Token configurado correctamente" -ForegroundColor Green
    Write-Host "Ahora puedes hacer: git push origin main" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Cuando tengas el token, ejecuta este script de nuevo o usa:" -ForegroundColor Yellow
    Write-Host '  git remote set-url origin https://TU_TOKEN@github.com/rrfitnessricardo-glitch/rrfitness.git' -ForegroundColor White
}

