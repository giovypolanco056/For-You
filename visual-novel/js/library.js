/* ================================================================
   LIBRARY.JS
   La biblioteca final: un estante con libros seleccionables.
   Se revela sobre la pantalla en negro al terminar la novela visual.

   ► TODO LO QUE PUEDES EDITAR ESTÁ EN "LIBRARY_CONFIG" (aquí abajo).
     El motor está más abajo; no necesitas tocarlo.
================================================================ */

const LIBRARY_CONFIG = {

  header: {
    title: "La Biblioteca",
    subtitle: "Elige un libro. Cada uno guarda algo de nosotros.",
  },

  /* ── Los conejitos ocultos 🐇 ─────────────────────────────────
     Hay 5 conejitos negros escondidos en la biblioteca.
     Si los encuentra todos, aparece una escena especial. */
  rabbitHunt: {
    sprite: "assets/sprites/Bunny_Me.png",
    ids: ["estante", "album", "manual", "disco", "razones"],
    lines: [
      "Hola... así que encontraste los conejitos.",
      "No quise despertarte tristeza ni nada parecido, pero quiero expresar lo mucho que me duele no haberle conocido.",
      "Seguro le hubiera acariciado mucho y nos llevaríamos bien...",
      "Era un gran conejo. Y ha de estar dando saltitos en el cielo, amando todo lo que hiciste por él.",
    ],
  },

  /* ==============================================================
     LIBROS
     Cada libro tiene:
       apariencia (colores, emoji, tamaño) + su contenido.
     El campo "type" define qué pasa al abrirlo. No lo cambies.
  ============================================================== */
  books: [

    /* ── 📖 1. 365 DÍAS CONTIGO (PDF) ────────────────────────── */
    {
      id: "365",
      type: "pdf",
      title: "365 días contigo",
      emoji: "📖",
      description: "El intento más grande que he hecho de poner en palabras lo mucho que te amo.",
      // Apariencia: el más grande, tapa dura azul oscuro, letras doradas
      appearance: { c1: "#24365e", c2: "#111d3a", ink: "#f0d98c", w: 150, h: 220 },
      // Abre el flipbook en línea (Heyzine)
      url: "https://heyzine.com/flip-book/7ee1fc545a.html",
    },

    /* ── 📷 2. NUESTRO ÁLBUM ─────────────────────────────────── */
    {
      id: "album",
      type: "album",
      title: "Nuestro Álbum",
      emoji: "📷",
      description: "El lugar donde están guardados nuestros momentos.",
      // Apariencia: cuero marrón con polaroid en la portada
      appearance: { c1: "#7a4a28", c2: "#4a2c16", ink: "#f3e6cf", w: 130, h: 190, polaroid: true },

      // ► AGREGA TUS FOTOS AQUÍ. Copia las imágenes en la carpeta
      //   "fotos de album" y llena cada sección.
      //   Formato de cada foto:
      //   { src: "../fotos de album/web/mi-foto.jpg", date: "Fecha", story: "Historia" }
      //   Si dejas "src" vacío ("") se mostrará un marco de "próximamente".
      sections: [
        {
          name: "Fotos juntos",
          photos: [
            { src: "../fotos de album/web/IMG-20250527-WA0023.jpg", date: "mayo 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250527-WA0029.jpg", date: "mayo 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250527-WA0032.jpg", date: "mayo 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250528-WA0266.jpg", date: "mayo 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250528-WA0267.jpg", date: "mayo 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250829-WA0354.jpg", date: "agosto 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250831-WA0003.jpg", date: "agosto 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250921-WA0231.jpg", date: "septiembre 2025", story: "" },
            { src: "../fotos de album/web/IMG-20251106-WA0096.jpg", date: "noviembre 2025", story: "" },
            { src: "../fotos de album/web/IMG-20260214-WA0183.jpg", date: "febrero 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260214-WA0188.jpg", date: "febrero 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-04-07 at 23.48.31 (1).jpeg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-04-07 at 23.48.31 (2).jpeg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-04-07 at 23.48.31.jpeg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-04-07 at 23.52.37.jpeg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260412-WA0259.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260413-WA0653.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260418-WA0218.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260418-WA0221.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260418-WA0225.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-13 at 19.01.57.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 20.06.29 (2).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.53.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.54.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.57 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.57 (2).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.57.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.06.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.07 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.07 (2).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.08.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.09.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.10 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.10 (2).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.10 (3).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.15 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.07.17.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.07.18 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260524-WA0160.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.21.11 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.37.00.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260608-WA0005.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260610-WA0089.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260610-WA0090.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260610-WA0093.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260623-WA0020.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260623-WA0021.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260623-WA0023.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0026.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0028.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0029.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0030.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0032.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0034.jpg", date: "julio 2026", story: "" },
          ],
        },
        {
          name: "Besos y abrazos",
          photos: [
            { src: "../fotos de album/web/IMG-20250829-WA0353.jpg", date: "agosto 2025", story: "" },
            { src: "../fotos de album/web/IMG-20260130-WA0166.jpg", date: "enero 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260214-WA0222.jpg", date: "febrero 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260214-WA0225.jpg", date: "febrero 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260412-WA0266.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260413-WA0054.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260413-WA0269.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260427-WA0095.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260427-WA0098.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260505-WA0152.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260505-WA0155.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260505-WA0157.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260505-WA0161.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260505-WA0162.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260505-WA0164.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 20.06.28 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 20.06.28 (2).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 20.06.29 (3).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 20.06.29 (4).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.57 (3).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.12 (3).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260524-WA0164.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.34.34.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-06-08 at 20.04.17.jpeg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0077.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0096.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0097.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0098.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0099.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0100.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0127.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0130.jpg", date: "junio 2026", story: "" },
          ],
        },
        {
          name: "Atardeceres en la playa",
          photos: [
            { src: "../fotos de album/web/IMG-20260608-WA0001.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260608-WA0002.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260608-WA0003.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260608-WA0006.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260608-WA0009.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0073.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0074.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0076.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0080.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0083.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0085.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0086.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0090.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0091.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0092.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0093.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0094.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0102.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0107.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0113.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0117.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0142.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260614-WA0143.jpg", date: "junio 2026", story: "" },
          ],
        },
        {
          name: "Citas y salidas",
          photos: [
            { src: "../fotos de album/web/IMG-20251219-WA0339.jpg", date: "diciembre 2025", story: "" },
            { src: "../fotos de album/web/IMG-20260413-WA0101.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.07.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.10.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.13 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.13 (2).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.25.03.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260608-WA0019.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0038.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0039.jpg", date: "julio 2026", story: "" },
          ],
        },
        {
          name: "Momentos divertidos",
          photos: [
            { src: "../fotos de album/web/IMG-20250527-WA0303.jpg", date: "mayo 2025", story: "" },
            { src: "../fotos de album/web/IMG-20251113-WA0087.jpg", date: "noviembre 2025", story: "" },
            { src: "../fotos de album/web/IMG-20260217-WA0007.jpg", date: "febrero 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260418-WA0228.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260418-WA0235.jpg", date: "abril 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260504-WA0053.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260504-WA0059.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260505-WA0163.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.02.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.14.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.15.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.11.06.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.33.03.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.40.21.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-31 at 11.07.59 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-06-08 at 20.22.55.jpeg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260609-WA0114.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260610-WA0091.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260610-WA0092.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260623-WA0019.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260623-WA0022.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0033.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0035.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0036.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0037.jpg", date: "julio 2026", story: "" },
          ],
        },
        {
          name: "Solo ella",
          photos: [
            { src: "../fotos de album/web/IMG-20250627-WA0019.jpg", date: "junio 2025", story: "" },
            { src: "../fotos de album/web/IMG-20260214-WA0236.jpg", date: "febrero 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260515-WA0058.jpg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.09 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260608-WA0035.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260628-WA0072.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260630-WA0068.jpg", date: "junio 2026", story: "" },
          ],
        },
        {
          name: "Solo él",
          photos: [
            { src: "../fotos de album/web/IMG-20250708-WA0298.jpg", date: "julio 2025", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.54 (1).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260608-WA0034.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0040.jpg", date: "julio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260702-WA0041.jpg", date: "julio 2026", story: "" },
          ],
        },
        {
          name: "Nuestro aniversario",
          photos: [
            { src: "../fotos de album/web/IMG_2203.JPG", date: "marzo 2026", story: "" },
            { src: "../fotos de album/web/IMG_2215.JPG", date: "marzo 2026", story: "" },
            { src: "../fotos de album/web/IMG_2217.JPG", date: "marzo 2026", story: "" },
            { src: "../fotos de album/web/IMG_2218.JPG", date: "marzo 2026", story: "" },
            { src: "../fotos de album/web/IMG_2219.JPG", date: "marzo 2026", story: "" },
          ],
        },
        {
          name: "Recuerdos especiales",
          photos: [
            { src: "../fotos de album/web/IMG-20250527-WA0034.jpg", date: "mayo 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250608-WA0086.jpg", date: "junio 2025", story: "" },
            { src: "../fotos de album/web/IMG-20250627-WA0020.jpg", date: "junio 2025", story: "" },
            { src: "../fotos de album/web/Imagen de WhatsApp 2025-10-10 a las 20.55.54_9c8fccb5.jpg", date: "octubre 2025", story: "" },
            { src: "../fotos de album/web/Imagen de WhatsApp 2025-10-10 a las 22.15.48_8a21cc41.jpg", date: "octubre 2025", story: "" },
            { src: "../fotos de album/web/IMG-20260223-WA0206.jpg", date: "febrero 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260310-WA0063.jpg", date: "marzo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.52.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.31.42.jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260610-WA0082.jpg", date: "junio 2026", story: "" },
            { src: "../fotos de album/web/IMG-20260610-WA0088.jpg", date: "junio 2026", story: "" },
          ],
        },
      ],
    },

    /* ── 📓 3. MANUAL PARA CUIDAR Y AMAR A MI JOSI ───────────── */
    {
      id: "manual",
      type: "manual",
      title: "Manual para cuidar y amar a mi Josi",
      emoji: "📓",
      description: "Versión actual: en constante actualización.",
      // Apariencia: libreta negra con notas adhesivas
      appearance: { c1: "#2b2b30", c2: "#141416", ink: "#f3e6cf", w: 125, h: 185, sticky: true },

      // ► PEGA AQUÍ EL TEXTO DE CADA CAPÍTULO cuando lo tengas.
      //   Deja "body" vacío ("") y aparecerá "Próximamente...".
      chapters: [
        { title: "Qué hacer cuando está triste", body: "" },
        { title: "Qué hacer cuando sobrepiensa", body: "" },
        { title: "Cómo hacerla reír", body: "" },
        { title: "Cosas que ama", body: "" },
        { title: "Cosas que odia", body: "" },
        { title: "Cómo saber si está molesta", body: "" },
        { title: "Cómo hacerla sentir amada", body: "" },
        { title: "Protocolo de emergencia cuando tiene inseguridades", body: "" },
        { title: "Protocolo de emergencia cuando está celosa", body: "" },
        { title: "Recordatorio: abrazarla más", body: "" },
      ],
    },

    /* ── 💿 4. TOCADISCOS ────────────────────────────────────── */
    {
      id: "records",
      type: "records",
      title: "Tocadiscos",
      emoji: "💿",
      description: "La banda sonora de nosotros.",
      // Apariencia: tono madera/dorado antiguo
      appearance: { c1: "#5a3f24", c2: "#2e1f12", ink: "#f0d98c", w: 130, h: 175 },

      // ► AGREGA AUDIO Y PORTADAS. Copia los archivos en la carpeta
      //   "disco" y llena cover/audio/story de cada canción.
      //   cover y audio son opcionales; si faltan, igual se muestra la historia.
      discs: [
        { title: "La canción con la que le dijiste te amo", artist: "", cover: "", audio: "", story: "" },
        { title: "Cars Outside", artist: "", cover: "", audio: "", story: "" },
        { title: "BTS", artist: "", cover: "", audio: "", story: "" },
        { title: "Canciones que te recuerdan a ella", artist: "", cover: "", audio: "", story: "" },
        { title: "Canciones del futuro", artist: "", cover: "", audio: "", story: "" },
        { title: "Canciones de Navidad", artist: "", cover: "", audio: "", story: "" },
      ],
    },

    /* ── 🚫 5. CÓMO DEJAR DE AMARTE (error) ──────────────────── */
    {
      id: "stop",
      type: "error",
      title: "Cómo dejar de amarte",
      emoji: "🚫",
      description: "Investigación inconclusa.",
      // Apariencia: gris, desgastado
      appearance: { c1: "#5c5c60", c2: "#3a3a3e", ink: "#d8d8d8", w: 118, h: 178 },
      // El contenido y el auto-cierre están definidos en el motor.
    },

    /* ── ❤️ 6. RAZONES POR LAS QUE TE AMO (paginado) ─────────── */
    {
      id: "reasons",
      type: "reasons",
      title: "Razones por las que te amo",
      emoji: "❤️",
      description: "Versión resumida.",
      // Apariencia: rojo muy grueso
      appearance: { c1: "#9c1330", c2: "#5a0a1c", ink: "#ffe0e6", w: 150, h: 195 },

      // ► Cada elemento es una página/razón, en orden.
      //   Agrega tantas como quieras (la idea es que sean muchas).
      //   La ÚLTIMA de esta lista es la más importante.
      reasons: [
        "Porque contigo puedo ser yo.",
"Porque haces hermosos mis días simples.",
"Porque volvería a elegirte.",
"Porque tu sonrisa siempre encuentra la forma de mejorar mi día.",
"Porque me haces sentir en casa incluso cuando estamos lejos.",
"Porque amo escuchar tus historias, aunque ya las haya escuchado antes.",
"Porque me haces reír cuando menos lo espero.",
"Porque te preocupas por las personas que amas con todo tu corazón.",
"Porque eres más fuerte de lo que tú misma crees.",
"Porque tienes una forma única de ver el mundo.",
"Porque contigo aprendí que el amor también es tranquilidad.",
"Porque me gusta la persona que soy cuando estoy contigo.",
"Porque tus abrazos se sienten como refugio.",
"Porque nunca me canso de escucharte hablar.",
"Porque me encanta cuando te emocionas por las cosas que amas.",
"Porque tu existencia hace que el mundo se sienta un poco más bonito.",
"Porque me haces querer ser una mejor persona.",
"Porque incluso tus defectos me parecen parte de tu belleza.",
"Porque tienes el corazón más noble que he conocido.",
"Porque amas a tu familia profundamente.",
"Porque tu fe me inspira.",
"Porque sigues caminando incluso cuando las cosas se ponen difíciles.",
"Porque eres capaz de amar con una intensidad increíble.",
"Porque tus ojos siempre logran transmitirme paz.",
"Porque me gusta cuidar de ti.",
"Porque me gusta que me cuides.",
"Porque contigo aprendí a ser vulnerable.",
"Porque haces especiales los momentos más simples.",
"Porque me encanta escucharte reír.",
"Porque me encanta cuando te molestan mis tonterías.",
"Porque siempre encuentras la manera de sorprenderme.",
"Porque tu compañía nunca se siente suficiente.",
"Porque me haces extrañarte incluso antes de despedirnos.",
"Porque amo cómo pronuncias ciertas palabras.",
"Porque me gusta cómo piensas.",
"Porque admiro tu inteligencia.",
"Porque admiro tu sensibilidad.",
"Porque admiro tu capacidad de seguir adelante.",
"Porque me encanta descubrir nuevas partes de ti.",
"Porque nunca siento que tengo que fingir contigo.",
"Porque me haces sentir comprendido.",
"Porque me haces sentir querido.",
"Porque haces que mis problemas parezcan más pequeños.",
"Porque me gusta compartir mis logros contigo.",
"Porque eres la primera persona en la que pienso cuando algo bueno sucede.",
"Porque eres la persona que quiero a mi lado cuando algo malo sucede.",
"Porque haces que el futuro se vea menos aterrador.",
"Porque me gusta imaginar mi vida contigo.",
"Porque contigo entendí lo que significa construir un hogar.",
"Porque me gusta tu manera de amar.",
"Porque me gusta tu manera de preocuparte.",
"Porque me gusta tu manera de existir.",
"Porque tu presencia me da tranquilidad.",
"Porque siempre quiero saber cómo estuvo tu día.",
"Porque me encanta hablar contigo hasta quedarnos dormidos.",
"Porque me gusta escucharte respirar cuando dormimos en llamada.",
"Porque me gusta cuando me cuentas tus chismes.",
"Porque me gusta cuando me cuentas tus sueños.",
"Porque me gusta cuando me cuentas tus miedos.",
"Porque confías en mí.",
"Porque me permites conocerte cada día un poco más.",
"Porque eres hermosa incluso cuando no lo crees.",
"Porque eres valiosa incluso cuando lo olvidas.",
"Porque eres fuerte incluso cuando te sientes débil.",
"Porque me encanta tu forma de amar la Navidad.",
"Porque me gusta la niña que todavía vive dentro de ti.",
"Porque me gusta tu capacidad de emocionarte.",
"Porque me gusta cuando te ríes de mis disparates.",
"Porque me gusta molestarte.",
"Porque incluso tus celos me recuerdan cuánto te importo.",
"Porque eres paciente conmigo.",
"Porque me perdonas cuando me equivoco.",
"Porque creces conmigo.",
"Porque aprendes conmigo.",
"Porque lloraste conmigo.",
"Porque te quedaste conmigo.",
"Porque hemos sido vulnerables juntos.",
"Porque nunca te rendiste con nosotros.",
"Porque eres una de las personas más valientes que conozco.",
"Porque tienes un corazón hermoso.",
"Porque tienes un alma hermosa.",
"Porque me haces creer más en el amor.",
"Porque me haces creer más en el futuro.",
"Porque me haces creer más en mí.",
"Porque cuando pienso en mis metas, apareces tú.",
"Porque quiero vivir mis mejores recuerdos contigo.",
"Porque quiero vivir también los peores días contigo.",
"Porque haces que valga la pena intentarlo.",
"Porque haces que valga la pena esperar.",
"Porque haces que valga la pena luchar.",
"Porque contigo aprendí que amar también es elegir.",
"Porque contigo aprendí que amar también es quedarse.",
"Porque contigo aprendí que amar también es construir.",
"Porque eres mi lugar seguro.",
"Porque eres mi persona favorita.",
"Porque eres mi mejor casualidad.",
"Porque eres una de las mayores bendiciones que Dios ha puesto en mi vida.",
"Porque cuando pienso en felicidad, pienso en ti.",
"Porque cuando pienso en hogar, pienso en ti.",
"Porque cuando pienso en amor, pienso en ti.",
"Porque después de todo este tiempo, sigo enamorándome de ti.",
"Porque si volviera a vivir mi vida, volvería a buscarte."
      ],
      // Página final sin número (cierre del libro):
      closingPage: "Y aun así siento que faltan muchas más.",
    },

    /* ── ⏳ 7. LIBRO PARA EL FUTURO ──────────────────────────── */
    {
      id: "future",
      type: "future",
      title: "Libro para el futuro",
      emoji: "⏳",
      description: "No abrir hasta haber vivido más.",
      // Apariencia: blanco con bordes dorados
      appearance: { c1: "#efe9dc", c2: "#d8cfb8", ink: "#8a6d2f", w: 128, h: 200 },

      // ► Cada capítulo se desbloquea un sábado (año, mes-1, día).
      //   Antes de su fecha aparece cerrado con candado.
      chapters: [
        { title: "Capítulo 9",  body: "Nuestro segundo aniversario.",     unlock: new Date(2026, 6, 11) },
        { title: "Capítulo 10", body: "Nuestra primera Navidad en casa.", unlock: new Date(2026, 6, 18) },
        { title: "Capítulo 11", body: "El día que cumplimos la promesa.", unlock: new Date(2026, 6, 25) },
        { title: "Capítulo 12", body: "Lo logramos.",                     unlock: new Date(2026, 7, 1)  },
        { title: "Capítulo 13", body: "Todavía nosotros.",                unlock: new Date(2026, 7, 8)  },
      ],
    },

    /* ── 🔒 8. LIBRO BLOQUEADO ───────────────────────────────── */
    {
      id: "locked",
      type: "locked",
      title: "Libro bloqueado",
      emoji: "🔒",
      description: "Acceso restringido.",
      // Apariencia: negro con candado dorado
      appearance: { c1: "#17171c", c2: "#050508", ink: "#f0d98c", w: 122, h: 188, lock: true },

      // ► Tipos de requisito:
      //   "rabbits" → se marca solo al encontrar los 5 conejitos
      //   "date"    → se marca solo cuando llegue unlockDate
      //   "manual"  → ella puede marcarlo tocándolo (queda guardado)
      //   "always"  → siempre está marcado
      requirements: [
        { id: "conejos",  type: "rabbits", label: "Encontrar los 5 conejitos ocultos" },
        { id: "fecha",    type: "date",    label: "Que sea el 7 de diciembre" },
        { id: "botanico", type: "manual",  label: "Ir juntos al Jardín Botánico" },
        { id: "cine",     type: "manual",  label: "Ir juntos al cine" },
        { id: "fotos50",  type: "manual",  label: "Tomarnos 50 fotos" },
        { id: "serie",    type: "manual",  label: "Ver una serie juntos" },
        { id: "amarnos",  type: "always",  label: "Que nos amemos" },
      ],
      note: "Este libro se abrirá cuando llegue el momento.",
      // Fecha de desbloqueo: 7 de diciembre de 2026 (año, mes-1, día)
      unlockDate: new Date(2026, 11, 7, 0, 0, 0),
      // Mensaje cuando ya esté desbloqueado:
      unlockedContent: "Llegó el momento.\n\n(Aquí irá lo que este libro guardaba para ti.)",
    },

  ],
};

/* ================================================================
   MOTOR DE LA BIBLIOTECA  (no necesitas editar debajo de aquí)
================================================================ */
const LibraryEngine = (() => {

  let scene       = null;
  let reader      = null;
  let photoZoom   = null;
  let revealed    = false;
  let audioEl     = null;
  let spinningVinyl = null;

  /* ── Progreso guardado (conejitos y casillas) ──────────────── */
  const Progress = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem('foryou_' + key);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem('foryou_' + key, JSON.stringify(value)); } catch (e) {}
    },
  };

  function rabbitsFound()  { return Progress.get('rabbits', []); }
  function allRabbitsFound() {
    return rabbitsFound().length >= (LIBRARY_CONFIG.rabbitHunt.ids || []).length;
  }

  /* ── Revelar la biblioteca ─────────────────────────────────── */
  function reveal() {
    if (revealed) return;
    revealed = true;

    buildScene();
    document.body.appendChild(scene);

    // Forzar reflow y activar la transición de aparición
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scene.classList.add('visible'));
    });

    // Si encontró los 5 conejitos pero la escena quedó pendiente
    if (allRabbitsFound() && !Progress.get('bunny_scene_seen', false)) {
      setTimeout(() => playBunnyScene(), 4000);
    }
  }

  /* ── Construir la escena (estante) ─────────────────────────── */
  function buildScene() {
    scene = document.createElement('div');
    scene.className = 'library-scene';

    const dust = document.createElement('div');
    dust.className = 'library-dust';

    const header = document.createElement('div');
    header.className = 'library-header';
    header.innerHTML = `
      <h1 class="library-title">${esc(LIBRARY_CONFIG.header.title)}</h1>
      <p class="library-subtitle">${esc(LIBRARY_CONFIG.header.subtitle)}</p>
    `;

    const wrap = document.createElement('div');
    wrap.className = 'library-shelf-wrap';

    // Repartir los libros en filas (4 por estante en escritorio)
    const perShelf = 4;
    for (let i = 0; i < LIBRARY_CONFIG.books.length; i += perShelf) {
      const shelf = document.createElement('div');
      shelf.className = 'library-shelf';

      LIBRARY_CONFIG.books.slice(i, i + perShelf).forEach((book, idx) => {
        const el = buildBook(book);
        el.style.animationDelay = (0.8 + (i + idx) * 0.12) + 's';
        shelf.appendChild(el);
      });

      const board = document.createElement('div');
      board.className = 'library-board';

      // Conejito oculto #1: sentado sobre la última tabla del estante
      if (i + perShelf >= LIBRARY_CONFIG.books.length) {
        placeRabbit(board, 'estante',
          'position:absolute;bottom:100%;right:9%;');
      }

      wrap.appendChild(shelf);
      wrap.appendChild(board);
    }

    scene.appendChild(dust);
    scene.appendChild(header);
    scene.appendChild(wrap);
  }

  /* ── Construir un libro individual ─────────────────────────── */
  function buildBook(book) {
    const a = book.appearance || {};
    const el = document.createElement('div');
    el.className = 'lib-book';
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', book.title);
    el.style.setProperty('--book-c1', a.c1 || '#2c3e66');
    el.style.setProperty('--book-c2', a.c2 || '#1c2947');
    el.style.setProperty('--book-ink', a.ink || '#f0d98c');
    if (a.w) el.style.setProperty('--book-w', a.w + 'px');
    if (a.h) el.style.setProperty('--book-h', a.h + 'px');

    let inner = `<div class="lib-book-emoji">${book.emoji || '📕'}</div>`;

    if (a.polaroid) {
      inner += `<div class="lib-book-polaroid"><div></div></div>`;
    }
    if (a.lock) {
      inner += `<div class="lib-book-lock">🔒</div>`;
    }
    if (a.sticky) {
      inner += `
        <div class="lib-book-sticky" style="top:22%;background:#ffd54f;"></div>
        <div class="lib-book-sticky" style="top:42%;background:#ff8a80;"></div>
        <div class="lib-book-sticky" style="top:62%;background:#80d8ff;"></div>`;
    }

    inner += `<div class="lib-book-title">${esc(book.title)}</div>`;

    el.innerHTML = inner;

    const open = () => openBook(book);
    el.addEventListener('click', open);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });

    return el;
  }

  /* ── Abrir un libro (según su tipo) ────────────────────────── */
  function openBook(book) {
    switch (book.type) {
      case 'pdf':     openReader(book, renderPDF(book)); break;
      case 'album':   openReader(book, renderAlbum(book), 'lib-album-panel'); break;
      case 'manual':  openReader(book, renderChapters(book, false), 'lib-manual-panel'); break;
      case 'records': openReader(book, renderRecords(book), 'lib-record-panel-wrap'); break;
      case 'error':   openError(book); break;
      case 'reasons': openReader(book, renderReasons(book), 'lib-reasons-wrap'); break;
      case 'future':  openReader(book, renderChapters(book, true)); break;
      case 'locked':  openLocked(book); break;
    }
  }

  /* ── Overlay lector genérico ───────────────────────────────── */
  function openReader(book, panelEl, extraClass) {
    ensureReader();
    reader.innerHTML = '';

    const panel = document.createElement('div');
    panel.className = 'lib-reader-panel' + (extraClass ? ' ' + extraClass : '');

    const close = document.createElement('button');
    close.className = 'lib-close';
    close.innerHTML = '✕';
    close.setAttribute('aria-label', 'Cerrar');
    close.addEventListener('click', closeReader);

    panel.appendChild(close);
    panel.appendChild(panelEl);
    reader.appendChild(panel);

    reader.classList.remove('lib-hidden');
    requestAnimationFrame(() => reader.classList.add('visible'));
  }

  function ensureReader() {
    if (reader && document.body.contains(reader)) return;
    reader = document.createElement('div');
    reader.className = 'lib-reader';
    reader.addEventListener('click', (e) => {
      if (e.target === reader) closeReader();
    });
    document.body.appendChild(reader);
  }

  function closeReader() {
    if (!reader) return;
    stopAudio();
    reader.classList.remove('visible');
    setTimeout(() => { if (reader) reader.innerHTML = ''; }, 500);
  }

  /* ── Libro 1: PDF / Flipbook en línea ──────────────────────── */
  function renderPDF(book) {
    const wrap = document.createElement('div');
    wrap.className = 'lib-pdf-panel';
    // Admite un flipbook en línea (book.url) o un PDF local (book.pdf)
    const url = book.url ? book.url : encodeURI(book.pdf);
    wrap.innerHTML = `
      <div class="lib-pdf-bar">
        <span>${esc(book.title)}</span>
        <a class="lib-pdf-open" href="${url}" target="_blank" rel="noopener">Abrir aparte ↗</a>
      </div>
      <iframe class="lib-pdf-frame" src="${url}" title="${esc(book.title)}"></iframe>
    `;
    return wrap;
  }

  /* ── Libro 2: Álbum ────────────────────────────────────────── */
  function renderAlbum(book) {
    const wrap = document.createElement('div');
    wrap.className = 'lib-album-scroll';

    let html = `
      <h2 class="lib-reader-title" style="color:#f0d98c;">${esc(book.title)}</h2>
      <p class="lib-reader-sub" style="color:rgba(243,230,207,0.6);border-color:rgba(240,217,140,0.25);">${esc(book.description)}</p>
    `;

    (book.sections || []).forEach(section => {
      html += `<h3 class="lib-album-section-title">${esc(section.name)}</h3>`;
      html += `<div class="lib-album-grid">`;
      (section.photos || []).forEach((photo, i) => {
        const rot = ((i % 3) - 1) * 2.5;
        const idx = storePhoto(photo);
        const caption = photo.date ? esc(photo.date) : 'sin fecha aún';
        if (photo.src) {
          html += `
            <div class="lib-polaroid" style="--rot:${rot}deg" data-photo="${idx}">
              <img src="${encodeURI(photo.src)}" alt="${esc(section.name)}"
                   loading="lazy" decoding="async"
                   onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'lib-polaroid-empty',textContent:'Foto no encontrada'}))">
              <div class="lib-polaroid-caption">${caption}</div>
            </div>`;
        } else {
          html += `
            <div class="lib-polaroid" style="--rot:${rot}deg" data-photo="${idx}">
              <div class="lib-polaroid-empty">Próximamente 📷</div>
              <div class="lib-polaroid-caption">${caption}</div>
            </div>`;
        }
      });
      html += `</div>`;
    });

    wrap.innerHTML = html;

    wrap.querySelectorAll('[data-photo]').forEach(node => {
      node.addEventListener('click', () => {
        const photo = photoStore[parseInt(node.getAttribute('data-photo'), 10)];
        openPhotoZoom(photo);
      });
    });

    // Conejito oculto #2: al final del álbum
    const rabbitSpot = document.createElement('div');
    rabbitSpot.className = 'lib-rabbit-spot';
    placeRabbit(rabbitSpot, 'album', '');
    wrap.appendChild(rabbitSpot);

    return wrap;
  }

  // Pequeño almacén temporal de fotos para el zoom
  let photoStore = [];
  function storePhoto(p) { photoStore.push(p); return photoStore.length - 1; }

  function openPhotoZoom(photo) {
    if (!photoZoom) {
      photoZoom = document.createElement('div');
      photoZoom.className = 'lib-photo-zoom';
      photoZoom.addEventListener('click', () => photoZoom.classList.remove('visible'));
      document.body.appendChild(photoZoom);
    }
    const imgHtml = photo.src
      ? `<img src="${encodeURI(photo.src)}" alt="foto">`
      : `<div class="lib-zoom-empty">Foto próximamente 📷</div>`;
    photoZoom.innerHTML = `
      ${imgHtml}
      ${photo.date ? `<div class="lib-photo-date">${esc(photo.date)}</div>` : ''}
      ${photo.story ? `<div class="lib-photo-story">${esc(photo.story)}</div>`
                    : `<div class="lib-photo-story" style="opacity:.6;">La historia de esta foto llegará pronto.</div>`}
    `;
    requestAnimationFrame(() => photoZoom.classList.add('visible'));
  }

  /* ── Libros 3 y 7: Capítulos (acordeón) ────────────────────── */

  const MESES_ES = ['enero','febrero','marzo','abril','mayo','junio','julio',
                    'agosto','septiembre','octubre','noviembre','diciembre'];
  const DIAS_ES  = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];

  function fechaBonita(d) {
    return `${DIAS_ES[d.getDay()]} ${d.getDate()} de ${MESES_ES[d.getMonth()]}`;
  }

  function renderChapters(book, isFuture) {
    const wrap = document.createElement('div');
    wrap.className = 'lib-paper';
    const now = new Date();

    let html = `
      <h2 class="lib-reader-title">${esc(book.title)}</h2>
      <p class="lib-reader-sub">${esc(book.description)}</p>
      <ul class="lib-chapter-list">
    `;
    (book.chapters || []).forEach((ch, i) => {
      const locked = ch.unlock && now < ch.unlock;
      if (locked) {
        // Capítulo bloqueado: candado + fecha en la que se abre
        html += `
          <li class="lib-chapter lib-chapter-locked">
            <div class="lib-chapter-head">
              <span class="lib-chapter-num">🔒</span>
              <span>${esc(ch.title)}</span>
              <span class="lib-chapter-date">se abre el ${fechaBonita(ch.unlock)}</span>
            </div>
          </li>`;
      } else {
        const body = ch.body && ch.body.trim()
          ? esc(ch.body)
          : `<span style="opacity:.5;">Próximamente...</span>`;
        html += `
          <li class="lib-chapter">
            <div class="lib-chapter-head">
              <span class="lib-chapter-num">${i + 1}</span>
              <span>${esc(ch.title)}</span>
              <span class="lib-chapter-arrow">▶</span>
            </div>
            <div class="lib-chapter-body"><div class="lib-chapter-body-inner">${body}</div></div>
          </li>`;
      }
    });
    html += `</ul>`;
    wrap.innerHTML = html;

    wrap.querySelectorAll('.lib-chapter:not(.lib-chapter-locked) .lib-chapter-head').forEach(head => {
      head.addEventListener('click', () => {
        head.parentElement.classList.toggle('open');
      });
    });

    // Capítulos bloqueados: sacudida sutil al tocarlos
    wrap.querySelectorAll('.lib-chapter-locked .lib-chapter-head').forEach(head => {
      head.addEventListener('click', () => {
        head.classList.remove('shake');
        void head.offsetWidth;
        head.classList.add('shake');
      });
    });

    // Conejito oculto #3: al final del manual
    if (!isFuture) {
      const spot = document.createElement('div');
      spot.className = 'lib-rabbit-spot';
      placeRabbit(spot, 'manual', '');
      wrap.appendChild(spot);
    }

    return wrap;
  }

  /* ── Libro 4: Tocadiscos ───────────────────────────────────── */
  function renderRecords(book) {
    const wrap = document.createElement('div');
    wrap.className = 'lib-record-panel';

    let discsHtml = '';
    (book.discs || []).forEach((disc, i) => {
      const cover = disc.cover
        ? `<img class="lib-disc-cover" src="${encodeURI(disc.cover)}" alt=""
              onerror="this.style.background='linear-gradient(135deg,#c2185b,#6d1030)';this.removeAttribute('src')">`
        : `<div class="lib-disc-cover"></div>`;
      discsHtml += `
        <div class="lib-disc" data-disc="${i}">
          ${cover}
          <div class="lib-disc-info">
            <span class="lib-disc-title">${esc(disc.title)}</span>
            <span class="lib-disc-artist">${disc.artist ? esc(disc.artist) : '♪'}</span>
          </div>
        </div>`;
    });

    wrap.innerHTML = `
      <h2 class="lib-reader-title" style="color:#f0d98c;">${esc(book.title)}</h2>
      <p class="lib-reader-sub" style="color:rgba(243,230,207,0.6);border-color:rgba(240,217,140,0.25);">${esc(book.description)}</p>
      <div class="lib-turntable">
        <div class="lib-vinyl" id="lib-vinyl"><div class="lib-vinyl-label" id="lib-vinyl-label"></div></div>
      </div>
      <div class="lib-now-playing" id="lib-now-playing">Elige un disco para escucharlo</div>
      <div class="lib-record-story" id="lib-record-story"></div>
      <div class="lib-disc-list">${discsHtml}</div>
    `;

    wrap.querySelectorAll('.lib-disc').forEach(node => {
      node.addEventListener('click', () => {
        const disc = book.discs[parseInt(node.getAttribute('data-disc'), 10)];
        wrap.querySelectorAll('.lib-disc').forEach(d => d.classList.remove('active'));
        node.classList.add('active');
        playDisc(disc, wrap);
      });
    });

    // Conejito oculto #4: junto al tocadiscos
    const turntable = wrap.querySelector('.lib-turntable');
    if (turntable) {
      placeRabbit(turntable, 'disco',
        'position:absolute;bottom:4px;left:-14px;transform:scale(0.85);');
    }

    return wrap;
  }

  function playDisc(disc, wrap) {
    const nowPlaying = wrap.querySelector('#lib-now-playing');
    const story      = wrap.querySelector('#lib-record-story');
    const vinyl      = wrap.querySelector('#lib-vinyl');
    const label      = wrap.querySelector('#lib-vinyl-label');

    nowPlaying.textContent = disc.artist ? `${disc.title} — ${disc.artist}` : disc.title;
    story.textContent = disc.story || 'La historia de esta canción llegará pronto.';

    // Portada en el centro del vinilo
    if (disc.cover) {
      label.style.backgroundImage = `url("${encodeURI(disc.cover)}")`;
      label.style.backgroundSize = 'cover';
    } else {
      label.style.backgroundImage = '';
    }

    // Bajar el volumen de la música de fondo mientras suena el disco
    try { if (window.AudioEngine) AudioEngine.reduceBGMVolume(0.08, 600); } catch (e) {}

    stopAudio();
    if (disc.audio) {
      audioEl = new Audio(encodeURI(disc.audio));
      audioEl.play().catch(() => {
        nowPlaying.textContent = disc.title + ' (audio no disponible)';
      });
      vinyl.classList.add('spinning');
      spinningVinyl = vinyl;
    } else {
      vinyl.classList.add('spinning');
      spinningVinyl = vinyl;
      nowPlaying.textContent = disc.title + ' (sin audio aún)';
    }
  }

  function stopAudio() {
    if (audioEl) { audioEl.pause(); audioEl = null; }
    if (spinningVinyl) { spinningVinyl.classList.remove('spinning'); spinningVinyl = null; }
    try { if (window.AudioEngine) AudioEngine.reduceBGMVolume(0.15, 800); } catch (e) {}
  }

  /* ── Libro 5: Error (se cierra solo) ───────────────────────── */
  function openError(book) {
    ensureReader();
    reader.innerHTML = '';

    const panel = document.createElement('div');
    panel.className = 'lib-reader-panel lib-error-panel';
    panel.innerHTML = `
      <div class="lib-glitch-title">ERROR</div>
      <p>No se encontró contenido.</p>
      <p class="lib-err-reason">Razón:</p>
      <p class="lib-err-reason">El autor nunca logró descubrir cómo hacerlo.</p>
    `;
    reader.appendChild(panel);
    reader.classList.remove('lib-hidden');
    requestAnimationFrame(() => reader.classList.add('visible'));

    // El libro se cierra solo tras unos segundos
    setTimeout(() => closeReader(), 3800);
  }

  /* ── Libro 6: Razones (paginado) ───────────────────────────── */
  function renderReasons(book) {
    const wrap = document.createElement('div');
    wrap.className = 'lib-reasons-panel';

    const reasons = book.reasons || [];
    const closing = book.closingPage;
    const totalPages = reasons.length + (closing ? 1 : 0);
    let page = 0;

    wrap.innerHTML = `
      <div class="lib-reasons-page">
        <div class="lib-reasons-num" id="lib-r-num"></div>
        <div class="lib-reasons-text" id="lib-r-text"></div>
      </div>
      <div class="lib-reasons-nav">
        <button id="lib-r-prev">◀ anterior</button>
        <span class="lib-reasons-count" id="lib-r-count"></span>
        <button id="lib-r-next">siguiente ▶</button>
      </div>
    `;

    const numEl   = wrap.querySelector('#lib-r-num');
    const textEl  = wrap.querySelector('#lib-r-text');
    const countEl = wrap.querySelector('#lib-r-count');
    const prevBtn = wrap.querySelector('#lib-r-prev');
    const nextBtn = wrap.querySelector('#lib-r-next');

    // Conejito oculto #5: en la página 64 (o en la última si hay menos)
    const rabbitPage = totalPages >= 64 ? 63 : totalPages - 1;

    function render() {
      const isClosing = closing && page === reasons.length;
      // reiniciar animación
      textEl.style.animation = 'none';
      void textEl.offsetWidth;
      textEl.style.animation = '';

      if (isClosing) {
        numEl.textContent = '';
        textEl.textContent = closing;
      } else {
        numEl.textContent = `Página ${page + 1}`;
        textEl.textContent = reasons[page];
      }
      countEl.textContent = `${page + 1} / ${totalPages}`;
      prevBtn.disabled = page === 0;
      nextBtn.disabled = page === totalPages - 1;

      // colocar (o quitar) el conejito según la página
      const pageEl = wrap.querySelector('.lib-reasons-page');
      const oldRabbit = pageEl.querySelector('.lib-rabbit');
      if (oldRabbit) oldRabbit.remove();
      if (page === rabbitPage) {
        placeRabbit(pageEl, 'razones',
          'position:absolute;bottom:8px;right:14px;transform:scale(0.9);');
      }
    }

    prevBtn.addEventListener('click', () => { if (page > 0) { page--; render(); } });
    nextBtn.addEventListener('click', () => { if (page < totalPages - 1) { page++; render(); } });

    render();
    return wrap;
  }

  /* ── Libro 8: Bloqueado (requisitos + cuenta regresiva) ────── */

  /** Estado de un requisito según su tipo. */
  function reqMet(req, book) {
    switch (req.type) {
      case 'rabbits': return allRabbitsFound();
      case 'date':    return book.unlockDate ? (new Date() >= book.unlockDate) : false;
      case 'manual':  return !!Progress.get('check_' + req.id, false);
      case 'always':  return true;
      default:        return false;
    }
  }

  function openLocked(book) {
    ensureReader();
    reader.innerHTML = '';

    const reqs = book.requirements || [];
    const allMet = reqs.every(r => reqMet(r, book));

    const panel = document.createElement('div');
    panel.className = 'lib-reader-panel lib-locked-panel';

    const close = document.createElement('button');
    close.className = 'lib-close';
    close.innerHTML = '✕';
    close.addEventListener('click', closeReader);
    panel.appendChild(close);

    if (allMet) {
      panel.insertAdjacentHTML('beforeend', `
        <div class="lib-locked-icon">🔓</div>
        <div class="lib-locked-title">DESBLOQUEADO</div>
        <p class="lib-locked-note" style="white-space:pre-wrap;">${esc(book.unlockedContent || '')}</p>
      `);
      reader.appendChild(panel);
      reader.classList.remove('lib-hidden');
      requestAnimationFrame(() => reader.classList.add('visible'));
      return;
    }

    const items = reqs.map((r, i) => {
      const met = reqMet(r, book);
      const cls = ['lib-req', met ? 'met' : '', r.type === 'manual' ? 'clickable' : '',
                   r.type === 'always' ? 'always' : ''].join(' ');
      return `
        <li class="${cls}" data-req="${i}">
          <span class="lib-req-box">${met ? '✓' : ''}</span>
          <span class="lib-req-label">${esc(r.label)}</span>
        </li>`;
    }).join('');

    panel.insertAdjacentHTML('beforeend', `
      <div class="lib-locked-icon">🔒</div>
      <div class="lib-locked-title">REQUISITOS DE DESBLOQUEO</div>
      <ul class="lib-req-list2">${items}</ul>
      <p class="lib-locked-hint">(las casillas se pueden marcar cuando lo hayamos cumplido)</p>
      <p class="lib-locked-note">${esc(book.note || '')}</p>
      <div class="lib-countdown" id="lib-countdown"></div>
    `);

    // Las casillas manuales se pueden marcar/desmarcar
    panel.querySelectorAll('.lib-req.clickable').forEach(li => {
      li.addEventListener('click', () => {
        const req = reqs[parseInt(li.getAttribute('data-req'), 10)];
        const nuevo = !Progress.get('check_' + req.id, false);
        Progress.set('check_' + req.id, nuevo);
        li.classList.toggle('met', nuevo);
        li.querySelector('.lib-req-box').textContent = nuevo ? '✓' : '';
        if (nuevo) showToast('✓ ' + req.label);
        // ¿se cumplió todo? reabrir para mostrar el contenido
        if ((book.requirements || []).every(r => reqMet(r, book))) {
          setTimeout(() => openLocked(book), 800);
        }
      });
    });

    reader.appendChild(panel);
    reader.classList.remove('lib-hidden');
    requestAnimationFrame(() => reader.classList.add('visible'));

    if (book.unlockDate) startCountdown(book.unlockDate);
  }

  let countdownTimer = null;
  function startCountdown(target) {
    const el = () => document.getElementById('lib-countdown');
    clearInterval(countdownTimer);
    const tick = () => {
      const node = el();
      if (!node) { clearInterval(countdownTimer); return; }
      const diff = target - new Date();
      if (diff <= 0) { node.textContent = '✧ Es hora ✧'; clearInterval(countdownTimer); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      node.textContent = `${d}d ${h}h ${m}m ${s}s`;
    };
    tick();
    countdownTimer = setInterval(tick, 1000);
  }

  /* ══════════════════════════════════════════════════════════════
     LOS CONEJITOS OCULTOS 🐇
     5 conejitos negros escondidos por la biblioteca. Al encontrar
     todos, aparece la escena especial con el sprite del conejo.
  ══════════════════════════════════════════════════════════════ */

  function rabbitSVG() {
    // Conejito negro sentado (misma silueta que el del sprite)
    return `
      <svg viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="14" cy="12" rx="4" ry="11" fill="#17171c" stroke="#3a3a42" stroke-width="1"/>
        <ellipse cx="24" cy="11" rx="4" ry="11" fill="#17171c" stroke="#3a3a42" stroke-width="1"/>
        <ellipse cx="14" cy="12" rx="1.6" ry="7" fill="#2e2e36"/>
        <ellipse cx="24" cy="11" rx="1.6" ry="7" fill="#2e2e36"/>
        <ellipse cx="20" cy="36" rx="13" ry="10" fill="#17171c" stroke="#3a3a42" stroke-width="1"/>
        <circle cx="18" cy="24" r="9" fill="#17171c" stroke="#3a3a42" stroke-width="1"/>
        <circle cx="21.5" cy="22.5" r="1.8" fill="#f5f5f5"/>
        <circle cx="30" cy="38" r="3" fill="#f5f5f5"/>
      </svg>`;
  }

  /**
   * Coloca un conejito oculto en un contenedor si aún no fue hallado.
   * @param {HTMLElement} container
   * @param {string} id - identificador (estante, album, manual, disco, razones)
   * @param {string} style - estilos inline de posicionamiento
   */
  function placeRabbit(container, id, style) {
    if (rabbitsFound().includes(id)) return;

    const r = document.createElement('div');
    r.className = 'lib-rabbit';
    r.setAttribute('data-rabbit', id);
    r.setAttribute('aria-label', '...');
    if (style) r.style.cssText += style;
    r.innerHTML = rabbitSVG();

    r.addEventListener('click', (e) => {
      e.stopPropagation();
      foundRabbit(id, r);
    });

    container.appendChild(r);
  }

  function foundRabbit(id, el) {
    const found = rabbitsFound();
    if (found.includes(id)) return;
    found.push(id);
    Progress.set('rabbits', found);

    // animación de salto y desaparición
    el.classList.add('caught');
    setTimeout(() => el.remove(), 700);

    const total = (LIBRARY_CONFIG.rabbitHunt.ids || []).length;
    showToast(`🐇 Conejito encontrado (${found.length}/${total})`);

    if (found.length >= total) {
      setTimeout(() => playBunnyScene(), 1600);
    }
  }

  let toastEl = null, toastTimer = null;
  function showToast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'lib-toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('visible'), 2600);
  }

  /* ── La escena secreta del conejo ──────────────────────────── */
  function playBunnyScene() {
    const cfg = LIBRARY_CONFIG.rabbitHunt;
    if (!cfg || Progress.get('bunny_scene_seen', false) === 'playing') return;

    // cerrar cualquier lector abierto
    closeReader();
    if (photoZoom) photoZoom.classList.remove('visible');

    const ov = document.createElement('div');
    ov.className = 'lib-bunny-scene';
    ov.innerHTML = `
      <div class="lib-bunny-stars"></div>
      <img class="lib-bunny-sprite" src="${cfg.sprite}" alt="el moreno" draggable="false">
      <div class="lib-bunny-dialog">
        <p id="lib-bunny-text"></p>
        <span class="lib-greeter-next" id="lib-bunny-next" style="visibility:hidden;">▼</span>
      </div>
      <div class="lib-bunny-hint">toca para continuar</div>
    `;
    document.body.appendChild(ov);
    // setTimeout en vez de rAF: rAF no dispara en pestañas en segundo plano
    setTimeout(() => ov.classList.add('visible'), 40);

    const textEl = ov.querySelector('#lib-bunny-text');
    const nextEl = ov.querySelector('#lib-bunny-next');
    let line = 0, typing = null;

    function typeLine() {
      const full = cfg.lines[line];
      let i = 0;
      textEl.textContent = '';
      nextEl.style.visibility = 'hidden';
      typing = setInterval(() => {
        if (i >= full.length) {
          clearInterval(typing); typing = null;
          nextEl.style.visibility = 'visible';
          return;
        }
        textEl.textContent += full[i++];
      }, 34);
    }

    ov.addEventListener('click', () => {
      if (typing) {
        clearInterval(typing); typing = null;
        textEl.textContent = cfg.lines[line];
        nextEl.style.visibility = 'visible';
        return;
      }
      line++;
      if (line >= cfg.lines.length) {
        // la escena se despide y se va
        Progress.set('bunny_scene_seen', true);
        ov.classList.remove('visible');
        setTimeout(() => ov.remove(), 1600);
        return;
      }
      typeLine();
    });

    setTimeout(typeLine, 900);
  }

  /* ── Utilidad: escapar HTML ────────────────────────────────── */
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── API pública ───────────────────────────────────────────── */
  return { reveal };

})();

/* Exponer en window: un `const` global NO se adjunta a window por sí solo,
   y scenes.js / main.js comprueban `window.LibraryEngine` antes de revelar. */
window.LibraryEngine = LibraryEngine;
