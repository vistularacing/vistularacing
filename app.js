// =================== NAVIGATION ===================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  navLinks.forEach(a => a.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  const link = document.querySelector(`.nav-links a[data-section="${id}"]`);
  if (link) link.classList.add('active');
  window.scrollTo(0, 0);
  if (id === 'hof') initHofAnimation();
  if (id === 'pitwall') checkAuth();
  if (id === 'about') initTimelineAnimation();
}

navLinks.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const sec = a.dataset.section;
    showSection(sec);
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Logo click → home
const logoEl = document.getElementById('vr-logo-img');
if (logoEl) {
  logoEl.style.cursor = 'pointer';
  logoEl.addEventListener('click', () => showSection('home'));
}

// Hamburger
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Hero buttons
document.querySelectorAll('[data-goto]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    showSection(el.dataset.goto);
  });
});

// =================== LIVERIES ===================
// HEC liveries (first group)
const hecLiveries = [
  {
    name: 'Aston Martin Vantage GT3',
    nickname: '"Red Dream"',
    cls: 'GT3 · HEC',
    img: 'images/livery_red_dream.png',
    color: '#cc1a1a',
    glow: 'rgba(204,26,26,0.75)',
    accent: '#5a0000',
    label: 'Red Dream',
    debut: '25.02.2026 – Portimão',
    result: '🏆 Debiut zwycięski – Test Race HEC',
    drivers: 'Krystian Ogorzelski',
    car: 'Aston Martin Vantage 2025',
    number: '#77',
    hue: 0,
    league: 'HEC'
  },
  {
    name: 'Porsche 992 GT3',
    nickname: '"Pink Dream"',
    cls: 'GT3 · HEC',
    img: 'images/livery_pink_dream.png',
    color: '#d966d6',
    glow: 'rgba(217,102,214,0.75)',
    accent: '#5a005a',
    label: 'Pink Dream',
    debut: 'Brak oficjalnego debiutu',
    result: '– Do ligi HEC',
    drivers: 'Fabian Dusek',
    car: 'Porsche 992 GT3 2025',
    number: '#77',
    hue: 300,
    league: 'HEC'
  },
  {
    name: 'Aston Martin Valkyrie',
    nickname: '"Hypercar"',
    cls: 'Hypercar · HEC',
    img: 'images/livery_valkyrie.png',
    color: '#1a7fd4',
    glow: 'rgba(26,127,212,0.8)',
    accent: '#002a5a',
    label: 'Blue Storm',
    debut: '25.02.2026 – Portimão',
    result: '🥈 P2 & P4 – Debiut HEC Hypercar',
    drivers: 'Karlo Kruhan / Jakub Kardas',
    car: 'Aston Martin Valkyrie 2025',
    number: '#777',
    hue: 200,
    league: 'HEC'
  },
];

// Free / non-league liveries
const freeLiveries = [
  {
    name: 'BMW M4 GT3',
    nickname: '"Thunder"',
    cls: 'GT3 · Thunder Liveries',
    img: 'images/livery_bmw_thunder.png',
    color: '#00e600',
    glow: 'rgba(0,230,0,0.75)',
    accent: '#003300',
    label: 'Thunder',
    debut: 'Nigdy nie ujrzał toru',
    result: '⚡ Ostatnia z linii Thunder Liveries',
    drivers: 'Brak kierowców',
    car: 'BMW M4 GT3 2025',
    number: '–',
    hue: 120,
    league: null
  },
  {
    name: 'Cadillac V.Series.R',
    nickname: '"Red Soul"',
    cls: 'Hypercar · Concept',
    img: 'images/livery_cadillac_redsoul.png',
    color: '#cc0000',
    glow: 'rgba(204,0,0,0.8)',
    accent: '#3a0000',
    label: 'Red Soul',
    debut: 'Le Mans 12h (wyścig odwołany)',
    result: '❌ Zastąpiony przez Porsche 963',
    drivers: '–',
    car: 'Cadillac V.Series.R Hypercar',
    number: '#77',
    hue: 0,
    league: null
  },
  {
    name: 'Porsche 963',
    nickname: '"Blawhite & Blue"',
    cls: 'Hypercar · WEC',
    img: 'images/livery_porsche963.jpg',
    color: '#2288ff',
    glow: 'rgba(34,136,255,0.8)',
    accent: '#001a44',
    label: 'Blawhite & Blue',
    debut: '28.02.2026 – Le Mans 21h',
    result: '🏁 Debiut malowania na Le Mans 21h',
    drivers: 'Krystian Ogorzelski / Jakub Kardas / Przemek Fabiś / Michał Czajkowski',
    car: 'Porsche 963 Hypercar',
    number: '#777',
    hue: 210,
    league: null
  },
];

function createLiveryCard(lv) {
  const card = document.createElement('div');
  card.className = 'livery-card';
  card.innerHTML = `
    <div class="livery-preview" style="background:linear-gradient(160deg,#08080f,${lv.accent});box-shadow:inset 0 0 50px ${lv.glow};overflow:hidden;position:relative;">
      <img src="${lv.img}" alt="${lv.name} ${lv.nickname}" class="livery-img"/>
      <div class="livery-badge-num" style="color:${lv.color};text-shadow:0 0 10px ${lv.glow};">${lv.number}</div>
      <div class="livery-badge-cls" style="color:${lv.color};">${lv.cls}</div>
    </div>
    <div class="livery-info" style="padding:20px;">
      <div class="livery-name" style="color:${lv.color};font-size:1rem;">${lv.name} <span style="color:${lv.color};opacity:.8;font-size:.85rem;">${lv.nickname}</span></div>
      <div style="margin-top:12px;display:flex;flex-direction:column;gap:6px;">
        <div style="font-size:.78rem;color:var(--text-dim);display:flex;gap:8px;"><span style="color:${lv.color}">📅</span> ${lv.debut}</div>
        <div style="font-size:.78rem;color:var(--text-dim);display:flex;gap:8px;"><span style="color:${lv.color}">🏁</span> ${lv.result}</div>
        <div style="font-size:.78rem;color:var(--text-dim);display:flex;gap:8px;"><span style="color:${lv.color}">👤</span> ${lv.drivers}</div>
      </div>
    </div>`;
  card.addEventListener('mouseenter', () => {
    document.documentElement.style.setProperty('--blue', lv.color);
    document.documentElement.style.setProperty('--blue-glow', lv.glow);
    card.style.borderColor = lv.color;
    card.style.boxShadow = `0 0 40px ${lv.glow}`;
    // Logo: apply color tint matching livery
    const logo = document.getElementById('vr-logo-img');
    if (logo) logo.style.filter = `brightness(1.3) sepia(1) saturate(6) hue-rotate(${lv.hue}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    document.documentElement.style.setProperty('--blue', '#0af');
    document.documentElement.style.setProperty('--blue-glow', 'rgba(0,170,255,0.5)');
    card.style.borderColor = '';
    card.style.boxShadow = '';
    const logo = document.getElementById('vr-logo-img');
    if (logo) logo.style.filter = 'brightness(1.1)';
  });
  return card;
}

function renderLiveries() {
  const grid = document.getElementById('livery-grid');
  grid.innerHTML = '';

  // HEC Section header
  const hecHeader = document.createElement('div');
  hecHeader.className = 'livery-section-header';
  hecHeader.innerHTML = `<div class="livery-section-badge">HEC — Hypercar Endurance Championship</div>`;
  grid.appendChild(hecHeader);

  const hecGrid = document.createElement('div');
  hecGrid.className = 'livery-subgrid';
  hecLiveries.forEach(lv => hecGrid.appendChild(createLiveryCard(lv)));
  grid.appendChild(hecGrid);

  // Free liveries section
  const freeHeader = document.createElement('div');
  freeHeader.className = 'livery-section-header';
  freeHeader.innerHTML = `<div class="livery-section-badge livery-section-badge--free">Pozostałe Malowania — Concept / Thunder</div>`;
  grid.appendChild(freeHeader);

  const freeGrid = document.createElement('div');
  freeGrid.className = 'livery-subgrid';
  freeLiveries.forEach(lv => freeGrid.appendChild(createLiveryCard(lv)));
  grid.appendChild(freeGrid);

  // Outdated liveries section (empty, collapsible)
  const outdatedHeader = document.createElement('div');
  outdatedHeader.className = 'livery-section-header livery-outdated-toggle';
  outdatedHeader.innerHTML = `
    <div class="livery-section-badge livery-section-badge--outdated" id="outdated-toggle">
      <span>⚠ Outdated Liveries</span>
      <span class="outdated-chevron" id="outdated-chevron">▼</span>
    </div>`;
  grid.appendChild(outdatedHeader);

  const outdatedGrid = document.createElement('div');
  outdatedGrid.id = 'outdated-grid';
  outdatedGrid.className = 'livery-subgrid livery-outdated-content';
  outdatedGrid.innerHTML = `<div class="livery-empty-msg">Brak archiwalnych malowań do wyświetlenia.</div>`;
  outdatedGrid.style.display = 'none';
  grid.appendChild(outdatedGrid);

  document.getElementById('outdated-toggle').addEventListener('click', () => {
    const og = document.getElementById('outdated-grid');
    const ch = document.getElementById('outdated-chevron');
    const isHidden = og.style.display === 'none';
    og.style.display = isHidden ? 'block' : 'none';
    ch.textContent = isHidden ? '▲' : '▼';
  });
}
renderLiveries();


// =================== ABOUT TIMELINE ANIMATION ===================
function initTimelineAnimation() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity .6s ${i * 0.15}s ease, transform .6s ${i * 0.15}s ease`;
  });
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateX(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => obs.observe(item));
}


// =================== HALL OF FAME ===================
function initHofAnimation() {
  const revealEls = document.querySelectorAll(
    '.hof-champ-banner, .hof-stat, .hof-entry, .hof-trophy-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealEls.forEach(el => observer.observe(el));

  // Animate stat counters
  document.querySelectorAll('.hof-count').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    let started = false;
    const startCounter = () => {
      if (started) return;
      started = true;
      const step = Math.max(1, Math.ceil(target / 40));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 40);
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) startCounter(); });
    });
    obs.observe(el);
  });
}


// =================== AUTH ===================
let isLoggedIn = false;

function checkAuth() {
  const loginBox = document.getElementById('login-box');
  const dashboard = document.getElementById('admin-dashboard');
  if (isLoggedIn) {
    loginBox.style.display = 'none';
    dashboard.style.display = 'block';
    updateAdminDashboard();
  } else {
    loginBox.style.display = 'block';
    dashboard.style.display = 'none';
  }
}

function updateAdminDashboard() {
  const timeEl = document.getElementById('admin-time');
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toLocaleString('pl-PL');
  }
}

document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value;
  const err = document.getElementById('login-err');
  if (user === 'Admin' && pass === 'Admin') {
    isLoggedIn = true;
    err.style.display = 'none';
    checkAuth();
  } else {
    err.style.display = 'block';
    err.textContent = '⚠ Nieprawidłowy login lub hasło';
    document.getElementById('login-pass').value = '';
  }
});

document.getElementById('logout-btn').addEventListener('click', () => {
  isLoggedIn = false;
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  checkAuth();
});

// =================== JOIN FORM ===================
document.getElementById('join-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('join-form-inner').style.display = 'none';
  document.getElementById('join-success').style.display = 'block';
});

// =================== HERO COUNTER ANIMATION ===================
function animateCounters() {
  document.querySelectorAll('.count-up').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + (el.dataset.suffix || '');
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}
animateCounters();

// =================== INIT ===================
showSection('home');
