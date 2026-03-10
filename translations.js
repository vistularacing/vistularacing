// =================== TRANSLATIONS ===================
const TRANSLATIONS = {
  // ---- HOME ----
  hero_badge: {
    pl: 'SIMRACING TEAM · POLAND · EST. 2022',
    en: 'SIMRACING TEAM · POLAND · EST. 2022'
  },
  hero_sub: {
    pl: 'PRECISION · PERFORMANCE · PASSION',
    en: 'PRECISION · PERFORMANCE · PASSION'
  },
  btn_join: { pl: 'DOŁĄCZ DO ZESPOŁU', en: 'JOIN THE TEAM' },
  btn_story: { pl: 'NASZA HISTORIA', en: 'OUR STORY' },
  stat_drivers: { pl: 'Kierowcy', en: 'Drivers' },
  stat_wins: { pl: 'Wygrane', en: 'Race Wins' },
  stat_podiums: { pl: 'Podia', en: 'Podiums' },
  stat_champ: { pl: 'Mistrzostwo', en: 'Championship' },

  // ---- LIVERIES ----
  liv_label: { pl: '// MALOWANIA ZESPOŁU', en: '// TEAM LIVERIES' },
  liv_title: { pl: 'NASZE MALOWANIA', en: 'OUR LIVERIES' },
  liv_hint: {
    pl: 'Najedź na malowanie, aby zobaczyć dynamiczne podświetlenie i szczegóły.',
    en: 'Hover over a livery to see dynamic highlighting and details.'
  },

  // ---- ABOUT ----
  about_label: { pl: '// NASZA HISTORIA', en: '// OUR HISTORY' },
  about_title: { pl: 'KIM JESTEŚMY', en: 'WHO WE ARE' },
  about_vrt_title: { pl: 'VISTULA RACING TEAM', en: 'VISTULA RACING TEAM' },
  about_vrt_p1: {
    pl: 'Vistula Racing Team to profesjonalny polski zespół simracingowy, którego korzenie sięgają nocnych sesji na Discordzie i publicznych serwerów Assetto Corsy w <strong style="color:var(--text)">2022 roku</strong>. Od garażowego podziemia, przez dramat nazewniczy ery Rot4tion, po twardy endurance – przeszliśmy drogę, którą pokonują tylko ci, którzy naprawdę chcą wygrywać.',
    en: 'Vistula Racing Team is a professional Polish sim racing team whose roots go back to late-night Discord sessions and public Assetto Corsa servers in <strong style="color:var(--text)">2022</strong>. From garage underground, through the naming drama of the Rot4tion era, to hardcore endurance – we walked a path that only those who truly want to win can handle.'
  },
  about_vrt_p2: {
    pl: 'Dziś Vistula Racing to <strong style="color:var(--text)">15 kierowców</strong>, flota GT3 i Hypercar, starty w międzynarodowej lidze <strong style="color:var(--text)">HEC</strong>, tytuł Drużynowego Mistrza Polski WEC, własne oprogramowanie <strong style="color:var(--blue)">Vistula Labs</strong> i sponsor <strong style="color:#ff6a1a;">Simline.eu</strong>. Nie jesteśmy wynikiem szczęścia – jesteśmy wynikiem buntu przeciwko amatorce.',
    en: 'Today, Vistula Racing is <strong style="color:var(--text)">15 drivers</strong>, a fleet of GT3 and Hypercar machines, competing in the international <strong style="color:var(--text)">HEC</strong> league, Polish WEC Team Champions, creators of <strong style="color:var(--blue)">Vistula Labs</strong> software, and backed by <strong style="color:#ff6a1a;">Simline.eu</strong>. We are not a product of luck – we are a product of rebellion against mediocrity.'
  },
  about_phil_title: { pl: 'NASZA FILOZOFIA', en: 'OUR PHILOSOPHY' },
  about_phil_p1: {
    pl: 'Z pasji, twardych danych i własnego kodu powstają mistrzowie. Wierzymy, że simracing to prawdziwy sport – wymaga dyscypliny, precyzji i nieustannego rozwoju. W Vistula Racing łączymy rywalizację z budowaniem społeczności, gdzie każdy kierowca ma szansę się rozwinąć.',
    en: 'Champions are born from passion, hard data, and custom code. We believe sim racing is a real sport – it demands discipline, precision, and relentless progress. At Vistula Racing, we combine competition with building a community where every driver has a chance to grow.'
  },
  about_phil_p2: {
    pl: 'Nasze podejście opiera się na <strong style="color:var(--text)">analizie danych</strong> – budujemy własne narzędzie <strong style="color:var(--blue)">Vistula Labs</strong> do optymalizacji setupów, korzystamy ze strategii pit-stopowych i zaawansowanej telemetrii. Akademia z żelaznym rygorem (75% tempa liderów = bilet do składu głównego) jest kuźnią nowych talentów. Atmosfera fair play i wzajemny szacunek to fundamenty każdego sukcesu.',
    en: 'Our approach is built on <strong style="color:var(--text)">data analysis</strong> – we\'re developing our own <strong style="color:var(--blue)">Vistula Labs</strong> tool for setup optimization, advanced pit strategies, and deep telemetry insights. Our Academy has an iron rule (75% of leaders\' pace = ticket to the main roster) and serves as a talent forge. Fair play and mutual respect are the foundation of every success.'
  },
  timeline_title: { pl: 'OŚ CZASU', en: 'TIMELINE' },

  // Timeline items
  tl_2022_y: { pl: '2022', en: '2022' },
  tl_2022: {
    pl: '<strong>Garażowe korzenie.</strong> Nocne sesje na Discordzie i „upalanie" Assetto Corsy na publicznych serwerach. Bez struktur, bez oficjalnych barw – napędzani jedynie surową pasją do wyścigów. To wtedy wykuł się fundament dzisiejszej ekipy: grupa ludzi, którzy mieli dość jeżdżenia bez celu.',
    en: '<strong>Garage roots.</strong> Late-night Discord sessions and hammering Assetto Corsa on public servers. No structure, no official colors – driven purely by raw passion for racing. This is where the foundation of today\'s crew was forged: a group of people who were tired of driving without purpose.'
  },
  tl_2023_y: { pl: '2023', en: '2023' },
  tl_2023: {
    pl: '<strong>Era Rot4tion – rok wielkiego rozłamu.</strong> Ambicje stworzenia profesjonalnego teamu rozbiły się o naming. <em>Rotation Race? Rot4tion Race? RRracing?</em> Kłótnie o logo spalały więcej energii niż treningi na torze. Projekt zapadł się pod ciężarem własnego ego, zostawiając jedną bezcenną lekcję: <strong style="color:var(--text)">nazwa nie wygrywa wyścigów – robią to ludzie i ich wzajemny szacunek.</strong>',
    en: '<strong>The Rot4tion Era – year of the great split.</strong> Ambitions to create a pro team crashed against naming drama. <em>Rotation Race? Rot4tion Race? RRracing?</em> Arguments about the logo burned more energy than track practice. The project collapsed under its own ego, leaving one priceless lesson: <strong style="color:var(--text)">a name doesn\'t win races – people and mutual respect do.</strong>'
  },
  tl_2024q12_y: { pl: '2024 · Q1–Q2', en: '2024 · Q1–Q2' },
  tl_2024q12: {
    pl: '<strong>Epizod WEFC.</strong> Zespół spróbował sił w lidze F1 24 pod szyldem <strong>Worldwide Endurance Formula Championship</strong>. Trzy miesiące walki z ograniczeniami gry pokazały jedno: ich miejsce jest w twardym endurance, a nie w półśrodkach.',
    en: '<strong>The WEFC Episode.</strong> The team tried its hand in the F1 24 league under the <strong>Worldwide Endurance Formula Championship</strong> banner. Three months of fighting game limitations showed one thing: their place is in hardcore endurance, not half-measures.'
  },
  tl_2024q4_y: { pl: '2024 · Q4', en: '2024 · Q4' },
  tl_2024q4: {
    pl: '<strong>Endu Racers – Projekt Widmo.</strong> Michał Czajkowski i Jakub Kardas odpalili projekt, który miał być nowym otwarciem. Brak stabilności sprawił, że ER stało się „projektem widmo". Byli o krok od poddania się, ale to właśnie ten marazm stał się <strong style="color:var(--text)">zapalnikiem do ostatecznej transformacji.</strong>',
    en: '<strong>Endu Racers – The Ghost Project.</strong> Michał Czajkowski and Jakub Kardas launched a project meant to be a fresh start. Lack of stability turned ER into a "ghost project." They were one step from giving up, but this stagnation became the <strong style="color:var(--text)">spark for the ultimate transformation.</strong>'
  },
  tl_jul25_y: { pl: '15 Lipca 2025', en: 'July 15, 2025' },
  tl_jul25: {
    pl: '<strong style="color:#ffd700">Oficjalne powołanie Vistula Racing Team.</strong> Koniec z amatorką i powrót do korzeni endurance z nową energią. Marka VRT powstaje oficjalnie.',
    en: '<strong style="color:#ffd700">Official founding of Vistula Racing Team.</strong> No more amateur hour – a return to endurance roots with new energy. The VRT brand is officially born.'
  },
  tl_aug25_y: { pl: '1 Sierpnia 2025', en: 'August 1, 2025' },
  tl_aug25: {
    pl: '<strong>Chrzest bojowy – Qatar 6h.</strong> VRT oficjalnie zadebiutowało na torze. <strong style="color:var(--text)">Michał Czajkowski, Jakub Kardas</strong> oraz <strong style="color:var(--text)">Krystian Ogorzelski</strong> stanęli na starcie morderczego wyścigu. Teoretyczne założenia zespołu zostały zweryfikowane przez realną, sześciogodzinną walkę na dystansie.',
    en: '<strong>Baptism by fire – Qatar 6h.</strong> VRT officially debuted on track. <strong style="color:var(--text)">Michał Czajkowski, Jakub Kardas</strong> and <strong style="color:var(--text)">Krystian Ogorzelski</strong> took the start of a grueling race. The team\'s theoretical foundations were tested by a real six-hour battle on distance.'
  },
  tl_sep25_y: { pl: 'Wrzesień 2025', en: 'September 2025' },
  tl_sep25: {
    pl: 'Nawiązanie współpracy z <strong>KYO</strong> → <em>KYO Vistula Racing Team</em>. Uruchomienie <strong style="color:var(--text)">Akademii</strong>, która stała się kuźnią talentów i fundamentem rozwoju składu.',
    en: 'Partnership with <strong>KYO</strong> → <em>KYO Vistula Racing Team</em>. Launch of the <strong style="color:var(--text)">Academy</strong>, which became a talent forge and the foundation for roster development.'
  },
  tl_nov25_y: { pl: 'Listopad 2025', en: 'November 2025' },
  tl_nov25: {
    pl: 'Przełomowy moment – kontrakt z <strong style="color:#ff6a1a;">Simline.eu</strong>. Dzięki wsparciu i subskrypcji <strong style="color:var(--text)">RC Pro+</strong> w Le Mans Ultimate, przygotowania zespołu weszły na poziom inżynieryjny.',
    en: 'Breakthrough moment – contract with <strong style="color:#ff6a1a;">Simline.eu</strong>. With <strong style="color:var(--text)">RC Pro+</strong> subscription in Le Mans Ultimate, team preparations reached engineering-level quality.'
  },
  tl_dec25_y: { pl: 'Grudzień 2025', en: 'December 2025' },
  tl_dec25: {
    pl: 'Ustabilizowanie struktur Akademii i wprowadzenie żelaznego rygoru: <strong style="color:var(--text)">75% tempa liderów</strong> jako warunek wejścia do składu głównego. Vistula Academy staje się prawdziwą kuźnią mistrzów.',
    en: 'Academy structures stabilized with an iron rule: <strong style="color:var(--text)">75% of leaders\' pace</strong> required for main roster entry. Vistula Academy becomes a true champion forge.'
  },
  tl_jan26_y: { pl: '30 Stycznia 2026', en: 'January 30, 2026' },
  tl_jan26: {
    pl: '<strong style="color:#ffd700">🏆 Drużynowy Mistrz Polski WEC (LMU)!</strong> Załogi <strong>#77</strong>, <strong>#776</strong> i <strong>#777</strong> zdominowały krajowe podwórko, potwierdzając bezwzględną klasę Vistula Racing.',
    en: '<strong style="color:#ffd700">🏆 Polish WEC Team Champions (LMU)!</strong> Crews <strong>#77</strong>, <strong>#776</strong> and <strong>#777</strong> dominated the national stage, confirming Vistula Racing\'s absolute class.'
  },
  tl_feb26_y: { pl: '25 Lutego 2026', en: 'February 25, 2026' },
  tl_feb26: {
    pl: '<strong>Historyczny debiut w HEC – Portimão.</strong> Aston Martin Vantage GT3 „Red Dream" (#77) wygrywa Test Race. Valkyrie Hypercar zdobywa <strong style="color:var(--blue)">P2 i P4</strong>. Vistula Racing wkracza na arenę międzynarodową.',
    en: '<strong>Historic HEC debut – Portimão.</strong> Aston Martin Vantage GT3 "Red Dream" (#77) wins the Test Race. Valkyrie Hypercar takes <strong style="color:var(--blue)">P2 and P4</strong>. Vistula Racing enters the international stage.'
  },
  tl_mar26_y: { pl: '4 Marca 2026', en: 'March 4, 2026' },
  tl_mar26: {
    pl: '<strong style="color:#ffd700">Pogrom w HEC!</strong> LMGT3: <strong style="color:var(--text)">Krystian Ogorzelski P1</strong>, <strong style="color:var(--text)">Fabian Dusek P2</strong>. Hypercar: <strong style="color:var(--text)">Jakub Kardas P2</strong>, Karlo Kruhan P5 po morderczej walce. Dominacja Vistula Racing na pełnej mapie klas.',
    en: '<strong style="color:#ffd700">HEC Domination!</strong> LMGT3: <strong style="color:var(--text)">Krystian Ogorzelski P1</strong>, <strong style="color:var(--text)">Fabian Dusek P2</strong>. Hypercar: <strong style="color:var(--text)">Jakub Kardas P2</strong>, Karlo Kruhan P5 after a fierce battle. Vistula Racing dominance across all classes.'
  },
  tl_future_y: { pl: 'Nowe horyzonty', en: 'New Horizons' },
  tl_future: {
    pl: '<strong style="color:var(--blue)">Vistula Labs</strong> – autorskie oprogramowanie do analizy danych i optymalizacji setupów, na ostatniej prostej przed wdrożeniem. Jednocześnie powstaje <strong style="color:var(--text)">sekcja rajdowa</strong> w Assetto Corsa Rally i legendarnym Richard Burns Rally (RBR). Wchodzimy tam z tą samą dyscypliną, która dała nam mistrzostwo w WEC.',
    en: '<strong style="color:var(--blue)">Vistula Labs</strong> – proprietary software for data analysis and setup optimization, in final development. Simultaneously, a <strong style="color:var(--text)">rally division</strong> launches in Assetto Corsa Rally and the legendary Richard Burns Rally (RBR). We enter with the same discipline that won us the WEC championship.'
  },

  // ---- TEAM (formerly MANAGEMENT/ROSTER) ----
  nav_roster: { pl: 'TEAM', en: 'TEAM' },
  roster_label: { pl: '// ZESPÓŁ', en: '// TEAM' },
  roster_title: { pl: 'TEAM', en: 'TEAM' },
  tab_mgmt: { pl: 'ZARZĄD', en: 'MANAGEMENT' },
  tab_drivers: { pl: 'KIEROWCY', en: 'DRIVERS' },
  mgmt_desc_mc: {
    pl: 'Założyciel Vistula Racing Team. Odpowiada za infrastrukturę IT, stronę internetową oraz aktywnie uczestniczy w działaniach medialnych zespołu. Kierowca klasy LMGT3.',
    en: 'Founder of Vistula Racing Team. Responsible for IT infrastructure, the website, and actively participates in team media activities. LMGT3 class driver.'
  },
  mgmt_desc_jk: {
    pl: 'Współzałożyciel zespołu i dyrektor programu Vistula Academy. Aktywny kierowca Hypercar #777 – debiut HEC Portimão 25.02.2026, wynik P2/P4 na Aston Martin Valkyrie. Wspiera media i rozwój młodych talentów.',
    en: 'Co-founder and Vistula Academy program director. Active Hypercar #777 driver – HEC debut Portimão 25.02.2026, P2/P4 result in Aston Martin Valkyrie. Supports media and young talent development.'
  },
  mgmt_desc_gz: {
    pl: 'Team Principal odpowiedzialny za strategię, decyzje operacyjne i reprezentację zespołu na arenie ligowej WEC / HEC.',
    en: 'Team Principal responsible for strategy, operational decisions, and team representation in WEC / HEC leagues.'
  },
  mgmt_desc_ko: {
    pl: 'Odpowiada za setup samochodów i taktykę wyścigową. Za kierownicą #77 Aston Martin Vantage GT3 „Red Dream" wygrał Test Race HEC w Portimão oraz debiut Porsche 963.',
    en: 'Responsible for car setups and race tactics. Behind the wheel of #77 Aston Martin Vantage GT3 "Red Dream," won the HEC Test Race at Portimão and the Porsche 963 debut.'
  },
  mgmt_desc_kk: {
    pl: 'Kierowca Hypercar Aston Martin Valkyrie #777 – debiut HEC Portimão P2/P4. Odpowiada za content video i komunikację medialną Vistula Racing.',
    en: 'Hypercar Aston Martin Valkyrie #777 driver – HEC Portimão debut P2/P4. Responsible for video content and media communications at Vistula Racing.'
  },
  mgmt_desc_md: {
    pl: 'Twórca contentu i materiałów graficznych dla Vistula Racing w mediach społecznościowych i kanałach komunikacji zewnętrznej.',
    en: 'Content and graphics creator for Vistula Racing across social media and external communications channels.'
  },
  mgmt_desc_bb: {
    pl: 'Produkcja materiałów wideo, relacje i stream z wyścigów Vistula Racing na platformach streamingowych i social media.',
    en: 'Video production, race coverage, and streaming of Vistula Racing events on streaming platforms and social media.'
  },
  mgmt_role_ko: { pl: 'SETUP & TAKTYKI', en: 'SETUP & TACTICS' },
  mgmt_role_kk: { pl: 'MEDIA & KIEROWCA', en: 'MEDIA & DRIVER' },

  // ---- ACADEMY ----
  acad_label: { pl: '// PROGRAM SZKOLENIOWY', en: '// TRAINING PROGRAM' },
  acad_hero: { pl: 'TWOJA DROGA DO PROFESJONALNEGO SIMRACINGU', en: 'YOUR PATH TO PROFESSIONAL SIM RACING' },
  acad_desc: {
    pl: 'Vistula Academy to kompleksowy program szkoleniowy dla kierowców z potencjałem. Oferujemy coaching, dostęp do analiz telemetrii, sesje z doświadczonymi kierowcami głównego składu oraz ścieżkę awansu do pełnoprawnego teamdrivera.',
    en: 'Vistula Academy is a comprehensive training program for drivers with potential. We offer coaching, access to telemetry analysis, sessions with experienced main roster drivers, and a pathway to becoming a full team driver.'
  },
  acad_req: { pl: '📋 WYMAGANIA', en: '📋 REQUIREMENTS' },
  acad_r1: { pl: 'Minimalny SR 3.0 na iRacing', en: 'Minimum SR 3.0 on iRacing' },
  acad_r2: { pl: 'iRating 1500+ (klasa GT)', en: 'iRating 1500+ (GT class)' },
  acad_r3: { pl: 'Regularne uczestnictwo w treningach', en: 'Regular participation in practice sessions' },
  acad_r4: { pl: 'Znajomość etykiety wyścigowej', en: 'Knowledge of racing etiquette' },
  acad_r5: { pl: 'Wiek 16+', en: 'Age 16+' },
  acad_offer: { pl: '🚀 CO OFERUJEMY', en: '🚀 WHAT WE OFFER' },
  acad_o1: { pl: 'Indywidualny coaching by doświadczeni kierowcy', en: 'Individual coaching by experienced drivers' },
  acad_o2: { pl: 'Dostęp do analiz telemetrycznych (MoTeC)', en: 'Access to telemetry analysis (MoTeC)' },
  acad_o3: { pl: 'Tygodniowe sesje treningowe', en: 'Weekly training sessions' },
  acad_o4: { pl: 'Starty w Academy League', en: 'Academy League race entries' },
  acad_o5: { pl: 'Ścieżka awansu do Pro Team', en: 'Pathway to Pro Team promotion' },
  acad_stages: { pl: '📈 ETAPY PROGRAMU', en: '📈 PROGRAM STAGES' },
  acad_s1: { pl: 'Rekrutacja', en: 'Recruitment' },
  acad_s1d: { pl: 'Zgłoszenie, test laptime, rozmowa kwalifikacyjna', en: 'Application, laptime test, qualifying interview' },
  acad_s2: { pl: 'Program 3-miesięczny', en: '3-Month Program' },
  acad_s2d: { pl: 'Treningi, coaching, pierwsze starty w Academy', en: 'Training, coaching, first Academy race entries' },
  acad_s3: { pl: 'Ewaluacja', en: 'Evaluation' },
  acad_s3d: { pl: 'Ocena postępów, decyzja o awansie', en: 'Progress assessment, promotion decision' },
  acad_s4: { pl: 'Pro Team', en: 'Pro Team' },
  acad_s4d: { pl: 'Pełnoprawny kierowca Vistula Racing', en: 'Full Vistula Racing team driver' },

  // ---- HALL OF FAME ----
  hof_label: { pl: '// OSIĄGNIĘCIA', en: '// ACHIEVEMENTS' },
  hof_stats_wins: { pl: 'WYGRANE WYŚCIGI', en: 'RACE WINS' },
  hof_stats_podium: { pl: 'PODIUM', en: 'PODIUMS' },
  hof_stats_starts: { pl: 'STARTY', en: 'STARTS' },
  hof_stats_titles: { pl: 'TYTUŁY', en: 'TITLES' },
  hof_trophies_label: { pl: 'WYGRANE WYŚCIGI – TROFEA', en: 'RACE WINS – TROPHIES' },

  // ---- JOIN US ----
  join_label: { pl: '// REKRUTACJA', en: '// RECRUITMENT' },
  join_hint: { pl: 'Masz to, czego szukamy? Dołącz do Vistula Racing.', en: 'Got what it takes? Join Vistula Racing.' },
  join_req_title: { pl: '✅ PODSTAWOWE WYMAGANIA', en: '✅ BASIC REQUIREMENTS' },
  join_r1: { pl: 'Aktywne konto iRacing z co najmniej 6 miesiącami stażu', en: 'Active iRacing account with at least 6 months experience' },
  join_r2: { pl: 'SR 3.5+ oraz iRating odpowiedni do klasy', en: 'SR 3.5+ and class-appropriate iRating' },
  join_r3: { pl: 'Własny sprzęt (kierownica + pedały)', en: 'Own hardware (wheel + pedals)' },
  join_r4: { pl: 'Discord i mikrofon – komunikacja jest kluczowa', en: 'Discord and microphone – communication is key' },
  join_r5: { pl: 'Regularność – min. 2 treningi tygodniowo', en: 'Consistency – min. 2 practice sessions per week' },
  join_r6: { pl: 'Sportowe podejście i szacunek do rywali', en: 'Sportsmanship and respect for rivals' },
  join_contact: { pl: '📬 KONTAKT', en: '📬 CONTACT' },
  join_form_title: { pl: '🏁 FORMULARZ REKRUTACYJNY', en: '🏁 RECRUITMENT FORM' },
  join_name: { pl: 'IMIĘ I NICK', en: 'NAME & NICKNAME' },
  join_email: { pl: 'EMAIL', en: 'EMAIL' },
  join_class: { pl: 'KLASA DOCELOWA', en: 'TARGET CLASS' },
  join_class_choose: { pl: '– wybierz –', en: '– select –' },
  join_ir: { pl: 'iRATING / SR', en: 'iRATING / SR' },
  join_about: { pl: 'O SOBIE', en: 'ABOUT YOURSELF' },
  join_submit: { pl: 'WYŚLIJ ZGŁOSZENIE', en: 'SUBMIT APPLICATION' },
  join_success_title: { pl: 'ZGŁOSZENIE PRZYJĘTE!', en: 'APPLICATION RECEIVED!' },
  join_success_text: {
    pl: 'Dziękujemy za zainteresowanie! Skontaktujemy się z Tobą w ciągu 48h. Tymczasem dołącz do naszego Discorda!',
    en: 'Thank you for your interest! We will contact you within 48h. In the meantime, join our Discord!'
  },

  // ---- PITWALL ----
  pw_access: { pl: 'PITWALL ACCESS', en: 'PITWALL ACCESS' },
  pw_restricted: { pl: 'RESTRICTED — TEAM PERSONNEL ONLY', en: 'RESTRICTED — TEAM PERSONNEL ONLY' },
  pw_login_label: { pl: 'LOGIN', en: 'LOGIN' },
  pw_pass_label: { pl: 'HASŁO', en: 'PASSWORD' },
  pw_login_btn: { pl: 'ZALOGUJ SIĘ', en: 'LOG IN' },

  // ---- FOOTER ----
  footer_text: {
    pl: '© 2026 VISTULA RACING TEAM · POLAND · <span style="color:var(--blue)">PRECISION · PERFORMANCE · PASSION</span>',
    en: '© 2026 VISTULA RACING TEAM · POLAND · <span style="color:var(--blue)">PRECISION · PERFORMANCE · PASSION</span>'
  }
};

// =================== LANGUAGE SWITCH ===================
let currentLang = localStorage.getItem('vr-lang') || 'pl';

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('vr-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      // Check if element is input/textarea/select — use placeholder/value
      if (el.tagName === 'OPTION') {
        el.textContent = TRANSLATIONS[key][lang];
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = TRANSLATIONS[key][lang];
      } else {
        el.innerHTML = TRANSLATIONS[key][lang];
      }
    }
  });

  // Update toggle button appearance
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.innerHTML = lang === 'pl'
      ? '<span class="lang-flag">🇬🇧</span> EN'
      : '<span class="lang-flag">🇵🇱</span> PL';
  }
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      switchLanguage(currentLang === 'pl' ? 'en' : 'pl');
    });
  }
  // Apply saved language
  if (currentLang !== 'pl') {
    switchLanguage(currentLang);
  }
});
