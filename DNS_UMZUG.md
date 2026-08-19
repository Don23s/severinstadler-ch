# DNS-Umzug: Wix → GitHub Pages
Stand: 2026-05-31 | Ziel: severinstadler.ch live auf GitHub Pages

---

## Voraussetzungen (bereits erledigt)
- [x] GitHub Repo: `https://github.com/Don23s/severinstadler-ch`
- [x] CNAME-Datei: `www.severinstadler.ch`
- [x] Website-Files committed

---

## Schritt 1 — GitHub Pages aktivieren
1. Öffne: `https://github.com/Don23s/severinstadler-ch/settings/pages`
2. Source: **Deploy from a branch**
3. Branch: **main** / Root
4. Klick **Save**
5. GitHub zeigt nach ~2 Min: "Your site is live at https://don23s.github.io/severinstadler-ch"

---

## Schritt 2 — Custom Domain in GitHub Pages eintragen
1. Auf derselben Settings → Pages Seite
2. Feld "Custom domain": `www.severinstadler.ch` eingeben
3. Klick **Save**
4. "Enforce HTTPS" aktivieren (erst möglich nach DNS-Umzug)

---

## Schritt 3 — DNS beim Provider umstellen
DNS-Provider herausfinden: Wo ist severinstadler.ch registriert? (Infomaniak / Namecheap / Wix Domains?)

### A-Records setzen (apex domain: severinstadler.ch)
Bestehende A-Records löschen, diese 4 setzen:
```
@ A 185.199.108.153
@ A 185.199.109.153
@ A 185.199.110.153
@ A 185.199.111.153
```

### CNAME setzen (www)
```
www CNAME don23s.github.io
```

---

## Schritt 4 — Propagation abwarten
- Dauer: 15 Min bis 24 Std (meistens <1 Std)
- Testen: `https://www.severinstadler.ch` im Browser öffnen
- Prüfen: Kein Wix-Banner mehr sichtbar

---

## Schritt 5 — HTTPS aktivieren
1. GitHub Settings → Pages → "Enforce HTTPS" → aktivieren
2. Seite via HTTPS testen

---

## Schritt 6 — Wix kündigen
**Erst kündigen wenn:**
- [x] Website auf GitHub Pages live und erreichbar
- [x] HTTPS aktiv
- [x] Alle Links funktionieren

Wix kündigen: Wix Dashboard → Abonnement → Kündigen

---

## Schritt 7 — Newsletter aktivieren (nach Substack-Setup)
1. Substack-Account erstellen: https://substack.com
2. In `index.html` Zeile mit `SUBSTACK_URL` suchen
3. Ersetzen durch: `https://[dein-name].substack.com/embed`
4. Commit + Push → GitHub Pages deployed automatisch
