(function () {
  'use strict';

  var nav = document.getElementById('mega-nav');
  if (!nav) return;

  var items = Array.prototype.slice.call(nav.querySelectorAll('.has-mega, .has-dropdown'));

  // ── position panels via JS (position:fixed, immune to CSS cascade) ────────

  function positionPanel(item) {
    var panel = getPanel(item);
    var toggle = getToggle(item);
    if (!panel || !toggle) return;

    var btnRect = toggle.getBoundingClientRect();

    if (panel.classList.contains('mega-panel')) {
      // Full-width: stretch across viewport, top flush under the header row
      var header = document.querySelector('header[role="banner"]');
      var top = header ? header.getBoundingClientRect().bottom : btnRect.bottom;
      panel.style.top = top + 'px';
      // left/right already 0 via CSS

    } else {
      // Dropdown: align left edge with button, top flush under it
      panel.style.top  = btnRect.bottom + 'px';
      panel.style.left = btnRect.left   + 'px';
    }
  }

  // ── helpers ───────────────────────────────────────────────────────────────

  function getPanel(item) {
    return item.querySelector('.mega-panel, .dropdown-panel');
  }

  function getToggle(item) {
    return item.querySelector('.nav-toggle');
  }

  function openItem(item) {
    positionPanel(item);
    var panel = getPanel(item);
    var toggle = getToggle(item);
    item.classList.add('is-open');
    if (panel) panel.setAttribute('aria-hidden', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function closeItem(item) {
    var panel = getPanel(item);
    var toggle = getToggle(item);
    item.classList.remove('is-open');
    if (panel) panel.setAttribute('aria-hidden', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function isMobile() {
    return window.innerWidth < 992;
  }

  // ── Desktop: hover open / delayed close to prevent flicker ──────────────

  var closeTimer = null;

  items.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (isMobile()) return;
      clearTimeout(closeTimer);
      items.forEach(function (other) { if (other !== item) closeItem(other); });
      openItem(item);
    });

    item.addEventListener('mouseleave', function () {
      if (isMobile()) return;
      closeTimer = setTimeout(function () { closeItem(item); }, 400);
    });
  });

  // ── Mobile: click toggle ──────────────────────────────────────────────────

  items.forEach(function (item) {
    var toggle = getToggle(item);
    if (!toggle) return;

    toggle.addEventListener('click', function (e) {
      if (!isMobile()) return;
      e.stopPropagation();
      var isOpen = item.classList.contains('is-open');
      items.forEach(closeItem);
      if (!isOpen) openItem(item);
    });
  });

  // ── Keyboard ─────────────────────────────────────────────────────────────

  nav.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var open = nav.querySelector('.has-mega.is-open, .has-dropdown.is-open');
      if (open) { closeItem(open); var t = getToggle(open); if (t) t.focus(); }
    }
  });

  items.forEach(function (item) {
    var toggle = getToggle(item);
    if (!toggle) return;
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var isOpen = item.classList.contains('is-open');
        items.forEach(closeItem);
        if (!isOpen) openItem(item);
      }
    });
  });

  // ── Outside click (mobile) ────────────────────────────────────────────────

  document.addEventListener('click', function (e) {
    if (!isMobile()) return;
    if (!nav.contains(e.target)) items.forEach(closeItem);
  });

  // ── Reposition on resize ──────────────────────────────────────────────────

  window.addEventListener('resize', function () {
    var open = nav.querySelector('.has-mega.is-open, .has-dropdown.is-open');
    if (open) positionPanel(open);
  });

})();
