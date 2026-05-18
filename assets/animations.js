(function() {
  'use strict';

  // ── Scroll-Reveal ──────────────────────────────────────────
  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

  document.querySelectorAll('[data-reveal]').forEach(function(el) {
    revealObserver.observe(el);
  });

  // ── Stagger-Reveal ─────────────────────────────────────────
  var staggerObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

  document.querySelectorAll('[data-stagger]').forEach(function(el) {
    staggerObserver.observe(el);
  });

  // ── Hero Parallax ──────────────────────────────────────────
  var heroBild = document.querySelector('.hero-split .hero-bild img');
  if (heroBild) {
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          var scrolled = window.scrollY;
          var shift = Math.min(scrolled * 0.12, 40);
          heroBild.style.transform = 'translateY(' + shift + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
