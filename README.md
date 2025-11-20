# PageFitRicardo

Página web personal para Ricardo - Fitness Trainer

## 🚀 Despliegue en GitHub Pages

Esta página está configurada para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Pasos para subir tu página a GitHub Pages:

1. **Inicializar Git** (si no lo has hecho):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Crear un repositorio en GitHub**:
   - Ve a [github.com](https://github.com) y crea un nuevo repositorio
   - **NO** inicialices con README, .gitignore o licencia (ya los tienes)

3. **Conectar tu repositorio local con GitHub**:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git branch -M main
   git push -u origin main
   ```

4. **Activar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Click en **Settings** (Configuración)
   - En el menú lateral, busca **Pages**
   - En **Source**, selecciona **GitHub Actions**
   - Guarda los cambios

5. **¡Listo!** 🎉
   - Cada vez que hagas `git push`, GitHub Actions construirá y desplegará tu página automáticamente
   - Tu página estará disponible en: `https://TU_USUARIO.github.io/TU_REPOSITORIO`

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📝 Notas

- La página se construye automáticamente con cada push a la rama `main`
- Los archivos estáticos se generan en la carpeta `out/`
- GitHub Pages es completamente **GRATIS** para repositorios públicos

