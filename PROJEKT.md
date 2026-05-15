# Projekt: severinstadler.ch – Migration von Wix zu eigenem HTML

## Ziel
Statische HTML-Website aufbauen, die ohne Wix-Abhängigkeit auf einem einfachen Hosting läuft.
Vollständige Kontrolle über Inhalt, Design und Deployment.

## Status
- [x] Inhalte von Wix-Seite extrahiert und in /content/ abgelegt
- [x] Projekte-Sektion angelegt (Sublingua, Fizzi & the Prof!)
- [ ] Fizzi & the Prof! – Inhalte vervollständigen (→ content/projekte/fizzi-und-der-prof.md)
- [ ] HTML-Grundstruktur erstellen
- [ ] CSS-Design aufbauen
- [ ] Seiten: index.html, kommunikation.html, politik.html, projekte.html
- [ ] Domain umzeigen (DNS weg von Wix)
- [ ] Hosting einrichten

## Projektstruktur

```
01_Webseite/
├── PROJEKT.md              ← diese Datei
├── content/                ← alle Texte als Markdown
│   ├── start.md
│   ├── kommunikation.md
│   ├── politik.md
│   ├── meta.md
│   └── projekte/
│       ├── uebersicht.md
│       ├── sublingua.md
│       └── fizzi-und-der-prof.md
├── html/                   ← fertige HTML-Seiten
│   ├── index.html
│   ├── kommunikation.html
│   ├── politik.html
│   ├── projekte.html
│   ├── sublingua.html
│   └── fizzi-und-der-prof.html
└── assets/
    ├── images/             ← Bilder
    └── style.css           ← Haupt-CSS
```

## Seiten
| Seite | Content-Quelle | HTML-Datei |
|-------|---------------|-----------|
| Start / Über mich | content/start.md | html/index.html |
| Kommunikation | content/kommunikation.md | html/kommunikation.html |
| Politik | content/politik.md | html/politik.html |
| Projekte (Übersicht) | content/projekte/uebersicht.md | html/projekte.html |
| Sublingua | content/projekte/sublingua.md | html/sublingua.html |
| Fizzi & the Prof! | content/projekte/fizzi-und-der-prof.md | html/fizzi-und-der-prof.html |

## Hosting-Optionen (einfach & günstig)
1. **GitHub Pages** – kostenlos, direkt aus Git-Repo, HTTPS inklusive
2. **Netlify** – kostenlos-Tier, automatisches Deploy aus Git
3. **Infomaniak** – Schweizer Anbieter, ab ~3 CHF/Mt, datenschutzkonform
4. **Cyon** – Schweizer Anbieter, ab ~5 CHF/Mt

**Empfehlung:** GitHub Pages (kostenlos, einfach, eigene Domain möglich)

## DNS-Migration (wenn bereit)
1. Wix-Abo kündigen (erst NACH DNS-Umzug)
2. DNS A-Record / CNAME auf neuen Host umzeigen
3. SSL-Zertifikat beim neuen Host aktivieren
4. Wix-Seite deaktivieren

## Git-Repo
Lokal initialisiert in diesem Ordner.
Remote: GitHub (empfohlen für GitHub Pages Hosting)
