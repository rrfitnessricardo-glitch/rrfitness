# 🔐 Guía para crear un Personal Access Token en GitHub

GitHub ya no permite usar contraseñas directamente. Necesitas crear un **Personal Access Token (PAT)**.

## Pasos para crear el token:

1. **Ve a GitHub y inicia sesión** con: `rrfitnessricardo@gmail.com`

2. **Clic en tu foto de perfil** (arriba a la derecha) → **Settings**

3. **En el menú lateral**, baja hasta el final y haz clic en **Developer settings**

4. **Clic en "Personal access tokens"** → **Tokens (classic)**

5. **Clic en "Generate new token"** → **"Generate new token (classic)"**

6. **Configura el token:**
   - **Note**: "PageFitRicardo - Deploy"
   - **Expiration**: Elige cuánto tiempo quieres que dure (90 días, 1 año, etc.)
   - **Selecciona los permisos (scopes):**
     - ✅ **repo** (todos los permisos de repositorio)
     - ✅ **workflow** (para GitHub Actions)

7. **Clic en "Generate token"** (abajo)

8. **⚠️ IMPORTANTE: Copia el token inmediatamente** - solo se muestra una vez. Se verá algo como: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

9. **Guarda el token en un lugar seguro**

## Usar el token:

Cuando hagas `git push`, te pedirá:
- **Username**: `rrfitnessricardo-glitch` (o tu usuario de GitHub)
- **Password**: **Pega el token aquí** (NO tu contraseña)

---

## Alternativa rápida: Usar el token en la URL

Si prefieres, puedo actualizar el remoto para incluir el token directamente (menos seguro pero más rápido).

