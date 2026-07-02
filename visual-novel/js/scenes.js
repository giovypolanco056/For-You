/* ================================================================
   SCENES.JS
   Controlador de escenas - orquesta todos los sistemas.
================================================================ */

const ScenesController = (() => {

  let currentSceneIndex = -1;
  let isTransitioning   = false;
  let isRunning         = false;

  function init() {}

  async function nextScene() {
    if (isTransitioning) return;

    currentSceneIndex++;

    if (currentSceneIndex >= SCENES.length) {
      console.log('[ScenesController] All scenes completed');
      return;
    }

    await loadScene(SCENES[currentSceneIndex]);
  }

  async function loadScene(scene) {
    isTransitioning = true;
    console.log(`[ScenesController] Loading scene: ${scene.id}`);

    if (scene.musicShift) {
      AudioEngine.playBGM(scene.musicShift, { fade: true });
    }

    if (scene.background) {
      BackgroundSystem.transitionTo(scene.background);
    }

    if (scene.sprite) {
      await CharacterEngine.transitionToScene(scene.sprite, scene.position || 'center');
    }

    if (scene.effects && scene.effects.length > 0) {
      for (const effectKey of scene.effects) {
        if (effectKey !== 'fade_to_black') {
          EffectsEngine.triggerEffect(effectKey);
        }
      }
    }

    isTransitioning = false;

    DialogEngine.loadLines(scene.dialog, () => {

      if (scene.isFinalScene) {
        handleFinalScene();

      } else if (scene.showLetter) {
        // ── Mostrar la carta antes de continuar ──────────
        DialogEngine.hideBox();
        setTimeout(() => {
          LetterEngine.open(() => {
            nextScene();
          });
        }, 400);

      } else {
        nextScene();
      }
    });
  }

  async function handleFinalScene() {
    const fadeScreen = document.getElementById('vn-fade-screen');
    if (!fadeScreen) return;

    const fadeText = document.createElement('p');
    fadeText.className = 'vn-fade-text';
    fadeText.textContent = '...';
    fadeScreen.appendChild(fadeText);

    fadeScreen.classList.remove('vn-hidden');
    AudioEngine.fadeOutBGM(2500);

    requestAnimationFrame(() => {
      fadeScreen.classList.add('fading');
    });

    // ── Tras la pantalla en negro, revelar la biblioteca ──────
    setTimeout(() => {
      if (window.LibraryEngine) LibraryEngine.reveal();
    }, 3200);
  }

  async function triggerInterruption() {
    isRunning = true;
    const layer = document.getElementById('vn-layer');

    AudioEngine.reduceBGMVolume(0.15, TIMING_CONFIG.musicFadeDuration);
    await sleep(TIMING_CONFIG.musicFadeDuration * 0.6);

    if (layer) layer.classList.remove('vn-hidden');
    if (layer) layer.classList.add('active');

    EffectsEngine.triggerGlitch(TIMING_CONFIG.glitchDuration);
    await sleep(TIMING_CONFIG.glitchDuration / 2);

    await EffectsEngine.freezeScreen(TIMING_CONFIG.freezeDuration);

    BackgroundSystem.activateVNOverlay();
    BackgroundSystem.initBackground();

    await sleep(400);

    const skipBtn = document.getElementById('vn-skip-btn');
    if (skipBtn) {
      skipBtn.classList.remove('vn-hidden');
      skipBtn.addEventListener('click', skipAll);
    }

    await sleep(TIMING_CONFIG.characterEnterDelay);
    await nextScene();
  }

  function skipAll() {
    console.log('[ScenesController] Skipping entire VN');
    DialogEngine.stop();
    const fadeScreen = document.getElementById('vn-fade-screen');
    if (fadeScreen) {
      fadeScreen.classList.remove('vn-hidden');
      AudioEngine.fadeOutBGM(1500);
      requestAnimationFrame(() => {
        fadeScreen.classList.add('fading');
      });
      setTimeout(() => {
        if (window.LibraryEngine) LibraryEngine.reveal();
      }, 2000);
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return {
    init,
    triggerInterruption,
    nextScene,
    skipAll,
    get currentSceneIndex() { return currentSceneIndex; },
    get isRunning() { return isRunning; },
  };

})();