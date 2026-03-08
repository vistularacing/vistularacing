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
    img: 'livery_red_dream.png',
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
    img: 'livery_pink_dream.png',
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
    img: 'livery_valkyrie.png',
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
    img: 'livery_bmw_thunder.png',
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
    img: 'livery_cadillac_redsoul.png',
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
    img: 'livery_porsche963.jpg',
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
  // Timeline items
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

  // About cards reveal
  const aboutCards = document.querySelectorAll('.about-desc-card');
  aboutCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.2}s`;
  });
  const cardObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        cardObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  aboutCards.forEach(card => cardObs.observe(card));
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
    initPitwall();
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

  const btn = document.getElementById('join-btn');
  if (btn) {
    btn.dataset.orgText = btn.textContent;
    btn.textContent = 'WYSYŁANIE...';
    btn.disabled = true;
  }

  const templateParams = {
    name: document.getElementById('join-name').value,
    email: document.getElementById('join-email').value,
    class: document.getElementById('join-class').value,
    irating: document.getElementById('join-irating').value,
    about: document.getElementById('join-about').value,
  };

  if (typeof emailjs !== 'undefined') {
    // You will need to replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID_JOIN
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID_JOIN", templateParams)
      .then(() => {
        document.getElementById('join-form-inner').style.display = 'none';
        document.getElementById('join-success').style.display = 'block';
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert('Błąd wysyłania zgłoszenia. Kod błędu w konsoli.');
        if (btn) {
          btn.textContent = btn.dataset.orgText;
          btn.disabled = false;
        }
      });
  } else {
    // Fallback if EmailJS is not configured
    document.getElementById('join-form-inner').style.display = 'none';
    document.getElementById('join-success').style.display = 'block';
  }
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

// =================== ROSTER TABS ===================
document.querySelectorAll('.roster-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.roster-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    document.querySelectorAll('.roster-view').forEach(v => {
      v.style.display = 'none';
      v.classList.remove('active-view');
    });
    
    const targetId = tab.dataset.rosterTarget;
    const targetView = document.getElementById(targetId);
    if (targetView) {
      targetView.style.display = 'block';
      // simple reflow for animation
      void targetView.offsetWidth;
      targetView.classList.add('active-view');
      
      // Trigger animations for the opened tab
      if (targetId === 'roster-drivers') {
        initDriverAnimations();
      }
    }
  });
});

// =================== DRIVERS ROSTER ANIMATIONS ===================
function initDriverAnimations() {
  const driverAnimElements = document.querySelectorAll('.driver-card-anim, .anim-bg-rally');
  if (driverAnimElements.length === 0) return;

  const observerOptions = {
    root: document.querySelector('.mgmt-scroll-wrap'),
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };

  const driverObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: unobserve if you only want it to animate once
        // observer.unobserve(entry.target);
      } else {
        // Remove class when scrolling out of view to re-trigger on next scroll
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  driverAnimElements.forEach(el => driverObserver.observe(el));
}

// =================== DRIVERS BIOGRAPHIES (EXPAND) ===================
document.querySelectorAll('.member-card-new').forEach(card => {
  const bio = card.querySelector('.member-extended-bio');
  const indicator = card.querySelector('.expand-indicator');
  
  if (bio && indicator) {
    // Strip inline styles that conflict with CSS transitions
    bio.style.display = '';
    bio.style.marginTop = '';
    bio.style.paddingTop = '';
    bio.style.borderTop = '';
    bio.style.opacity = '';

    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const isExpanded = card.classList.contains('is-expanded');
      
      if (isExpanded) {
        card.classList.remove('is-expanded');
        indicator.innerHTML = 'Rozwiń profil ▼';
      } else {
        card.classList.add('is-expanded');
        indicator.innerHTML = 'Zwiń profil ▲';
      }
    });
  }
});

// =================== PITWALL MODULE ===================
let pitwallInitialized = false;

// ---- Hybrid storage helpers ----
// localStorage is always primary (works everywhere incl. file://)
// Firebase syncs in background when available

function lsGet(key, def = []) {
  try { return JSON.parse(localStorage.getItem(key)) || def; } catch { return def; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// Check if Firebase/Firestore is usable (requires https or localhost)
function fbAvailable() {
  try {
    return typeof db !== 'undefined' && (
      location.protocol === 'https:' ||
      location.hostname === 'localhost' ||
      location.hostname === '127.0.0.1'
    );
  } catch { return false; }
}

function initPitwall() {
  if (pitwallInitialized) return;
  pitwallInitialized = true;

  // --- TAB SWITCHING ---
  const tabs = document.querySelectorAll('.pw-tab');
  const panels = document.querySelectorAll('.pw-panel');

  function switchPwTab(tabId) {
    tabs.forEach(t => t.classList.remove('pw-tab--active'));
    panels.forEach(p => p.classList.remove('pw-panel--active'));
    const activeTab = document.querySelector(`.pw-tab[data-pw-tab="${tabId}"]`);
    const activePanel = document.getElementById(tabId);
    if (activeTab) activeTab.classList.add('pw-tab--active');
    if (activePanel) activePanel.classList.add('pw-panel--active');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => switchPwTab(tab.dataset.pwTab));
  });
  document.querySelectorAll('.pw-quick-link').forEach(link => {
    link.addEventListener('click', () => switchPwTab(link.dataset.pwTab));
  });

  // ══════════════════════════════════════════════
  // --- ANALYTICS ---
  // ══════════════════════════════════════════════
  function recordVisit() {
    const today = new Date().toISOString().slice(0, 10);
    const visitorId = localStorage.getItem('vr_visitor_id') || ('v_' + Math.random().toString(36).substr(2, 9));
    localStorage.setItem('vr_visitor_id', visitorId);

    // Local
    const visits = lsGet('pw_visits', []);
    visits.unshift({ date: today, ts: Date.now(), visitorId, page: location.pathname });
    lsSet('pw_visits', visits.slice(0, 1000));

    // Firebase (background)
    if (fbAvailable()) {
      db.collection('visits').add({
        date: today,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        visitorId, page: location.pathname
      }).catch(() => {});
    }
  }
  recordVisit();

  function loadAnalytics() {
    const today = new Date().toISOString().slice(0, 10);
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10);
    const visits = lsGet('pw_visits', []);

    let todayCount = 0, weekCount = 0;
    const uniqueSet = new Set();
    visits.forEach(v => {
      if (v.date === today) todayCount++;
      if (v.date >= weekAgo) weekCount++;
      if (v.visitorId) uniqueSet.add(v.visitorId);
    });

    document.getElementById('pw-total-visits').textContent = visits.length;
    document.getElementById('pw-today-visits').textContent = todayCount;
    document.getElementById('pw-week-visits').textContent = weekCount;
    document.getElementById('pw-unique-visitors').textContent = uniqueSet.size;
    document.getElementById('pw-visit-count-dash').textContent = visits.length;

    const logEl = document.getElementById('pw-visit-log');
    if (visits.length === 0) {
      logEl.innerHTML = '<div style="text-align:center;color:var(--text-dim);padding:20px;font-size:.85rem">Brak odwiedzin</div>';
    } else {
      logEl.innerHTML = visits.slice(0, 30).map(v => {
        const d = new Date(v.ts).toLocaleString('pl-PL');
        return `<div style="display:flex;justify-content:space-between;padding:10px;background:rgba(0,170,255,0.05);border-radius:4px;font-size:.85rem">
          <span>👁️ Odwiedziny ${v.visitorId ? '(' + v.visitorId.substr(0, 6) + ')' : ''}</span>
          <span style="color:var(--text-dim)">${d}</span></div>`;
      }).join('');
    }
  }
  loadAnalytics();

  // ══════════════════════════════════════════════
  // --- MESSAGING ---
  // ══════════════════════════════════════════════
  const composeBox = document.getElementById('pw-compose-box');
  const msgView = document.getElementById('pw-msg-view');

  document.getElementById('pw-compose-btn').addEventListener('click', () => {
    composeBox.style.display = 'block';
    ['pw-msg-to', 'pw-msg-subject', 'pw-msg-body'].forEach(id => document.getElementById(id).value = '');
  });
  document.getElementById('pw-cancel-compose').addEventListener('click', () => {
    composeBox.style.display = 'none';
  });

  document.getElementById('pw-send-msg').addEventListener('click', () => {
    const to = document.getElementById('pw-msg-to').value.trim();
    const subject = document.getElementById('pw-msg-subject').value.trim();
    const body = document.getElementById('pw-msg-body').value.trim();
    if (!to || !subject || !body) { alert('Wypełnij wszystkie pola!'); return; }

    const msg = { id: Date.now() + '', from: 'Admin', to, subject, body, date: Date.now(), read: false };

    // Save locally
    const msgs = lsGet('pw_messages', []);
    msgs.unshift(msg);
    lsSet('pw_messages', msgs);

    // Firebase background sync
    if (fbAvailable()) {
      db.collection('messages').add({
        from: 'Admin', to, subject, body, read: false,
        date: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(() => {});
    }

    // Send real email via EmailJS
    if (typeof emailjs !== 'undefined') {
      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID_MSG", {
        to_email: to,
        subject: subject,
        message: body,
        from_name: "Vistula Racing Pitwall"
      }).catch(err => console.error("EmailJS Pitwall error:", err));
    }

    composeBox.style.display = 'none';
    loadMessages();
    showToast('✅ Wiadomość wysłana!');
  });

  document.getElementById('pw-close-msg').addEventListener('click', () => { msgView.style.display = 'none'; });

  document.getElementById('pw-reply-btn').addEventListener('click', () => {
    const from = document.getElementById('pw-view-from').textContent;
    const subject = document.getElementById('pw-view-subject').textContent;
    composeBox.style.display = 'block';
    msgView.style.display = 'none';
    document.getElementById('pw-msg-to').value = from;
    document.getElementById('pw-msg-subject').value = 'Re: ' + subject;
    document.getElementById('pw-msg-body').value = '';
    document.getElementById('pw-msg-body').focus();
  });

  document.getElementById('pw-refresh-msgs').addEventListener('click', loadMessages);

  function loadMessages() {
    const inbox = document.getElementById('pw-inbox');
    const msgs = lsGet('pw_messages', []);

    if (msgs.length === 0) {
      inbox.innerHTML = '<div style="text-align:center;color:var(--text-dim);padding:20px;font-size:.85rem">📭 Brak wiadomości</div>';
      document.getElementById('pw-msg-badge').style.display = 'none';
      return;
    }

    let unread = 0;
    inbox.innerHTML = '';
    msgs.forEach(m => {
      if (!m.read) unread++;
      const d = m.date ? new Date(m.date).toLocaleString('pl-PL') : '—';
      const item = document.createElement('div');
      item.className = 'pw-msg-item' + (!m.read ? ' pw-msg-item--unread' : '');
      item.innerHTML = `
        <span class="pw-msg-from">${m.from || 'Nieznany'}</span>
        <span class="pw-msg-subject-preview"><strong>${m.subject || '(brak tematu)'}</strong> — ${(m.body || '').substr(0, 60)}...</span>
        <span class="pw-msg-date">${d}</span>`;
      item.addEventListener('click', () => openMessage(m.id, m));
      inbox.appendChild(item);
    });

    const badge = document.getElementById('pw-msg-badge');
    badge.textContent = unread;
    badge.style.display = unread > 0 ? 'inline-flex' : 'none';
  }

  function openMessage(id, m) {
    document.getElementById('pw-view-subject').textContent = m.subject || '(brak tematu)';
    document.getElementById('pw-view-from').textContent = m.from || 'Nieznany';
    document.getElementById('pw-view-to').textContent = m.to || '—';
    document.getElementById('pw-view-date').textContent = m.date ? new Date(m.date).toLocaleString('pl-PL') : '';
    document.getElementById('pw-view-body').textContent = m.body || '';
    msgView.style.display = 'block';
    if (!m.read) {
      const msgs = lsGet('pw_messages', []);
      const idx = msgs.findIndex(x => x.id === id);
      if (idx > -1) { msgs[idx].read = true; lsSet('pw_messages', msgs); }
      loadMessages();
    }
  }
  loadMessages();

  // ══════════════════════════════════════════════
  // --- DRIVER DATABASE ---
  // ══════════════════════════════════════════════
  const driverForm = document.getElementById('pw-driver-form');

  function clearDriverForm() {
    ['pw-drv-name', 'pw-drv-number', 'pw-drv-notes'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('pw-drv-class').value = 'GT3';
  }

  document.getElementById('pw-add-driver-btn').addEventListener('click', () => {
    document.getElementById('pw-driver-form-title').textContent = '➕ DODAJ KIEROWCĘ';
    document.getElementById('pw-drv-status').value = 'active';
    clearDriverForm();
    driverForm.style.display = 'block';
    document.getElementById('pw-drv-name').focus();
  });

  document.getElementById('pw-add-blacklist-btn').addEventListener('click', () => {
    document.getElementById('pw-driver-form-title').textContent = '🚫 DODAJ DO BLACKLISTY';
    document.getElementById('pw-drv-status').value = 'blacklist';
    clearDriverForm();
    driverForm.style.display = 'block';
    document.getElementById('pw-drv-name').focus();
  });

  document.getElementById('pw-cancel-driver').addEventListener('click', () => {
    driverForm.style.display = 'none';
  });

  document.getElementById('pw-save-driver').addEventListener('click', () => {
    const name = document.getElementById('pw-drv-name').value.trim();
    if (!name) { alert('Podaj imię i nazwisko!'); return; }

    const driver = {
      id: Date.now() + '',
      name,
      number: document.getElementById('pw-drv-number').value.trim(),
      class: document.getElementById('pw-drv-class').value,
      status: document.getElementById('pw-drv-status').value,
      notes: document.getElementById('pw-drv-notes').value.trim(),
      addedAt: Date.now()
    };

    // Save locally (always works)
    const drivers = lsGet('pw_drivers', []);
    drivers.unshift(driver);
    lsSet('pw_drivers', drivers);

    // Firebase background sync
    if (fbAvailable()) {
      db.collection('drivers').add({
        name: driver.name, number: driver.number, class: driver.class,
        status: driver.status, notes: driver.notes,
        addedAt: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(() => {});
    }

    driverForm.style.display = 'none';
    loadDrivers();
    showToast('✅ Kierowca dodany!');
  });

  document.getElementById('pw-driver-search').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('#pw-driver-tbody tr[data-id]').forEach(row => {
      row.style.display = (row.dataset.name || '').toLowerCase().includes(q) ? '' : 'none';
    });
  });

  function buildStatusBadge(s) {
    const map = { active: 'Aktywny', academy: 'Academy', reserve: 'Rezerwa', blacklist: 'Blacklist' };
    return `<span class="pw-status pw-status--${s}">${map[s] || s}</span>`;
  }

  function loadDrivers() {
    const tbody = document.getElementById('pw-driver-tbody');
    const blTbody = document.getElementById('pw-blacklist-tbody');
    const all = lsGet('pw_drivers', []);
    const drivers = all.filter(d => d.status !== 'blacklist');
    const blacklist = all.filter(d => d.status === 'blacklist');

    // Drivers table
    if (drivers.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-dim);padding:20px">Brak kierowców w bazie</td></tr>';
    } else {
      tbody.innerHTML = '';
      drivers.forEach(d => {
        const tr = document.createElement('tr');
        tr.dataset.id = d.id;
        tr.dataset.name = d.name;
        tr.innerHTML = `
          <td style="color:#fff;font-weight:600">${d.name}</td>
          <td style="font-family:'Orbitron',monospace;color:var(--blue)">${d.number || '—'}</td>
          <td>${d.class || '—'}</td>
          <td>${buildStatusBadge(d.status)}</td>
          <td>${d.notes || '—'}</td>
          <td><button class="pw-action-btn pw-action-btn--danger" data-del="${d.id}">🗑</button></td>`;
        tbody.appendChild(tr);
      });
    }

    // Blacklist table
    if (blacklist.length === 0) {
      blTbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--text-dim);padding:20px">Brak wpisów</td></tr>';
    } else {
      blTbody.innerHTML = '';
      blacklist.forEach(d => {
        const dateStr = d.addedAt ? new Date(d.addedAt).toLocaleDateString('pl-PL') : '—';
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="color:#f55;font-weight:600">${d.name}</td>
          <td>${d.notes || '—'}</td>
          <td style="font-family:'Orbitron',monospace">${dateStr}</td>
          <td><button class="pw-action-btn pw-action-btn--danger" data-del="${d.id}">🗑</button></td>`;
        blTbody.appendChild(tr);
      });
    }

    // Delete buttons
    document.querySelectorAll('[data-del]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('Czy na pewno chcesz usunąć ten wpis?')) {
          const all = lsGet('pw_drivers', []).filter(d => d.id !== btn.dataset.del);
          lsSet('pw_drivers', all);
          loadDrivers();
          showToast('🗑 Usunięto');
        }
      });
    });
  }
  loadDrivers();
}

// Simple toast notification
function showToast(msg) {
  let t = document.getElementById('pw-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'pw-toast';
    t.style.cssText = 'position:fixed;bottom:32px;right:32px;background:rgba(5,15,30,0.95);border:1px solid rgba(0,170,255,0.4);color:#fff;padding:12px 24px;border-radius:8px;font-family:"Rajdhani",sans-serif;font-size:.9rem;z-index:9999;transition:opacity .3s;box-shadow:0 4px 24px rgba(0,170,255,0.2)';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._to);
  t._to = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// =================== INIT ===================
showSection('home');
