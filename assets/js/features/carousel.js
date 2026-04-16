/**
 * Carousel — overrides theme's carousel.js to add explicit autoplay support.
 * Splide (JS + CSS) is injected dynamically on first use.
 */
/* global Splide */
import scrollspy from '../utils/scrollspy';

let splideLoadPromise = null;
function loadSplide() {
  if (splideLoadPromise) return splideLoadPromise;

  splideLoadPromise = new Promise((resolve) => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/assets/css/splide.min.css';
    document.head.appendChild(css);

    const js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = '/assets/js/splide.min.js';
    js.addEventListener('load', resolve);
    document.body.appendChild(js);
  });

  return splideLoadPromise;
}

class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    loadSplide().then(() => this.init());
  }

  init() {
    this.initI18n();
    this.initCarousel();
  }

  initI18n() {
    Splide.defaults = {
      i18n: window.i18n.carousel
    };
  }

  initCarousel() {
    const splide = new Splide(this.carousel).mount();
    this.eventsCarousel(splide);
    this.startAutoplay(splide);
  }

  startAutoplay(splide) {
    // Explicitly start autoplay if configured — theme's mount() alone doesn't always trigger it
    const config = splide.options || {};
    if (config.autoplay) {
      splide.on('mounted', () => {
        const autoplay = splide.Components && splide.Components.Autoplay;
        if (autoplay) autoplay.play();
      });
      // Also try immediately in case 'mounted' already fired
      const autoplay = splide.Components && splide.Components.Autoplay;
      if (autoplay) autoplay.play();
    }
  }

  eventsCarousel(splide) {
    splide.on('click', (slide, e) => {
      if (e.pointerType === 'mouse') splide.go(slide.index);
    });
  }
}

const carousels = document.querySelectorAll('.js-carousel');
carousels.forEach((carousel) => {
  scrollspy(carousel, () => new Carousel(carousel));
});
