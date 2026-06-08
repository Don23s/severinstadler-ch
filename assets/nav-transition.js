(function () {
  // Seitenhierarchie: 0 = Index, 1 = Hauptseiten, 2 = Unterseiten
  const DEPTH = {
    'index.html': 0, '/': 0, '': 0,
    'politik.html': 1, 'manifest.html': 1, 'kommunikation.html': 1,
    'projekte.html': 1, 'kontakt.html': 1, 'transparenz.html': 1,
    'bildung.html': 2, 'demokratie.html': 2, 'gesundheit.html': 2,
    'haltungskompass.html': 2, 'wohnen.html': 2,
    'sublingua.html': 2, 'fizzi-und-der-prof.html': 2, 'fizzi-lernkonzept.html': 2,
    'impressum.html': 2,
  };

  // Nav-Reihenfolge (links = 0, rechts = höherer Index)
  const NAV_ORDER = [
    'index.html', 'politik.html', 'manifest.html',
    'kommunikation.html', 'projekte.html', 'kontakt.html',
  ];

  function filename(href) {
    const p = new URL(href, location.href).pathname;
    return p.split('/').pop() || 'index.html';
  }

  function getDepth(f) {
    return DEPTH[f] ?? 1;
  }

  function getNavPos(f) {
    const i = NAV_ORDER.indexOf(f);
    return i === -1 ? 999 : i;
  }

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http')) return;

    const fromFile = filename(location.href);
    const toFile   = filename(href);
    if (fromFile === toFile) return;

    const fromDepth = getDepth(fromFile);
    const toDepth   = getDepth(toFile);

    let direction;
    if (toDepth > fromDepth) {
      direction = 'forward';   // tiefer gehen → von rechts
    } else if (toDepth < fromDepth) {
      direction = 'backward';  // höher gehen → von links
    } else {
      // gleiche Ebene → Nav-Position entscheidet
      direction = getNavPos(toFile) > getNavPos(fromFile) ? 'forward' : 'backward';
    }

    document.documentElement.dataset.navDir = direction;
  });
})();
