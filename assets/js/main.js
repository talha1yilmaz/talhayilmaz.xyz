/* ==========================================================================
   main.js — Tema, okuma süresi, TOC aktif bölüm, BibTeX kopyalama
   ========================================================================== */

(function () {
  'use strict';

  // --- Theme Toggle ---
  const html = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored) {
    html.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.theme-toggle');
    if (!btn) return;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });

  // Update all theme toggle button labels on load
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.textContent = html.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    });
  });

  // --- Mobile Nav Toggle ---
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.mobile-toggle');
    if (!btn) return;
    const nav = document.querySelector('.nav-links');
    if (nav) nav.classList.toggle('open');
  });

  // --- BibTeX Toggle ---
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-bibtex-toggle]');
    if (!btn) return;
    e.preventDefault();
    const id = btn.getAttribute('data-bibtex-toggle');
    const box = document.getElementById(id);
    if (box) box.classList.toggle('open');
  });

  // --- BibTeX Copy ---
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-bibtex-copy]');
    if (!btn) return;
    e.preventDefault();
    const id = btn.getAttribute('data-bibtex-copy');
    const box = document.getElementById(id);
    if (!box) return;
    navigator.clipboard.writeText(box.textContent.trim()).then(function () {
      const orig = btn.textContent;
      btn.textContent = '✓ Kopyalandı';
      setTimeout(function () { btn.textContent = orig; }, 2000);
    });
  });

  // --- Sidebar TOC Active Section (Scroll Spy) ---
  document.addEventListener('DOMContentLoaded', function () {
    const toc = document.querySelector('.sidebar-toc');
    if (!toc) return;

    const links = toc.querySelectorAll('a[href^="#"]');
    if (!links.length) return;

    const sections = [];
    links.forEach(function (link) {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) sections.push({ link: link, el: el });
    });

    function updateActive() {
      var current = null;
      var scrollY = window.scrollY + 100;
      for (var i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.offsetTop <= scrollY) {
          current = sections[i];
          break;
        }
      }
      links.forEach(function (l) { l.classList.remove('active'); });
      if (current) current.link.classList.add('active');
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  });

  // --- Reading Time Calculator ---
  document.addEventListener('DOMContentLoaded', function () {
    var body = document.querySelector('.article-body');
    var el = document.getElementById('reading-time');
    if (!body || !el) return;
    var words = body.textContent.trim().split(/\s+/).length;
    var mins = Math.ceil(words / 200);
    el.textContent = mins + ' dk okuma';

    var wc = document.getElementById('word-count');
    if (wc) wc.textContent = words.toLocaleString('tr-TR') + ' kelime';
  });

})();
