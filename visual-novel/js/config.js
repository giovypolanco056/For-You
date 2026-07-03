/* ================================================================
   CONFIG.JS
   *** ARCHIVO PRINCIPAL DE CONFIGURACIÓN ***

   Este es el único archivo que necesitas editar para personalizar
   toda la experiencia sin tocar el código de los motores.

   Secciones:
     1. SPRITES del personaje
     2. FONDOS por escena
     3. MÚSICA y efectos de sonido
     4. CONFIGURACIÓN DE TIMING
     5. ESCENAS Y DIÁLOGOS
     6. EFECTOS POR ESCENA
================================================================ */

/* ================================================================
   1. SPRITES DEL PERSONAJE
   Cambia las rutas de imagen según tus archivos.
   Puedes usar rutas relativas: "assets/sprites/Smiling_Me.png"
   O URLs absolutas: "https://tu-servidor.com/sprites/Smiling_Me.png"
================================================================ */
const CHARACTER_SPRITES = {
  // ── Expresiones base ──────────────────────────────────────────
  Smiling:          "assets/sprites/Smiling_Me.png",
  Thinking:         "assets/sprites/Thinking_Me.png",
  Talking:          "assets/sprites/Talking_Me.png",
  Crying:           "assets/sprites/Crying_Me.png",
  Angry:            "assets/sprites/Angry_Me.png",
  Concerned:        "assets/sprites/Concerned_Me.png",
  Celebrating:      "assets/sprites/Celebrating_Me.png",
  Flower:           "assets/sprites/Flower_Me.png",

  // ── Acciones especiales ───────────────────────────────────────
  GivingCard:       "assets/sprites/Card_Me.png",
  LoveInEyes:       "assets/sprites/InLove_Me.png",
  Kissing:          "assets/sprites/Kissing_Me.png",
  Peeking:          "assets/sprites/Peeking_Me.png",
  Singing:          "assets/sprites/Singing_Me.png",
  Showing:          "assets/sprites/Showing_Me.png",

  // ── Variantes de charla ───────────────────────────────────────
  TalkingOnSide:    "assets/sprites/TalkingOnSide_Me.png",
  Talking3:         "assets/sprites/Talking3_Me.png",

  // ── Extrañando / melancólico ──────────────────────────────────
  MissingSitDown:   "assets/sprites/Missing_Me.png",
  MissingStanding:  "assets/sprites/MissingStanding_Me.png",
};

/* ================================================================
   2. FONDOS POR ESCENA
   Cada fondo puede ser:
     - Un objeto con gradient (CSS) y/o imageUrl
     - Un tipo especial: 'stars', 'cozy', 'hearts', 'plain'
================================================================ */
const SCENE_BACKGROUNDS = {

  // Fondo por defecto: oscuro suave con gradiente púrpura
  default: {
    type: 'gradient',
    gradient: 'linear-gradient(180deg, #1a0a2e 0%, #0d0718 100%)',
    particles: null,
  },

  // Fondo cálido tipo escritorio / habitación acogedora
  cozy: {
    type: 'gradient',
    gradient: 'linear-gradient(180deg, #2d1b4e 0%, #1a0e2e 50%, #0d0718 100%)',
    particles: 'stars',
    overlay: 'rgba(255, 160, 90, 0.06)',
  },

  // Fondo de noche estrellada
  night_sky: {
    type: 'gradient',
    gradient: 'linear-gradient(180deg, #050a1a 0%, #0a1628 40%, #1a0a2e 100%)',
    particles: 'stars',
    overlay: null,
  },

  // Fondo lleno de corazones
  hearts_fill: {
    type: 'gradient',
    gradient: 'linear-gradient(180deg, #1a0a2e 0%, #2d0a1e 100%)',
    particles: 'hearts',
    overlay: null,
  },

  // Inicio del glitch / interrupción
  glitch_start: {
    type: 'gradient',
    gradient: 'linear-gradient(180deg, #0d0718 0%, #1a0a2e 100%)',
    particles: null,
    overlay: null,
  },

};

/* ================================================================
   3. MÚSICA Y AUDIO
   audioFiles: los archivos de música de fondo.
   sfx: efectos de sonido (generados por Web Audio API si no hay archivo).
   
   NOTA: Los SFX de typewriter se generan sintéticamente con Web Audio API
   si no proporcionas archivos. Puedes agregar rutas reales aquí.
================================================================ */
const AUDIO_CONFIG = {

  // Música de fondo original de la página de cumpleaños
  birthdayBGM: {
    src: "assets/audio/birthday_bgm.mp3",   // ← cambia esta ruta
    loop: true,
    volume: 0.6,
  },

  // Música romántica para las escenas del VN
  vnBGM: {
    src: "assets/audio/vn_bgm.mp3",          // ← cambia esta ruta
    loop: true,
    volume: 0.45,
  },

  // Efectos de sonido (pueden ser null para usar síntesis)
  sfx: {
    // Sonido del texto siendo escrito (typewriter tick)
    // Si es null, se genera con Web Audio API automáticamente
    textSound:      null,
    // Sonido de cambio de escena
    sceneChange:    null,
    // Sonido del glitch
    glitch:         null,
    // Sonido de corazón
    heartBeat:      null,
  },

  // Si true, los sonidos de texto se generan con síntesis de Web Audio
  useSyntheticSFX: true,
};

/* ================================================================
   4. CONFIGURACIÓN DE TIMING
   Todos los valores están en milisegundos.
   Ajusta para hacer la experiencia más rápida o más lenta.
================================================================ */
const TIMING_CONFIG = {

  // ── Fase inicial ──────────────────────────────────────────────
  // Cuántos ms esperar antes de comenzar el "glitch"
  // (cuánto tiempo se ve la página de cumpleaños normalmente)
  initialDelay:           7000,   // 7 segundos

  // ── Secuencia de interrupción ─────────────────────────────────
  glitchDuration:          400,   // Duración del efecto glitch visual
  musicFadeDuration:      1200,   // Tiempo para bajar la música
  freezeDuration:          800,   // Tiempo que la pantalla se congela
  characterEnterDelay:     600,   // Espera antes de que aparezca el personaje

  // ── Diálogo ───────────────────────────────────────────────────
  typewriterSpeed:          42,   // ms entre cada carácter (menos = más rápido)
  pauseAfterLine:          500,   // ms de pausa antes del indicador "next"
  pauseAfterPunctuation:   320,   // ms extra de pausa en . ! ? ...

  // ── Transiciones entre escenas ────────────────────────────────
  sceneTransitionDuration: 600,   // ms para fade entre escenas
  spriteTransitionDuration:400,   // ms para transición de sprite

  // ── Auto-avance (experimental) ────────────────────────────────
  // Si true, los diálogos avanzan solos (como una cutscene)
  autoAdvance:            false,
  autoAdvanceDelay:       3500,   // ms entre diálogos si autoAdvance = true

};

/* ================================================================
   5. ESCENAS Y DIÁLOGOS
   Estructura de cada escena:
   {
     id:          nombre identificador único,
     sprite:      clave de CHARACTER_SPRITES,
     background:  clave de SCENE_BACKGROUNDS,
     position:    'center' | 'left' | 'right' | 'peeking',
     effects:     array de efectos a activar en esta escena,
     dialog:      array de strings (cada string = una línea de diálogo)
                  Las líneas se muestran de una en una.
                  Usa '\n' para salto de línea dentro de una línea.
     musicShift:  'bgm' | 'birthday' | null (cambia la música)
     onEnter:     función callback opcional (avanzado)
   }
================================================================ */
const SCENES = [

  /* ── ESCENA 1: La interrupción / Peek ─────────────────────── */
  {
    id: 'peek',
    sprite: 'Peeking',
    background: 'glitch_start',
    position: 'peeking',
    effects: ['glitch_entry'],
    musicShift: null,
    dialog: [
      "Eh... hola.",
      "Sí.",
      "Tú.",
      "A que te la creiste y pensaste que solo era eso, verdad?",
      "Pues noool",
    ],
  },

  {
    id: 'celebration',
    sprite: 'Celebrating',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "!!!FELICIDADES POR ENCONTRAR EL SECRETO AMOOOOOR!!!",
    ],
  },



  {
    id: 'thinking',
    sprite: 'Thinking',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Seguramente te estarás preguntando...",
    ],
  },

  {
    id: 'talking',
    sprite: 'Talking3',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Ohhh Giovy guapo hermoso, hermoso y vigoroso, papichulo HERMOSO",
      "Hombre de mis sueños y dueño de mi",
      "¿Qué es esto y para qué?",
      "Y yo te diré...",
      "Lo sé, Lo soy, pero dejame presentarme primero amor",
    ],
  },

  {
    id: 'introduction',
    sprite: 'Smiling',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: 'vnBGM',
    dialog: [
      "Soy el Moreno.",
      "Bueno...",
      "Una representación virtual del moreno.",
      "Aunque debo admitir que el original es un poco más guapo.",
      "Y también bastante más alto.",
      "Pero en fin, detalles insignificantes.",
    ],
  },

  {
    id: 'surprise',
    sprite: 'Talking',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Sé que esto puede parecer raro.",
      "Pero quería sorprenderte.",
      "Y después de descartar opciones completamente normales...",
      "Como cantarte una canción",
      "O grabarte un video.",
      "O aparecer en tu casa con una foto de tamaño real de Yoongi...",
      "Decidí aparecer dentro de tu pantalla nuevamente pero de manera distinta.",
    ],
  },

  {
    id: 'confession',
    sprite: 'Talking3',
    background: 'default',
    position: 'center',
    effects: ['soft_hearts'],
    musicShift: null,
    dialog: [
      "Hay algo muy interesante que he descubierto desde que te conozco.",
      "Y es que realmente nunca encuentro suficientes maneras de decirte cuánto te amo.",
      "Eres mi momento más creativo",
      "Y espero así sea por muuuuucho tiempo",
    ],
  },

  {
    id: 'conversations',
    sprite: 'Showing',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Así que pensé...",
      "¿Por qué no hacer lo que mejor sabemos hacer?",
      "Hablar.",
      "Durante demasiado tiempo.",
      "Sobre demasiadas cosas.",
      "Hasta ambos terminar dormidos",
    ],
  },

  {
    id: 'letter',
    sprite: 'GivingCard',
    showLetter: true,
    background: 'cozy',
    position: 'center',
    effects: ['warm_glow'],
    musicShift: null,
    dialog: [
      "Seguro ya te he de tener jarta con tanta lectura.",
      "Pero aguanta un poquito más, ¿si?",
      "Como toda conversación importante, considero que esta merece una carta...",
      "y escribí una para ti por haber encontrado este secreto.",
      "Bueno...",
      "Técnicamente escribí cientos de páginas.",
      "Pero esta es un poco más... Especial.",
      "Ya verás por qué.",
      "Pero vamos paso a paso.",
      "Antes quiero que leas la carta",
    ],
  },

{
    id: 'conversations',
    sprite: 'Talking',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Ese texto puede parecer algo normal entre nosotros",
      "Pero no lo es...",
      "Fué la primera vez que escribí sobre ti para mi",
      "La primera vez que saqué todos mis sentimientos en un grupo de letras para ti",
      "Y eso fué bastante significativo para mi, porque fue la primera vez que apareciste mi espacio más personal",
    ],
  },

  {
    id: 'introduction',
    sprite: 'Smiling',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: 'vnBGM',
    dialog: [
      "Y miranos ahora, todo un año como pareja",
    ],
  },

  /* ── ESCENA 8: El amor en los ojos ──────────────────────── */
  {
    id: 'love_eyes',
    sprite: 'LoveInEyes',
    background: 'hearts_fill',
    position: 'center',
    effects: ['hearts_burst'],
    musicShift: null,
    dialog: [
      "Y cada vez que te veo sigo emocionandome como si fuera la primera vez",
      "Y es que...",
      "Morena tu eres una cosaaaaa, waoss",
      "Aún no sé como pude enamorar a una mujer como tu",
      "Pero mientras siga el efecto aprovecharé",
    ],
  },

  /* ── ESCENA 9: La empatía ────────────────────────────────── */
{
    id: 'Flower',
    sprite: 'Flower',
    background: 'hearts_fill',
    position: 'center',
    effects: ['hearts_burst'],
    musicShift: null,
    dialog: [
      "Cuando veas esto seguramente ya habrá pasado el día de nuestro aniversario",
      "Pero ya que el Giovy de verdad te dió sus flores pues yo tambien te regalo una mia",
    ],
  },

    {
    id: 'thinking2',
    sprite: 'Thinking',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Me pregunto como habrá sido, ¿lloraste?",
      "¿Me diste un beso?",
      "¿Habré reunido el valor para colocarte el anillo en la mano izquierda?",
      "¿Todo habrá salido acorde los planes?",
      "Ni idea pero si te pude hacer feliz pues es suficiente para mi."
    ],
  },


  
  {
    id: 'Queja',
    sprite: 'Angry',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Aunque no lo puedo asegurar, pero apuesto mis kojimas virtuales a que te quillaste conmigo durante el viaje por algún motivo.",
    ],
  },

 {
    id: 'empathy',
    sprite: 'Concerned',
    background: 'cozy',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Aunque seguro yo tenía la culpa por pendejo...",
    ],
  },

  {
    id: 'reflection',
    sprite: 'Talking3',
    background: 'cozy',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Aunque por otra parte y ahora que lo pienso...",
      "Eso es algo curioso.",
      "Yo estoy aquí, dentro de una pantalla, intentando adivinar cómo salió uno de los días más importantes para nosotros.",
      "Y tú estás allá en tu casa, seguramente en tu cama con Beily al lado, leyendo esto después de haberlo vivido.",
      "Supongo que no es la primera vez que el Giovy del pasado y el Giovy del futuro trabajan juntos.",
      "Y sinceramente espero que el del pasado no haya cometido demasiados errores, y haya hecho de nuestro primer aniversario",
       "Algo perfecto",
    ],
},

  {
    id: 'thinking3',
    sprite: 'Thinking',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Hablando de cosas perfectas...",
    ],
  },


  {
    id: 'love_eyes2',
    sprite: 'LoveInEyes',
    background: 'hearts_fill',
    position: 'center',
    effects: ['hearts_burst'],
    musicShift: null,
    dialog: [
      "Tu enterita, muak",
    ],
  },

  {
    id: 'joke',
    sprite: 'Talking',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Pero ya hablando enserio",
    ],
  },


{
    id: 'sad',
    sprite: 'MissingSitDown',
    background: 'stars',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Y creo que eso es lo que más odio de los días perfectos.",
      "Que eventualmente terminan.",
      "Que siempre llega ese momento donde tengo que volver a lo cotidiano.",
      "A la llamada.",
      "A los mensajes.",
      "A extrañarte.",
      "Y aunque amo cada llamada contigo...",
      "Siempre desearía cinco minutos más."
    ],
},
{
    id: 'missing',
    sprite: 'MissingStanding',
    background: 'night_window',
    position: 'center',
    effects: ['soft_rain'],
    musicShift: 'pianoSoft',
    dialog: [
      "Creo que James Arthur tenía razón.",
      "Lo peor nunca ha sido despedirme.",
      "Lo peor siempre ha sido el momento exacto después.",
      "Ese instante donde ya no puedo tomar tu mano y pienso que...",
      "Debí abrazarla más...",
      "Y me voy alejando más y más, y desde ese momento empiezo a extrañarte",
      "Odio tener volver a fingir que hablarte por teléfono es suficiente.",
    ],
},

{
    id: 'confession2',
    sprite: 'Concerned',
    background: 'night_window',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Porque la verdad...",
      "Nunca lo es.",
      "Nunca he sentido que unas cuantas horas contigo sean suficientes.",
      "Nunca he sentido que un abrazo dure lo necesario.",
      "Nunca he sentido que un beso fue suficiente.",
      "Y honestamente espero que nunca llegue a serlo.",
    ],
},

{
    id: 'promise',
    sprite: 'Talking3',
    background: 'stars',
    position: 'center',
    effects: ['soft_stars'],
    musicShift: null,
    dialog: [
      "Porque creo que existe algo bonito en extrañarte.",
      "Significa que todavía quiero más tiempo contigo.",
      "Más conversaciones.",
      "Más abrazos.",
      "Más joderte la paciencia.",
      "Más juegos.",
      "Más Chismes.",
      "Más... nosotros.",
    ],
},

{
    id: 'meta',
    sprite: 'Thinking',
    background: 'stars',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Aunque ahora que lo pienso...",
      "Debe ser aun más extraño para ti.",
      "Acabas de pasar un aniversario conmigo.",
      "Y ahora estás hablando conmigo.",
      "Pero conmigo del pasado.",
      "Que además vive dentro de tu telefono.",
      "La tecnología es rara pero es la vuelta.",
    ],
},

{
    id: 'gratitude',
    sprite: 'Smiling',
    background: 'warm_night',
    position: 'center',
    effects: ['warm_glow'],
    musicShift: null,
    dialog: [
      "Pero bueno, si llegaste hasta aquí...",
      "Gracias.",
      "Gracias por leer el libro.",
      "Gracias por encontrar el secreto.",
      "Gracias por escuchar a esta versión extraña y digital de mí.",
      "Y sobre todo...",
      "Gracias por haber decidido compartir tu vida conmigo.",
    ],
},
  {
    id: 'finale',
    sprite: 'Showing',
    background: 'cozy',
    position: 'center',
    effects: ['fade_to_black'],
    musicShift: null,
    dialog: 
      "Pensarías que esto es todo,",
      "Pero en realidad...",
      "No aparecí aquí solo para hablar.",
      "Vine a mostrarte algo.",
    ],
    isFinalScene: true,   // Activa el fade to black al terminar
  },

];

/* ================================================================
   6. EFECTOS ESPECIALES DISPONIBLES
   Mapeo de nombre de efecto → comportamiento.
   Los motores en effects.js y backgrounds.js los leen de aquí.
================================================================ */
const EFFECTS_CONFIG = {
  glitch_entry:   { type: 'glitch',    duration: 400 },
  soft_hearts:    { type: 'particles', emitter: 'hearts',      count: 8,  speed: 'slow'  },
  hearts_burst:   { type: 'particles', emitter: 'hearts',      count: 20, speed: 'medium'},
  warm_glow:      { type: 'overlay',   color: 'rgba(255,160,80,0.07)', fade: 1500 },
  stars_appear:   { type: 'particles', emitter: 'stars',       count: 25, speed: 'slow'  },
  pixel_kiss:     { type: 'particles', emitter: 'kiss_hearts', count: 12, speed: 'medium'},
  fade_to_black:  { type: 'fade',      duration: 3000 },
};
