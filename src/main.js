import * as THREE from 'three';
import { gsap } from 'gsap';

/* ============================================================
   DATA
============================================================ */
const SKILLS = [
  { title: 'Languages', color: 'var(--accent)', items: ['Python', 'Java', 'JavaScript', 'PHP', 'SQL', 'Kotlin', 'React.js'] },
  { title: 'Machine Learning', color: 'var(--accent-2)', items: ['Regression', 'Classification', 'CNNs', 'RNNs', 'Recommenders'] },
  { title: 'Data & BI', color: 'var(--accent-3)', items: ['Power BI', 'SSIS', 'SSAS', 'ETL', 'OLAP', 'Data Warehousing'] },
  { title: 'Databases', color: 'var(--accent)', items: ['MongoDB', 'MySQL', 'SQL Server'] },
  { title: 'Tools', color: 'var(--accent-2)', items: ['Git', 'Jupyter', 'Scikit-learn', 'Android Studio', 'Figma'] },
  { title: 'Cloud & Certs', color: 'var(--accent-3)', items: ['AWS Educate', 'Gen AI', 'ML Foundations', 'Cloud 101'] },
];

// Simple, copyright-safe typographic logo marks (SVG)
const LOGOS = {
  mas: `<svg viewBox="0 0 120 44" xmlns="http://www.w3.org/2000/svg" aria-label="MAS Holdings">
    <rect x="1" y="1" width="118" height="42" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.25"/>
    <text x="60" y="30" text-anchor="middle" font-family="Syne, sans-serif" font-weight="800" font-size="22" letter-spacing="2" fill="currentColor">MAS</text>
  </svg>`,
};

// Self-drawn, data-free "dashboard" illustrations (no confidential company data)
const MOCKS = (() => {
  const a = '#6c5cff', t = '#00e5c8', p = '#ff5c8a', m = 'rgba(255,255,255,.28)', f = 'rgba(255,255,255,.08)';
  const frame = (inner) => `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="#0b0d16"/><rect width="320" height="24" fill="rgba(255,255,255,.03)"/><circle cx="15" cy="12" r="3.5" fill="${t}"/><rect x="26" y="9" width="66" height="6" rx="3" fill="${m}"/>${inner}</svg>`;
  const kpi = (x, c) => `<rect x="${x}" y="34" width="88" height="40" rx="7" fill="${c}22" stroke="${c}" stroke-opacity=".55"/><rect x="${x + 10}" y="44" width="40" height="7" rx="3" fill="rgba(255,255,255,.55)"/><rect x="${x + 10}" y="57" width="24" height="6" rx="3" fill="rgba(255,255,255,.28)"/>`;
  const vbars = () => [0.5, 0.7, 0.4, 0.85, 0.6, 0.9, 0.55, 0.72, 0.45].map((h, i) => { const x = 24 + i * 31, bh = 70 * h; return `<rect x="${x}" y="${150 - bh}" width="18" height="${bh}" rx="3" fill="${i % 3 === 2 ? t : a}"/>`; }).join('') + `<line x1="16" y1="150" x2="304" y2="150" stroke="${f}"/>`;
  const hbars = () => [210, 150, 118, 88, 58].map((w, i) => { const y = 42 + i * 24; return `<rect x="18" y="${y}" width="40" height="9" rx="4" fill="rgba(255,255,255,.22)"/><rect x="66" y="${y - 1}" width="${w}" height="11" rx="5" fill="${i % 2 ? t : a}"/>`; }).join('');
  const donut = () => `<circle cx="78" cy="106" r="40" fill="none" stroke="${f}" stroke-width="16"/><circle cx="78" cy="106" r="40" fill="none" stroke="${a}" stroke-width="16" stroke-dasharray="150 101" transform="rotate(-90 78 106)"/><circle cx="78" cy="106" r="40" fill="none" stroke="${t}" stroke-width="16" stroke-dasharray="55 196" stroke-dashoffset="-150" transform="rotate(-90 78 106)"/>` + [a, t, p].map((c, i) => `<rect x="150" y="${50 + i * 30}" width="11" height="11" rx="2" fill="${c}"/><rect x="170" y="${52 + i * 30}" width="118" height="7" rx="3" fill="rgba(255,255,255,.25)"/><rect x="170" y="${63 + i * 30}" width="72" height="5" rx="2.5" fill="rgba(255,255,255,.13)"/>`).join('');
  const area = () => { const pts = '24,120 58,92 92,104 126,72 160,86 194,56 228,76 262,46 300,62'; return [46, 76, 106, 136].map((y) => `<line x1="18" y1="${y}" x2="302" y2="${y}" stroke="${f}"/>`).join('') + `<polyline points="24,150 ${pts} 300,150" fill="${a}22"/><polyline points="${pts}" fill="none" stroke="${t}" stroke-width="2.5"/><rect x="16" y="34" width="70" height="8" rx="4" fill="rgba(255,255,255,.25)"/>`; };
  const app = () => `<rect x="60" y="34" width="200" height="134" rx="10" fill="rgba(255,255,255,.05)" stroke="${f}"/><rect x="60" y="34" width="200" height="26" rx="10" fill="${a}22"/><rect x="118" y="43" width="84" height="8" rx="4" fill="rgba(255,255,255,.5)"/><rect x="74" y="72" width="172" height="14" rx="7" fill="rgba(255,255,255,.05)" stroke="${f}"/>` + [0, 1, 2].map((i) => `<rect x="${74 + i * 58}" y="94" width="52" height="15" rx="4" fill="rgba(255,255,255,.05)" stroke="${f}"/><path d="M${74 + i * 58 + 40} 99 l4 5 4 -5" stroke="${t}" fill="none" stroke-width="1.5"/>`).join('') + [0, 1, 2, 3].map((i) => `<rect x="74" y="${120 + i * 11}" width="172" height="7" rx="2" fill="${i === 0 ? a + '55' : 'rgba(255,255,255,.05)'}"/>`).join('');
  return {
    capex: frame(kpi(14, a) + kpi(116, t) + kpi(218, p) + vbars()),
    machine: frame(hbars()),
    recon: frame(donut()),
    solution: frame(area()),
    app: frame(app()),
  };
})();

const EXPERIENCE = [
  {
    logo: LOGOS.mas,
    role: 'Associate Data Scientist',
    org: 'MAS Holdings',
    place: 'Innovation & Technology · Malabe, Sri Lanka',
    period: '2025 — Present · 11 months',
    current: true,
    points: [
      'Started with Twinery — MAS’s innovation arm — for the first 4 months, then moved into the MCAP / Machine Build team where I currently work.',
      'Build interactive Power BI dashboards for CapEx tracking, savings analysis, machine distribution and inventory reconciliation across production divisions.',
      'Integrate and reconcile machine inventory reports against physical scan data to surface matched, missing and mismatched assets — improving machine governance.',
      'Developed a low-code Power Apps tool for structured operational data capture, and handle end-to-end data cleaning, modelling and DAX in Excel + Power BI.',
    ],
    tags: ['Power BI', 'Power Apps', 'DAX', 'Data Modeling', 'Excel'],
  },
];

// Internship work at MAS — sourced from the internship report (real projects)
// NOTE: real company dashboards are confidential — these show data-free illustrations + what I built.
const MAS_WORK = [
  {
    viz: 'capex',
    title: 'CapEx & Savings Dashboard',
    tool: 'Power BI',
    desc: 'Interactive dashboard tracking approved capital expenditure, purchase orders, budget utilization and savings across divisions. KPI cards, budgeted-vs-unbudgeted analysis and monthly trends help management spot unbudgeted spend and evaluate investment performance.',
    tags: ['Power BI', 'DAX', 'Finance'],
  },
  {
    viz: 'machine',
    title: 'Machine Analysis Dashboard',
    tool: 'Power BI',
    desc: 'Fleet analytics categorizing the sewing and non-sewing machine base by brand, type, division and ownership status — giving plants clear visibility of machine distribution and utilization across manufacturing units.',
    tags: ['Power BI', 'Data Modeling'],
  },
  {
    viz: 'recon',
    title: 'Machine Reconciliation',
    tool: 'Power BI',
    desc: 'Reconciliation of inventory reports against physical machine-scan data to flag matched, missing and mismatched machines across factories — surfacing inventory gaps and strengthening asset governance.',
    tags: ['Power BI', 'Data Integration'],
  },
  {
    viz: 'solution',
    title: 'Solution Box Dashboard',
    tool: 'Power BI',
    desc: 'Analytics for engineering-improvement solutions, aggregating operational savings metrics across divisions to rank high-impact solutions and support data-driven evaluation.',
    tags: ['Power BI', 'Analytics', 'Savings'],
  },
  {
    viz: 'app',
    title: 'CapEx Guide — Power App',
    tool: 'Power Apps',
    desc: 'A low-code app for structured machine / CapEx data capture — a searchable machine catalog with type, brand and operator-position filters — reducing manual effort and standardizing operational data collection.',
    tags: ['Power Apps', 'Low-Code', 'Workflow'],
  },
];

const WORK = [
  {
    title: 'Business Intelligence Platform',
    meta: 'SLIIT · Mar–Jun 2025',
    tags: ['SSIS', 'SSAS', 'Power BI'],
    desc: 'End-to-end BI solution on the Microsoft stack: a custom data warehouse, ETL pipelines with Slowly Changing Dimensions, an OLAP cube (drill-down / roll-up / slice / dice), and an interactive Power BI dashboard for executive and user-level insight.',
  },
  {
    title: 'Game Sales Prediction',
    meta: 'Data Mining · Academic',
    tags: ['Python', 'Scikit-learn', 'Random Forest'],
    desc: 'Predicted global video-game sales from genre, platform and release year. Benchmarked multiple models, selected a Random Forest Regressor for its accuracy, and deployed the trained model in a small prediction app.',
  },
  {
    title: 'E-Commerce Platform',
    meta: 'MERN Stack · 2023',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    desc: 'Full-stack e-commerce site with backend API development, user authentication and order management. Built in an Agile team using GitHub for version control and collaboration.',
  },
  {
    title: 'Android Game',
    meta: 'Mobile · 2023',
    tags: ['Kotlin', 'Android'],
    desc: 'Kotlin-based Android game with smooth UI/UX, touch controls and animation logic, tuned for seamless performance on mid-range devices.',
  },
];

const EDUCATION = [
  {
    degree: 'B.Sc. (Hons) in Information Technology',
    field: 'Specializing in Data Science',
    school: 'SLIIT — Sri Lanka Institute of Information Technology, Malabe',
    period: '2022 — 2025',
    note: 'Second Class (Lower Division)',
  },
  {
    degree: 'Higher Diploma in Information Technology',
    field: '',
    school: 'SLIIT — Sri Lanka Institute of Information Technology, Malabe',
    period: 'Completed Dec 2024',
    note: '',
  },
  {
    degree: 'G.C.E. Advanced Level',
    field: 'Physical Science Stream',
    school: "St. Sylvester's College, Kandy",
    period: '2019',
    note: '',
  },
  {
    degree: 'G.C.E. Ordinary Level',
    field: '',
    school: "St. Sylvester's College, Kandy",
    period: '2016',
    note: '',
  },
];

const MARQUEE = ['DATA SCIENCE', 'MACHINE LEARNING', 'BUSINESS INTELLIGENCE', 'ETL', 'PYTHON', 'POWER BI', 'FULL-STACK'];
const PHOTOS = [
  '/photos/education.jpg',
  '/photos/team1_web.jpg',
  '/photos/me1_web.jpg',
  '/photos/team2_web.jpg',
  '/photos/about.jpg',
];

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   BUILD DOM CONTENT
============================================================ */
function buildContent() {
  // Skills
  const sg = document.getElementById('skills-grid');
  sg.innerHTML = SKILLS.map((s) => `
    <div class="skill-card reveal">
      <h3><span class="dot" style="background:${s.color}"></span>${s.title}</h3>
      <ul>${s.items.map((i) => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');

  // Marquee (doubled for seamless loop)
  const mt = document.getElementById('marquee-track');
  const one = MARQUEE.map((m, i) => `<span class="${i % 2 ? 'solid' : ''}">${m} ✦</span>`).join('');
  mt.innerHTML = one + one;

  // Experience
  const el = document.getElementById('exp-list');
  el.innerHTML = EXPERIENCE.map((e) => `
    <article class="exp-card reveal">
      <div class="exp-logo">${e.logo}</div>
      <div class="exp-body">
        <div class="exp-top">
          <h3>${e.role} <span class="exp-org">· ${e.org}</span></h3>
          ${e.current ? '<span class="exp-badge">Current</span>' : ''}
        </div>
        <div class="exp-meta">${e.place} &nbsp;·&nbsp; ${e.period}</div>
        <ul class="exp-points">${e.points.map((p) => `<li>${p}</li>`).join('')}</ul>
        <div class="exp-tags">${e.tags.map((t) => `<span>${t}</span>`).join('')}</div>
      </div>
    </article>`).join('');

  // MAS internship work — image cards
  const mw = document.getElementById('mas-work');
  mw.innerHTML = MAS_WORK.map((w) => `
    <article class="mas-card reveal">
      <div class="mas-card-img viz">
        ${MOCKS[w.viz] || ''}
        <span class="mas-card-tool">${w.tool}</span>
      </div>
      <div class="mas-card-body">
        <h4>${w.title}</h4>
        <p>${w.desc}</p>
        <div class="mas-card-tags">${w.tags.map((t) => `<span>${t}</span>`).join('')}</div>
      </div>
    </article>`).join('');

  // Academic work list
  const wl = document.getElementById('work-list');
  wl.innerHTML = WORK.map((w, i) => `
    <div class="work-item reveal">
      <span class="w-idx">0${i + 1}</span>
      <div>
        <div class="w-title">${w.title}</div>
        <div class="w-tags">${w.tags.map((t) => `<span>#${t}</span>`).join('')}</div>
        <div class="w-desc">${w.desc}</div>
      </div>
      <div style="text-align:right">
        <div class="w-meta">${w.meta}</div>
        <div class="w-arrow">↗</div>
      </div>
    </div>`).join('');

  wl.querySelectorAll('.work-item').forEach((item) => {
    item.addEventListener('click', () => item.classList.toggle('open'));
  });

  // Education timeline
  const et = document.getElementById('edu-timeline');
  et.innerHTML = EDUCATION.map((e) => `
    <div class="edu-item reveal">
      <div class="edu-dot"></div>
      <div class="edu-period">${e.period}</div>
      <h3 class="edu-degree">${e.degree}</h3>
      ${e.field ? `<div class="edu-field">${e.field}</div>` : ''}
      <div class="edu-school">${e.school}</div>
      ${e.note ? `<span class="edu-note">${e.note}</span>` : ''}
    </div>`).join('');

  // Daily Prophet special-report plates — inject data-free illustrations
  document.querySelectorAll('#dp-plates .lp-frame[data-viz]').forEach((frame) => {
    const svg = MOCKS[frame.getAttribute('data-viz')];
    if (svg) frame.insertAdjacentHTML('afterbegin', svg);
  });

  document.getElementById('year').textContent = '2026';
}

/* ============================================================
   3D GALLERY RING (CSS 3D, drag to rotate)
============================================================ */
function buildGallery() {
  const stage = document.getElementById('gallery-stage');
  const ring = document.createElement('div');
  ring.className = 'gallery-ring';
  stage.appendChild(ring);

  const n = PHOTOS.length;
  const radius = 380;
  PHOTOS.forEach((src, i) => {
    const card = document.createElement('div');
    card.className = 'g-card';
    card.innerHTML = `<img src="${src}" alt="moment ${i + 1}" loading="lazy" />`;
    const angle = (360 / n) * i;
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    ring.appendChild(card);
  });

  let rotY = 0, rotX = -6, targetY = 0, dragging = false, lastX = 0, lastY = 0, autoSpin = 0.12;

  function render() {
    if (!dragging) targetY += autoSpin;
    rotY += (targetY - rotY) * 0.08;
    ring.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    requestAnimationFrame(render);
  }
  render();

  const down = (x, y) => { dragging = true; lastX = x; lastY = y; };
  const move = (x, y) => {
    if (!dragging) return;
    targetY += (x - lastX) * 0.4;
    rotX = Math.max(-30, Math.min(30, rotX - (y - lastY) * 0.2));
    lastX = x; lastY = y;
  };
  const up = () => { dragging = false; };

  stage.addEventListener('mousedown', (e) => down(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', up);
  stage.addEventListener('touchstart', (e) => down(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  stage.addEventListener('touchmove', (e) => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  stage.addEventListener('touchend', up);
}

/* ============================================================
   THREE.JS BACKGROUND — particle field + floating shapes
============================================================ */
function initThree() {
  const canvas = document.getElementById('webgl');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060a, 0.032);

  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 120);

  // --- Journey layout (camera flies down the corridor as you scroll) ---
  const N = 8, STEP = 9, JOURNEY = (N - 1) * STEP, FRONT = 8;
  let PAL = { a: 0x6c5cff, b: 0x00e5c8 };
  camera.position.z = FRONT;

  // --- Star corridor (particles along a long Z tunnel we fly through) ---
  const count = 3400;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const cA = new THREE.Color(PAL.a);
  const cB = new THREE.Color(PAL.b);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const r = 4 + Math.random() * 13;
    const a = Math.random() * Math.PI * 2;
    positions[i3] = Math.cos(a) * r;
    positions[i3 + 1] = Math.sin(a) * r * 0.72;
    positions[i3 + 2] = FRONT + 8 - Math.random() * (JOURNEY + 24);
    const c = cA.clone().lerp(cB, Math.random());
    colors[i3] = c.r; colors[i3 + 1] = c.g; colors[i3 + 2] = c.b;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  // --- Lights (so planets are shaded) ---
  scene.add(new THREE.AmbientLight(0x556070, 0.55));
  const sunLight = new THREE.PointLight(0xfff2cc, 2.4, 260);
  scene.add(sunLight);

  // helper canvas textures (self-contained, no external images)
  function glowTexture(color) {
    const cv = document.createElement('canvas'); cv.width = cv.height = 256;
    const x = cv.getContext('2d');
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, color); g.addColorStop(0.25, color); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(cv);
  }
  function earthTexture() {
    const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 512;
    const x = cv.getContext('2d');
    const g = x.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, '#12365f'); g.addColorStop(0.5, '#164a86'); g.addColorStop(1, '#0e2b4d');
    x.fillStyle = g; x.fillRect(0, 0, 1024, 512);
    x.fillStyle = '#2f7d3a';
    for (let k = 0; k < 80; k++) { const cx = Math.random() * 1024, cy = 70 + Math.random() * 372, r = 14 + Math.random() * 58; x.beginPath(); x.ellipse(cx, cy, r, r * (0.5 + Math.random()), Math.random() * 6, 0, 7); x.fill(); }
    x.fillStyle = '#e6eef2'; x.fillRect(0, 0, 1024, 24); x.fillRect(0, 488, 1024, 24);
    return new THREE.CanvasTexture(cv);
  }
  function pinTexture() {
    const cv = document.createElement('canvas'); cv.width = cv.height = 128;
    const x = cv.getContext('2d');
    x.strokeStyle = 'rgba(255,90,90,0.9)'; x.lineWidth = 6; x.beginPath(); x.arc(64, 64, 40, 0, 7); x.stroke();
    x.fillStyle = '#ff5c5c'; x.beginPath(); x.arc(64, 64, 18, 0, 7); x.fill();
    x.fillStyle = 'rgba(255,120,120,0.35)'; x.beginPath(); x.arc(64, 64, 56, 0, 7); x.fill();
    return new THREE.CanvasTexture(cv);
  }

  // --- Sun (start of the journey) ---
  const SUN_Z = -2;
  const sun = new THREE.Mesh(new THREE.SphereGeometry(3, 40, 40), new THREE.MeshBasicMaterial({ color: 0xffca57 }));
  sun.position.set(-5.5, 2.6, SUN_Z); scene.add(sun); sunLight.position.copy(sun.position);
  const sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,200,90,0.95)'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  sunGlow.scale.set(17, 17, 1); sunGlow.position.copy(sun.position); scene.add(sunGlow);

  // --- Planets down the corridor ---
  const PLAN = [
    { z: -13, r: 0.7, x: 3.6, y: -1.2, color: 0xb08a5a },
    { z: -22, r: 1.1, x: -4.2, y: 1.5, color: 0xd9a066 },
    { z: -31, r: 0.9, x: 4.4, y: 1.0, color: 0xc0603a },
    { z: -40, r: 1.7, x: -5, y: -1.9, color: 0xe0b070, ring: true },
    { z: -49, r: 1.2, x: 4.6, y: 1.7, color: 0x8ab4d8 },
  ];
  const planets = [];
  PLAN.forEach((p) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(p.r, 32, 32), new THREE.MeshStandardMaterial({ color: p.color, roughness: 1, metalness: 0 }));
    m.position.set(p.x, p.y, p.z); scene.add(m); planets.push(m);
    if (p.ring) { const ring = new THREE.Mesh(new THREE.RingGeometry(p.r * 1.4, p.r * 2.2, 48), new THREE.MeshBasicMaterial({ color: 0xd9c39a, side: THREE.DoubleSide, transparent: true, opacity: 0.5 })); ring.rotation.set(Math.PI * 0.42, 0.3, 0); m.add(ring); }
  });

  // --- Earth + Sri Lanka (the finale) ---
  const EARTH_Z = -58, EARTH_R = 2.6;
  const earth = new THREE.Group(); earth.position.set(0, 0, EARTH_Z); scene.add(earth);
  earth.add(new THREE.Mesh(new THREE.SphereGeometry(EARTH_R, 48, 48), new THREE.MeshStandardMaterial({ map: earthTexture(), roughness: 1, metalness: 0 })));
  const earthGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(120,180,255,0.55)'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  earthGlow.scale.set(EARTH_R * 4, EARTH_R * 4, 1); earth.add(earthGlow);
  // fill light so the camera-facing (day) side of Earth is lit on the dive-in
  const earthFill = new THREE.PointLight(0xcfe0ff, 1.8, 80);
  earthFill.position.set(8, 6, EARTH_Z + 16); scene.add(earthFill);
  const slLat = 7 * Math.PI / 180, slLon = 80 * Math.PI / 180;
  const slPos = new THREE.Vector3(EARTH_R * Math.cos(slLat) * Math.sin(slLon), EARTH_R * Math.sin(slLat), EARTH_R * Math.cos(slLat) * Math.cos(slLon));
  const marker = new THREE.Sprite(new THREE.SpriteMaterial({ map: pinTexture(), transparent: true, depthWrite: false }));
  marker.position.copy(slPos); marker.scale.set(0.6, 0.6, 1); earth.add(marker);
  const targetRot = -slLon;

  // floating "Sri Lanka" label (projected to screen at the finale)
  const slLabel = document.createElement('div');
  slLabel.id = 'sl-label';
  slLabel.style.cssText = 'position:fixed;z-index:3;transform:translate(-50%,-150%);pointer-events:none;opacity:0;transition:opacity .3s ease;text-align:center;white-space:nowrap;font-family:var(--font-mono),monospace;text-shadow:0 2px 14px rgba(0,0,0,.95)';
  slLabel.innerHTML = '<div style="font-size:.95rem;letter-spacing:.14em;color:#ff6b6b">📍 SRI LANKA</div><div style="font-size:.72rem;color:#cfd6e6;margin-top:2px">Pilimathalawa, Kandy · home</div>';
  document.body.appendChild(slLabel);

  // --- Moon orbiting Earth ---
  const MOON_ORBIT = 6.2;
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xbdbdbd, roughness: 1, metalness: 0 })
  );
  scene.add(moon);

  // --- Theme recolor hook (called by the theme picker) ---
  window.__setScene = (aHex, bHex, fogHex) => {
    PAL.a = aHex; PAL.b = bHex;
    const A = new THREE.Color(aHex), B = new THREE.Color(bHex);
    const col = pGeo.attributes.color;
    for (let i = 0; i < count; i++) {
      const c = A.clone().lerp(B, Math.random());
      col.array[i * 3] = c.r; col.array[i * 3 + 1] = c.g; col.array[i * 3 + 2] = c.b;
    }
    col.needsUpdate = true;
    if (fogHex != null && scene.fog) scene.fog.color.set(fogHex);
  };

  // --- Mouse parallax ---
  const mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5);
    mouse.y = (e.clientY / window.innerHeight - 0.5);
  });

  // --- Scroll drives camera depth ---
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  const clock = new THREE.Clock();
  const ss = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const tmp = new THREE.Vector3();
  function animate() {
    const t = clock.getElapsedTime();
    points.rotation.z = t * 0.015;           // stars swirl gently as we fly

    // scroll flies the camera down the solar corridor; the last stretch dives into Earth
    const scrollNorm = scrollY / (document.body.scrollHeight - window.innerHeight || 1);
    const finale = ss(0.82, 1, scrollNorm);

    let targetZ = FRONT - scrollNorm * JOURNEY;
    targetZ = targetZ * (1 - finale) + (EARTH_Z + 6.4) * finale;
    camera.position.z += (targetZ - camera.position.z) * 0.06;
    const tx = mouse.x * 3 * (1 - finale), ty = -mouse.y * 2 * (1 - finale);
    camera.position.x += (tx - camera.position.x) * 0.05;
    camera.position.y += (ty - camera.position.y) * 0.05;
    camera.lookAt(camera.position.x * 0.3 * (1 - finale), camera.position.y * 0.3 * (1 - finale), camera.position.z - 9);

    // sun + planets rotate
    sun.rotation.y += 0.0012;
    planets.forEach((m, i) => { m.rotation.y += 0.003 + i * 0.0009; });

    // moon orbits Earth
    const ma = t * 0.3;
    moon.position.set(
      earth.position.x + Math.cos(ma) * MOON_ORBIT,
      earth.position.y + Math.sin(ma * 0.5) * 1.4,
      earth.position.z + Math.sin(ma) * MOON_ORBIT
    );
    moon.rotation.y += 0.003;

    // Earth spins, then eases round to present Sri Lanka to the camera on the dive-in
    earth.scale.setScalar(1 + finale * 0.18);
    if (finale < 0.06) {
      earth.rotation.y += 0.0016;
    } else {
      let d = (targetRot - earth.rotation.y) % (Math.PI * 2);
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      earth.rotation.y += d * 0.07;
    }
    marker.scale.setScalar(0.55 + Math.sin(t * 3) * 0.08 + finale * 0.25);

    renderer.render(scene, camera);

    // project the Sri Lanka pin to screen space for the floating label
    marker.getWorldPosition(tmp);
    const proj = tmp.clone().project(camera);
    slLabel.style.left = (proj.x * 0.5 + 0.5) * window.innerWidth + 'px';
    slLabel.style.top = (-proj.y * 0.5 + 0.5) * window.innerHeight + 'px';
    slLabel.style.opacity = (finale > 0.3 && proj.z < 1) ? String(Math.min(1, finale)) : '0';

    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}

/* ============================================================
   ANIMATIONS (GSAP) + scroll reveal
============================================================ */
function initAnimations() {
  // Hero intro
  const tl = gsap.timeline({ delay: 0.2 });
  tl.to('.hero-title .line span', { y: '0%', duration: 1.1, stagger: 0.12, ease: 'power4.out' })
    .to('.hero-tag', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.7')
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .to('.hero-actions', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');
  gsap.set(['.hero-tag', '.hero-sub', '.hero-actions'], { y: 24 });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
        entry.target.classList.add('shown');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Count-up stats
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const end = +el.dataset.count;
      gsap.to({ v: 0 }, { v: end, duration: 1.6, ease: 'power2.out', onUpdate() { el.textContent = Math.round(this.targets()[0].v); } });
      statIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.num[data-count]').forEach((el) => statIO.observe(el));
}

/* ============================================================
   TILT CARD (photos)
============================================================ */
function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      gsap.to(el, { rotateY: (px - 0.5) * 16, rotateX: -(py - 0.5) * 16, duration: 0.4, ease: 'power2.out', transformPerspective: 800 });
      el.style.setProperty('--mx', px * 100 + '%');
      el.style.setProperty('--my', py * 100 + '%');
    });
    el.addEventListener('mouseleave', () => gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' }));
  });
}

/* ============================================================
   CUSTOM CURSOR
============================================================ */
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  const cursor = document.getElementById('cursor');
  const dot = document.getElementById('cursor-dot');
  let mx = 0, my = 0, cx = 0, cy = 0;
  window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
  (function loop() {
    cx += (mx - cx) * 0.15; cy += (my - cy) * 0.15;
    cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a, button, [data-hover], .work-item, .skill-card, .exp-card').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
}

/* ============================================================
   SMOOTH NAV — recomputes target on click so late font swaps
   / lazy images can't throw the landing position off
============================================================ */
function initSmoothNav() {
  const NAV_OFFSET = 84;
  function scrollToHash(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href');
      if (hash.length < 2) return;
      e.preventDefault();
      scrollToHash(hash);
      history.replaceState(null, '', hash);
    });
  });
  // Ensure fonts are loaded before any programmatic measure-based scroll
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {});
  }
}

/* ============================================================
   NAV active state + scroll progress
============================================================ */
function initScrollUI() {
  const fill = document.getElementById('scroll-fill');
  const sections = document.querySelectorAll('main .section');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    const sc = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
    fill.style.width = sc * 100 + '%';
    let current = '';
    sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
    links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  });
}

/* ============================================================
   TIKTOK-STYLE HYPE REEL
============================================================ */
function initHype() {
  const root = document.getElementById('hype');
  const stage = document.getElementById('hype-stage');
  const shotsBox = document.getElementById('hype-shots');
  const barsBox = document.getElementById('hype-bars');
  const launch = document.getElementById('hype-launch');
  const closeBtn = document.getElementById('hype-close');
  if (!root || !shotsBox) return;

  const SHOTS = [
    { t: 'hook' },
    { t: 'photo', img: '/photos/about.jpg', name: 'NIPUNA', sub: 'DATA SCIENTIST' },
    { t: 'tag', big: 'B.Sc. (Hons)\nDATA SCIENCE', small: 'SLIIT · Second Class ✦' },
    { t: 'tag', big: 'ASSOCIATE\nDATA SCIENTIST', small: '@ MAS HOLDINGS', badge: true },
    { t: 'viz', viz: 'capex', stamp: 'POWER BI' },
    { t: 'viz', viz: 'machine', stamp: 'MACHINE ANALYTICS' },
    { t: 'viz', viz: 'recon', stamp: 'RECONCILIATION' },
    { t: 'viz', viz: 'app', stamp: 'POWER APPS' },
    { t: 'number', num: '5', label: 'DATA PRODUCTS BUILT' },
    { t: 'number', num: '11', label: 'MONTHS @ MAS' },
    { t: 'skills', items: ['PYTHON', 'POWER BI', 'MACHINE LEARNING', 'SQL', 'REACT', 'DAX'] },
    { t: 'hero', big: 'MAIN CHARACTER\nENERGY' },
    { t: 'end' },
  ];
  const DUR = { hook: 1700, photo: 1900, tag: 1700, cut: 650, viz: 900, number: 1500, skills: 2100, hero: 1900, end: 999999 };

  // build shots
  SHOTS.forEach((s) => {
    const el = document.createElement('div');
    el.className = 'hype-shot shot-' + s.t;
    if (s.t === 'hook') {
      el.innerHTML = `<div class="hs-inner"><div class="hk-pov slam">POV:</div><div class="hk-sub slam d1">you just met</div><div class="hk-big glitch d2">THE WIZARD<br>OF DATA</div></div>`;
    } else if (s.t === 'photo') {
      el.innerHTML = `<img class="hs-img kenburns" src="${s.img}" alt=""><div class="hs-grad"></div><div class="hs-inner"><div class="hs-name slam">${s.name}</div><div class="hs-sub slam d1">${s.sub}</div></div>`;
      el.style.placeItems = 'end center'; el.style.paddingBottom = '70px';
    } else if (s.t === 'tag') {
      el.innerHTML = `<div class="hs-inner">${s.badge ? `<div class="tg-badge slam">${LOGOS.mas}</div>` : ''}<div class="tg-big slam ${s.badge ? 'd1' : ''}">${s.big}</div><div class="tg-small slam d2">${s.small}</div></div>`;
    } else if (s.t === 'cut') {
      el.innerHTML = `<img class="hs-img cut" src="${s.img}" alt=""><div class="hs-grad"></div><div class="hs-stamp slam">${s.stamp}</div>`;
    } else if (s.t === 'viz') {
      el.innerHTML = `<div class="hs-viz cut">${MOCKS[s.viz] || ''}</div><div class="hs-stamp slam">${s.stamp}</div>`;
    } else if (s.t === 'number') {
      el.innerHTML = `<div class="hs-inner"><div class="num pop">${s.num}</div><div class="num-label slam d1">${s.label}</div></div>`;
    } else if (s.t === 'skills') {
      el.innerHTML = `<div class="sk-wrap">${s.items.map((w, k) => `<span class="sk-word" style="animation-delay:${0.1 + k * 0.2}s">${w}</span>`).join('')}</div>`;
    } else if (s.t === 'hero') {
      el.innerHTML = `<div class="hero-big glitch">${s.big}</div>`;
    } else if (s.t === 'end') {
      el.innerHTML = `<div class="hs-inner"><div class="end-name slam">NIPUNA ABEYSEKARA</div><div class="end-cta slam d1">LET'S WORK TOGETHER</div><a class="end-mail slam d2" href="mailto:nipunaabeysekara2001@gmail.com">nipunaabeysekara2001@gmail.com</a><div class="end-actions"><button class="ea-primary" data-replay>↻ Replay</button><button data-close>✕ Close</button></div></div>`;
    }
    shotsBox.appendChild(el);
  });
  const shotEls = [...shotsBox.children];

  // progress bars (one per non-end shot)
  const barCount = SHOTS.filter((s) => s.t !== 'end').length;
  for (let i = 0; i < barCount; i++) {
    const seg = document.createElement('div'); seg.className = 'seg';
    seg.innerHTML = '<i></i>'; barsBox.appendChild(seg);
  }
  const bars = [...barsBox.children].map((b) => b.firstChild);

  // synthesized beat hit (no copyright, WebAudio)
  let actx = null;
  function beat(freq) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(freq, actx.currentTime);
      o.frequency.exponentialRampToValueAtTime(55, actx.currentTime + 0.18);
      g.gain.setValueAtTime(0.0001, actx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.22, actx.currentTime + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.28);
      o.connect(g).connect(actx.destination);
      o.start(); o.stop(actx.currentTime + 0.3);
    } catch (e) { /* audio unavailable */ }
  }

  let playing = false, cancel = false, waitT = null, waitR = null;
  const wait = (ms) => new Promise((r) => { waitR = r; waitT = setTimeout(() => { waitR = null; r(); }, ms); });
  const breakWait = () => { if (waitT) { clearTimeout(waitT); waitT = null; } if (waitR) { const r = waitR; waitR = null; r(); } };

  async function play() {
    if (playing) return;
    playing = true; cancel = false;
    document.body.classList.add('hype-on');
    root.setAttribute('aria-hidden', 'false');
    bars.forEach((b) => { b.style.transition = 'none'; b.style.width = '0%'; });

    for (let i = 0; i < SHOTS.length; i++) {
      if (cancel) break;
      shotEls.forEach((e) => e.classList.remove('on'));
      void shotEls[i].offsetWidth;        // restart CSS animations
      shotEls[i].classList.add('on');
      const dur = DUR[SHOTS[i].t] || 1500;
      beat(SHOTS[i].t === 'cut' ? 200 : SHOTS[i].t === 'number' ? 150 : 120);
      if (SHOTS[i].t !== 'end' && bars[i]) {
        bars[i].style.transition = 'none'; bars[i].style.width = '0%';
        void bars[i].offsetWidth;
        bars[i].style.transition = `width ${dur}ms linear`;
        bars[i].style.width = '100%';
      }
      await wait(dur);
    }
    playing = false; // stays on the end card until closed/replayed
  }
  function close() {
    cancel = true; breakWait(); playing = false;
    document.body.classList.remove('hype-on');
    root.setAttribute('aria-hidden', 'true');
    shotEls.forEach((e) => e.classList.remove('on'));
  }
  function replay() { cancel = true; breakWait(); playing = false; setTimeout(play, 60); }

  if (launch) launch.addEventListener('click', play);
  if (closeBtn) closeBtn.addEventListener('click', close);
  shotsBox.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) close();
    if (e.target.hasAttribute('data-replay')) replay();
  });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('hype-on')) close(); });
}

/* ============================================================
   WIZARDING TRAILER (produced cinematic video)
============================================================ */
function initWizard() {
  const root = document.getElementById('wizard');
  const scenesBox = document.getElementById('wiz-scenes');
  const flash = document.getElementById('wiz-flash');
  const fill = document.getElementById('wiz-progress-fill');
  const emberBox = document.getElementById('wiz-embers');
  const skip = document.getElementById('wiz-skip');
  const trigger = document.getElementById('dp-trailer');
  if (!root || !scenesBox) return;

  const SCENES = [
    { html: `<div><div class="wiz-kicker wiz-pop">✦ The Daily Prophet ✦</div><div class="wiz-sub wiz-ink d1">— presents —</div></div>`, dur: 2000 },
    { html: `<div><div class="wiz-line wiz-ink">RAW DATA,</div><div class="wiz-line wiz-ink d1">REAL DECISIONS.</div></div>`, dur: 2600 },
    { html: `<div><div class="wiz-frame wiz-pop"><img src="/photos/about.jpg" alt=""></div><div class="wiz-cap wiz-ink d1">Nipuna Abeysekara</div></div>`, dur: 2800 },
    { html: `<div><div class="wiz-kicker wiz-pop">Powers Discovered</div><div class="wiz-words" style="margin-top:22px"><span class="wiz-word">POWER BI</span><span class="wiz-word" style="animation-delay:.3s">MACHINE LEARNING</span><span class="wiz-word" style="animation-delay:.6s">POWER APPS</span></div></div>`, dur: 2600 },
    { html: `<div><div class="wiz-kicker wiz-pop">The Enchanted Ledgers</div><div class="wiz-plates" style="margin-top:26px"><div class="wiz-plate">${MOCKS.capex}</div><div class="wiz-plate">${MOCKS.machine}</div><div class="wiz-plate">${MOCKS.recon}</div></div></div>`, dur: 2800 },
    { html: `<div><div class="wiz-line wiz-ink">From SLIIT…</div><div class="wiz-line wiz-ink d1">…to MAS Holdings.</div></div>`, dur: 2400 },
    { html: `<div class="wiz-masthead wiz-pop">THE WIZARD<br>OF DATA</div>`, dur: 2400 },
    { end: true, html: `<div><div class="wiz-kicker wiz-pop">✦ Fin ✦</div><div class="wiz-end-name wiz-ink d1">NIPUNA ABEYSEKARA</div><div class="wiz-end-role">Associate Data Scientist · MAS Holdings</div><div class="wiz-owl">Owl post — <a href="mailto:nipunaabeysekara2001@gmail.com">nipunaabeysekara2001@gmail.com</a></div><div class="wiz-actions"><button class="wa-primary" data-replay>↻ Replay</button><button data-close>Return to the paper ✕</button></div></div>`, dur: 999999 },
  ];

  // build scenes
  SCENES.forEach((s) => {
    const el = document.createElement('div');
    el.className = 'wiz-scene';
    el.innerHTML = s.html;
    scenesBox.appendChild(el);
  });
  const sceneEls = [...scenesBox.children];

  // gold embers
  if (emberBox && !emberBox.childElementCount) {
    for (let i = 0; i < 30; i++) {
      const e = document.createElement('span');
      e.className = 'dp-ember';
      const size = 3 + Math.random() * 6;
      e.style.left = Math.random() * 100 + '%';
      e.style.width = e.style.height = size + 'px';
      e.style.animationDuration = 7 + Math.random() * 9 + 's';
      e.style.animationDelay = -Math.random() * 12 + 's';
      e.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
      emberBox.appendChild(e);
    }
  }

  // synthesized magical chime (no copyright)
  let actx = null;
  function chime(base) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      [base, base * 1.5, base * 2].forEach((fr, k) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = 'sine'; o.frequency.value = fr;
        const t0 = actx.currentTime + k * 0.02;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.12, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.9);
        o.connect(g).connect(actx.destination);
        o.start(t0); o.stop(t0 + 0.95);
      });
    } catch (e) { /* audio off */ }
  }

  let playing = false, cancel = false, waitT = null, waitR = null;
  const wait = (ms) => new Promise((r) => { waitR = r; waitT = setTimeout(() => { waitR = null; r(); }, ms); });
  const breakWait = () => { if (waitT) { clearTimeout(waitT); waitT = null; } if (waitR) { const r = waitR; waitR = null; r(); } };
  function doFlash() { flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }

  async function play() {
    if (playing) return;
    playing = true; cancel = false;
    document.body.classList.add('wiz-on');
    root.setAttribute('aria-hidden', 'false');
    for (let i = 0; i < SCENES.length; i++) {
      if (cancel) break;
      doFlash(); chime(SCENES[i].end ? 523 : 660 + i * 30);
      sceneEls.forEach((e) => e.classList.remove('on'));
      void sceneEls[i].offsetWidth;
      sceneEls[i].classList.add('on');
      if (!SCENES[i].end) fill.style.width = (i / (SCENES.length - 2)) * 100 + '%';
      await wait(SCENES[i].dur);
    }
    playing = false;
  }
  function close() {
    cancel = true; breakWait(); playing = false;
    document.body.classList.remove('wiz-on');
    root.setAttribute('aria-hidden', 'true');
    sceneEls.forEach((e) => e.classList.remove('on'));
    fill.style.width = '0%';
  }
  function replay() { cancel = true; breakWait(); playing = false; setTimeout(play, 70); }

  if (trigger) trigger.addEventListener('click', play);
  if (skip) skip.addEventListener('click', close);
  scenesBox.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) close();
    if (e.target.hasAttribute('data-replay')) replay();
  });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && document.body.classList.contains('wiz-on')) close(); });
}

/* ============================================================
   CINEMATIC TOUR + IDLE SHOWREEL
============================================================ */
function initCinema() {
  const IDLE_MS = 60_000; // idle time before the showreel auto-plays (set 600000 for 10 min)
  const cine = document.getElementById('cine');
  const capBox = document.getElementById('cine-caption');
  const chapterEl = document.getElementById('cine-chapter');
  const titleEl = document.getElementById('cine-title');
  const detailEl = document.getElementById('cine-detail');
  const fill = document.getElementById('cine-progress-fill');
  const skipBtn = document.getElementById('cine-skip');
  const watchBtn = document.getElementById('watch-intro');

  const prophet = document.getElementById('prophet');
  const watchProphetBtn = document.getElementById('dp-watch');

  // Sci-fi site reel (window scroll)
  const SCENES = [
    { id: 'hero', chapter: 'Prologue', title: 'Nipuna Abeysekara', detail: 'Associate Data Scientist at MAS Holdings · B.Sc. (Hons) Data Science graduate.', hold: 4200 },
    { id: 'about', chapter: 'Chapter 01', title: 'About', detail: 'Turning messy data into clear, decision-ready insight — across the full analytics stack.', hold: 4200 },
    { id: 'experience', chapter: 'Chapter 02', title: 'Experience', detail: 'At MAS Innovation & Technology: Power BI dashboards, machine reconciliation and Power Apps.', hold: 4600 },
    { id: 'skills', chapter: 'Chapter 03', title: 'Skills & Tooling', detail: 'Python · Power BI · DAX · machine learning · MERN full-stack.', hold: 4000 },
    { id: 'work', chapter: 'Chapter 04', title: 'Selected Work', detail: 'CapEx, machine analysis, reconciliation & a Power App — plus academic BI, ML and full-stack builds.', hold: 4800 },
    { id: 'education', chapter: 'Chapter 05', title: 'Education', detail: 'B.Sc. (Hons) Information Technology, Data Science — SLIIT, Second Class.', hold: 4200 },
    { id: 'gallery', chapter: 'Chapter 06', title: 'Moments', detail: 'A few frames from the journey — and the work behind it.', hold: 4000 },
    { id: 'contact', chapter: 'Finale', title: "Let's work together", detail: 'nipunaabeysekara2001@gmail.com', hold: 4600 },
  ];

  // Daily Prophet reel (scrolls inside the newspaper overlay)
  const PROPHET_SCENES = [
    { sel: '.dp-title', chapter: 'Extra! Extra!', title: 'The Daily Prophet', detail: 'A special dispatch on a rising data scientist.', hold: 4200 },
    { sel: '.dp-headline', chapter: 'Front Page', title: 'The Wizard of Data', detail: 'SLIIT graduate Nipuna Abeysekara turns raw factory data into decisions with moving dashboards.', hold: 4800 },
    { sel: '.living-photo', chapter: 'The Sorcerer', title: 'Nipuna Abeysekara', detail: 'Associate Data Scientist — from Twinery to the MCAP / Machine Build team.', hold: 4600 },
    { sel: '.dp-box', chapter: 'The Grimoire', title: 'Powers & Enchantments', detail: 'Python · Power BI · DAX · Machine Learning · Power Apps.', hold: 4200 },
    { sel: '.dp-feature-title', chapter: 'Special Report', title: 'The Enchanted Ledgers', detail: 'CapEx, machine census, reconciliation, Solution Box & a Power App.', hold: 4800 },
    { sel: '.dp-classified', chapter: 'Owl Post', title: 'Send an Owl', detail: 'nipunaabeysekara2001@gmail.com', hold: 4600 },
  ];

  let touring = false, cancelReq = false, manual = false;
  let waitTimer = null, waitResolve = null, idleTimer = null;

  function wait(ms) {
    return new Promise((res) => { waitResolve = res; waitTimer = setTimeout(() => { waitResolve = null; res(); }, ms); });
  }
  function breakWait() {
    if (waitTimer) { clearTimeout(waitTimer); waitTimer = null; }
    if (waitResolve) { const r = waitResolve; waitResolve = null; r(); }
  }
  function sceneEl(sc) { return sc.sel ? document.querySelector(sc.sel) : document.getElementById(sc.id); }
  function goToScene(sc, mode) {
    const el = sceneEl(sc);
    if (!el) return;
    if (mode === 'prophet') {
      const top = el.getBoundingClientRect().top - prophet.getBoundingClientRect().top + prophet.scrollTop - window.innerHeight * 0.24;
      prophet.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    } else {
      const y = sc.id === 'hero' ? 0 : el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  function showCaption(sc) {
    chapterEl.textContent = sc.chapter;
    titleEl.textContent = sc.title;
    detailEl.textContent = sc.detail;
    capBox.classList.add('show');
  }

  // block manual scrolling while the reel plays (but keep skip working)
  const blocker = (e) => { if (touring) e.preventDefault(); };

  async function runTour(mode, isManual) {
    if (touring) return;
    const inProphet = document.body.classList.contains('prophet-mode');
    if (mode === 'site' && inProphet) return;
    if (mode === 'prophet' && !inProphet) return;
    touring = true; cancelReq = false; manual = !!isManual;
    const scenes = mode === 'prophet' ? PROPHET_SCENES : SCENES;
    document.body.classList.add('cinema');
    cine.classList.toggle('prophet-reel', mode === 'prophet');
    const note = document.getElementById('cine-idle-note');
    if (note) note.textContent = isManual
      ? 'Playing intro — press Esc or Skip to stop anytime'
      : 'Showreel playing — press any key, scroll or click to explore on your own';
    window.addEventListener('wheel', blocker, { passive: false });
    window.addEventListener('touchmove', blocker, { passive: false });

    for (let i = 0; i < scenes.length; i++) {
      if (cancelReq) break;
      goToScene(scenes[i], mode);
      fill.style.width = (i / (scenes.length - 1)) * 100 + '%';
      await wait(1200);            // let the scroll settle
      if (cancelReq) break;
      showCaption(scenes[i]);
      await wait(scenes[i].hold || 4000);
      capBox.classList.remove('show');
      await wait(500);
    }
    endTour();
  }
  function endTour() {
    touring = false;
    document.body.classList.remove('cinema', 'cinema-idle');
    cine.classList.remove('prophet-reel');
    capBox.classList.remove('show');
    fill.style.width = '0%';
    window.removeEventListener('wheel', blocker, { passive: false });
    window.removeEventListener('touchmove', blocker, { passive: false });
    resetIdle();
  }
  function stopTour() { if (!touring) return; cancelReq = true; breakWait(); }

  function resetIdle() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      if (touring) return;
      runTour(document.body.classList.contains('prophet-mode') ? 'prophet' : 'site', false);
    }, IDLE_MS);
  }

  // user activity: reset idle timer; deliberate input during an idle reel stops it
  ['mousemove', 'mousedown', 'keydown', 'wheel', 'touchstart', 'scroll'].forEach((ev) => {
    window.addEventListener(ev, () => {
      if (touring) {
        if (!manual && ev !== 'scroll' && ev !== 'mousemove') stopTour(); // wake from showreel
      } else {
        resetIdle();
      }
    }, { passive: true });
  });
  // inner newspaper scrolling also counts as activity
  if (prophet) prophet.addEventListener('scroll', () => { if (!touring) resetIdle(); }, { passive: true });

  if (skipBtn) skipBtn.addEventListener('click', stopTour);
  if (watchBtn) watchBtn.addEventListener('click', () => runTour('site', true));
  if (watchProphetBtn) watchProphetBtn.addEventListener('click', () => runTour('prophet', true));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') stopTour(); });

  resetIdle();
}

/* ============================================================
   THEME TOGGLE — Sci-Fi <-> Daily Prophet
============================================================ */
function initTheme() {
  const sw = document.getElementById('theme-switch');
  const swBtn = document.getElementById('theme-switch-btn');
  const menu = document.getElementById('theme-menu');
  const labelEl = document.getElementById('theme-switch-label');
  const prophet = document.getElementById('prophet');
  const exit = document.getElementById('dp-exit');

  // whimsical dateline
  const dateEl = document.getElementById('dp-date');
  if (dateEl) {
    const d = new Date();
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    dateEl.textContent = `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  // floating golden embers
  const emberBox = document.getElementById('dp-embers');
  if (emberBox && !emberBox.childElementCount) {
    for (let i = 0; i < 28; i++) {
      const e = document.createElement('span');
      e.className = 'dp-ember';
      const size = 3 + Math.random() * 6;
      e.style.left = Math.random() * 100 + '%';
      e.style.width = e.style.height = size + 'px';
      e.style.animationDuration = 7 + Math.random() * 9 + 's';
      e.style.animationDelay = -Math.random() * 12 + 's';
      e.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
      emberBox.appendChild(e);
    }
  }

  // ---- ambient music ----
  const audio = document.getElementById('dp-audio');
  const musicBtn = document.getElementById('dp-music');
  const MAX_VOL = 0.32;
  let fadeTimer = null;
  let wantMusic = localStorage.getItem('dp-music') !== 'off'; // default on
  let audioOk = true;

  if (audio) {
    audio.addEventListener('error', () => { audioOk = false; }); // no file yet: control stays visible, just silent
  }
  function fadeTo(target, done) {
    if (!audio) return;
    clearInterval(fadeTimer);
    fadeTimer = setInterval(() => {
      const step = 0.04;
      if (Math.abs(audio.volume - target) <= step) {
        audio.volume = target; clearInterval(fadeTimer); if (done) done();
      } else {
        audio.volume += audio.volume < target ? step : -step;
      }
    }, 40);
  }
  function playMusic() {
    if (!audio || !audioOk || !wantMusic) return;
    audio.volume = 0;
    const p = audio.play();
    if (p && p.catch) p.catch(() => { /* missing file / blocked */ });
    fadeTo(MAX_VOL);
  }
  function stopMusic() {
    if (!audio) return;
    fadeTo(0, () => audio.pause());
  }
  function updateMusicBtn() {
    if (musicBtn) musicBtn.classList.toggle('muted', !wantMusic);
  }
  updateMusicBtn();
  if (musicBtn) {
    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      wantMusic = !wantMusic;
      localStorage.setItem('dp-music', wantMusic ? 'on' : 'off');
      updateMusicBtn();
      if (wantMusic && document.body.classList.contains('prophet-mode')) playMusic();
      else stopMusic();
    });
  }

  let exiting = false;
  function setMode(on) {
    if (on) {
      exiting = false;
      document.body.classList.remove('prophet-exit');
      document.body.classList.add('prophet-mode');
      prophet.setAttribute('aria-hidden', 'false');
      prophet.scrollTop = 0;
      playMusic();
    } else {
      stopMusic();
      if (exiting) return;
      exiting = true;
      document.body.classList.add('prophet-exit'); // spin-out
      window.setTimeout(() => {
        document.body.classList.remove('prophet-mode', 'prophet-exit');
        prophet.setAttribute('aria-hidden', 'true');
        exiting = false;
      }, 680);
    }
  }

  // ---- theme picker ----
  const PALETTES = { scifi: [0x6c5cff, 0x00e5c8, 0x05060a], realm: [0x9b1c1c, 0xc8a24a, 0x0b0908], dark: [0x2a9d8f, 0xe0a13b, 0x04070a] };
  const LABELS = { scifi: 'Sci-Fi', realm: 'Iron Realm', dark: 'Dark' };
  function setActive(name) {
    if (menu) menu.querySelectorAll('button[data-theme]').forEach((b) => b.classList.toggle('active', b.dataset.theme === name));
  }
  function applyTheme(name) {
    if (name === 'prophet') { setMode(true); if (sw) sw.classList.remove('open'); return; }
    if (document.body.classList.contains('prophet-mode')) setMode(false);
    document.body.classList.remove('theme-realm', 'theme-dark');
    if (name === 'realm') document.body.classList.add('theme-realm');
    if (name === 'dark') document.body.classList.add('theme-dark');
    const p = PALETTES[name] || PALETTES.scifi;
    if (window.__setScene) window.__setScene(p[0], p[1], p[2]);
    if (labelEl) labelEl.textContent = LABELS[name] || name;
    setActive(name);
    if (sw) sw.classList.remove('open');
  }
  if (swBtn) swBtn.addEventListener('click', (e) => { e.stopPropagation(); const open = sw.classList.toggle('open'); swBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); });
  if (menu) menu.addEventListener('click', (e) => { const b = e.target.closest('button[data-theme]'); if (b) { e.stopPropagation(); applyTheme(b.dataset.theme); } });
  document.addEventListener('click', () => { if (sw) sw.classList.remove('open'); });
  if (exit) exit.addEventListener('click', () => setMode(false));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('prophet-mode')) setMode(false);
  });
}

/* ============================================================
   LOADER
============================================================ */
function runLoader(onDone) {
  const fill = document.getElementById('loader-fill');
  const pct = document.getElementById('loader-pct');
  const loader = document.getElementById('loader');
  let p = 0;
  const tick = setInterval(() => {
    p += Math.random() * 18;
    if (p >= 100) { p = 100; clearInterval(tick); setTimeout(finish, 250); }
    fill.style.width = p + '%';
    pct.textContent = Math.round(p);
  }, 120);
  function finish() {
    loader.classList.add('done');
    onDone();
  }
}

/* ============================================================
   BOOT
============================================================ */
buildContent();
buildGallery();
initThree();
initTilt();
initCursor();
initScrollUI();
initSmoothNav();
initTheme();
initCinema();
initHype();
initWizard();

if (reduceMotion) {
  document.getElementById('loader').classList.add('done');
  document.querySelectorAll('.hero-tag, .hero-sub, .hero-actions').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
  document.querySelectorAll('.hero-title .line span').forEach((el) => { el.style.transform = 'none'; });
  document.querySelectorAll('.num[data-count]').forEach((el) => { el.textContent = el.dataset.count; });
} else {
  runLoader(initAnimations);
}
