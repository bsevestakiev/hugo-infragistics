/* eslint-disable no-undef */
module.exports = {
    plugins: {
      autoprefixer: {},
      cssnano: {
        preset: 'default'
      },
      '@fullhuman/postcss-purgecss': {
        mode: 'all',
        content: ['./hugo_stats.json'],
        dynamicAttributes: [
          'aria-current',
          'aria-hidden',
          'aria-expanded',
          'href',
          'role',
          'type'
        ],
        safelist: {
          standard: [
            'show',
            'showing',
            'hide',
            'fade',
            /-backdrop$/,
            /^is-/,
            /^splide_/,
            /^mega-item--/,
            'offcanvas-header-custom',
            'btn-close-offcanvas',
            'offcanvas-sales-bar',
            'cookie-consent',
            'cookie-consent-title',
            'cookie-consent-actions',
            'btn-cookie-accept',
            'btn-cookie-refuse',
            'js-cookie-consent',
            'js-cookie-consent-accept',
            'js-cookie-consent-refuse',
            'js-banner',
            'js-banner-close'
          ],
          deep: [/^tobii/]
        },
        defaultExtractor: (content) => {
          let els = JSON.parse(content).htmlElements;
          els = els.tags.concat(els.classes);
          return els;
        }
      }
    }
  };
  