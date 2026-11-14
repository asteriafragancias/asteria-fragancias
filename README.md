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

## Publicar cambios desde admin.html sin descargar nada
1. En GitHub: tu foto de perfil > "Settings" > "Developer settings" > "Personal access tokens" > "Fine-grained tokens" > "Generate new token".
2. Elegí vencimiento, en "Repository access" marcá "Only select repositories" y elegí tu repositorio.
3. En "Permissions" > "Repository permissions" poné "Contents" en "Read and write". Generá el token y copialo.
4. En `admin.html` pegá el token, tocá "Publicar cambios en la tienda" y en uno o dos minutos se actualiza.
El token es como una contraseña: no lo compartas. Marcá "Recordar" solo en tu computadora.

## Vista previa al compartir
Los metadatos de `index.html` usan la dirección `https://luceromelina35-sys.github.io/asteria-fragancias/`. Si cambiás a un dominio propio, actualizá esa dirección en las líneas `og:image` y `og:url`.

## Registro de pedidos en una planilla de Google
1. Creá una planilla nueva en Google Sheets.
2. Menú "Extensiones" > "Apps Script". Borrá lo que haya y pegá el contenido de `registro-pedidos.gs`. Guardá.
3. Tocá "Implementar" > "Nueva implementación". En el engranaje elegí "Aplicación web", poné "Ejecutar como: Yo" y "Quién tiene acceso: Cualquier persona". Implementá y aceptá los permisos.
4. Copiá la dirección que termina en `/exec` y pegala en `admin.html`, en "Dirección del registro de pedidos". Publicá los cambios.
Cada pedido que se envía por WhatsApp se anota en la hoja "Pedidos" con su número, productos, total, pago y entrega. Esos datos son de tus clientes: cuidá quién tiene acceso a la planilla.

## Stock
En cada producto podés cargar las unidades disponibles. Con 3 o menos aparece "Últimas unidades", con 0 aparece "Agotado" y el botón pasa a "Avisame cuando vuelva". El stock no se descuenta solo al vender: actualizalo desde `admin.html`.

## Páginas para compartir
Cada perfume tiene su página `perfume-N.html` con foto y título propios al compartir el link. Al agregar productos desde `admin.html` con token, la página se crea sola. Si cambiás el nombre o la descripción de un perfume, tocá "Actualizar páginas para compartir".
