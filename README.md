# Asteria Fragancias · Tienda web

Tienda con catálogo, carrito y pedido por WhatsApp. Sitio estático: no necesita servidor.

## Archivos
- `index.html`: la tienda
- `datos.js`: productos, precios, WhatsApp, Instagram y textos
- `admin.html`: panel para editar `datos.js` sin tocar código
- `foto-1.jpg`, `foto-2.jpg`, ...: fotos de productos (el número es el id del producto)
- `portada.jpg`, `favicon.png`: imágenes de marca

## Publicar en GitHub Pages (gratis)
1. Creá un repositorio público en GitHub (por ejemplo `asteria`).
2. Tocá "Add file" > "Upload files" y arrastrá TODO el contenido de esta carpeta (no la carpeta en sí; ya no hay subcarpetas).
3. En "Settings" > "Pages", elegí "Deploy from a branch", rama `main` y carpeta `/ (root)`.
4. En un par de minutos la tienda queda en `https://TU-USUARIO.github.io/asteria/`.

## Cargar precios y datos
1. Abrí `admin.html` (en tu sitio o desde la carpeta).
2. Completá precios, WhatsApp (ej: `5492611234567`), Instagram y textos.
3. Tocá "Descargar datos.js".
4. En GitHub: "Add file" > "Upload files", subí el `datos.js` nuevo y confirmá. Reemplaza al anterior.

## Agregar un producto
Subí la foto con el número siguiente (`foto-10.jpg`) y copiá un bloque de producto dentro de `datos.js` con `"id": 7`.

## Funciones de la tienda
- Filtros por Ella / Él / Unisex, por marca y buscador (también busca por notas y familia olfativa)
- Test "Encontrá tu aroma": usa los campos Para, Estilo y Momento de cada producto
- Etiquetas "Novedad" y "Últimas unidades", y botón de "Agotado"
- Medios de pago y datos para pagar: se cargan en `admin.html` y se muestran en el pedido
- Botón flotante de WhatsApp (aparece al cargar tu número)
- Opiniones de clientes (aparecen al cargar al menos una)

## Estadísticas de visitas
1. Creá una propiedad en Google Analytics y copiá el código que empieza con `G-`.
2. Pegalo en `admin.html`, en "Código de Google Analytics", y subí el `datos.js` nuevo.

## Dominio propio (.com.ar)
1. Registrá el dominio en nic.ar o en tu proveedor de dominios.
2. En GitHub: "Settings" > "Pages" > "Custom domain" y escribí tu dominio. GitHub crea el archivo `CNAME` solo.
3. En el panel de tu dominio (DNS) cargá los registros que indica la documentación de GitHub Pages (registros A para el dominio principal y un CNAME de `www` hacia `TU-USUARIO.github.io`).
4. Cuando GitHub verifique el dominio, activá "Enforce HTTPS".
