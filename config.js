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

  // ── Acciones especiales ───────────────────────────────────────
  GivingCard:       "assets/sprites/Card_Me.png",
  LoveInEyes:       "assets/sprites/InLove_Me.png",
  Kissing:          "assets/sprites/Kissing_Me.png",
  Peeking:          "assets/sprites/Peeking_Me.png",
  Singing:          "assets/sprites/Singing_Me.png",
  Showing:          "assets/sprites/Showing_Me.png",

  // ── Variantes de charla ───────────────────────────────────────
  TalkingOnSide:    "assets/sprites/TalkingOnSide_Me.png",
  Talking2:         "assets/sprites/Talking2_Me.png",

  // ── Extrañando / melancólico ──────────────────────────────────
  MissingSitDown:   "assets/sprites/Missing_Me.png",
  MissingStanding:  "assets/sprites/MissingStand_Me.png",
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
      "La preciosura que escaneó este QR pensando que iba a encontrar exactamente lo mismo de siempre.",
    ],
  },

  /* ── ESCENA 2: La pregunta ────────────────────────────────── */
  {
    id: 'thinking',
    sprite: 'Thinking',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Seguramente te estarás preguntando",
    ],
  },

  {
    id: 'thinking',
    sprite: 'Talking3',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Ooooh, moreno grandioso bello y guapo",
      "¿que es esto? y para qué?",
      "y yo te diré",

    ],
  },


  /* ── ESCENA 3: La presentación ──────────────────────────────*/
  {
    id: 'introduction',
    sprite: 'Smiling',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: 'vnBGM',
    dialog: [
      "Primero dejame me presento",
      "Soy el moreno.",
      "Bueno...",
      "Una representación virtual del moreno.",
      "Aunque debo admitir que el original es un poco más guapo.",
      "Y también bastante más alto.",
    ],
  },

  /* ── ESCENA 4: La sorpresa ──────────────────────────────────*/
  {
    id: 'surprise',
    sprite: 'Talking',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Sé que esto es raro.",
      "Pero quería sorprenderte.",
      "Y después de descartar opciones completamente normales...",
      "Como escribirte una carta.",
      "O grabarte un video.",
      "O aparecer en tu ventana vestido de BTS...",
      "Decidí aparecer dentro de tu pantalla.",
    ],
  },

  /* ── ESCENA 5: La confesión ──────────────────────────────── */
  {
    id: 'confession',
    sprite: 'Talking2',
    background: 'default',
    position: 'center',
    effects: ['soft_hearts'],
    musicShift: null,
    dialog: [
      "Porque hay algo que he descubierto desde que te conozco.",
      "Y es que nunca encuentro suficientes maneras de decirte cuánto te amo.",
    ],
  },

  /* ── ESCENA 6: Las conversaciones ───────────────────────── */
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
      "Hasta las tres de la mañana.",
    ],
  },

  /* ── ESCENA 7: La carta ─────────────────────────────────── */
  {
    id: 'letter',
    sprite: 'GivingCard',
    background: 'cozy',
    position: 'center',
    effects: ['warm_glow'],
    musicShift: null,
    dialog: [
      "Y como toda conversación importante merece una carta...",
      "Escribí una para ti.",
      "Bueno.",
      "Técnicamente escribí cientos de páginas.",
      "Pero vamos paso a paso.",
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
      "Porque sinceramente...",
      "Cada vez que te veo.",
      "Me pasa algo parecido a esto.",
      "Y lo peor es que después de todo este tiempo...",
      "Sigue pasando exactamente igual.",
    ],
  },

  /* ── ESCENA 9: La empatía ────────────────────────────────── */
  {
    id: 'empathy',
    sprite: 'Concerned',
    background: 'cozy',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Sé que hoy tuvo sus momentos.",
      "Y sé que probablemente todavía tengas miedo.",
      "O dudas.",
      "O simplemente estés cansada.",
      "Y no te culpo.",
    ],
  },

  /* ── ESCENA 10: Entender el miedo ───────────────────────── */
  {
    id: 'understanding',
    sprite: 'MissingStanding',
    background: 'cozy',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Porque si hay algo que he aprendido...",
      "Es que amar a alguien también significa entender que a veces tiene miedo.",
    ],
  },

  /* ── ESCENA 11: Las despedidas ──────────────────────────── */
  {
    id: 'goodbyes',
    sprite: 'MissingSitDown',
    background: 'night_sky',
    position: 'center',
    effects: ['stars_appear'],
    musicShift: null,
    dialog: [
      "Y si soy completamente sincero...",
      "Hay algo que nunca me acostumbro a sentir.",
      "Las despedidas.",
      "Porque no importa si es un Uber.",
      "Un autobús.",
      "Un carro.",
      "Un avión.",
      "O incluso un Allison Lee.",
      "Cualquier cosa que me aleje de ti siempre se siente demasiado lejos.",
    ],
  },

  /* ── ESCENA 12: El momento más difícil ──────────────────── */
  {
    id: 'hardest_part',
    sprite: 'Crying',
    background: 'night_sky',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Porque la parte más difícil de cada encuentro...",
      "Siempre ha sido el momento de partir.",
    ],
  },

  /* ── ESCENA 13: La gratitud ──────────────────────────────── */
  {
    id: 'gratitude',
    sprite: 'Smiling',
    background: 'cozy',
    position: 'center',
    effects: ['warm_glow'],
    musicShift: null,
    dialog: [
      "Pero también he descubierto algo.",
      "Que incluso después de cada despedida...",
      "Siempre termino agradeciendo.",
    ],
  },

  /* ── ESCENA 14: El regalo divino ─────────────────────────── */
  {
    id: 'divine',
    sprite: 'LoveInEyes',
    background: 'hearts_fill',
    position: 'center',
    effects: ['hearts_burst'],
    musicShift: null,
    dialog: [
      "Porque entre todas las personas del mundo...",
      "Dios decidió cruzar mi camino con el tuyo.",
    ],
  },

  /* ── ESCENA 15: El momento cómico ───────────────────────── */
  {
    id: 'not_fair',
    sprite: 'Angry',
    background: 'default',
    position: 'center',
    effects: [],
    musicShift: null,
    dialog: [
      "Aunque sigo pensando que no es justo.",
      "No es justo que seas tan linda.",
    ],
  },

  /* ── ESCENA 16: El beso virtual ─────────────────────────── */
  {
    id: 'kiss',
    sprite: 'Kissing',
    background: 'hearts_fill',
    position: 'center',
    effects: ['hearts_burst', 'pixel_kiss'],
    musicShift: null,
    dialog: [
      "Mientras volvemos a vernos...",
      "Aquí tienes un beso virtual.",
    ],
  },

  /* ── ESCENA FINAL: La revelación ────────────────────────── */
  {
    id: 'finale',
    sprite: 'Showing',
    background: 'cozy',
    position: 'center',
    effects: ['fade_to_black'],
    musicShift: null,
    dialog: [
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
