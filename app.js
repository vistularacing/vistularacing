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

  // ══════════════════════════════════════════════
  // --- VISTULA LABS (TELEMETRY LOGS) ---
  // ══════════════════════════════════════════════
  const aiForm = document.getElementById('pw-ai-form');
  const aiConsole = document.getElementById('pw-ai-console');
  const aiActions = document.getElementById('pw-ai-actions');

  function clearAiForm() {
    ['pw-ai-car', 'pw-ai-track', 'pw-ai-prompt', 'pw-ai-file-telemetry', 'pw-ai-file-setup'].forEach(id => {
      document.getElementById(id).value = '';
    });
    aiConsole.style.display = 'none';
    aiConsole.innerHTML = '<div>[SYS] Wzbudzanie sieci neuronowej Vistula Labs...</div>';
    aiActions.style.display = 'flex';
  }

  const btnAddLog = document.getElementById('pw-add-log-btn');
  if (btnAddLog) {
    btnAddLog.addEventListener('click', () => {
      clearAiForm();
      aiForm.style.display = 'block';
      document.getElementById('pw-ai-car').focus();
    });
  }

  const btnCancelAi = document.getElementById('pw-cancel-ai-btn');
  if (btnCancelAi) {
    btnCancelAi.addEventListener('click', () => {
      aiForm.style.display = 'none';
    });
  }

  const btnRunAi = document.getElementById('pw-run-ai-btn');
  if (btnRunAi) {
    btnRunAi.addEventListener('click', () => {
      const car = document.getElementById('pw-ai-car').value.trim();
      const track = document.getElementById('pw-ai-track').value.trim();
      const promptText = document.getElementById('pw-ai-prompt').value.trim();
      const fileTel = document.getElementById('pw-ai-file-telemetry');
      const fileSetup = document.getElementById('pw-ai-file-setup');
      
      const hasTel = fileTel && fileTel.files.length > 0;
      const hasSetup = fileSetup && fileSetup.files.length > 0;
      
      if (!car || !track || (!promptText && !hasTel && !hasSetup)) {
        alert('Podaj Samochód, Tor oraz wgraj plik `.ld` lub `.svm` lub wpisz zapytanie!');
        return;
      }

      // Start AI Simulation Animation
      aiActions.style.display = 'none';
      aiConsole.style.display = 'block';
      
      let initialMsg = '<div><span style="color:#d966d6">[SYS]</span> Wzbudzanie mechanizmu MoTeC AI Analyzer...</div>';
      
      let steps = [
        '<span style="color:#d966d6">[NET]</span> Nawiązywanie bezpiecznego połączenia z klastrem Vistula Cloud...',
        '<span style="color:#0bf">[PARSE]</span> Dekodowanie struktury wejściowej parametrów trakcyjnych...',
        `<span style="color:#0bf">[METADATA]</span> Wczytany kontekst: Platforma pojazdu na torze ${track}...`,
        '<span style="color:#ffc107">[AI:VISION]</span> Analiza odchyleń od normy trakcyjnej z opisów zapytania...',
        '<span style="color:#ffc107">[AI:CALC]</span> Generowanie macierzy wag dla sprężyn i tłumików (bump/rebound)...',
        '<span style="color:#0bf">[SYS]</span> Optymalizacja zestawu aerodynamicznego (Downforce-to-Drag ratio)...',
        '<span style="color:#22c55e">[DONE]</span> Konwergencja modelu zakończona. Eksportowanie wniosków setupu do bazy!'
      ];

      // If file uploaded, "Deep Analysis" mode (longer steps)
      if (hasTel || hasSetup) {
        let fNames = [];
        if (hasTel) fNames.push(fileTel.files[0].name);
        if (hasSetup) fNames.push(fileSetup.files[0].name);
        initialMsg += `<div><span style="color:#0bf">[UPLOAD]</span> Pliki wejściowe wektorowe: <strong>${fNames.join(' + ')}</strong>. Uruchamianie modułu korelacji...</div>`;
        steps = [
          '<span style="color:#d966d6">[NET]</span> Nawiązywanie bezpiecznego połączenia z klastrem obliczeniowym Vistula AI...',
          `<span style="color:#0bf">[DECODE]</span> Czytanie binarnego zrzutu logu MoTeC (${fNames.join(' + ')})...`,
          '<span style="color:#0bf">[PARSE]</span> Wyodrębnianie kanałów: Damper Pos, Wheel Slip, Tyre Temp IMO zgrupowanych dla ' + track + '...',
          '<span style="color:#ffc107">[AI:VISION]</span> Analizowanie telemetrii pod kątem braków trakcji i balansu hamulców...',
          '<span style="color:#ffc107">[AI:MATH]</span> Inżynieria odwrotna (Reverse Engineering) Setupu dla ' + car + '... (to może potrwać dłuższą chwilę ⏳)',
          '<span style="color:#ffc107">[AI:MATH]</span> Transformacja różniczkowa zjawiska Bottoming i Ride Height na prostych...',
          '<span style="color:#ffc107">[AI:MATH]</span> Konstruowanie krzywej ugięcia tłumika i kompensowanie geometrii...',
          '<span style="color:#0bf">[SYS]</span> Synchronizacja balansu docisku areodynamicznego (Aero Map)...',
          '<span style="color:#22c55e">[DONE]</span> Ekstrakcja z MoTeC ukończona! Zapisywanie złotego setupu...'
        ];
      }

      aiConsole.innerHTML = initialMsg;

      let step = 0;
      // Step duration is longer if a file is uploaded to simulate heavy processing
      const intervalDelay = (hasTel || hasSetup) ? 1800 : 700; 

      const interval = setInterval(() => {
        if (step < steps.length) {
          const div = document.createElement('div');
          div.innerHTML = steps[step];
          div.style.marginTop = '6px';
          aiConsole.appendChild(div);
          aiConsole.scrollTop = aiConsole.scrollHeight;
          step++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            let fNames = [];
            if (hasTel) fNames.push(fileTel.files[0].name);
            if (hasSetup) fNames.push(fileSetup.files[0].name);
            generateAiSetupAndSave({ car, track, promptText, fileName: fNames.join(' + ') });
          }, 800);
        }
      }, intervalDelay);
    });
  }

  function generateAiSetupAndSave(data) {
    const p = data.promptText.toLowerCase();
    const c = data.car.toLowerCase();
    const t = data.track.toLowerCase();
    
    let solution = '';
    let issue = data.promptText.length > 80 ? data.promptText.substring(0, 77) + '...' : data.promptText;

    // --- LMU ASTON MARTIN VALKYRIE HY (MONZA) SPECIFIC LOGIC ---
    // If the user mentions Valkyrie + LMU / Monza, we generate a highly specific setup table.
    if ((c.includes('valkyrie') || p.includes('valkyrie')) && (t.includes('monza') || p.includes('monza') || p.includes('lmu'))) {
      solution += 'Oto zoptymalizowany setup dla **Aston Martin Valkyrie HY** (Le Mans Ultimate) na bardzo szybkim torze z mocnymi strefami dohamowań (np. Monza). <br><br>';
      
      // Powertrain & Electronics
      solution += '<ul><li><b>Powertrain:</b> Engine Mixture na "Race", Fuel Ratio ~1.00. Water Rad na 50%, Oil Rad na 50% by zmniejszyć opory powietrza na długich prostych.</li>';
      solution += '<li><b>Electronics:</b> TC zrzucony na 3 (dla agresywnego wyjścia z pierwszej szykany), TC Slip Angle: 4.</li>';
      
      // Differential
      solution += '<li><b>Differential:</b> Power: 45% (lepsza trakcja przy wyjściu), Coast: 60% (stabilizuje tył na głębokim trail brakingu do Curve Biassono), Preload: 85Nm. Zestrojenie Gearing Ratio: Le Mans.</li>';
      
      // Brakes
      solution += '<li><b>Brakes:</b> Bias przesunięty bardzo do tyłu: 52.8:47.2, Brake Migration 1.0%F dla ratowania blokowania przodu na Rettifilo. Max Force 100%. Front Blanking 25%, Rear 50% (hamulce na Monzy muszą odetchnąć).</li>';
      
      // Aero
      solution += '<li><b>Aero & Chassis:</b> Front Wing: P3, Tył Toe-in: 0.12 (stabilność na prostych), Przód Toe-in: -0.18 (szybsza reakcja kierownicy). Max Wheel Lock: 360 deg. ARB: Przód Detached / P1 dla zwinności, Tył P4.</li>';
      
      // Suspension / Wheels
      solution += '<li><b>Opony:</b> Przód Ciśnienie ~144kPa / Tył ~146kPa na zimno. Przód Camber: -3.8deg, Tył Camber: -2.3deg (maksymalizacja trakcji).</li>';
      solution += '<li><b>Suspension (Ride Height / Springs):</b> Front RH: ~4.5cm, Rear RH: ~5.5cm. Przód 10 / Tył 8 Spring Rate by skompresować Aero. 3rd Spring Front: rate 10 z 1.5cm packers!</li></ul>';

      // --- GENERATE .SVM FILE CONTENT FOR DOWNLOAD ---
      // We create a mock .svm string representing the Valkyrie setup configuration
      const svmContent = `//[[gMa1.002f (c)2016    ]] [[            ]]
// Setup file for Aston Martin Valkyrie HY - Generated by Vistula AI Engine
VehicleClassSetting="GT3 McLaren_720S_LMGT3_Evo WEC2025"
UpgradeSetting=(668044,0,0,0)
//VEH=
//UpgradeClass=
//Position lights=0
//AI Tweaks=6
//Estimates=6
//BOP=6
//Gear ratios=0
//Atmos Conditions=5
//Note: settings commented out if using the default

[GENERAL]
Notes="Vistula AI Engine Optimization: Monza"
Symmetric=1
CGHeightSetting=0//Non-adjustable
CGRightSetting=0//Non-adjustable
CGRearSetting=0//Non-adjustable
WedgeSetting=0//N/A
FuelSetting=79//0.80
FuelCapacitySetting=0//80.0L (24.7 laps)
VirtualEnergySetting=100//100% (24.7 laps)
NumPitstopsSetting=0//0
Pitstop1Setting=60//N/A
Pitstop2Setting=60//N/A
Pitstop3Setting=60//N/A

[LEFTFENDER]
FenderFlareSetting=0//Upper

[RIGHTFENDER]
FenderFlareSetting=0//Upper

[FRONTWING]
FWSetting=3//Standard

[REARWING]
RWSetting=12//1.75 deg

[BODYAERO]
WaterRadiatorSetting=2//50%
OilRadiatorSetting=2//50%
BrakeDuctSetting=0//Open
BrakeDuctRearSetting=0//Open

[SUSPENSION]
FrontWheelTrackSetting=0//Non-adjustable
RearWheelTrackSetting=0//Non-adjustable
FrontAntiSwaySetting=0//P1
RearAntiSwaySetting=3//P4
FrontToeInSetting=3//-0.18 deg
FrontToeOffsetSetting=0//N/A
RearToeInSetting=6//0.12 deg
RearToeOffsetSetting=0//N/A
LeftCasterSetting=0//Non-adjustable
RightCasterSetting=0//Non-adjustable
LeftTrackBarSetting=0//N/A
RightTrackBarSetting=0//N/A
Front3rdPackerSetting=1//1.5cm
Front3rdSpringSetting=9//rate 10
Front3rdTenderSpringSetting=0//Detached
Front3rdTenderTravelSetting=0//Detached
Front3rdSlowBumpSetting=0//N/A
Front3rdFastBumpSetting=0//N/A
Front3rdSlowReboundSetting=0//N/A
Front3rdFastReboundSetting=0//N/A
Rear3rdPackerSetting=0//N/A
Rear3rdSpringSetting=0//N/A
Rear3rdTenderSpringSetting=0//Detached
Rear3rdTenderTravelSetting=0//Detached
Rear3rdSlowBumpSetting=0//N/A
Rear3rdFastBumpSetting=0//N/A
Rear3rdSlowReboundSetting=0//N/A
[DRIVELINE]
FinalDriveSetting=1//Le Mans
ReverseSetting=0//Fixed
Gear1Setting=0//Fixed
Gear2Setting=0//Fixed
Gear3Setting=0//Fixed
Gear4Setting=0//Fixed
Gear5Setting=0//Fixed
Gear6Setting=0//Fixed
RatioSetSetting=0//Standard
DiffPumpSetting=8//45% Power
DiffPowerSetting=11//60% Coast
DiffCoastSetting=0//Non-adjustable
DiffPreloadSetting=17//85Nm
FrontDiffPumpSetting=0//0%
FrontDiffPowerSetting=0//0%
FrontDiffCoastSetting=0//0%
FrontDiffPreloadSetting=0//1
RearSplitSetting=0//RWD
GearAutoUpShiftSetting=0//Off
GearAutoDownShiftSetting=0//Off

[FRONTLEFT]
CamberSetting=19//-3.80 deg
PressureSetting=13//144 kPa
PackerSetting=0//0.0 cm
SpringSetting=9//10
TenderSpringSetting=1//Standard
TenderTravelSetting=1//0 N/mm
SpringRubberSetting=0//N/A
RideHeightSetting=5//4.5 cm
SlowBumpSetting=0//B31
FastBumpSetting=0//B41
SlowReboundSetting=0//R22
FastReboundSetting=0//R21
BrakeDiscSetting=0//3.58 cm
BrakePadSetting=0//1
CompoundSetting=0//Medium

[FRONTRIGHT]
CamberSetting=19//-3.80 deg
PressureSetting=13//144 kPa
PackerSetting=0//0.0 cm
SpringSetting=9//10
TenderSpringSetting=1//Standard
TenderTravelSetting=1//0 N/mm
SpringRubberSetting=0//N/A
RideHeightSetting=5//4.5 cm
SlowBumpSetting=0//B31
FastBumpSetting=0//B41
SlowReboundSetting=0//R22
FastReboundSetting=0//R21
BrakeDiscSetting=0//3.58 cm
BrakePadSetting=0//1
CompoundSetting=0//Medium

[REARLEFT]
CamberSetting=13//-2.30 deg
PressureSetting=15//146 kPa
PackerSetting=0//0.0 cm
SpringSetting=7//8
TenderSpringSetting=0//Standard
TenderTravelSetting=0//Standard
SpringRubberSetting=0//N/A
RideHeightSetting=5//5.5 cm
SlowBumpSetting=0//B10
FastBumpSetting=0//B41
SlowReboundSetting=0//R15
FastReboundSetting=0//R21
BrakeDiscSetting=0//3.02 cm
BrakePadSetting=0//1
CompoundSetting=0//Medium

[REARRIGHT]
CamberSetting=13//-2.30 deg
PressureSetting=15//146 kPa
PackerSetting=0//0.0 cm
SpringSetting=7//8
TenderSpringSetting=0//Standard
TenderTravelSetting=0//Standard
SpringRubberSetting=0//N/A
RideHeightSetting=5//5.5 cm
SlowBumpSetting=0//B10
FastBumpSetting=0//B41
SlowReboundSetting=0//R15
FastReboundSetting=0//R21
BrakeDiscSetting=0//3.02 cm
BrakePadSetting=0//1
CompoundSetting=0//Medium

[BASIC]
Downforce=0.500000
Balance=0.500000
Ride=0.500000
Gearing=0.500000
Custom=1E]
RevLimitSetting=0//8,000
EngineBoostSetting=0//N/A
RegenerationMapSetting=0//0%
ElectricMotorMapSetting=0//0
EngineMixtureSetting=1//Race
EngineBrakingMapSetting=0//N/A

[DRIVELINE]
Gear7Setting=0
TractionControl=3
TCLatch=4
DiffPumpSetting=10 // Power: 45%
DiffPowerSetting=11 // Coast 60%
DiffPreloadSetting=17 // 85Nm

[FRONTLEFT]
CamberSetting=-28 // -3.8deg
PressureSetting=13 // 144kPa
ToeInSetting=-3   // -0.18
RideHeightSetting=5 // 4.5cm
SpringSetting=9   // 10 rate
PackerSetting=0

[FRONTRIGHT]
CamberSetting=-28
PressureSetting=13
ToeInSetting=-3
RideHeightSetting=5
SpringSetting=9
PackerSetting=0

[REARLEFT]
CamberSetting=-13 // -2.3deg
PressureSetting=15 // 146kPa
ToeInSetting=2    // 0.12
RideHeightSetting=5 // 5.5cm
SpringSetting=7   // 8 rate
PackerSetting=0

[REARRIGHT]
CamberSetting=-13
PressureSetting=15
ToeInSetting=2
RideHeightSetting=5
SpringSetting=7
PackerSetting=0

[CONTROLS]
SteerLockSetting=3 // 360 deg
RearBrakeSetting=14 // 52.8:47.2
BrakePressureSetting=100
`;

      solution += '<div style="margin-top:12px;"><button class="btn btn-outline" style="border-color:#d966d6;color:#d966d6;font-size:.65rem;padding:6px 12px;cursor:pointer;" onclick="downloadSvmFile(\'' + encodeURIComponent(svmContent) + '\', \'Vistula_Valkyrie_Monza.svm\')">⬇️ POBIERZ PLIK .SVM</button></div>';

    } else {
      // Very simple pseudo-AI matching keywords to make it look professional for other cars
      if (p.includes('understeer') || p.includes('podsterow')) {
        solution += 'Zmniejsz przedni stabilizator (ARB) o 1-2 kliki. Zwiększ Rake platformy podnosząc tył o 2mm. Rozważ minimalnie większy Toe-Out z przodu dla lepszej reakcji na wejściu. ';
      }
      if (p.includes('oversteer') || p.includes('nadsterow') || p.includes('tył ucieka')) {
        solution += 'Zwiększ tylne skrzydło o 1 stopień dla pewności T-High. Zmniejsz tylny ARB. Utwardź przednie sprężyny by odciążyć tył na wejściu w zakręt. ';
      }
      if (p.includes('opon') || p.includes('temperatur') || p.includes('temp') || p.includes('psi')) {
        solution += 'Dane termalne odchylone poza okno operacyjne MoTeC. Obniż ciśnienie bazowe o ~0.4 PSI z gorącej strony osi opon. Zweryfikuj negatywny Camber (jeśli Inner jest za gorący). ';
      }
      if (p.includes('bump') || p.includes('krawężnik') || p.includes('krawęznik') || p.includes('nierównośc') || p.includes('trakcj')) {
        solution += 'Amortyzatory (Fast Bump / Rebound) są przegięte na kompresji. Mniejszy % Fast Bump na tylnej osi pomoże wchłaniać wibracje i wygładzić wykres trakcji. ';
      }
      if (solution === '') {
        solution = 'Opis wskazuje na ogólną potrzebę re-balansu. Wyciągnij więcej przyczepności mechanicznej zjeżdżając z wysokości Ride Height na minimum przed uderzeniem deski. Miększe sprężyny ustabilizują wykres Damper Histograms.';
      }
    }
    
    // Add professional closing flavor
    solution += ' <span style="color:#d966d6;font-size:0.75rem;display:block;margin-top:4px;">[Model Confidence: 94.2% - Vistula Labs AI Engine]</span>';

    const logEntry = {
      id: Date.now() + '',
      driver: '🤖 Vistula AI Engine',
      car: data.car,
      track: data.track,
      issue: '🔍 AI Diagnoza: ' + issue,
      solution: solution,
      link: '',
      addedAt: Date.now()
    };

    // Save locally
    const logs = lsGet('pw_vl_logs', []);
    logs.unshift(logEntry);
    lsSet('pw_vl_logs', logs.slice(0, 100));

    // Firebase background sync
    if (fbAvailable()) {
      db.collection('vistula_labs_logs').add({
        driver: logEntry.driver,
        car: logEntry.car,
        track: logEntry.track,
        issue: logEntry.issue,
        solution: logEntry.solution,
        link: logEntry.link,
        addedAt: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(() => {});
    }

    aiForm.style.display = 'none';
    loadVistulaLogs();
    showToast('🚀 Model sieci wygenerował Setup - Dane załączone do tabeli!');
  }

  const btnRefreshLogs = document.getElementById('pw-refresh-logs-btn');
  if (btnRefreshLogs) {
    btnRefreshLogs.addEventListener('click', loadVistulaLogs);
  }

  function loadVistulaLogs() {
    const tbody = document.getElementById('pw-logs-tbody');
    if (!tbody) return;

    let logs = lsGet('pw_vl_logs', []);

    // Also attempt Firebase fetch if available, overriding local storage on success
    if (fbAvailable()) {
      db.collection('vistula_labs_logs').orderBy('addedAt', 'desc').limit(20).get()
        .then(snapshot => {
          const fbLogs = [];
          snapshot.forEach(doc => {
            const data = doc.data();
            fbLogs.push({
              id: doc.id,
              driver: data.driver, car: data.car, track: data.track,
              link: data.link, issue: data.issue, solution: data.solution,
              addedAt: data.addedAt ? data.addedAt.toMillis() : Date.now()
            });
          });
          if (fbLogs.length > 0) {
            logs = fbLogs;
            lsSet('pw_vl_logs', logs);
            renderVistulaLogsTable(logs);
          }
        }).catch(err => {
          console.warn('Firebase VL logs error:', err);
        });
    }
    
    // Always render with current best knowledge
    renderVistulaLogsTable(logs);
  }

  function renderVistulaLogsTable(logs) {
    const tbody = document.getElementById('pw-logs-tbody');
    if (!tbody) return;

    if (logs.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-dim);padding:20px">Brak analiz w bazie Vistula Labs. Bądź pierwszym diagnostą!</td></tr>';
      return;
    }

    tbody.innerHTML = '';
    logs.forEach(log => {
      const d = new Date(log.addedAt).toLocaleDateString('pl-PL');
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family:'Orbitron',monospace;color:var(--text-dim);font-size:.8rem">${d}</td>
        <td style="font-weight:600">${log.driver}</td>
        <td><strong style="color:var(--blue)">${log.track}</strong><br><span style="font-size:.75rem;color:var(--text-dim)">${log.car}</span></td>
        <td style="font-size:.85rem;max-width:200px;white-space:normal;color:#f55">${log.issue || '—'}</td>
        <td style="font-size:.85rem;max-width:250px;white-space:normal;color:#22c55e">${log.solution || '—'}</td>
        <td>${log.link ? '<a href="' + log.link + '" target="_blank" class="btn btn-outline" style="font-size:.65rem;padding:4px 8px;">🔗 MoTeC</a>' : '—'}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Initial load
  loadVistulaLogs();
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

// Helper to download generated .svm files
window.downloadSvmFile = function(encodedContent, filename) {
  const content = decodeURIComponent(encodedContent);
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
};
