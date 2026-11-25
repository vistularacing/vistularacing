# Uzupełnij — brakujące dane Vistula Racing

Wpisz odpowiedzi po `ODP:`. Nie wiesz → zostaw puste albo napisz `NIE WIEM`. Potem przeniosę to do `data/`.

---

## 1. Sezon 2026 — kalendarz (sekcja „Sezon" ukryta, bo pusto)
Dla każdej rundy (przeszłe i przyszłe):

| Pole | Przykład |
|---|---|
| Data | 2026-10-17 |
| Godzina startu (PL) | 19:00 |
| Wydarzenie | HEC Round 5 |
| Seria | HEC |
| Tor | Spa |
| Czas trwania | 6H |
| Klasy | Hypercar, LMGT3 |
| Link do wyników | |
| Link do streamu | |
| Nasz wynik | P1 LMGT3 |

ODP:
```
Runda 1:
Runda 2:
...
```

## 2. Klasyfikacje
Seria / klasa / pozycja / załoga / punkty (np. HEC / LMGT3 / 1 / Ogorzelski / 250)

ODP:
```

```

## 3. Transmisje
- Kanał YouTube (URL):
- Kanał Twitch (URL):
- Filmy: tytuł + ID YouTube (11 znaków po `v=`) + data

ODP:
```

```

## 4. Rekord zespołu
Obecnie: 18 wygranych, 27 podiów, 2 mistrzostwa, liczba wyścigów = brak.
- Aktualne wygrane / podia / mistrzostwa:
- Liczba wyścigów:

ODP:

## 5. Kierowcy (31 osób)
Dla każdego (kto ma dane, reszta zostaje „Brak danych"):
narodowość · starty · wygrane · podia · pole position · mistrzostwa · krótka kariera (rok+tytuł+opis) · ulubione auto · galeria zdjęć

Dodatkowo:
- Numery LMP2/LMP3 Michała Czajkowskiego (dziś „TBA"):
- Zdjęcia „showcase" (wycięcie) mają tylko 3 osoby — dla kogo dostarczysz resztę?
- Pisownia: **Fabiś** czy **Fabis** (w danych oba)?
- Czy lista 31 kierowców jest aktualna (kto odszedł / doszedł)? Wspomniany jest też Borys Biłobran (VVES) — dodać?

ODP:
```
Imię Nazwisko: narodowość / starty / wygrane / podia / pole / tytuły / ulubione auto
```

## 6. Auta (18 konfiguracji)
Dla każdego: numer (777 czy 397?), sezony, kierowcy, starty/wygrane/podia/pole, najlepsze wyniki, ważne momenty, malowania, krótki opis.
- Które numery/malowania są oficjalnie potwierdzone?
- Przypisanie kierowców i race engineerów do konkretnych entry:

ODP:
```

```

## 7. Osiągnięcia
- Mistrzostwo HEC i Team WEC/LMU: składy, auto, szczegółowy wynik:
- Linki źródłowe (np. Instagram) do wygranych: São Paulo 6H, Imola 6H, Spa 6H, Barcelona 4H LMP2 i innych:
- Oficjalne zdjęcia 4 wyróżnionych zwycięstw (ścieżki/pliki):
- Czy są inne wygrane/podia do dodania?

ODP:
```

```

## 8. Partnerzy
- Rola Instant Gaming w partnerstwie (opis 1–2 zdania):
- Opisy, logo i adresy www: KYO, Simline.eu, Instant Gaming:
- Inni partnerzy / sponsorzy?

ODP:
```

```

## 9. Galeria
Do każdego zdjęcia w `assets/gallery/` (13 plików): wydarzenie, tor, auto, czy zdjęcie prawdziwe czy render/AI?

ODP:
```

```

## 10. Rekrutacja
- Status: otwarta / zamknięta / wkrótce / TBA:
- Data następnego naboru:
- Programy (HY, LMP2, LMGT3…):
- Gdzie aplikować (Discord, e-mail, formularz)? Backendu nie ma, formularz otwiera e-mail.

ODP:

## 11. Zarząd i kontakt
- Grzegorz Zelga (Team Principal): zdjęcie? profil? opis?
- Potwierdź: e-mail `Vistularacing@gmail.com`, Discord, Instagram, TikTok — OK?
- Dodać YouTube / Twitch / X / Facebook?

ODP:

## 12. Techniczne
- Analityka Plausible: włączyć? domena:
- Własna domena zamiast `vistularacingteam.web.app`?
- `privacy.html`: nazwa administratora danych + e-mail kontaktowy:
- `vistula_ai_engine.py` (analiza telemetrii MoTeC/LMU) leży w katalogu strony — usunąć z repo, przenieść, czy pokazać jako projekt na stronie (Vistula Labs)?
- Nowe treści: tłumaczyć na angielski automatycznie (ja) czy podasz własne?

ODP:

## 13. Inne pomysły
Rzeczy, które chcesz dodać (sklep, aktualności, sekcja Labs/Race Control/RaceGuard, VVES, rajdy, wideo w hero…):

ODP:

---

## 10. Przebudowa 2026-11-16 — do uzupełnienia (nowe sekcje)
Treści poniżej wygenerowałem z istniejących danych; **potwierdź lub popraw**:
- **Vistula Vision Series**: data startu sezonu, kalendarz, klasy, zasady, link do regulaminu/zapisów? (dziś: prolog Fuji 18.09.2026, „sezon TBA”).
- **Vision Performance (Racing Team)**: opis, data partnerstwa, logo (plik), strona/link, zakres współpracy. (dziś: tylko tekst „Sezon 2026”).
- **VRS Racecontrol**: lista funkcji, etap, data bety/premiery, screeny UI, logo, link zapisu na betę. (dziś: sekcja „W produkcji” + przykładowa tablica).
- **Zarząd**: czy lista w `data/site.js` jest pełna (Czajkowski, Kardas, Zelga, Ogorzelski, Kocięda, Fabiś, Fraser)? Role + zdjęcia dla osób bez zdjęcia (Zelga).
- **Hall of Fame**: Ogorzelski i Fabiś — daty, dodatkowe osiągnięcia, lepsze zdjęcia; czy dodać kolejnych legend (np. Dusek, Kardas)?
- Czy Ogorzelski/Fabiś zostają też w liście aktywnych kierowców i w Zarządzie?
- Usunięto z roster: McGuire, Okrzesik, Krzywda, Stuglik, Białczyk, Burek, Kosa, Wąś, Ciecierski (pliki zdjęć w `assets/drivers/` zostały — usunąć?).
- Wpis „Prolog Fuji” nie wymienia już Charliego McGuire’a i Borysa Biłobrana (zwycięzcy) — wpisz nowych zwycięzców, jeśli chcesz.

- Podia Monza 6H (2× P3) i Bahrain 8H (P2, P3): brak dat i zdjęć; klasy (Hypercar dla Porsche 963, LMGT3 dla BMW M4 GT3 i Porsche 992 GT3) przyjęte z opisu. Czy podbić licznik podiów w `site.record`?
