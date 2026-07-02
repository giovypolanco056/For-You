/* ================================================================
   LETTER.JS
   Motor de la carta romántica.

   Muestra una pantalla de carta estilo pergamino cuando el
   personaje entrega la carta (escena 'letter').

   CÓMO PERSONALIZAR:
     - Cambia LETTER_CONFIG.to       → nombre de la destinataria
     - Cambia LETTER_CONFIG.date     → fecha que aparece arriba
     - Cambia LETTER_CONFIG.body     → el texto de la carta
       (usa \n para saltos de línea)
     - Cambia LETTER_CONFIG.signature→ la firma
================================================================ */

/* ================================================================
   CONFIGURACIÓN DE LA CARTA  ← EDITA AQUÍ
================================================================ */
const LETTER_CONFIG = {

  // Destinataria (aparece en el encabezado)
  to: "Para ti,",

  // Fecha (aparece arriba de la carta)
  date: "Septiembre, 2025",

  // Cuerpo de la carta
  // Usa \n para saltos de línea entre párrafos
  body:
`Desde que ella llegó a mi vida, todo ha cambiado de una manera hermosa. 

Me ha inspirado a acercarme más a Dios, a ser una mejor persona y a valorar las pequeñas cosas. 

Admiro su fe, su ternura, su pasión y la forma tan especial en que ilumina todo a su alrededor.

Gracias a ella he descubierto nuevos intereses, he aprendido a expresar más mis sentimientos y
he experimentado un amor más profundo de lo que imaginaba. Incluso en su ausencia he sentido cuánto significa para mí. 

Aunque llevamos poco tiempo juntos, estoy seguro de que quiero compartir con ella mi presente, mi futuro y todo lo que venga, 
porque para mí, simplemente, ella es todo lo que siempre he soñado.`,

  // Firma
  signatureLabel: "Con todo mi amor,",
  signature: "Polanco",

  // Decoración inferior (emojis o texto)
  decoration: "💕 ✦ 💕",

  // Texto del botón para continuar
  continueText: "continuar ▼",

  // ¿Mostrar efecto typewriter al escribir la carta?
  typewriterEffect: true,
  typewriterSpeed: 18,   // ms por carácter (más lento que el diálogo)
};

/* ================================================================
   MOTOR DE LA CARTA (no editar salvo que sepas JS)
================================================================ */
const LetterEngine = (() => {

  let overlay    = null;
  let onCloseCb  = null;
  let isOpen     = false;

  /* ── Inicialización ──────────────────────────────────────── */

  function init() {
    // Crear el overlay e inyectarlo en el body
    overlay = document.createElement('div');
    overlay.className = 'letter-overlay';
    overlay.innerHTML = buildLetterHTML();
    document.body.appendChild(overlay);

    // Botón continuar
    const btn = overlay.querySelector('.letter-continue-btn');
    if (btn) {
      btn.addEventListener('click', close);
      btn.addEventListener('touchend', (e) => { e.preventDefault(); close(); });
    }
  }

  /* ── Construcción del HTML ───────────────────────────────── */

  function buildLetterHTML() {
    return `
      <div class="letter-card">
        <!-- Esquina doblada — CSS -->

        <!-- Encabezado -->
        <div class="letter-header">
          <div class="letter-date">${LETTER_CONFIG.date}</div>
          <div class="letter-to">${LETTER_CONFIG.to}</div>
        </div>

        <!-- Cuerpo -->
        <div class="letter-body" id="letter-body-text"></div>

        <!-- Firma -->
        <div class="letter-signature">
          <div class="letter-signature-label">${LETTER_CONFIG.signatureLabel}</div>
          <div class="letter-signature-name" id="letter-sig"></div>
        </div>

        <!-- Decoración -->
        <div class="letter-deco">${LETTER_CONFIG.decoration}</div>

        <!-- Botón -->
        <button class="letter-continue-btn">${LETTER_CONFIG.continueText}</button>

        <!-- Sello de cera -->
        <div class="letter-seal">💕</div>
      </div>
    `;
  }

  /* ── Abrir la carta ──────────────────────────────────────── */

  /**
   * Muestra la carta con animación.
   * @param {Function} onClose - Callback cuando el usuario cierra la carta
   */
  function open(onClose) {
    if (!overlay) init();
    if (isOpen) return;
    isOpen    = true;
    onCloseCb = onClose;

    // Reiniciar texto
    const bodyEl = overlay.querySelector('#letter-body-text');
    const sigEl  = overlay.querySelector('#letter-sig');
    if (bodyEl) bodyEl.textContent = '';
    if (sigEl)  sigEl.textContent  = '';

    // Mostrar overlay
    overlay.classList.add('visible');

    // Pausar audio del VN ligeramente
    AudioEngine.reduceBGMVolume(0.2, 800);

    // Escribir el texto
    if (LETTER_CONFIG.typewriterEffect) {
      setTimeout(() => {
        typewriteText(bodyEl, LETTER_CONFIG.body, () => {
          // Al terminar el cuerpo, escribir la firma
          setTimeout(() => {
            if (sigEl) sigEl.textContent = LETTER_CONFIG.signature;
          }, 400);
        });
      }, 600);
    } else {
      if (bodyEl) bodyEl.textContent  = LETTER_CONFIG.body;
      if (sigEl)  sigEl.textContent   = LETTER_CONFIG.signature;
    }
  }

  /* ── Cerrar la carta ─────────────────────────────────────── */

  function close() {
    if (!overlay || !isOpen) return;

    overlay.classList.remove('visible');
    isOpen = false;

    // Restaurar volumen del BGM
    AudioEngine.reduceBGMVolume(0.45, 1000);

    // Llamar al callback después de la animación
    setTimeout(() => {
      if (onCloseCb) {
        onCloseCb();
        onCloseCb = null;
      }
    }, 900);
  }

  /* ── Typewriter para la carta ────────────────────────────── */

  function typewriteText(el, text, onComplete) {
    if (!el) { if (onComplete) onComplete(); return; }

    let i = 0;
    el.classList.add('typing');

    const tick = () => {
      if (i >= text.length) {
        el.classList.remove('typing');
        if (onComplete) onComplete();
        return;
      }
      el.textContent += text[i];
      i++;

      // Scroll automático mientras escribe
      const card = overlay.querySelector('.letter-card');
      if (card) card.scrollTop = card.scrollHeight;

      // Pausa extra en saltos de línea
      const delay = text[i - 1] === '\n'
        ? LETTER_CONFIG.typewriterSpeed * 8
        : LETTER_CONFIG.typewriterSpeed;

      setTimeout(tick, delay);
    };

    tick();
  }

  /* ── API pública ─────────────────────────────────────────── */
  return { init, open, close };

})();