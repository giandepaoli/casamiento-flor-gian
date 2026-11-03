# Invitación casamiento Flor & Gian

Sitio estático (HTML + CSS + JS, sin build) publicado en GitHub Pages. Las confirmaciones se guardan en una Google Sheet a través de Google Apps Script.

```
index.html          estructura de la página
styles.css          estilos
app.js              lógica (cuenta regresiva, carrusel, copiar, formulario)
config.js           TODOS los datos editables
img/                fotos
apps-script/Code.gs script de la Google Sheet
```

Para cambiar textos, fechas, montos, fotos o regalos, editá solo `config.js`.

## 1. Google Sheet + Apps Script

1. Creá una Google Sheet nueva (por ejemplo "Casamiento - Confirmaciones").
2. Andá a **Extensiones > Apps Script**, borrá lo que haya y pegá el contenido de `apps-script/Code.gs`. Guardá.
3. Tocá **Implementar > Nueva implementación**. En el engranaje elegí **Aplicación web** y configurala así:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
4. Tocá **Implementar** y autorizá los permisos. Si aparece "Google no verificó esta app", elegí **Configuración avanzada > Ir a … (no seguro)**: es tu propio script.
5. Copiá la **URL de la aplicación web** (termina en `/exec`) y pegala en `config.js`, en `confirmacion.appsScriptUrl`.

La hoja **Confirmaciones** se crea sola con el primer envío, con una fila por persona.

## 2. Actualizar el script sin que cambie la URL

Si modificás `Code.gs`, no hagas una implementación nueva, porque eso genera otra URL:

1. **Implementar > Gestionar implementaciones**.
2. Tocá el lápiz (editar) de la implementación que ya existe.
3. En **Versión** elegí **Nueva versión** y tocá **Implementar**.

La URL sigue siendo la misma.

## 3. Publicar en GitHub Pages

```bash
git add .
git commit -m "Actualizo la invitación"
git push origin main
```

En GitHub, entrá al repo y andá a **Settings > Pages**. En **Source** elegí **Deploy from a branch**, rama **main**, carpeta **/ (root)**, y guardá. En uno o dos minutos la web queda en `https://<usuario>.github.io/<repo>/`.

Cada push a `main` actualiza el sitio.

## 4. Probar en local

```bash
python3 -m http.server 8000
```

Abrí http://localhost:8000. Para verla como en el celular, usá las herramientas de desarrollo del navegador (modo dispositivo, 375px de ancho).

## Fotos

Usá fotos de 1600px como máximo en el lado más largo y en JPG con calidad ~80, así cargan rápido desde WhatsApp. Por ejemplo, con ImageMagick:

```bash
magick original.jpg -resize "1600x1600>" -quality 80 img/foto-1.jpg
```

Después cargá cada una en `config.js` (`fotos`), con su ancho y alto reales y su mensaje.

## Vista previa al compartir el link

La imagen que aparece al compartir el link por WhatsApp es `img/compartir.jpg` (1200×630). El título, la descripción y la URL de esa vista previa están en las etiquetas `og:` del `<head>` de `index.html` (no en `config.js`, porque WhatsApp no ejecuta JavaScript). Si cambia la URL del sitio, actualizá `og:url` y `og:image`.

WhatsApp guarda la vista previa en caché: si la cambiás, puede tardar en actualizarse para links ya compartidos.
