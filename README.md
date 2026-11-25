# Vistula Racing — strona zespołu

Statyczna strona (Firebase Hosting). Źródło prawdy: `index.html` (PL) + dane w `data/`.

## Komendy
| Komenda | Co robi |
|---|---|
| `npm install` | instaluje narzędzia (esbuild, sharp, jsdom, puppeteer-core) |
| `npm run build` | buduje `app.bundle.js`, generuje `en/index.html`, fallback `<noscript>` i `sitemap.xml` |
| `npm run check` | waliduje dane, linki, CSS, pliki obrazów oraz kontrast tokenów kolorów |
| `npm run smoke` | test jsdom: PL i EN renderują wszystkie sekcje bez błędów JS |
| `npm run assets:build` | generuje AVIF/WebP + `data/image-manifest.js` |
| `npm run assets:brand` | generuje `og-image.jpg` i ikony |
| `npm start` | lokalny serwer http://127.0.0.1:4173 |
| `npm run audit:ui` | audyt w Chrome: układ 360–2560 px, axe (też z dialogami), klawiatura, `file://`, reduced-motion. Chrome: `CHROME_PATH` albo `npx @puppeteer/browsers install chrome@stable` |
| `./deploy.sh` | build + check + `firebase deploy` |

## Jak uzupełniać treści (bez zmian w kodzie)
- **Kalendarz / klasyfikacje:** `data/season.js` — dodaj rundy (`calendar`) i wiersze (`standings`). Najbliższa runda i licznik pojawią się same.
- **Transmisje:** `data/streams.js` — kanały (`streamChannels`) i filmy YouTube (`streamVideos`, 11-znakowe `youtubeId`).
- **Aktualności:** sekcja bierze najnowsze wpisy z historii (`data/site.js`, wpisy z `machineDate`). Tłumaczenie EN: `data/site.en.js` (te same `id`).
- **Rekrutacja:** `data/site.js` → `recruitment`. Formularz otwiera e-mail do `contact.email` (brak backendu).
- **Analityka (opcjonalnie):** `data/site.js` → `analytics.plausibleDomain`. Domyślnie wyłączona.
- **Teksty statyczne EN:** pary PL→EN w `scripts/build-site.mjs` (build przerywa się, gdy tekst z `index.html` zmieni się i para przestanie pasować).

## Układ strony i style
- `styles/tokens.css` to jedyne miejsce z kolorami, skalą typografii, odstępami i warstwami. Komponenty używają tylko zmiennych.
- Każda sekcja ma `data-theme="ink|navy|paper|mist"` (czerń, granat, biel, jasny błękit). Zmiana motywu sekcji to zmiana tego jednego atrybutu.
- Pliki: `fonts.css`, `tokens.css`, `base.css`, `components.css`, `sections.css`, `motion.css` (animacje). Bez `@layer`, `@container` i nestingu CSS: parser w `npm run check` ich nie obsługuje.
- Sekcje Sezon i Transmisje są ukryte, dopóki `data/season.js` i `data/streams.js` nie mają danych.
- Animacje: `styles/motion.css` (wejście hero, parallax, pasek postępu historii, dialogi) i `js/motion.js` (odsłanianie sekcji, liczniki, płynna zmiana auta). Przy `prefers-reduced-motion` nic się nie rusza, a treść jest od razu widoczna.
- `Ctrl/Cmd+K` otwiera wyszukiwarkę (sekcje, auta, kierowcy). Dane bierze z `data/`, więc nowe wpisy pojawiają się same.

## Uwagi
- Po zmianie `index.html` zawsze `npm run build` (generuje wersję EN).
- CSP jest w `firebase.json`; nowe zewnętrzne domeny trzeba tam dopisać.
