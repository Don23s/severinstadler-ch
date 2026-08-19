# Persönliche Webseite Severin Stadler — CLAUDE.md

## Projekt-Übersicht
Persönliche Website von Severin Stadler unter `severinstadler.ch` / `www.severinstadler.ch`.
Ursprünglich auf Wix, migriert zu einer statischen HTML/CSS-Seite mit voller Kontrolle über
Inhalt, Design und Deployment. Enthält u.a. persönliche Inhalte (Politik/"Solidarischer
Liberalismus", Kommunikation) sowie Projektvorstellungen (SubLingua, Fizzi & The Prof).

## Themen / Scope
- Statische Seiten: `index.html`, `politik.html`, `kommunikation.html`, `projekte.html`,
  `manifest.html`, `haltungskompass.html`, `transparenz.html`, `bildung.html`, `demokratie.html`,
  `gesundheit.html`, `wohnen.html`, `kontakt.html`, `impressum.html`, `sublingua.html`,
  `fizzi-und-der-prof.html`, `fizzi-lernkonzept.html`, `404.html`
- Content-Rohtexte als Markdown in `content/` (Quelle für die HTML-Seiten)
- Design/Assets in `assets/`, Fotos in `Fotos/`
- `drafts/` — Entwürfe vor Übernahme in die Live-Seiten (siehe globale CLAUDE.md-Regel "Große
  Outputs zuerst in /drafts/, dann Review")
- SEO/Meta: `robots.txt`, `sitemap.xml`, `favicon.svg`

## Setup
- **Tech-Stack:** Statisches HTML/CSS, kein Build-Step, kein Framework
- **Lokal öffnen:** HTML-Dateien direkt im Browser öffnen, oder einfacher lokaler Server
  (z.B. `python3 -m http.server`) im Projektordner
- **Deployment:** GitHub Pages, Repo `github.com/Don23s/severinstadler-ch`, Branch `main`,
  Custom Domain `www.severinstadler.ch` (CNAME-Datei bereits im Repo)
- **Offene Frage:** `html/`-Unterordner existiert laut `PROJEKT.md`-Plan noch als Referenz, die
  tatsächlich live genutzten Seiten liegen aber im Root — `PROJEKT.md` ist in Teilen (Status-Checkboxen,
  Projektstruktur-Baum) nicht mehr ganz deckungsgleich mit dem aktuellen Stand (z.B. sind laut Git-Log
  bereits CSS View Transitions und mehrere zusätzliche Seiten wie `manifest.html`/`haltungskompass.html`
  live, die in `PROJEKT.md` nicht auftauchen). `PROJEKT.md`/`DNS_UMZUG.md` nicht blind als aktuellen
  Status vertrauen, sondern bei Bedarf gegen den echten Dateibestand/Git-Log verifizieren.

## Abhängigkeiten zu anderen Projekten
- **05_Sol_Liberalismus:** Inhaltlich vernetzt (Politik-/Manifest-Seiten dieser Website transportieren
  Inhalte aus dem Sol.-Liberalismus-Projekt)
- **06_Fizzi_Prof, 03_SubLingua:** Diese Website verlinkt/stellt beide Projekte vor
  (`fizzi-und-der-prof.html`, `sublingua.html`), ohne Code oder Infrastruktur zu teilen
- **02_GmbH_Gruendung:** Kein direkter Bezug — dies ist Severins persönliche Seite, nicht die
  GmbH-Website (das ist `13_AtelierGamma_Website`)
- Keine geteilten Credentials/Domains/Infrastruktur mit anderen Projekten im Ordner bekannt
  (eigenes GitHub-Repo, eigene Domain)

## Status
Aktiv. Laut Git-Log zuletzt CSS View Transitions/Slide-Animationen ausgebaut (Juni 2026).
Laut `DEPLOYMENT_GUIDE.md`/`CEO_BRIEF.md` (Stand Ende Mai/Anfang Juni) galt GitHub Pages + DNS-Umzug
als "bereit, nur DNS fehlt" — ob der DNS-Umzug inzwischen tatsächlich vollzogen wurde (Seite unter
`www.severinstadler.ch` live statt auf Wix), ist aus den vorhandenen Dateien nicht zweifelsfrei
ersichtlich und sollte bei Bedarf verifiziert werden (z.B. per `/browse`-Skill oder DNS-Lookup).
