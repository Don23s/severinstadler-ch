(function() {
  'use strict';

  var LANGS = ['de', 'fr', 'it', 'en'];
  var DEFAULT_LANG = 'de';
  var STORAGE_KEY = 'ss_lang';

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    var browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return LANGS.indexOf(browser) !== -1 ? browser : DEFAULT_LANG;
  }

  function get(obj, path) {
    return path.split('.').reduce(function(o, k) { return o && o[k]; }, obj);
  }

  function applyTranslations(data) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = get(data, key);
      if (val === undefined) return;
      if (el.getAttribute('data-i18n-html') !== null) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-href]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-href');
      var val = get(data, key);
      if (val) el.setAttribute('href', val);
    });
  }

  function setLang(lang, data) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations(data);
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function loadAndApply(lang) {
    fetch('/assets/i18n/' + lang + '.json?v=1')
      .then(function(r) { return r.json(); })
      .then(function(data) { setLang(lang, data); })
      .catch(function(e) {
        if (lang !== DEFAULT_LANG) loadAndApply(DEFAULT_LANG);
      });
  }

  function buildSwitcher() {
    var nav = document.querySelector('nav .nav-links');
    if (!nav) return;
    var switcher = document.createElement('div');
    switcher.className = 'lang-switcher sans';
    LANGS.forEach(function(l) {
      var btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.dataset.lang = l;
      btn.textContent = l.toUpperCase();
      btn.setAttribute('aria-label', 'Language ' + l);
      btn.addEventListener('click', function() { loadAndApply(l); });
      switcher.appendChild(btn);
    });
    nav.appendChild(switcher);
  }

  document.addEventListener('DOMContentLoaded', function() {
    buildSwitcher();
    loadAndApply(detectLang());
  });
})();
