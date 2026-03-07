/* =============================================
   PORTFOLIO VINN — script.js
   ============================================= */

/* ── CURSOR ── */
const C = document.getElementById('cur');
const R = document.getElementById('cring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  C.style.left = mx + 'px';
  C.style.top  = my + 'px';
});

(function loop() {
  rx += (mx - rx) * .1;
  ry += (my - ry) * .1;
  R.style.left = rx + 'px';
  R.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button, .pc, .sk, .soc').forEach(el => {
  el.addEventListener('mouseenter', () => {
    C.style.width  = '16px';
    C.style.height = '16px';
    R.style.width  = '40px';
    R.style.height = '40px';
  });
  el.addEventListener('mouseleave', () => {
    C.style.width  = '8px';
    C.style.height = '8px';
    R.style.width  = '28px';
    R.style.height = '28px';
  });
});

/* ── THEME TOGGLE ── */
function toggleTheme() {
  const h = document.documentElement;
  const isDark = h.dataset.theme === 'dark';
  h.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('knob').textContent = isDark ? '☀️' : '🌙';
}

/* ── MOBILE MENU ── */
function toggleMob() {
  document.getElementById('ham').classList.toggle('open');
  document.getElementById('mob').classList.toggle('open');
}
function closeMob() {
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mob').classList.remove('open');
}

/* ── TRANSLATIONS ── */
const T = {
  id: {
    'n-about':   'Tentang',
    'n-skills':  'Skill',
    'n-proj':    'Proyek',
    'n-contact': 'Kontak',
    'mn-about':   'Tentang',
    'mn-skills':  'Skill',
    'mn-proj':    'Proyek',
    'mn-contact': 'Kontak',
    'h-tag':  'Tersedia untuk kolaborasi',
    'h-hey':  'Halo,',
    'h-sub':  'Full Stack Developer & SMK student yang suka membangun produk digital dari nol — dari API backend hingga tampilan yang clean dan smooth.',
    'h-cta1': 'Lihat Proyek',
    'h-cta2': 'Kontak Saya',
    'a-role': 'Full Stack Developer',
    'a-bio':  'Pelajar SMK TKJ kelas 3 di Jawa Timur. 5+ tahun coding, suka eksplorasi teknologi baru dan membangun hal yang benar-benar berguna.',
    'a-s1':   'Thn coding',
    'a-s2':   'Proyek',
    'a-s3':   'Semangat',
    'a-label': 'Tentang Saya',
    'a-title': 'Halo, saya Vinn 👋',
    'a-p1': 'Saya pelajar SMK kelas 3 jurusan TKJ yang sudah coding selama 5+ tahun. Dimulai dari rasa penasaran oprek kode, berkembang jadi passion yang serius.',
    'a-p2': 'Saya suka fullstack development — membangun sesuatu end-to-end, dari database dan API sampai tampilan yang rapi dan responsif di semua perangkat.',
    'a-p3': 'Di luar coding, saya aktif berbagi konten teknologi di YouTube dan TikTok. Selalu terbuka untuk kolaborasi dan diskusi proyek seru.',
    'a-cta': 'Mari Berkenalan',
    'sk-label': 'Kemampuan',
    'sk-title': 'Tech Stack',
    'sk-sub':   'Teknologi yang saya pelajari dan gunakan dalam proyek nyata.',
    'p-label': 'Proyek',
    'p-title': 'Yang Sudah Saya Buat',
    'p-sub':   '8 proyek nyata dari ide hingga deployment.',
    'p1t': 'WhatsApp Bot',
    'p1d': 'Bot WhatsApp multi-fitur: command modular, auto-reply keyword, integrasi API cuaca & berita, panel admin via chat. Aktif dipakai komunitas.',
    'p2t': 'Subnet Mask Calculator',
    'p2d': 'Kalkulator subnet web: IP range, broadcast, wildcard mask, jumlah host, CIDR notation otomatis. Visualisasi tabel + export PDF.',
    'p3t': 'Web Store',
    'p3d': 'E-commerce fullstack: katalog produk, keranjang belanja, checkout, manajemen order, dashboard admin. REST API + React frontend responsif.',
    'p4t': 'Project Management App',
    'p4d': 'Board Kanban drag-and-drop, assignment tugas, deadline tracker, notifikasi real-time via Socket.io. Untuk tim kecil dan freelancer.',
    'p5t': 'Auth & User Management',
    'p5d': 'JWT + refresh token, Google OAuth, role-based access control, audit log, dashboard admin. Siap pakai sebagai boilerplate.',
    'p6t': 'Network Monitor Dashboard',
    'p6d': 'Monitoring jaringan real-time: ping, traceroute, status device, bandwidth, auto-alert offline. Dibangun untuk lab TKJ sekolah.',
    'p7t': 'Weather Forecast App',
    'p7d': 'Cuaca real-time: animasi langit, prakiraan 7 hari, UV index, humidity, angin, peta hujan. Data dari OpenWeather API.',
    'p8t': 'Blog & CMS Platform',
    'p8d': 'Rich text editor Quill.js, manajemen artikel & kategori, komentar, SEO meta tag, panel admin lengkap. Self-hosted.',
    'c-label': 'Kontak',
    'c-title': 'Mari Terhubung',
    'c-desc':  'Mau kolaborasi, ngobrol soal coding, atau diskusi proyek? Reach out lewat sosmed di bawah atau kirim pesan!',
    'f-name':  'Nama',
    'f-email': 'Email',
    'f-msg':   'Pesan',
    'f-send':  'Kirim Pesan →',
    'foot':    'Credit By Vinn · 2026',
  },
  en: {
    'n-about':   'About',
    'n-skills':  'Skills',
    'n-proj':    'Projects',
    'n-contact': 'Contact',
    'mn-about':   'About',
    'mn-skills':  'Skills',
    'mn-proj':    'Projects',
    'mn-contact': 'Contact',
    'h-tag':  'Available for collaboration',
    'h-hey':  'Hey,',
    'h-sub':  "Full Stack Developer & SMK student who loves building digital products from scratch — from backend APIs to clean, smooth frontends.",
    'h-cta1': 'View Projects',
    'h-cta2': 'Contact Me',
    'a-role': 'Full Stack Developer',
    'a-bio':  'Grade 12 SMK student in East Java. 5+ years coding, loves exploring new tech and building things that truly matter.',
    'a-s1':   'Yrs coding',
    'a-s2':   'Projects',
    'a-s3':   'Passion',
    'a-label': 'About Me',
    'a-title': "Hey, I'm Vinn 👋",
    'a-p1': "I'm a grade 12 SMK student in Computer Networking (TKJ) who has been coding for 5+ years. Curiosity turned into serious passion.",
    'a-p2': "I love fullstack development — building things end-to-end from databases and APIs to clean, responsive UIs on every device.",
    'a-p3': "Outside coding I share tech content on YouTube and TikTok. Always open to collaborations and cool project discussions.",
    'a-cta': "Let's Connect",
    'sk-label': 'Skills',
    'sk-title': 'Tech Stack',
    'sk-sub':   'Technologies I have learned and actively use in real projects.',
    'p-label': 'Projects',
    'p-title': "What I've Built",
    'p-sub':   '8 real projects from idea to deployment.',
    'p1t': 'WhatsApp Bot',
    'p1d': 'Multi-feature bot: modular commands, keyword auto-reply, weather & news API, admin panel via chat. Actively used by a community.',
    'p2t': 'Subnet Mask Calculator',
    'p2d': 'Web subnet calc: IP range, broadcast, wildcard mask, host count, CIDR notation. Table view + PDF export.',
    'p3t': 'Web Store',
    'p3d': 'Fullstack e-commerce: product catalog, cart, checkout, order management, admin dashboard. REST API + responsive React frontend.',
    'p4t': 'Project Management App',
    'p4d': 'Drag-and-drop Kanban, task assignment, deadline tracking, real-time notifications via Socket.io. For small teams and freelancers.',
    'p5t': 'Auth & User Management',
    'p5d': 'JWT + refresh tokens, Google OAuth, role-based access, audit log, admin dashboard. Ready as a project boilerplate.',
    'p6t': 'Network Monitor Dashboard',
    'p6d': 'Real-time network monitoring: ping, traceroute, device status, bandwidth, auto-alert for offline devices.',
    'p7t': 'Weather Forecast App',
    'p7d': 'Real-time weather: sky animations, 7-day forecast, UV index, humidity, wind, interactive rain map. OpenWeather API.',
    'p8t': 'Blog & CMS Platform',
    'p8d': 'Quill.js rich editor, article & category management, comments, SEO meta tags, full admin panel. Self-hosted.',
    'c-label': 'Contact',
    'c-title': "Let's Connect",
    'c-desc':  'Want to collaborate, chat about code, or discuss a project? Reach out via social media or send a message!',
    'f-name':  'Name',
    'f-email': 'Email',
    'f-msg':   'Message',
    'f-send':  'Send Message →',
    'foot':    'Credit By Vinn · 2026',
  }
};

let lang = 'id';

function toggleLang() {
  lang = lang === 'id' ? 'en' : 'id';
  document.getElementById('lbtn').textContent = lang === 'id' ? 'EN' : 'ID';
  document.documentElement.lang = lang;

  const d = T[lang];
  document.querySelectorAll('[data-id]').forEach(el => {
    const k = el.getAttribute('data-id');
    if (d[k] !== undefined) el.textContent = d[k];
  });

  // Hero name butuh update manual karena ada di span terpisah
  document.getElementById('hname').textContent = lang === 'id' ? 'saya Vinn' : "I'm Vinn";
}

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: .07 });

document.querySelectorAll('.rv, .rv2').forEach(el => obs.observe(el));

/* ── ACTIVE NAV ── */
window.addEventListener('scroll', () => {
  const y = window.scrollY + 80;
  document.querySelectorAll('section[id]').forEach(s => {
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('act', a.getAttribute('href') === '#' + s.id);
      });
    }
  });
});

/* ── CONTACT FORM ── */
function sendMsg() {
  const n = document.getElementById('fn').value.trim();
  const e = document.getElementById('fe').value.trim();
  const m = document.getElementById('fm').value.trim();

  if (!n || !e || !m) {
    alert(lang === 'id' ? 'Mohon isi semua field!' : 'Please fill all fields!');
    return;
  }

  const text = `Halo Vinn! 👋\n\nNama: ${n}\nEmail: ${e}\n\nPesan:\n${m}`;
  const url  = `https://wa.me/6285704359451?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}