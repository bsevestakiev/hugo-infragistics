(function () {
  'use strict';

  var nav = document.getElementById('mega-nav');
  if (!nav) return;

  var items = Array.prototype.slice.call(nav.querySelectorAll('.has-mega, .has-dropdown'));

  function getPanel(item) {
    return item.querySelector('.mega-panel, .dropdown-panel');
  }

  function getToggle(item) {
    return item.querySelector('.nav-toggle');
  }

  function openItem(item) {
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

  // ── Desktop: aria-expanded tracks CSS :hover via mouseenter/leave ─────────
  // Visual open/close is handled entirely by CSS :hover — no JS timing issues.

  items.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (isMobile()) return;
      // Close any sibling open from mobile click
      items.forEach(function (other) {
        if (other !== item) closeItem(other);
      });
      openItem(item);
    });

    item.addEventListener('mouseleave', function () {
      if (isMobile()) return;
      closeItem(item);
    });
  });

  // ── Mobile: click to toggle ───────────────────────────────────────────────

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
      if (open) {
        closeItem(open);
        var toggle = getToggle(open);
        if (toggle) toggle.focus();
      }
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

})();
