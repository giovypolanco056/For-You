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
       "No se si los notaste pero son inspirados en Hope.",
       "Me pareció una buena forma de inmortalizar a esa mascota que tanto quisiste.",
      "No quiero despertarte tristeza ni nada parecido, solo quiero expresar lo mucho que me duele no haberle conocido.",
      "Seguro le hubiera acariciado mucho y nos llevaríamos bien...",
      "Era un gran conejo. Y ha de estar dando saltitos en el cielo, amando todo lo que hiciste por él.",
    ],
  },

  /* ── Hope 🐰, la guardiana de la biblioteca ───────────────────
     Vive en la biblioteca. Al tocarla dice frases al azar. */
  hope: {
    sprite: "assets/sprites/Hope.png",
    dialogs: [
      "Hola Ada.",
      "Creo que al Moreno le gustas demasiado.",
      "Arrouba.",
      "Todavía no entiendo cómo ese prieto escribió tantas páginas.",
      "*mueve la naricita*",
      "Donde entra un tijerazo entra un pincel, decía mi abuelo.",
      "Te amo mamá, y siempre te amaré.",
    ],
  },

  /* ── Introducción de la biblioteca (solo la primera visita) ── */
  intro: {
    sprite: "assets/sprites/Talking3_Me.png",
    lines: [
      "Esta es nuestra biblioteca.",
      "Creo que este es uno de mis lugares favoritos, y ahora lo quiero compartir contigo.",
      "Si lo piensas, nuestra historia siempre ha vivido entre palabras.",
      "Mensajes.",
      "Llamadas.",
      "Recuerdos.",
      "Todo lo que encontrarás aquí representa una parte distinta de nosotros.",
      "Esta biblioteca contiene todo nuestro año desde mi perspectiva, todo lo que he recopilado de nosotros y más.",
      "Así que puedes comenzar por donde quieras.",
    ],
  },

  /* ── Evento secreto: cuarta visita a la biblioteca ──────────── */
  visitEvent: {
    visita: 4,
    sprite: "assets/sprites/Missing_Me.png",
    lines: [
      "Wao...",
      "Sí que te gusta hablar conmigo.",
      "Y eso que ya me estaba empezando a sentir un poco solo.",
      "Supongo que eso significa que hice bien mi trabajo.",
      "Aunque ahora tengo un problema.",
      "Creo que tendré que pedirle al Giovy real una versión digital de ti.",
      "Porque esto de ser el único personaje consciente aquí empieza a sentirse un poco injusto.",
      "Además...",
      "Creo que sería bonito poder hablar contigo también.",
    ],
    hugSprite: "assets/sprites/HuggingHope_Me.png",
    hugLines: [
      "Al menos te tengo a ti aquí.",
      "¿Verdad, Hope?",
      "Aunque debo admitir que preferiría que fuéramos tres.",
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
      // El Moreno lo presenta la primera vez que se abre
      explain: {
        sprite: "assets/sprites/Card_Me.png",
        lines: [
          "Bueno...",
          "Este creo que ya lo conoces.",
          "Aquí lo tienes en versión digital por si quieres leerlo nuevamente en algun otro momento.",
          "Aunque puede que esta versión tenga algunos detallitos...",
           "En fin, lo dejo en ti",
        ],
      },
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
      explain: {
        sprite: "assets/sprites/Smiling_Me.png",
        lines: [
          "La memoria es extraña realmente.",
          "Por eso existen las fotografías.",
          "Y como amo con todo mi ser tomarte fotitos, debía haber un lugar donde guardarlas.",
          "Para eso tenemos aquí el albuuum!!.",
        ],
      },

      // ► AGREGA TUS FOTOS AQUÍ. Copia las imágenes en la carpeta
      //   "fotos de album" y llena cada sección.
      //   Formato de cada foto:
      //   { src: "../fotos de album/web/mi-foto.jpg", date: "Fecha", story: "Historia" }
      //   Si dejas "src" vacío ("") se mostrará un marco de "próximamente".
      sections: [
        {
          name: "Fotos juntos",
          photos: [
            { src: "../fotos de album/web/IMG-20250527-WA0023.jpg", date: "mayo 2025", story: "Primera selfie Juntos" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.57.jpeg", date: "mayo 2025", story: "Quedate con quien te mire cmo me mirabas" },
            { src: "../fotos de album/web/IMG-20250527-WA0032.jpg", date: "mayo 2025", story: "Josi perdida? i love it" },
            { src: "../fotos de album/web/IMG-20250528-WA0266.jpg", date: "mayo 2025", story: "Primera presentasión final tuya que fuii!!" },
            { src: "../fotos de album/web/IMG-20250831-WA0003.jpg", date: "agosto 2025", story: "El CND, cuantas vivencias no hubieron?" },
            { src: "../fotos de album/web/IMG-20250921-WA0231.jpg", date: "septiembre 2025", story: "El la estaba esperando con una flor amariiiillaaaa" },
            { src: "../fotos de album/web/IMG-20251106-WA0096.jpg", date: "noviembre 2025", story: "Uys creo que fue la primera vez que subiste una foto miaaa" },
            { src: "../fotos de album/web/IMG-20260214-WA0183.jpg", date: "febrero 2026", story: "Tomado de la mano con el amor de mi vida" },
            { src: "../fotos de album/web/IMG-20260214-WA0188.jpg", date: "febrero 2026", story: "Nuestro primer San valentíiin, quien diria que no encontrabamos sitio para sentarnos 😂" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-13 at 19.01.57.jpeg", date: "Febrero 2026", story: "Dioooos que fotooo" },
            { src: "../fotos de album/web/WhatsApp Image 2026-04-07 at 23.48.31 (1).jpeg", date: "abril 2026", story: "Ese día te esperé bastanteee, no me quejo" },
            { src: "../fotos de album/web/WhatsApp Image 2026-04-07 at 23.48.31 (2).jpeg", date: "abril 2026", story: "Encontrarme contigo en el parque solo porque si es de las cosas que más amo ahcer" },
            { src: "../fotos de album/web/WhatsApp Image 2026-04-07 at 23.48.31.jpeg", date: "abril 2026", story: "Con la sec. de comunicaciones en Creators Lab y yo de colaooo" },
            { src: "../fotos de album/web/IMG-20260412-WA0259.jpg", date: "abril 2026", story: "Meat Town es un mood, para cuando otra cita ahí?" },
            { src: "../fotos de album/web/IMG-20260413-WA0653.jpg", date: "abril 2026", story: "Sentada en las piernas de su Machoooo" },
            { src: "../fotos de album/web/IMG-20260418-WA0218.jpg", date: "abril 2026", story: "El día del modelo distrital de baní!! que recuerdos, y más de la noche anterior" },
            { src: "../fotos de album/web/IMG-20260418-WA0225.jpg", date: "abril 2026", story: "Un onvre feliz, realmente feliz" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 20.06.29 (2).jpeg", date: "mayo 2026", story: "Para cuando otra así?" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.53.jpeg", date: "mayo 2026", story: "Las cosas que más nos gustan ahora unidas" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.54.jpeg", date: "mayo 2026", story: "Uuuu un meeeeess!!!" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.57 (1).jpeg", date: "mayo 2026", story: "El modelo distrital cuando fui tu mesaaa (Denuevo xd)" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.57 (2).jpeg", date: "mayo 2026", story: "Juntemonos denuevo en el parque pli" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.07 (1).jpeg", date: "mayo 2026", story: "Recuerdas al pana con la peluca de Gojo? 🤣" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.07 (2).jpeg", date: "mayo 2026", story: "Tu y yo en la misma mesa?? Que rapido pasa el tiempo" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.08.jpeg", date: "mayo 2026", story: "Amé ese día, te podía joder como quisieraaa!!" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.09.jpeg", date: "mayo 2026", story: "Haciendo diligencias con tu mami" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.07.18 (1).jpeg", date: "mayo 2026", story: "Conociste a mi mamá!!" },
            { src: "../fotos de album/web/IMG-20260524-WA0160.jpg", date: "mayo 2026", story: "Tu sorpresa de cumpleaños (lloraste ese dia)" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.37.00.jpeg", date: "mayo 2026", story: "Muridaaaa" },
            { src: "../fotos de album/web/IMG-20260610-WA0090.jpg", date: "junio 2026", story: "Nuestro 3er modelo Regional" },
            { src: "../fotos de album/web/IMG-20260610-WA0093.jpg", date: "junio 2026", story: "Mira la felicidad de esa pareja que está enamoradaaaa" },
            { src: "../fotos de album/web/IMG-20260623-WA0021.jpg", date: "junio 2026", story: "🤣🤣🤣🤣" },
            { src: "../fotos de album/web/IMG-20260623-WA0023.jpg", date: "junio 2026", story: "En el rio con tu familiaaa (Fue toda una aventura 🤣)" },
            { src: "../fotos de album/web/IMG-20260702-WA0028.jpg", date: "julio 2026", story: "Yo te esperaaaaabaaaaa!!!" },
            { src: "../fotos de album/web/IMG-20260702-WA0029.jpg", date: "julio 2026", story: "Si, soy más celoso que el D****" },
            { src: "../fotos de album/web/IMG-20260702-WA0034.jpg", date: "julio 2026", story: "La feria del Manguiñooo" },
          ],
        },
        {
          name: "Besos y abrazos",
          photos: [
            { src: "../fotos de album/web/IMG-20250829-WA0353.jpg", date: "agosto 2025", story: "Ñaam" },
            { src: "../fotos de album/web/IMG-20260130-WA0166.jpg", date: "enero 2026", story: "Lengüita" },
            { src: "../fotos de album/web/IMG-20260214-WA0222.jpg", date: "febrero 2026", story: "Mirala miralaa, si, soy tuyo" },
            { src: "../fotos de album/web/IMG-20260214-WA0225.jpg", date: "febrero 2026", story: "Dios que preciosura" },
            { src: "../fotos de album/web/IMG-20260412-WA0266.jpg", date: "abril 2026", story: "Wesooo" },
            { src: "../fotos de album/web/IMG-20260413-WA0269.jpg", date: "abril 2026", story: "Wesooo x2" },
            { src: "../fotos de album/web/IMG-20260427-WA0095.jpg", date: "abril 2026", story: "Vuelve a pintarme la cara pli" },
            { src: "../fotos de album/web/IMG-20260427-WA0098.jpg", date: "abril 2026", story: "Muak" },
            { src: "../fotos de album/web/IMG-20260505-WA0152.jpg", date: "mayo 2026", story: "Amo esa pose" },
            { src: "../fotos de album/web/IMG-20260505-WA0157.jpg", date: "mayo 2026", story: "❤️" },
            { src: "../fotos de album/web/IMG-20260505-WA0161.jpg", date: "mayo 2026", story: "❤️" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 20.06.28 (2).jpeg", date: "mayo 2026", story: "La playa aguantó un gorro ese día" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 20.06.29 (3).jpeg", date: "mayo 2026", story: "Todo Vintageee" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.12 (3).jpeg", date: "mayo 2026", story: "Pretties Joy i know" },
            { src: "../fotos de album/web/IMG-20260524-WA0164.jpg", date: "mayo 2026", story: "Ta descalza má" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.34.34.jpeg", date: "mayo 2026", story: "Besito a la cumpleañera" },
            { src: "../fotos de album/web/WhatsApp Image 2026-06-08 at 20.04.17.jpeg", date: "junio 2026", story: "Diosss Qué fotoooo" },
            { src: "../fotos de album/web/IMG-20260614-WA0077.jpg", date: "junio 2026", story: "Un día de ensueño" },
            { src: "../fotos de album/web/IMG-20260614-WA0098.jpg", date: "junio 2026", story: "Si entraste a esta imagen de casualidad, quiero reafirmar lo mucho que te amo" },
            { src: "../fotos de album/web/IMG-20260614-WA0100.jpg", date: "junio 2026", story: "Gracias Dios por poner a esa niña en mi camino" },
            { src: "../fotos de album/web/IMG-20260614-WA0127.jpg", date: "junio 2026", story: "Beshitooo" },
            { src: "../fotos de album/web/IMG-20260614-WA0130.jpg", date: "junio 2026", story: "Te amo" },
          ],
        },
        {
          name: "Atardeceres en la playa",
          photos: [
            { src: "../fotos de album/web/IMG-20260608-WA0001.jpg", date: "junio 2026", story: "A Happy Man" },
            { src: "../fotos de album/web/IMG-20260608-WA0002.jpg", date: "junio 2026", story: "PRIETYYY" },
            { src: "../fotos de album/web/IMG-20260608-WA0003.jpg", date: "junio 2026", story: "Mi pareja favorita (soy ese)" },
            { src: "../fotos de album/web/IMG-20260608-WA0006.jpg", date: "junio 2026", story: "jjj que linda" },
            { src: "../fotos de album/web/IMG-20260614-WA0073.jpg", date: "junio 2026", story: "La playa nunca será tan hermosa como tus ojos" },
            { src: "../fotos de album/web/IMG-20260614-WA0076.jpg", date: "junio 2026", story: "El sol nunca será tan brillante como tu sonrisa" },
            { src: "../fotos de album/web/IMG-20260614-WA0080.jpg", date: "junio 2026", story: "Hoy camino solo contigo en la playa, en un futuro ayudaremos a alguien a hacerlo" },
            { src: "../fotos de album/web/IMG-20260614-WA0090.jpg", date: "junio 2026", story: "Cuando estamos" },
            { src: "../fotos de album/web/IMG-20260614-WA0091.jpg", date: "junio 2026", story: "Juntos siento como" },
            { src: "../fotos de album/web/IMG-20260614-WA0092.jpg", date: "junio 2026", story: "el mundo gira" },
            { src: "../fotos de album/web/IMG-20260614-WA0093.jpg", date: "junio 2026", story: "al alrededor" },
            { src: "../fotos de album/web/IMG-20260614-WA0102.jpg", date: "junio 2026", story: "Yo te dije que cuando llegaramo al cine te iba a ponel a **** 🤣🤣" },
            { src: "../fotos de album/web/IMG-20260614-WA0107.jpg", date: "junio 2026", story: "Sostener tu carita es de los mayores placeres de mi vida" },
            { src: "../fotos de album/web/IMG-20260614-WA0113.jpg", date: "junio 2026", story: "Nunca podría cansarme de ti" },
            { src: "../fotos de album/web/IMG-20260614-WA0142.jpg", date: "junio 2026", story: "Te amo mi princesa" },
            { src: "../fotos de album/web/IMG-20260614-WA0143.jpg", date: "junio 2026", story: "si acumulara todas las veces que me has sacado una lagrima de felicidad se llenaría un vasito" },
          ],
        },
        {
          name: "Citas y salidas",
          photos: [
            { src: "../fotos de album/web/IMG-20251219-WA0339.jpg", date: "diciembre 2025", story: "Te amará mi alma cuando mi cabeza deje de pensar" },
            { src: "../fotos de album/web/IMG-20260413-WA0101.jpg", date: "abril 2026", story: "Tu eres mi morfina" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.07.jpeg", date: "mayo 2026", story: "Cuando tu me abrazas siento que le quitas el calor al sol" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.10.jpeg", date: "mayo 2026", story: "ÑAAAAAAM!!!" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.13 (1).jpeg", date: "mayo 2026", story: "Las palabras no pueden expresar nisiquiera minimamente lo mucho que te amo" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.13 (2).jpeg", date: "mayo 2026", story: "" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.25.03.jpeg", date: "mayo 2026", story: "El ver reflejado el amor en tus ojos llena mi vida" },
            { src: "../fotos de album/web/IMG-20260608-WA0019.jpg", date: "junio 2026", story: "❤️" },
            { src: "../fotos de album/web/IMG-20260702-WA0038.jpg", date: "julio 2026", story: "Mira el Kamasutra" },
            { src: "../fotos de album/web/IMG-20260702-WA0039.jpg", date: "julio 2026", story: "Mirando libros con el amor de mi vida" },
          ],
        },
        {
          name: "Momentos divertidos",
          photos: [
            { src: "../fotos de album/web/IMG-20250527-WA0303.jpg", date: "mayo 2025", story: "🤣🤣🤣🤣" },
            { src: "../fotos de album/web/IMG-20251113-WA0087.jpg", date: "noviembre 2025", story: "Fajadaaaa" },
            { src: "../fotos de album/web/IMG-20260418-WA0228.jpg", date: "abril 2026", story: "Amé ese día, por ti me colocaría lo que sea" },
            { src: "../fotos de album/web/IMG-20260418-WA0235.jpg", date: "abril 2026", story: "Beshito de lejoss" },
            { src: "../fotos de album/web/IMG-20260504-WA0053.jpg", date: "mayo 2026", story: "Anaa!!" },
            { src: "../fotos de album/web/IMG-20260504-WA0059.jpg", date: "mayo 2026", story: "Ese día fuí a la iglesia contigo, fue tan interesante poder ver donde has dedicado tanto de tu vida" },
            { src: "../fotos de album/web/IMG-20260505-WA0163.jpg", date: "mayo 2026", story: "Lengüitaaa" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.02.jpeg", date: "mayo 2026", story: "Parezco pederasta 😭" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.14.jpeg", date: "mayo 2026", story: "Mil y una locuras, pero solo contigo" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.15.jpeg", date: "mayo 2026", story: "Sesisss" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.11.06.jpeg", date: "mayo 2026", story: "Mira mi floow, mira mi pintaaa" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-31 at 11.07.59 (1).jpeg", date: "mayo 2026", story: "*Mira malisiosamente*" },
            { src: "../fotos de album/web/WhatsApp Image 2026-06-08 at 20.22.55.jpeg", date: "junio 2026", story: "Hoy te cargo en mi espalda, mañana quiero cargar tu vida amor" },
            { src: "../fotos de album/web/IMG-20260609-WA0114.jpg", date: "junio 2026", story: "Uhm" },
            { src: "../fotos de album/web/IMG-20260702-WA0033.jpg", date: "julio 2026", story: "VOUGE STYLE" },
            { src: "../fotos de album/web/IMG-20260702-WA0035.jpg", date: "julio 2026", story: "Mamá Mango y Papá Mango" },
          ],
        },
        {
          name: "Solo ella",
          photos: [
            { src: "../fotos de album/web/IMG-20250627-WA0019.jpg", date: "junio 2025", story: "jjj fue de las primeras fotos que me enviaste" },
            { src: "../fotos de album/web/IMG-20260214-WA0236.jpg", date: "febrero 2026", story: "Esooo dame poseeee" },
            { src: "../fotos de album/web/IMG-20260515-WA0058.jpg", date: "mayo 2026", story: "Que si me dá pena tener una flor? nunca, me la hizo mi novia" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.01.09 (1).jpeg", date: "mayo 2026", story: "Te tenía Jarta ya 🤣" },
            { src: "../fotos de album/web/IMG-20260608-WA0035.jpg", date: "junio 2026", story: "No sé qué hice para merecerte, pero si sé que haré para seguir haciendolo" },
            { src: "../fotos de album/web/IMG-20260628-WA0072.jpg", date: "junio 2026", story: "Gorgeous" },
            { src: "../fotos de album/web/IMG-20260630-WA0068.jpg", date: "junio 2026", story: "🤣🤣🤣🤣" },
          ],
        },
        {
          name: "Solo él",
          photos: [
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.54 (1).jpeg", date: "mayo 2026", story: "Ta fuerte maa" },
            { src: "../fotos de album/web/IMG-20260608-WA0034.jpg", date: "junio 2026", story: "Desde que estas conmigo brillo más realmente" },
            { src: "../fotos de album/web/IMG-20260702-WA0040.jpg", date: "julio 2026", story: "Dos vainas en la ucuridad" },
            { src: "../fotos de album/web/IMG-20260702-WA0041.jpg", date: "julio 2026", story: "Rawr" },
          ],
        },
        {
          name: "Nuestro aniversario",
          photos: [
          ],
        },
        {
          name: "Recuerdos especiales",
          photos: [
            { src: "../fotos de album/web/IMG-20250527-WA0034.jpg", date: "mayo 2025", story: "Mencion Honorable a la persona que más admiro en esta vida" },
            { src: "../fotos de album/web/IMG-20250608-WA0086.jpg", date: "junio 2025", story: "Japiiii" },
            { src: "../fotos de album/web/IMG-20250627-WA0020.jpg", date: "junio 2025", story: "Mi niña haciendo un muñeco de nieve" },
            { src: "../fotos de album/web/Imagen de WhatsApp 2025-10-10 a las 20.55.54_9c8fccb5.jpg", date: "octubre 2025", story: "Ay, de las primeras fotos que me mandaste" },
            { src: "../fotos de album/web/Imagen de WhatsApp 2025-10-10 a las 22.15.48_8a21cc41.jpg", date: "octubre 2025", story: "Amo tu sonrisa" },
            { src: "../fotos de album/web/IMG-20260223-WA0206.jpg", date: "febrero 2026", story: "Me encantó ese dibujo" },
            { src: "../fotos de album/web/IMG-20260310-WA0063.jpg", date: "marzo 2026", story: "AAAAAAAAWWWWWWWWWW QUE LINDAAAAAAAAAAA" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-24 at 21.00.52.jpeg", date: "mayo 2026", story: "PRESOOOOOO DE LA CARCEL DE TUS BESOOOS" },
            { src: "../fotos de album/web/WhatsApp Image 2026-05-28 at 22.31.42.jpeg", date: "mayo 2026", story: "Mimida" },
            { src: "../fotos de album/web/IMG-20260610-WA0082.jpg", date: "junio 2026", story: "WAOOOS" },
          ],
        },
        {
          name: "Y muchos momentos más ✨",
          photos: [
            { src: "../fotos de album/web/Captura de pantalla 2026-07-04 102022.jpg", tag: "Videollamada", story: "Morí XDXDXD" },
            { src: "../fotos de album/web/Captura de pantalla 2026-07-04 102032.jpg", tag: "Videollamada", story: "Jesus que bellaaa" },
            { src: "../fotos de album/web/Captura de pantalla 2026-07-04 102617.jpg", tag: "Videollamada", story: "Esa risa que se te escapa cuando hablamos hasta tarde." },
            { src: "../fotos de album/web/Captura de pantalla 2026-07-04 102637.jpg", tag: "Videollamada", story: "Te quedaste sonriendo así, y yo lo tuve que guardar." },
            { src: "../fotos de album/web/Captura de pantalla 2026-07-04 103723.jpg", tag: "Videollamada", story: "Riéndote con una sonrisa hermosa, como siempre." },
            { src: "../fotos de album/web/IMG-20250527-WA0024.jpg", tag: "Toda elegante", story: "Hermosa con tu lacito blanco." },
            { src: "../fotos de album/web/IMG-20250528-WA0285.jpg", tag: "Recuerdo del chat", story: "Esa foto tuya en la orilla que guardé del chat." },
            { src: "../fotos de album/web/IMG-20250528-WA0403.jpg", tag: "Quieres un beso?", story: "No hablaba de la paleta" },
            { src: "../fotos de album/web/IMG-20250529-WA0123.jpg", tag: "Selfie al espejo", story: "Waaao cuanto tiempooo" },
            { src: "../fotos de album/web/IMG-20250611-WA0385.jpg", tag: "Tú de pequeña", story: "AAAYY YIO MIOOOO" },
            { src: "../fotos de album/web/IMG-20250625-WA0181.jpg", tag: "Positive vibes", story: "Y así empezó..." },
            { src: "../fotos de album/web/IMG-20250810-WA0086.jpg", tag: "De salida", story: "Como amé esa foto y video, Waos." },
            { src: "../fotos de album/web/IMG-20250902-WA0108.jpg", tag: "Aventura en la playa", story: "XDXD Que lindaaaa." },
            { src: "../fotos de album/web/IMG-20250902-WA0109.jpg", tag: "Personita especial", story: "Modelo ellaa." },
            { src: "../fotos de album/web/IMG-20251106-WA0080.jpg", tag: "Nuestro parque", story: "El parque de siempre, de todos los momentos." },
            { src: "../fotos de album/web/IMG-20251231-WA0132.jpg", tag: "Cierre de año", story: "Sonríe y que no parezca forzado ma´." },
            { src: "../fotos de album/web/IMG-20260109-WA0253.jpg", tag: "En casa", story: "Riéndote en la puerta, la luz de la casa realmente." },
            { src: "../fotos de album/web/IMG-20260124-WA0192.jpg", tag: "Modo aventurera", story: "MODO MILITAAAR." },
            { src: "../fotos de album/web/IMG-20260210-WA0133.jpg", tag: "Momento piña", story: "13 a 0 ganando la piña." },
            { src: "../fotos de album/web/IMG-20260213-WA0062.jpg", tag: "CHARITOO", story: "FOTO CON CHARITOO." },
            { src: "../fotos de album/web/IMG-20260308-WA0087.jpg", tag: "Personita especial", story: "Snapchat Hizo un daño." },
            { src: "../fotos de album/web/IMG-20260308-WA0088.jpg", tag: "Personita especial", story: "Chiquita pero comparona." },
            { src: "../fotos de album/web/IMG-20260326-WA0044.jpg", tag: "De compras", story: "abrazada de ñema-kun." },
            { src: "../fotos de album/web/IMG-20260330-WA0187.jpg", tag: "Al aire libre", story: "Ven ven ven pa tu tarea." },
            { src: "../fotos de album/web/IMG-20260408-WA0001.jpg", tag: "Buenas noches", story: "Japiii." },
            { src: "../fotos de album/web/IMG-20260413-WA0652.jpg", tag: "Selfie al espejo", story: "Con la muje miaa" },
            { src: "../fotos de album/web/IMG-20260418-WA0096.jpg", tag: "Sentao", story: "Sentao de pana" },
            { src: "../fotos de album/web/IMG-20260423-WA0089.jpg", tag: "Modo cómodo", story: "Me encontré un brasieeel." },
            { src: "../fotos de album/web/IMG-20260427-WA0090.jpg", tag: "Nosotros", story: "Pegaditos, como más me gusta." },
            { src: "../fotos de album/web/IMG-20260427-WA0114.jpg", tag: "Selfie", story: "Ese pelito rizo que me encanta." },
            { src: "../fotos de album/web/IMG-20260504-WA0042.jpg", tag: "Ponente estrella", story: "En el mejor modelo distrital" },
            { src: "../fotos de album/web/IMG-20260504-WA0106.jpg", tag: "Antojo cumplido", story: "Como me mira la persona que más me ama" },
            { src: "../fotos de album/web/IMG-20260506-WA0136.jpg", tag: "Con su peluche", story: "Tú y tu vaquita." },
            { src: "../fotos de album/web/IMG-20260507-WA0099.jpg", tag: "O", story: "O" },
            { src: "../fotos de album/web/IMG-20260508-WA0137.jpg", tag: "Acos", story: "Puah acos, la competencia." },
            { src: "../fotos de album/web/IMG-20260511-WA0100.jpg", tag: "No la hagas enojar 😅", story: "Una de mil fotos con un cuchillo" },
            { src: "../fotos de album/web/IMG-20260511-WA0107.jpg", tag: "Bajo el sol", story: "Un sorbito de pegamento" },
            { src: "../fotos de album/web/IMG-20260514-WA0029.jpg", tag: "Presentación", story: "En plena mesa, seria y capaz." },
            { src: "../fotos de album/web/IMG-20260516-WA0108.jpg", tag: "Con el equipo", story: "Foto con la manada del evento." },
            { src: "../fotos de album/web/IMG-20260517-WA0048.jpg", tag: "Videollamada", story: "Otra llamada, otra lengüita." },
            { src: "../fotos de album/web/IMG-20260524-WA0144.jpg", tag: "Celebración", story: "Con su bizcocho y su risa enorme." },
            { src: "../fotos de album/web/IMG-20260526-WA0353.jpg", tag: "Retrato", story: "Diosa. Así, sin más." },
            { src: "../fotos de album/web/IMG-20260528-WA0204.jpg", tag: "Elegante", story: "De camisa y corbata, matando." },
            { src: "../fotos de album/web/IMG-20260529-WA0045.jpg", tag: "Ternura", story: "Un momentito tierno tuyo." },
            { src: "../fotos de album/web/IMG-20260530-WA0066.jpg", tag: "El cocinero", story: "Yo y mi machete, listo para consentirte." },
            { src: "../fotos de album/web/IMG-20260531-WA0028.jpg", tag: "Con la familia", story: "Con tu personita chiquita." },
            { src: "../fotos de album/web/IMG-20260613-WA0020.jpg", tag: "Modo ARMY", story: "Tu lado ARMY saliendo con Chimmy." },
            { src: "../fotos de album/web/IMG-20260613-WA0027.jpg", tag: "Modo ARMY", story: "Sonriendo con tu diadema de BT21." },
            { src: "../fotos de album/web/IMG-20260614-WA0124.jpg", tag: "Nuestro atardecer", story: "Nuestra manito y el sol cayendo." },
            { src: "../fotos de album/web/IMG-20260614-WA0140.jpg", tag: "En la playa", story: "Caminando en la orilla, todo tuyo." },
            { src: "../fotos de album/web/IMG-20260614-WA0146.jpg", tag: "Caras raras", story: "Haciendo muecas juntos, nuestro deporte." },
            { src: "../fotos de album/web/IMG-20260617-WA0037.jpg", tag: "Selfie al espejo", story: "De corbata frente al espejo." },
            { src: "../fotos de album/web/IMG-20260617-WA0052.jpg", tag: "Selfie al espejo", story: "Tú y el espejo otra vez, siempre ganan." },
            { src: "../fotos de album/web/IMG-20260617-WA0054.jpg", tag: "Selfie", story: "Con tu diadema roja, coquetísima." },
            { src: "../fotos de album/web/IMG-20260619-WA0069.jpg", tag: "Selfie al espejo", story: "Denim y tú, un clásico." },
            { src: "../fotos de album/web/IMG-20260621-WA0101.jpg", tag: "Con sed", story: "Bebiendo agua como si posaras." },
            { src: "../fotos de album/web/IMG-20260623-WA0012.jpg", tag: "De perfil", story: "Ese perfil de portada de revista." },
            { src: "../fotos de album/web/IMG-20260630-WA0072.jpg", tag: "Traviesa", story: "Señalando algo con tu sonrisa pícara." },
            { src: "../fotos de album/web/IMG-20260702-WA0094.jpg", tag: "Sesión de fotos", story: "Nuestra sesión entre los árboles: guiño incluido." },
            { src: "../fotos de album/web/IMG-20260702-WA0102.jpg", tag: "Sesión de fotos", story: "Yo, gorra y sonrisa, en plena sesión." },
            { src: "../fotos de album/web/IMG-20260702-WA0103.jpg", tag: "Sesión de fotos", story: "Mirando abajo, hermosa sin proponértelo." },
            { src: "../fotos de album/web/IMG-20260702-WA0106.jpg", tag: "Sesión de fotos", story: "Retrato mío en la sesión, cortesía tuya." },
            { src: "../fotos de album/web/IMG-20260702-WA0115.jpg", tag: "Sesión de fotos", story: "Tapándote la carita, tímida y linda." },
            { src: "../fotos de album/web/IMG-20260702-WA0120.jpg", tag: "Sesión de fotos", story: "La luz entre los árboles y tú." },
            { src: "../fotos de album/web/IMG-20260702-WA0121.jpg", tag: "Sesión de fotos", story: "Los dos, cómplices, entre las hojas." },
            { src: "../fotos de album/web/IMG-20260702-WA0123.jpg", tag: "Sesión de fotos", story: "Tú entre el verde, mi foto favorita del día." },
            { src: "../fotos de album/web/IMG-20260704-WA0009.jpg", tag: "Videollamada", story: "Otra noche de llamada contigo." },
            { src: "../fotos de album/web/IMG-20260704-WA0010.jpg", tag: "Videollamada", story: "Riéndote fuerte, y yo espiándote en la esquina." },
            { src: "../fotos de album/web/IMG-20260704-WA0011.jpg", tag: "Videollamada", story: "Esa sonrisa que me despide cada noche." },
            { src: "../fotos de album/web/IMG-20260704-WA0012.jpg", tag: "Cara graciosa", story: "Un primer plano de tus muecas." },
            { src: "../fotos de album/web/IMG-20260706-WA0142.jpg", tag: "Buenas noches", story: "Selfie a oscuras antes de dormir." },
            { src: "../fotos de album/web/IMG-20260706-WA0143.jpg", tag: "Videollamada", story: "Tú y la laptop, y yo del otro lado." },
            { src: "../fotos de album/web/IMG-20260706-WA0144.jpg", tag: "Videollamada", story: "Con tu pared de BT21 de fondo." },
            { src: "../fotos de album/web/IMG-20260706-WA0145.jpg", tag: "Modo cansada", story: "Con tu gorrito verde, descansando." },
            { src: "../fotos de album/web/IMG-20260706-WA0146.jpg", tag: "Modo cansada", story: "Cansadita pero linda." },
            { src: "../fotos de album/web/IMG-20260706-WA0147.jpg", tag: "Concentrada", story: "En lo tuyo, con el gorro puesto." },
            { src: "../fotos de album/web/IMG-20260706-WA0148.jpg", tag: "Buenas noches", story: "Sonrisa suave antes de dormir." },
            { src: "../fotos de album/web/IMG-20260706-WA0149.jpg", tag: "En casa", story: "Con tu bonnet rosado, en tu mundo." },
            { src: "../fotos de album/web/IMG-20260706-WA0150.jpg", tag: "Cara graciosa", story: "Pelito en la cara y lengüita afuera." },
            { src: "../fotos de album/web/IMG-20260706-WA0151.jpg", tag: "Videollamada", story: "Riéndote y señalando, pura energía." },
            { src: "../fotos de album/web/IMG-20260706-WA0159.jpg", tag: "Tus ojos", story: "Un universo entero en tu mirada." },
            { src: "../fotos de album/web/IMG-20260706-WA0160.jpg", tag: "Selfie", story: "Señita de paz con tus lentes." },
            { src: "../fotos de album/web/IMG-20260706-WA0161.jpg", tag: "Selfie", story: "Primer plano, hermosa como siempre." },
            { src: "../fotos de album/web/IMG-20260706-WA0162.jpg", tag: "Cara graciosa", story: "Otra mueca tuya que colecciono." },
            { src: "../fotos de album/web/IMG-20260707-WA0001.jpg", tag: "Un día afuera", story: "Mirando atrás con esa sonrisa." },
            { src: "../fotos de album/web/IMG-20260707-WA0002.jpg", tag: "Retrato", story: "Sonriéndole al mundo (y a mí)." },
            { src: "../fotos de album/web/IMG-20260707-WA0003.jpg", tag: "Retrato", story: "Ese vistazo por encima del hombro." },
            { src: "../fotos de album/web/IMG-20260707-WA0004.jpg", tag: "Modelo de la ONU", story: "En tu uniforme, jugando y brillando." },
            { src: "../fotos de album/web/IMG-20260707-WA0005.jpg", tag: "Modelo de la ONU", story: "Pose pensativa, toda una delegada." },
            { src: "../fotos de album/web/IMG-20260707-WA0006.jpg", tag: "Momento random", story: "Un instante cualquiera que igual guardé." },
            { src: "../fotos de album/web/IMG-20260707-WA0007.jpg", tag: "La familia", story: "Las personitas de la casa." },
            { src: "../fotos de album/web/IMG-20260707-WA0008.jpg", tag: "Buenas noches", story: "Con tu bonnet, lista para soñar." },
            { src: "../fotos de album/web/IMG-20260707-WA0009.jpg", tag: "Videollamada", story: "Una llamada más para la colección." },
            { src: "../fotos de album/web/IMG-20260707-WA0010.jpg", tag: "Espíritu navideño", story: "Con tu duende de Navidad, tu festividad favorita." },
          ],
        },
      ],
    },

    /* ── 📓 3. MANUAL PARA CUIDAR Y AMAR A MI JOSI ─────────────
       Reinterpretado como GUÍA DE EXPLORADOR: un diario de campo
       científico escrito por alguien profundamente enamorado.  */
    {
      id: "manual",
      type: "guide",
      title: "Manual para cuidar y amar a mi Josi",
      emoji: "📓",
      description: "Guía de explorador · Versión en constante actualización.",
      // Apariencia: libreta negra con notas adhesivas
      appearance: { c1: "#2b2b30", c2: "#141416", ink: "#f3e6cf", w: 125, h: 185, sticky: true },
      explain: {
        sprite: "assets/sprites/Explorer_Me.png",
        lines: [
          "Este probablemente sea el libro más importante.",
          "Aunque técnicamente no es un libro.",
          "Es una guía de exploración.",
          "Después de muchos meses de investigación, observación y estudio...",
          "Llegué a la conclusión de que la especie 'Josi' es extremadamente rara.",
          "Hermosa.",
          "Peligrosamente adorable.",
          "Y completamente imposible de dejar de amar.",
          "Así que decidí documentar todos mis descubrimientos.",
        ],
      },

      guide: {
        stamp: "ESPECIE PROTEGIDA",
        expedicion: "Expedición permanente · Iniciada el 7 de diciembre de 2023",
        especie: "Josius Adorabilis",
        clasificacion: "Criatura extraordinaria · Extremadamente rara",
        estado: "Bajo protección y amor permanentes",
        foto: "../fotos de album/web/IMG-20260628-WA0072.jpg",
        fotoCaption: "Espécimen observado en su hábitat natural.",
        ficha: [
          ["Nombre de campo", "Josi · Mi Josi"],
          ["Identidad completa", "🔒 Dato clasificado (solo el explorador lo conoce)"],
          ["Día de aparición", "Cada 8 de marzo ✦"],
          ["Fe", "Cristiana"],
          ["Cosa que más ama en el mundo", "Dormir"],
          ["Festividad favorita", "Navidad 🎄"],
          ["Datos adicionales", "Bastante terca, muy animada. El 11 de marzo cumple 7 años siendo ARMY (2026)."],
        ],
        habitat: "Cerca de personas que ama y decoraciones navideñas.",
        comportamiento: "Tiende a preocuparse más por otros que por sí misma.",
        debilidades: [
          "El Pan",
          "BTS",
          "Su familia",
          "Yo",
        ],
        advertencia: "Una vez que conoces a esta especie, existe una alta probabilidad de enamorarte permanentemente.",

        secciones: [
          {
            icon: "💗", titulo: "Principio fundamental",
            parrafos: [
              "A la Josius Adorabilis no se le ama a medias. Se le ama con paciencia, atención, ternura y respeto. Su bienestar emocional y físico siempre es prioridad.",
              "Debe ser desde desde 3 pilares fundamentales:",
            ],
            lista: [
              "Atracción: me parece la persona más hermosa en la faz de la tierra.",
              "Afecto: amo pasar el tiempo con ella.",
              "Admiración: le amo porque sé de lo que es capaz.",
            ],
            cierre: "Desde el cuerpo, la mente y el corazón es que puedo decir realmente que le amo.",
          },
          {
            icon: "🔬", titulo: "Observaciones de campo",
            campos: [
              ["Vocación detectada", "Quiere estudiar medicina (curiosamente, quiere curar a otras especies)."],
              ["Conocimiento especial", "Domina el arte de los alimentos: al parecer ha estudiado bastante sobre ello."],
              ["Medidas del espécimen", "XS en top (excepto algunos t-shirts oversize) · pantalón de tiro bajo y suelto."],
              ["Pintura de guerra", "C14 en rubor."],
              ["Marcas distintivas", "Un lunar en el hombro derecho."],
            ],
          },
          {
            icon: "📅", titulo: "Registro histórico (nunca olvidar)",
            campos: [
              ["Primer contacto", "7 de diciembre de 2023 · en el MUN del Politécnico Máximo Gómez ❤️"],
              ["Inicio del vínculo", "8 de julio de 2025 · nos hicimos novios 💜"],
            ],
            cierre: "Estas fechas importan. Recordarlas y honrarlas es parte de amarla.",
          },
          {
            icon: "🎨", titulo: "Estímulos que provocan sonrisas (documentados)",
            campos: [
              ["Flora de su preferencia", "Girasoles 🌻"],
              ["Fauna aliada", "Todas las criaturas 🐶 (ninguna registrada como enemiga)"],
              ["Colores que la atraen", "Morado 🟣 y negro ⚫"],
              ["Territorios narrativos", "Terror 😱 y fantasía 🧚"],
              ["Avistamientos en pantalla", "Welcome to Derry · Los Juegos del Hambre · Bridgerton · Grey's Anatomy"],
              ["Animes en observación", "Black Clover · Kimetsu no Yaiba · Solo Leveling (no anda viendo muchos)"],
              ["Hábitos de lectura", "Actualmente lee 'Alas de Ónix'"],
              ["Cantos que la hipnotizan", "BTS (en especial Yoongi) · Milo J · Humbe · Isabel Valdez"],
              ["Rituales competitivos que sigue", "Fórmula 1 (Max Verstappen lover) 🏎 · Béisbol (liceísta hasta la médula 🐯)"],
            ],
          },
          {
            icon: "🍝", titulo: "Dieta de la especie (reglas IMPORTANTES)",
            grupos: [
              { sub: "✅ Alimentos aceptados por la especie",
                lista: ["Pasta 🍝 (lasaña, espagueti)", "Plátano 🍌 (fritos, mangú)", "Pan"] },
              { sub: "✅ Néctares de su preferencia",
                lista: ["Café helado ☕ (malteada de Koncafé)", "Jugo de naranja Rica 🍊"] },
              { sub: "✅ Dulces y frutas de su preferencia",
                lista: ["Chocolate 🍫", "Helado (chocolate y dulce de leche)", "Fresas 🍓",
                        "Yogen (fruto del bosque, kiwi y fresa)",
                        "Piña 🍍 — ⚠ ES ALÉRGICA (vigilar de cerca al espécimen)",
                        "Bizcocho", "Galletas", "Cupcakes", "Donas", "Flan", "Cheesecake", "Churros"] },
              { sub: "❌ Alimentos que la especie rechaza",
                lista: ["Huevo 🥚", "Yuca 🍠", "Pera 🍐", "Manzana 🍎", "Ketchup 🍅", "Cosas demasiado dulces"] },
            ],
          },
          {
            icon: "👥", titulo: "La manada de la criatura",
            parrafos: [
              "La especie Josius Adorabilis no vive sola: forma vínculos profundos y los defiende con la vida.",
            ],
            grupos: [
              { sub: "Aliados de confianza",
                lista: ["Mejor amiga: Mila", "Mejor amigo: Yoniel", "Amiga muy cercana: Angélica"] },
              { sub: "La manada principal",
                lista: [
                  "Sobrina: Ana — su adoración",
                  "Sobrina más pequeña: Anahia",
                  "Su papá: 'Nenito' ",
                  "Su mamá: Roberta",
                  "Hermano mayor: Josías (la saga Souls y los videojuegos; estudia lo mismo que yo)",
                  "Hermano menor: Uzías (le gusta Fortnite)",
                  "Prima: Abi",
                ] },
            ],
            cierre: "Respetar y cuidar a quienes ella ama es parte de cuidarla a ella.",
          },
          {
            icon: "🩺", titulo: "Cuidados de la especie (máxima atención)",
            parrafos: [
              "Aunque parece invencible, esta criatura requiere cuidados delicados. El explorador ha documentado lo siguiente:",
            ],
            grupos: [
              { sub: "Vulnerabilidades observadas",
                lista: [
                  "Se sobreesfuerza más de lo que admite: el sobreesfuerzo puede robarle el aire. Frenar la aventura y respirar juntos.",
                  "A veces la cabeza le duele cuando el mundo brilla demasiado: bajar las luces y hablar bajito.",
                  "Su energía puede bajar rápido si no come ni descansa bien.",
                  "Hay días del mes en los que la criatura necesita cuidados extra, calorcito, chocolate y paciencia infinita.",
                ] },
              { sub: "Elixires que restauran a la criatura",
                lista: [
                  "Poción anti-dolores de cabeza: Winasord y omeprazol (administrar con agua y un beso en la frente).",
                  "Elixir de energía: vitaminas (a veces inyectadas; la criatura es valiente).",
                  "Remedio de amplio espectro: abrazos del Moreno. Sin dosis máxima conocida.",
                ] },
              { sub: "Protocolo del explorador",
                lista: ["👉 Evitar que se sobreesfuerce.", "👉 Estar atento a señales de cansancio o dolor.", "👉 Priorizar su descanso y alimentación."] },
            ],
          },
          {
            icon: "🧬", titulo: "Descubrimientos recientes del explorador",
            parrafos: [
              "Tras más observación, el explorador ha documentado nuevos rasgos de la especie:",
            ],
            campos: [
              ["Textura del pelaje", "Rizos tipo 3B — suaves, con vida propia."],
              ["Segunda marca distintiva", "Un lunar debajo de la nariz, al lado derecho del filtrum."],
              ["Aroma característico", "Usa dos perfumes a la vez, siempre de aromas dulces. Se le puede rastrear por el olfato."],
            ],
            grupos: [
              { sub: "Rarezas que la delatan",
                lista: [
                  "No tolera las orejas sucias (higiene nivel experto).",
                  "El reguero y el desorden en la guarida la alteran: mantener el nido ordenado.",
                ] },
              { sub: "Visión de futuro observada",
                lista: [
                  "Sueña con formar su propia manada: quiere dos crías.",
                  "Jamás las criaría con golpes; solo con amor y paciencia.",
                ] },
            ],
            cierre: "Cada descubrimiento me hace amarla un poquito más.",
          },
          {
            icon: "🤍", titulo: "Técnicas avanzadas para amar a esta especie",
            lista: [
              "Escuchar sin minimizar lo que siente.",
              "Cuidarla sin hacerla sentir débil.",
              "Protegerla sin controlar.",
              "Recordarle que no está sola.",
              "Elegirla todos los días, incluso en los difíciles.",
              "Se le olvidan las cosas, pero no es a propósito.",
            ],
          },
          {
            icon: "🫶", titulo: "Nota final del explorador",
            parrafos: [
              "Josi no es solo mi novia. Es mi alegría, mi ternura y mi elección diaria.",
            ],
            cierre: "Amarla es un compromiso consciente, y hacerla feliz es una decisión constante.",
          },
        ],
      },
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
      explain: {
        sprite: "assets/sprites/Singing_Me.png",
        lines: [
          "Aquí puedes encontrar las diferentes canciones que nos representan.",
          "Algunas que te dedico.",
          "O algunos audios nuestrossss.",
            "No son todas... porque muchas se me perdieron, pero son de las más importantes.",
        ],
      },

      // La portada de todas las canciones es la misma (portada_1.jpg).
      discs: [
        {
          title: "Beso", artist: "Josean Log · cantada por Josi",
          cover: "../disco/portada_1.jpg", audio: "../disco/josi_beso.ogg",
          story: "Esta eres tú, cantando 'Beso' de Josean Log. Tu voz es de los sonidos que más quiero en el mundo.",
        },
        {
          title: "Astros", artist: "Humbe · cantada por Josi",
          cover: "../disco/portada_1.jpg", audio: "../disco/josi_astros.ogg",
          story: "Tú cantando 'Astros' de Humbe. La guardé para volver a escucharte cuando te extraño.",
        },
        {
          title: "Llora Llora", artist: "Milo J · cantada por Josi",
          cover: "../disco/portada_1.jpg", audio: "../disco/josi_llora.ogg",
          story: "Tú cantando 'Llora Llora' de Milo J. Podría escucharte cantar para siempre.",
        },
        {
          title: "A Tu Altura", artist: "Misael Soul",
          cover: "../disco/portada_1.jpg", audio: "../disco/misael_a_tu_altura.mp3",
          story: "Una canción que representa el como te amo. Cada vez que suena vuelvo exactamente a ese momento contigo.",
        },
        {
          title: "Te Lo Prometo", artist: "Humbe",
          cover: "../disco/portada_1.jpg", audio: "../disco/humbe_te_lo_prometo.mp3",
          story: "La primera canción que me recomendaste. Desde entonces empezamos a compartirnos música y inició nuestra historia.",
        },
      ],
    },

    /* ── 📊 5. ESTADÍSTICAS DE PAREJA ────────────────────────── */
    {
      id: "stats",
      type: "pdf",   // reutiliza el visor con iframe + botón "abrir aparte"
      title: "Estadísticas de pareja",
      emoji: "📊",
      description: "Nuestra historia contada en datos.",
      // Apariencia: libro de datos, azul petróleo con letras turquesa
      appearance: { c1: "#123640", c2: "#0a1c24", ink: "#7fe0d4", w: 128, h: 192 },
      // Abre la app de estadísticas embebida (sin cromo). El chat en crudo
      // NO se publica: solo se muestran cifras y gráficas ya calculadas.
      url: "../estadisticas/?embed=1",
      explain: {
        sprite: "assets/sprites/Showing_Me.png",
        lines: [
          "Ahora este es especial.",
          "Me puse a contar... TODO.",
          "Cada mensaje, cada 'te amo', cada madrugada que nos quedamos hablando.",
          "Lo convertí en números y gráficas para que veas de qué tamaño es lo nuestro.",
          "Spoiler: es enorme.",
        ],
      },
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
      explain: {
        sprite: "assets/sprites/InLove_Me.png",
        lines: [
          "Este libro tiene un problema.",
          "Cada vez que creo haberlo terminado...",
          "Encuentro otra razón y vuelvo a escribir.",
         "Lit, es demasiado corto para todo lo que quiero decir.",
        ],
      },

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
      explain: {
        sprite: "assets/sprites/Showing_Me.png",
        lines: [
          "Este libro todavía no está terminado.",
          "Pero va a ir desbloqueandose atravez del tiempo",
          "Y creo que eso es lo más bonito.",
        ],
      },

      // ► Cada capítulo se desbloquea un sábado (año, mes-1, día).
      //   Antes de su fecha aparece cerrado con candado.
      //   Si un capítulo tiene "content", al abrirlo se lee como una carta
      //   (formato de libro). Si solo tiene "body", se muestra breve.
      chapters: [
        {
          title: "Capítulo 9",
          unlock: new Date(2026, 6, 11),
          content: {
            numeral: "Capítulo IX",
            title: "Más allá de un número",
            body:
`No sé exactamente en qué momento estarás leyendo esto.
Quizás las notas de las pruebas nacionales ya salieron.
Quizás todavía faltan unas horas.
O quizás, mientras lees estas líneas, sigues ahí, mirando una pantalla, esperando ese número que aún no aparece.
Pero hay algo que sí sé.
Llevas días con esto en la cabeza.
Y aunque intentes hacerte la fuerte, aunque me digas que estás bien, yo te conozco demasiado como para creértelo del todo.
Sé que una parte de ti tiene miedo.
Miedo de no haber hecho lo suficiente.
Miedo de que el resultado no sea el que esperas.
Miedo de sentir que todo este tiempo, todo tu esfuerzo, todas esas noches, terminen resumidos en una simple calificación.
Y, sinceramente…
Lo entiendo.
Porque cuando ponemos tanto de nosotros en algo, es imposible no querer que salga bien.
Es normal sentir nervios.
Es normal dudar.
Es normal querer llorar antes de tiempo.
Pero hay algo que llevo demasiado tiempo queriendo decirte.
Yo confío completamente en ti.
Y ojalá algún día aprendas a confiar en ti con la misma facilidad con la que yo lo hago.
Porque yo he tenido el privilegio de conocerte de una forma que ninguna prueba nacional podría hacerlo jamás.
---
Yo te he visto esforzarte incluso cuando nadie te estaba mirando.
Te he visto frustrarte porque sentías que podías hacerlo mejor.
Te he visto buscar entender las cosas en lugar de solo memorizarlas.
He escuchado la curiosidad con la que preguntas.
He notado la responsabilidad con la que cargas cada compromiso, aunque nadie te lo agradezca.
Y todas esas cosas…
No nacieron el día del examen.
Ya estaban dentro de ti desde mucho antes.
Por eso quiero que recuerdes algo.
Una prueba nacional puede medir cuánto recuerdas de ciertas materias.
Puede decir si acertaste o fallaste determinadas preguntas.
Puede colocarte un número.
Pero jamás podrá medir quién eres.
No puede medir tu bondad.
No puede medir la paz que transmites.
No puede medir tu forma de amar.
No puede medir tu empatía.
No puede medir tu fe.
No puede medir esa manera tan tuya de hacer sentir importantes a las personas que quieres.
Y mucho menos puede medir el tamaño de tu corazón, ni toda esa inteligencia que existe fuera de un salón de clases.
---
Porque ser inteligente nunca ha significado únicamente responder bien un examen.
Ser inteligente también es aprender de los errores.
Es escuchar.
Es comprender.
Es adaptarse.
Es levantarse después de caer.
Es seguir caminando incluso cuando las cosas no salen como esperabas.
Y tú haces todo eso.
Lo haces todos los días, aunque no te des cuenta.
¿Te acuerdas de la ballena? La que canta en una frecuencia distinta a todas las demás.
Esa que sigue avanzando por el océano llevando dentro una voz hermosa, aunque a veces sienta que nadie la escucha.
Pues eso también pasa con las notas.
Un examen es un océano lleno de otras voces, y a veces uno teme que la suya no alcance, que su frecuencia no sea la correcta, que nadie logre medir lo que de verdad lleva dentro.
Pero yo sí te escucho.
Y te aseguro que tu canción nunca ha necesitado un número para ser hermosa.
---
Tal vez veas una nota que te haga sonreír.
Y si eso pasa, créeme que voy a sentirme inmensamente orgulloso de ti.
Pero no porque una hoja haya decidido decirme que eres inteligente.
Voy a sentirme orgulloso porque conozco todo lo que hubo detrás.
Porque yo estuve ahí, del otro lado del teléfono, viéndote intentarlo.
Y si por alguna razón la nota no es la que esperabas…
Entonces quiero que vuelvas a leer estas páginas.
Porque necesito que recuerdes algo muy importante.
Un número jamás va a tener autoridad para decidir cuánto vales.
Jamás.
Ni el más alto podrá resumir todo lo que eres.
Ni el más bajo podrá quitarte todo lo que ya has demostrado ser.
Intentar describirte con una calificación sería como intentar guardar el océano dentro de un vaso.
Simplemente…
No cabe.
Porque tú eres muchísimo más grande que cualquier examen.
Muchísimo más que cualquier promedio.
Muchísimo más que cualquier resultado.
---
Así que, cuando finalmente llegue ese momento…
Respira.
Mira la pantalla.
Celebra si es una buena noticia.
Y si no lo es, permítete sentirlo por un rato. Llora si tienes que llorar. Yo voy a estar ahí, aunque sea a través de una llamada, aunque sea con un simple "¿estás bien, morena?".
Pero no dejes que ese número hable más fuerte que todas las personas que creen en ti.
Y, sobre todo…
No permitas que hable más fuerte que tú misma.
Porque antes de hacer ese examen…
Ya eras inteligente.
Ya eras capaz.
Ya eras admirable.
Y después de conocer el resultado…
Seguirás siendo exactamente la misma mujer increíble de la que yo me enamoré.
Y eso…
Ninguna prueba del mundo podrá cambiarlo jamás.
> Pase lo que pase en la prueba, hoy ya te ganaste mi orgullo entero.
> Y ese sí que no lo califica nadie.`
          },
        },
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
      explain: {
        sprite: "assets/sprites/Concerned_Me.png",
        lines: [
          "No.",
          "Este todavía no.",
          "Algunas cosas necesitan esperar su momento.",
        ],
      },

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
      unlockDate: new Date(2026, 10, 26, 0, 0, 0),
      // Mensaje cuando ya esté desbloqueado:
      unlockedContent: "Llegó el momento.\nHay algo pegado esperandote debajo del escritorio de la tienda\n Buscala mañana amor",
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

    // ── Contador de visitas y eventos automáticos ────────────
    const visits = (Progress.get('visits', 0) || 0) + 1;
    Progress.set('visits', visits);

    const bunnyPending = allRabbitsFound() && !Progress.get('bunny_scene_seen', false);
    const ve = LIBRARY_CONFIG.visitEvent;

    if (bunnyPending) {
      // La escena de los conejitos quedó pendiente: tiene prioridad
      setTimeout(() => playBunnyScene(), 4000);
    } else if (visits === 1 && LIBRARY_CONFIG.intro) {
      // Primera visita: el Moreno presenta la biblioteca
      setTimeout(() => {
        playCharacterDialog(LIBRARY_CONFIG.intro.sprite, LIBRARY_CONFIG.intro.lines);
      }, 2600);
    } else if (ve && visits >= ve.visita && !Progress.get('visit_event_seen', false)) {
      // Cuarta visita (o más, si antes hubo otro evento): evento secreto
      setTimeout(() => playVisitEvent(), 2600);
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

    // Hope vive en la biblioteca 🐰
    buildHope();
  }

  /* ── Hope, la guardiana de la biblioteca ───────────────────── */
  let hopeLastLine = -1;
  let hopeHideTimer = null;

  function buildHope() {
    const cfg = LIBRARY_CONFIG.hope;
    if (!cfg || !cfg.sprite) return;

    const el = document.createElement('div');
    el.className = 'lib-hope';
    el.innerHTML = `
      <div class="lib-hope-bubble" id="lib-hope-bubble"></div>
      <img src="${cfg.sprite}" alt="Hope" draggable="false">
    `;
    scene.appendChild(el);

    el.querySelector('img').addEventListener('click', () => {
      const bubble = el.querySelector('#lib-hope-bubble');
      const lines = cfg.dialogs || [];
      if (!lines.length) return;

      let i;
      do { i = Math.floor(Math.random() * lines.length); }
      while (lines.length > 1 && i === hopeLastLine);
      hopeLastLine = i;

      bubble.textContent = lines[i];
      bubble.classList.add('visible');
      el.classList.remove('boing');
      void el.offsetWidth;
      el.classList.add('boing');

      clearTimeout(hopeHideTimer);
      hopeHideTimer = setTimeout(() => bubble.classList.remove('visible'), 3400);
    });
  }

  /* ── Diálogo de personaje (overlay estilo novela visual) ───── */
  function playCharacterDialog(sprite, lines, onDone) {
    const ov = document.createElement('div');
    ov.className = 'lib-vnov';
    ov.innerHTML = `
      <img class="lib-vnov-sprite" src="${sprite}" alt="el moreno" draggable="false">
      <div class="lib-vnov-dialog">
        <div class="lib-vnov-name">el moreno</div>
        <p class="lib-vnov-text"></p>
        <span class="lib-greeter-next" style="visibility:hidden;">▼</span>
      </div>
      <div class="lib-bunny-hint">toca para continuar</div>
    `;
    document.body.appendChild(ov);
    setTimeout(() => ov.classList.add('visible'), 40);

    const textEl = ov.querySelector('.lib-vnov-text');
    const nextEl = ov.querySelector('.lib-greeter-next');
    let line = 0, typing = null;

    function typeLine() {
      const full = lines[line];
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
      }, 30);
    }

    let finished = false;   // evita que toques rápidos repitan el cierre
    ov.addEventListener('click', () => {
      if (finished) return;
      if (typing) {
        clearInterval(typing); typing = null;
        textEl.textContent = lines[line];
        nextEl.style.visibility = 'visible';
        return;
      }
      line++;
      if (line >= lines.length) {
        finished = true;
        ov.classList.remove('visible');
        setTimeout(() => {
          ov.remove();
          if (onDone) onDone();
        }, 700);
        return;
      }
      typeLine();
    });

    setTimeout(typeLine, 700);
    return ov;
  }

  /* ── Música: bajar y restaurar suavemente ──────────────────── */
  function duckMusic() {
    try { if (window.AudioEngine) AudioEngine.reduceBGMVolume(0.05, 900); } catch (e) {}
    if (audioEl) { audioEl.__prevVol = audioEl.volume; audioEl.volume = 0.25; }
  }
  function restoreMusic() {
    try { if (window.AudioEngine) AudioEngine.reduceBGMVolume(0.15, 1800); } catch (e) {}
    if (audioEl && audioEl.__prevVol != null) audioEl.volume = audioEl.__prevVol;
  }

  /* ── Evento secreto: cuarta visita ─────────────────────────── */
  function playVisitEvent() {
    const ve = LIBRARY_CONFIG.visitEvent;
    if (!ve || Progress.get('visit_event_seen', false)) return;
    Progress.set('visit_event_seen', true);

    // Fase 1: el Moreno sentado, sintiéndose un poco solo
    playCharacterDialog(ve.sprite, ve.lines, () => phase2());

    let phase2Started = false;
    function phase2() {
      if (phase2Started) return;
      phase2Started = true;
      const ov2 = document.createElement('div');
      ov2.className = 'lib-vnov';
      ov2.innerHTML = `
        <img class="lib-vnov-sprite" src="${ve.sprite}" alt="el moreno" draggable="false">
        <img class="lib-vnov-hope" src="${LIBRARY_CONFIG.hope.sprite}" alt="Hope" draggable="false">
        <div class="lib-vnov-dialog" style="opacity:0;">
          <div class="lib-vnov-name">el moreno</div>
          <p class="lib-vnov-text"></p>
          <span class="lib-greeter-next" style="visibility:hidden;">▼</span>
        </div>
      `;
      document.body.appendChild(ov2);
      setTimeout(() => ov2.classList.add('visible'), 40);

      const spriteEl = ov2.querySelector('.lib-vnov-sprite');
      const hopeEl   = ov2.querySelector('.lib-vnov-hope');
      const dialogEl = ov2.querySelector('.lib-vnov-dialog');
      const textEl   = ov2.querySelector('.lib-vnov-text');
      const nextEl   = ov2.querySelector('.lib-greeter-next');

      // Hope entra saltando desde el lado derecho
      setTimeout(() => hopeEl.classList.add('hopping'), 600);
      duckMusic();

      // Al llegar: el abrazo
      setTimeout(() => {
        hopeEl.style.display = 'none';
        spriteEl.src = ve.hugSprite;
        spriteEl.classList.add('hug');
        dialogEl.style.opacity = '1';
        startHugLines();
      }, 2600);

      let line = 0, typing = null;
      function typeLine() {
        const full = ve.hugLines[line];
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

      function startHugLines() {
        typeLine();
        let done = false;   // evita repetir el cierre con toques rápidos
        ov2.addEventListener('click', () => {
          if (done) return;
          if (typing) {
            clearInterval(typing); typing = null;
            textEl.textContent = ve.hugLines[line];
            nextEl.style.visibility = 'visible';
            return;
          }
          line++;
          if (line >= ve.hugLines.length) {
            done = true;
            // Hope "mueve las orejas": pequeño balanceo del abrazo,
            // unos segundos de silencio y la escena se despide
            dialogEl.style.opacity = '0';
            spriteEl.classList.add('wiggle');
            setTimeout(() => {
              ov2.classList.remove('visible');
              restoreMusic();
              setTimeout(() => ov2.remove(), 1600);
            }, 3600);
            return;
          }
          typeLine();
        });
      }
    }
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
    // La primera vez, el Moreno aparece a presentar el libro
    if (book.explain && !Progress.get('explained_' + book.id, false)) {
      Progress.set('explained_' + book.id, true);
      playCharacterDialog(book.explain.sprite, book.explain.lines, () => {
        openBookContent(book);
      });
      return;
    }
    openBookContent(book);
  }

  function openBookContent(book) {
    switch (book.type) {
      case 'pdf':     openReader(book, renderPDF(book)); break;
      case 'album':   openReader(book, renderAlbum(book), 'lib-album-panel'); break;
      case 'manual':  openReader(book, renderChapters(book, false), 'lib-manual-panel'); break;
      case 'guide':   openReader(book, renderGuide(book), 'lib-manual-panel'); break;
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
        // Elemento distintivo: etiqueta (tag) o, si no hay, la fecha antigua
        const caption = esc(photo.tag || photo.date || '');
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
    const zoomLabel = photo.tag || photo.date;
    photoZoom.innerHTML = `
      ${imgHtml}
      ${zoomLabel ? `<div class="lib-photo-date">${esc(zoomLabel)}</div>` : ''}
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
      } else if (ch.content) {
        // Capítulo-carta: se abre a página completa (formato de libro)
        html += `
          <li class="lib-chapter lib-chapter-letter" data-ch="${i}">
            <div class="lib-chapter-head">
              <span class="lib-chapter-num">${i + 1}</span>
              <span>${esc(ch.title)} — <em style="opacity:.8;">${esc(ch.content.title || '')}</em></span>
              <span class="lib-chapter-arrow">❦</span>
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

    wrap.querySelectorAll('.lib-chapter:not(.lib-chapter-locked):not(.lib-chapter-letter) .lib-chapter-head').forEach(head => {
      head.addEventListener('click', () => {
        head.parentElement.classList.toggle('open');
      });
    });

    // Capítulos-carta: abren la lectura a página completa
    wrap.querySelectorAll('.lib-chapter-letter').forEach(li => {
      li.addEventListener('click', () => {
        const ch = book.chapters[parseInt(li.getAttribute('data-ch'), 10)];
        openReader(book, renderLetterChapter(ch), 'lib-letter-panel');
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

    return wrap;
  }

  /* ── Capítulo-carta: una carta con estética de libro ───────── */
  function renderLetterChapter(ch) {
    const c = ch.content || {};
    const wrap = document.createElement('div');
    wrap.className = 'lib-paper lib-letter';

    let html = `
      <div class="lc-head">
        <div class="lc-numeral">${esc(c.numeral || ch.title || '')}</div>
        <h2 class="lc-title">${esc(c.title || '')}</h2>
        <div class="lc-crest">✦</div>
      </div>
      <div class="lc-body">`;

    const lines = String(c.body || '').split('\n');
    let quote = [];
    let firstPara = true;
    const flushQuote = () => {
      if (quote.length) {
        html += `<blockquote class="lc-quote">${quote.map(esc).join('<br>')}</blockquote>`;
        quote = [];
      }
    };

    for (const raw of lines) {
      const line = raw.trim();
      if (!line) continue;
      if (line === '---') { flushQuote(); html += `<div class="lc-divider"><span>❧</span></div>`; continue; }
      if (line.startsWith('>')) { quote.push(line.replace(/^>\s?/, '').replace(/^["“]|["”]$/g, '').trim()); continue; }
      flushQuote();
      html += `<p class="lc-p${firstPara ? ' lc-first' : ''}">${esc(line)}</p>`;
      firstPara = false;
    }
    flushQuote();

    html += `
        <div class="lc-sign">— con todo mi orgullo, tu Moreno</div>
      </div>`;
    wrap.innerHTML = html;
    return wrap;
  }

  /* ── Libro 3: Guía de Explorador (diario de campo) ─────────── */
  function renderGuide(book) {
    const g = book.guide || {};
    const wrap = document.createElement('div');
    wrap.className = 'lib-paper lib-guide';

    let html = `
      <div class="g-stamp">${esc(g.stamp || 'CONFIDENCIAL')}</div>
      <div class="g-head">
        <div class="g-overline">DIARIO DE CAMPO · GUÍA DE EXPLORADOR</div>
        <h2 class="lib-reader-title">${esc(book.title)}</h2>
        <p class="g-expedicion">${esc(g.expedicion || '')}</p>
      </div>

      <div class="g-specimen">
        ${g.foto ? `
          <div class="g-polaroid">
            <span class="g-tape"></span>
            <img src="${encodeURI(g.foto)}" alt="espécimen" loading="lazy"
                 onerror="this.closest('.g-polaroid').style.display='none'">
            <div class="g-polaroid-cap">${esc(g.fotoCaption || '')}</div>
          </div>` : ''}
        <div class="g-idcard">
          <div class="g-species">Especie: <em>${esc(g.especie || '')}</em></div>
          <div class="g-class">${esc(g.clasificacion || '')}</div>
          <div class="g-status">Estado: ${esc(g.estado || '')}</div>
          <table class="g-ficha">
            ${(g.ficha || []).map(([k, v]) =>
              `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}
          </table>
        </div>
      </div>

      ${g.habitat ? `
        <div class="g-field"><span class="g-field-k">📍 Hábitat natural</span>
        <span class="g-hand">"${esc(g.habitat)}"</span></div>` : ''}
      ${g.comportamiento ? `
        <div class="g-field"><span class="g-field-k">🔎 Comportamiento observado</span>
        <span class="g-hand">"${esc(g.comportamiento)}"</span></div>` : ''}

      ${g.debilidades && g.debilidades.length ? `
        <div class="g-box">
          <div class="g-box-title">💘 Debilidades documentadas</div>
          <ul>${g.debilidades.map(d => `<li>${esc(d)}</li>`).join('')}</ul>
        </div>` : ''}
    `;

    (g.secciones || []).forEach((sec, i) => {
      html += `<section class="g-sec">
        <h3 class="g-sec-title"><span class="g-sec-num">Entrada ${String(i + 1).padStart(2, '0')}</span>
          ${sec.icon || ''} ${esc(sec.titulo)}</h3>`;
      (sec.parrafos || []).forEach(p => { html += `<p class="g-p">${esc(p)}</p>`; });
      if (sec.campos && sec.campos.length) {
        html += `<table class="g-ficha g-ficha-sec">
          ${sec.campos.map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}
        </table>`;
      }
      if (sec.lista && sec.lista.length) {
        html += `<ul class="g-list">${sec.lista.map(li => `<li>${esc(li)}</li>`).join('')}</ul>`;
      }
      (sec.grupos || []).forEach(gr => {
        html += `<div class="g-sub">${esc(gr.sub)}</div>
          <ul class="g-list">${(gr.lista || []).map(li => `<li>${esc(li)}</li>`).join('')}</ul>`;
      });
      if (sec.cierre) html += `<p class="g-hand g-cierre">${esc(sec.cierre)}</p>`;
      html += `</section>`;
    });

    if (g.advertencia) {
      html += `
        <div class="g-warn">
          <div class="g-warn-title">⚠ ADVERTENCIA DEL EXPLORADOR</div>
          <p>"${esc(g.advertencia)}"</p>
        </div>`;
    }

    html += `<p class="g-hand g-sign">— El explorador que nunca dejará de estudiarla.</p>`;

    wrap.innerHTML = html;

    // Conejito oculto #3: al final de la guía
    const spot = document.createElement('div');
    spot.className = 'lib-rabbit-spot';
    placeRabbit(spot, 'manual', '');
    wrap.appendChild(spot);

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
