// Nội dung đã được auth.js giải mã trước khi gọi hàm này.
window.__bootApp = () => {
  'use strict';

  const CONTENT = window.CONTENT;
  const view = document.getElementById('view');
  if (!CONTENT || !Array.isArray(CONTENT.docs)) {
    view.innerHTML = '<div style="padding:40px;font-family:monospace">Không tải được nội dung. Chạy <b>node build.js</b> rồi mở lại trang.</div>';
    return;
  }

  const STORAGE_KEY = 'hackroadmap.v1';
  const docs = [...CONTENT.docs].sort((a, b) => a.order - b.order);
  const docById = new Map(docs.map((doc) => [doc.id, doc]));

  const els = {
    topnav: document.getElementById('topnav'),
    sidebar: document.getElementById('sidebar'),
    toc: document.getElementById('toc'),
    sideFoot: document.getElementById('sideFoot'),
    sidePercent: document.getElementById('sidePercent'),
    sideBarFill: document.getElementById('sideBarFill'),
    sideDocs: document.getElementById('sideDocs'),
    menuBtn: document.getElementById('menuBtn'),
    scrim: document.getElementById('sidebarScrim'),
    themeToggle: document.getElementById('themeToggle'),
    searchTrigger: document.getElementById('searchTrigger'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    searchClose: document.getElementById('searchClose'),
    bookTrigger: document.getElementById('bookTrigger'),
    bookCount: document.getElementById('bookCount'),
    bookOverlay: document.getElementById('bookOverlay'),
    bookBody: document.getElementById('bookBody'),
    bookClose: document.getElementById('bookClose'),
    noteOverlay: document.getElementById('noteOverlay'),
    noteTitle: document.getElementById('noteTitle'),
    noteKicker: document.getElementById('noteKicker'),
    noteInput: document.getElementById('noteInput'),
    noteSave: document.getElementById('noteSave'),
    noteCancel: document.getElementById('noteCancel'),
    noteClose: document.getElementById('noteClose'),
    noteDelete: document.getElementById('noteDelete'),
    toast: document.getElementById('toast'),
    readProgress: document.querySelector('#readProgress span'),
    main: document.getElementById('main'),
    topbar: document.querySelector('.topbar'),
  };

  let state = loadState();
  let currentDoc = null;
  let currentHeadings = [];
  let activeHeadingId = '';
  let activeSectionId = '';
  let scrollTicking = false;
  let toastTimer = null;
  let searchIndex = [];
  let searchResults = [];
  let searchActive = -1;
  let noteTarget = null;
  let installPrompt = null;

  const ICONS = {
    arrow: '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevron: '<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M6 3.5l4.5 4.5L6 12.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    check: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 8.5l3.2 3.2L13 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    bookmark: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 2.5h8v11L8 10.8 4 13.5v-11z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    pencil: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M10.8 2.8l2.4 2.4L6 12.4l-3.2.8.8-3.2 7.2-7.2z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  };

  /* ---------------- storage ---------------- */

  function objectOrEmpty(value) {
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }

  function normalizeMarks(value) {
    const out = {};
    for (const [docId, sections] of Object.entries(objectOrEmpty(value))) {
      if (!sections || typeof sections !== 'object') continue;
      for (const [sectionId, ts] of Object.entries(sections)) {
        if (!sectionId) continue;
        if (!out[docId]) out[docId] = {};
        out[docId][sectionId] = Number(ts) || Date.now();
      }
    }
    return out;
  }

  function normalizeNotes(value) {
    const out = {};
    for (const [docId, sections] of Object.entries(objectOrEmpty(value))) {
      if (!sections || typeof sections !== 'object') continue;
      for (const [sectionId, note] of Object.entries(sections)) {
        const text = typeof note === 'string' ? note : note && typeof note.text === 'string' ? note.text : '';
        if (!sectionId || !text.trim()) continue;
        if (!out[docId]) out[docId] = {};
        out[docId][sectionId] = {
          text: text.slice(0, 4000),
          ts: Number(note && note.ts) || Date.now(),
        };
      }
    }
    return out;
  }

  function normalizeState(raw) {
    const source = objectOrEmpty(raw);
    const last = source.last && typeof source.last === 'object' && typeof source.last.doc === 'string'
      ? { doc: source.last.doc, section: String(source.last.section || ''), ts: Number(source.last.ts) || Date.now() }
      : null;
    return {
      version: 2,
      theme: source.theme === 'light' || source.theme === 'dark' ? source.theme : null,
      tasks: objectOrEmpty(source.tasks),
      read: normalizeMarks(source.read),
      review: normalizeMarks(source.review),
      notes: normalizeNotes(source.notes),
      last,
      hideDone: Boolean(source.hideDone),
      tocHidden: Boolean(source.tocHidden),
    };
  }

  function loadState() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      const next = normalizeState(raw);
      // Bản cũ tự tick "đã đọc" theo thời gian cuộn, không đáng tin — bỏ qua visited.
      if (next.theme === null && (raw.theme === 'light' || raw.theme === 'dark')) next.theme = raw.theme;
      return next;
    } catch (error) {
      return normalizeState({});
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      /* storage can fail in private mode — keep the session working */
    }
  }

  /* ---------------- utilities ---------------- */

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function normalizeDetailed(value) {
    let text = '';
    const map = [];
    for (let i = 0; i < value.length; i += 1) {
      const char = value[i];
      let normalized;
      if (char === 'đ') normalized = 'd';
      else if (char === 'Đ') normalized = 'D';
      else normalized = char.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      for (let k = 0; k < normalized.length; k += 1) {
        text += normalized[k];
        map.push(i);
      }
    }
    return { text, map };
  }

  function normalizeQuery(value) {
    return normalizeDetailed(value).text.replace(/\s+/g, ' ').trim();
  }

  function shortTitle(title) {
    const cleaned = title.replace(/^\d+(\.\d+)*\.?\s*/, '').split(/\s+[—–]\s+/)[0].trim();
    return cleaned.length > 44 ? `${cleaned.slice(0, 43)}…` : cleaned;
  }

  function weekCount(doc) {
    let max = 0;
    for (const week of doc.weeks) {
      const numbers = week.label.match(/\d+/g) || [];
      for (const number of numbers) max = Math.max(max, Number(number));
    }
    return max || doc.weeks.length;
  }

  function findHeading(doc, id) {
    if (!id) return null;
    for (const item of doc.toc) {
      if (item.id === id) return item;
      for (const child of item.children) {
        if (child.id === id) return child;
      }
    }
    return null;
  }

  function timeAgo(timestamp) {
    if (!timestamp) return 'chưa bắt đầu';
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'vừa xong';
    if (minutes < 60) return `${minutes} phút trước`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} giờ trước`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} ngày trước`;
    return new Date(timestamp).toLocaleDateString('vi-VN');
  }

  function barHtml(percent, width = 16) {
    const filled = Math.max(0, Math.min(width, Math.round((percent / 100) * width)));
    return `<span class="bar-on">${'█'.repeat(filled)}</span><span class="bar-off">${'░'.repeat(width - filled)}</span>`;
  }

  function sectionRead(doc, sectionId) {
    return Boolean(state.read[doc.id] && state.read[doc.id][sectionId]);
  }

  function sectionReview(doc, sectionId) {
    return Boolean(state.review[doc.id] && state.review[doc.id][sectionId]);
  }

  function sectionNote(doc, sectionId) {
    const note = state.notes[doc.id] && state.notes[doc.id][sectionId];
    return note && note.text ? note : null;
  }

  function docStats(doc) {
    const read = doc.toc.filter((item) => sectionRead(doc, item.id)).length;
    const tasksTotal = doc.tasks.length;
    const tasksDone = doc.tasks.reduce((count, task) => count + (state.tasks[task.id] ? 1 : 0), 0);
    const sectionPct = doc.toc.length ? (read / doc.toc.length) * 100 : 0;
    const taskPct = tasksTotal ? (tasksDone / tasksTotal) * 100 : 0;
    const pct = Math.round(tasksTotal ? sectionPct * 0.65 + taskPct * 0.35 : sectionPct);
    return { read, sections: doc.toc.length, tasksTotal, tasksDone, pct: Math.min(100, pct) };
  }

  function overallStats() {
    let read = 0;
    let sections = 0;
    let tasksDone = 0;
    let tasksTotal = 0;
    for (const doc of docs) {
      const stats = docStats(doc);
      read += stats.read;
      sections += stats.sections;
      tasksDone += stats.tasksDone;
      tasksTotal += stats.tasksTotal;
    }
    const sectionPct = sections ? (read / sections) * 100 : 0;
    const taskPct = tasksTotal ? (tasksDone / tasksTotal) * 100 : 0;
    const pct = Math.round(tasksTotal ? sectionPct * 0.6 + taskPct * 0.4 : sectionPct);
    return { read, sections, tasksDone, tasksTotal, pct: Math.min(100, pct) };
  }

  function notebookCounts() {
    let notes = 0;
    let review = 0;
    for (const doc of docs) {
      notes += Object.keys(state.notes[doc.id] || {}).length;
      review += Object.keys(state.review[doc.id] || {}).length;
    }
    return { notes, review };
  }

  function lastInfo() {
    if (!state.last || !docById.has(state.last.doc)) return null;
    const doc = docById.get(state.last.doc);
    const heading = state.last.section ? findHeading(doc, state.last.section) : null;
    return {
      doc,
      heading,
      href: `#/doc/${doc.id}${heading ? `/${heading.id}` : ''}`,
      label: heading ? shortTitle(heading.text) : doc.title,
      ts: state.last.ts,
    };
  }

  /* ---------------- theme ---------------- */

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    state.theme = theme;
    saveState();
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#faf9f5' : '#080b0f');
    els.themeToggle.setAttribute('aria-label', theme === 'light' ? 'Chuyển sang nền tối' : 'Chuyển sang nền sáng');
  }

  els.themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  /* ---------------- toast ---------------- */

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('is-visible'), 2200);
  }

  /* ---------------- top nav & router ---------------- */

  els.topnav.innerHTML = [
    '<a href="#/" data-nav="home">Tổng quan</a>',
    ...docs.map((doc) => `<a href="#/doc/${doc.id}" data-nav="${doc.id}">${escapeHtml(doc.label)}</a>`),
  ].join('');

  function setNavActive(docId) {
    for (const link of els.topnav.querySelectorAll('a')) {
      link.classList.toggle('is-active', link.dataset.nav === (docId || 'home'));
    }
  }

  function parseHash() {
    const raw = location.hash.replace(/^#/, '');
    if (!raw || raw === '/') return { view: 'home' };
    const parts = raw.split('/').filter(Boolean).map((part) => {
      try {
        return decodeURIComponent(part);
      } catch (error) {
        return part;
      }
    });
    if (parts[0] === 'doc' && docById.has(parts[1])) {
      return { view: 'doc', docId: parts[1], slug: parts[2] || '' };
    }
    return { view: 'home' };
  }

  let lastTrackedPath = '';

  function trackView(path) {
    if (path === lastTrackedPath) return;
    lastTrackedPath = path;
    if (window.__gcTrack) window.__gcTrack(path);
  }

  function route() {
    const target = parseHash();
    closeMobileSidebar();
    closeSearch();
    closeBook(true);
    closeNote(true);

    if (target.view === 'home') {
      renderHome();
      setNavActive('home');
      window.scrollTo({ top: 0, behavior: 'instant' });
      trackView(location.pathname + '#/');
      return;
    }

    const doc = docById.get(target.docId);
    const docChanged = !currentDoc || currentDoc.id !== doc.id;
    setNavActive(doc.id);
    if (docChanged) {
      renderDoc(doc, target.slug);
      // Mỗi tài liệu một lượt xem; nhảy mục trong cùng tài liệu không tính.
      trackView(location.pathname + '#/doc/' + doc.id);
    } else if (target.slug) {
      scrollToSection(target.slug, true);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      updateScrollUI();
    }
  }

  window.addEventListener('hashchange', route);

  /* ---------------- home ---------------- */

  function homeTemplate() {
    const overall = overallStats();
    const notebook = notebookCounts();
    const last = lastInfo();
    const primary = last
      ? `<a class="btn primary" href="${last.href}">Tiếp tục học ${ICONS.arrow}</a>`
      : `<a class="btn primary" href="#/doc/zero">Bắt đầu từ tuần 1 ${ICONS.arrow}</a>`;
    const secondary = last
      ? '<a class="btn ghost" href="#/doc/hack16">Xem lộ trình 16 tuần</a>'
      : '<a class="btn ghost" href="#/doc/hack16">Xem lộ trình 16 tuần</a>';

    const statusLast = last ? `${last.label} · ${timeAgo(last.ts)}` : 'chưa có dữ liệu';

    const trackCards = docs
      .map((doc) => {
        const stats = docStats(doc);
        const isLast = last && last.doc.id === doc.id;
        let foot = 'Bắt đầu';
        if (stats.pct > 0) foot = isLast && last.heading ? `Đọc tiếp · ${last.label}` : 'Tiếp tục';
        return `
          <a class="track-card accent-${doc.accent}" href="#/doc/${doc.id}">
            <div class="track-top">
              <span class="track-kind">${escapeHtml(doc.eyebrow)}</span>
              <span class="track-order">${String(doc.order).padStart(2, '0')}</span>
            </div>
            <h3>${escapeHtml(doc.title)}</h3>
            <p>${escapeHtml(doc.tagline)}</p>
            <div class="track-meta">
              <span>${weekCount(doc)} tuần</span>
              <span>${doc.headingCount} mục</span>
              <span>${doc.checkboxCount} bài tập</span>
            </div>
            <div class="track-progress">
              <div class="track-bar"><span style="width:${stats.pct}%"></span></div>
              <span class="track-pct">${stats.pct}%</span>
            </div>
            <div class="track-foot"><span>${foot}</span>${ICONS.arrow}</div>
          </a>`;
      })
      .join('');

    const zero = docById.get('zero');
    const hack16 = docById.get('hack16');
    const android = docById.get('android');
    const pathWeeks = zero
      ? weekCount(zero) + Math.max(weekCount(hack16), android ? weekCount(android) : 0)
      : 28;
    const zeroChips = zero.weeks.map((week) => `<a class="chip" href="#/doc/zero/${week.id}">${escapeHtml(week.label)}</a>`).join('');
    const hackChips = hack16.weeks.map((week) => `<a class="chip" href="#/doc/hack16/${week.id}">${escapeHtml(week.label)}</a>`).join('');
    const androidChips = android
      ? android.weeks.map((week) => `<a class="chip" href="#/doc/android/${week.id}">${escapeHtml(week.label)}</a>`).join('')
      : '';

    return `
      <div class="home">
        <section class="hero">
          <div class="hero-copy">
            <span class="hero-eyebrow"><span class="pulse-dot"></span>Lộ trình tự học · cập nhật 10/2026</span>
            <h1>Từ <em>con số 0</em><br>đến bản mod đầu tiên.</h1>
            <p class="hero-lede">Năm tài liệu, hai nhánh: 12 tuần học nền tảng lập trình, rồi chọn PC (Cheat Engine, trainer, hook) hoặc Android (APK, smali, ARM64, mod menu) để làm bản mod đầu tiên. Không nhảy tầng, không học vẹt.</p>
            <div class="hero-actions">${primary}${secondary}</div>
            <ul class="hero-stats">
              <li><strong>${CONTENT.totals.docs}</strong><span>tài liệu</span></li>
              <li><strong>${pathWeeks}</strong><span>tuần/nhánh</span></li>
              <li><strong>${overall.sections}</strong><span>mục lớn</span></li>
              <li><strong>${overall.tasksTotal}</strong><span>bài tập</span></li>
            </ul>
          </div>
          <div class="status-card" aria-label="Tiến độ học">
            <div class="status-head">
              <span class="status-dot red"></span><span class="status-dot amber"></span><span class="status-dot green"></span>
              <span class="status-title">~/roadmap — status</span>
            </div>
            <div class="status-body">
              <div class="status-line"><span class="prompt">$</span><span class="cmd">roadmap status</span></div>
              <div class="status-line"><span class="key">mục đã đọc</span><span class="val">${overall.read}<span class="key">/${overall.sections}</span></span></div>
              <div class="status-line"><span class="key">bài tập xong</span><span class="val">${overall.tasksDone}<span class="key">/${overall.tasksTotal}</span></span></div>
              <div class="status-line"><span class="key">sổ tay</span><span class="val">${notebook.notes}<span class="key"> ghi chú · ${notebook.review} cần ôn</span></span></div>
              <div class="status-line"><span class="key">tiến độ</span><span class="bar">${barHtml(overall.pct)}</span><span class="val">${overall.pct}%</span></div>
              <div class="status-line"><span class="key">lần cuối</span><span class="key last-value">${escapeHtml(statusLast)}</span></div>
              <div class="status-line"><span class="prompt">&gt;</span><span class="status-cursor"></span></div>
            </div>
          </div>
        </section>

        <section class="home-section">
          <div class="section-head">
            <div>
              <h2>Tài liệu</h2>
              <p>Đi 01 → 02, rồi chọn một nhánh: 03 cho PC hoặc 04 cho Android. Tài liệu 02 dùng song song với 01, tài liệu 05 là giáo trình tham khảo khi cần tra cứu sâu.</p>
            </div>
            <span class="mono-link">${docs.length} tài liệu · ${overall.tasksTotal} bài tập</span>
          </div>
          <div class="track-grid">${trackCards}</div>
        </section>

        <section class="home-section">
          <div class="section-head">
            <div>
              <h2>Đường đi</h2>
              <p>Ước tính 8–12 tháng nếu học 10–12 giờ mỗi tuần. Nhánh PC nặng ở tuần 9, 10, 12; nhánh Android nặng ở tuần 8, 10, 11. Cứ cho mỗi tuần đó thêm 3–5 ngày.</p>
            </div>
          </div>
          <ol class="path">
            <li>
              <h3>12 tuần nền tảng</h3>
              <p>C, kiểu dữ liệu, vòng lặp, mảng, con trỏ, struct, bộ nhớ, file nhị phân. Kết thúc bằng project <code>Player DB</code> và bài kiểm tra bàn giao.</p>
            </li>
            <li>
              <h3>16 tuần chuyên sâu</h3>
              <p>Chọn một nhánh: PC (trainer, DLL, hook, ESP) hoặc Android (APK, smali, ARM64, IL2CPP, mod menu). Không học cả hai cùng lúc.</p>
            </li>
            <li>
              <h3>Project cuối khóa</h3>
              <p>Trainer/ESP cho PC hoặc mod menu Android, kèm README, video demo và phần verify — thứ chứng minh mày hiểu, không chỉ chạy được.</p>
            </li>
          </ol>
        </section>

        <section class="home-section">
          <div class="section-head">
            <div>
              <h2>Vào nhanh</h2>
              <p>Nhảy thẳng tới tuần đang học. Mục đã đọc do mày tự xác nhận ở cuối mỗi mục — không tick hộ.</p>
            </div>
          </div>
          <div class="jump-grid">
            <div class="jump-panel">
              <h3>12 tuần nền tảng</h3>
              <p class="jump-sub">Chưa viết dòng code nào → vạch xuất phát</p>
              <div class="chips">${zeroChips}</div>
            </div>
            <div class="jump-panel">
              <h3>16 tuần hack game PC</h3>
              <p class="jump-sub">Từ Cheat Engine tới trainer, hook, ESP</p>
              <div class="chips">${hackChips}</div>
            </div>
            <div class="jump-panel">
              <h3>16 tuần Android</h3>
              <p class="jump-sub">Từ APK, smali tới IL2CPP và mod menu</p>
              <div class="chips">${androidChips}</div>
            </div>
          </div>
        </section>

        <footer class="home-footer">
          <p>Tiến độ, ghi chú và mục cần ôn lưu trong trình duyệt này (localStorage) — không gửi lên máy chủ. Lượt truy cập được đếm bằng GoatCounter — không cookie, không lưu IP; chỉ có số liệu tổng hợp như trang được xem và nguồn truy cập. Đổi máy thì xuất file sao lưu rồi nhập lại.</p>
          <div class="home-footer-actions">
            <button class="link-btn" type="button" id="exportBtn">Sao lưu (.json)</button>
            <button class="link-btn" type="button" id="importBtn">Nhập bản sao lưu</button>
            <button class="link-btn" type="button" id="installBtn" hidden>Cài thành app</button>
            <button class="link-btn danger" type="button" id="resetAllBtn">Xoá toàn bộ tiến độ</button>
            <input type="file" id="importInput" accept="application/json,.json" hidden>
          </div>
        </footer>
      </div>`;
  }

  function renderHome() {
    currentDoc = null;
    currentHeadings = [];
    activeHeadingId = '';
    activeSectionId = '';
    document.title = 'Hack Roadmap — Học lộ trình từ số 0 đến mod game';
    document.body.classList.remove('has-sidebar');
    document.body.classList.remove('toc-hidden');
    view.classList.remove('hide-done');
    setMenuVisible(false);
    els.sidePercent.textContent = '0%';
    els.sideBarFill.style.width = '0%';
    view.innerHTML = homeTemplate();
    updateBookBadge();
    if (els.readProgress) els.readProgress.style.transform = 'scaleX(0)';

    const resetAll = document.getElementById('resetAllBtn');
    if (resetAll) {
      resetAll.addEventListener('click', () => {
        if (!window.confirm('Xoá toàn bộ tiến độ, ghi chú và mục cần ôn trên trình duyệt này?')) return;
        state.tasks = {};
        state.read = {};
        state.review = {};
        state.notes = {};
        state.last = null;
        saveState();
        updateBookBadge();
        renderHome();
        showToast('Đã xoá toàn bộ dữ liệu học');
      });
    }

    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) exportBtn.addEventListener('click', exportBackup);
    const importBtn = document.getElementById('importBtn');
    const importInput = document.getElementById('importInput');
    if (importBtn && importInput) {
      importBtn.addEventListener('click', () => importInput.click());
      importInput.addEventListener('change', () => {
        const file = importInput.files && importInput.files[0];
        importInput.value = '';
        if (file) importBackup(file);
      });
    }
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
      installBtn.hidden = !installPrompt;
      installBtn.addEventListener('click', async () => {
        if (!installPrompt) return;
        installPrompt.prompt();
        try {
          await installPrompt.userChoice;
        } finally {
          installPrompt = null;
          installBtn.hidden = true;
        }
      });
    }
  }

  /* ---------------- backup ---------------- */

  function exportBackup() {
    const payload = {
      app: 'hack-roadmap',
      version: 2,
      exportedAt: new Date().toISOString(),
      state,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hack-roadmap-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    showToast('Đã xuất bản sao lưu');
  }

  async function importBackup(file) {
    try {
      const raw = JSON.parse(await file.text());
      const source = raw && raw.state && typeof raw.state === 'object' ? raw.state : raw;
      if (!source || typeof source !== 'object' || (!source.tasks && !source.read && !source.review && !source.notes)) {
        throw new Error('invalid');
      }
      if (!window.confirm('Nhập bản sao lưu sẽ thay thế tiến độ hiện tại trên trình duyệt này. Tiếp tục?')) return;
      state = normalizeState(source);
      saveState();
      applyTheme(state.theme || document.documentElement.dataset.theme || 'dark');
      updateBookBadge();
      renderHome();
      showToast('Đã nhập bản sao lưu');
    } catch (error) {
      showToast('File sao lưu không hợp lệ');
    }
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    const button = document.getElementById('installBtn');
    if (button) button.hidden = false;
  });

  window.addEventListener('appinstalled', () => {
    installPrompt = null;
    const button = document.getElementById('installBtn');
    if (button) button.hidden = true;
  });

  /* ---------------- doc ---------------- */

  function docTemplate(doc) {
    const stats = docStats(doc);
    const last = state.last && state.last.doc === doc.id && state.last.section ? findHeading(doc, state.last.section) : null;
    const index = docs.findIndex((item) => item.id === doc.id);
    const prev = docs[index - 1];
    const next = docs[index + 1];    const weeks = doc.weeks.length
      ? `<nav class="week-strip" aria-label="Nhảy nhanh theo tuần"><span class="week-label">Nhảy nhanh</span>${doc.weeks
          .map((week) => `<a class="chip" href="#/doc/${doc.id}/${week.id}">${escapeHtml(week.label)}</a>`)
          .join('')}</nav>`
      : '';

    const pager = `
      <div class="doc-pager">
        ${prev
          ? `<a class="pager-card prev" href="#/doc/${prev.id}"><span class="pager-label">Trước</span><span class="pager-title">${escapeHtml(prev.title)}</span></a>`
          : '<span></span>'}
        ${next
          ? `<a class="pager-card next" href="#/doc/${next.id}"><span class="pager-label">Tiếp theo</span><span class="pager-title">${escapeHtml(next.title)}</span></a>`
          : ''}
      </div>`;

    return `
      <article class="doc">
        <header class="doc-header">
          <nav class="crumbs" aria-label="Breadcrumb">
            <a href="#/">Tổng quan</a><span class="sep">/</span><span>${escapeHtml(doc.label)}</span>
          </nav>
          <div class="doc-eyebrow">${escapeHtml(doc.eyebrow)}</div>
          <h1 class="doc-title">${escapeHtml(doc.title)}</h1>
          <p class="doc-tagline">${escapeHtml(doc.tagline)}</p>
          <div class="doc-meta">
            <span>${doc.headingCount} mục</span>
            <span>~${doc.minutes} phút đọc</span>
            <span>${doc.checkboxCount} bài tập</span>
            <span class="js-doc-progress">Đã đọc ${stats.read}/${stats.sections} mục</span>
          </div>
          <div class="doc-actions">
            ${last ? `<a class="btn ghost small" href="#/doc/${doc.id}/${last.id}">Vị trí đang đọc</a>` : ''}
            <button class="btn ghost small${state.hideDone ? ' is-on' : ''}" type="button" id="filterDoneBtn" aria-pressed="${state.hideDone}">Ẩn bài đã xong</button>
            <button class="btn ghost small" type="button" id="resetDocBtn">Đặt lại tiến độ tài liệu</button>
          </div>
        </header>
        ${weeks}
        <div class="prose" id="docContent">${doc.html}</div>
        <footer class="doc-footer">
          <div class="doc-complete">
            <div class="doc-complete-top">
              <strong>Tiến độ tài liệu</strong>
              <span id="docCompleteText">${stats.read}/${stats.sections} mục · ${stats.tasksDone}/${stats.tasksTotal} bài tập</span>
            </div>
            <div class="track-bar"><span id="docCompleteBar" style="width:${stats.pct}%"></span></div>
          </div>
          ${pager}
        </footer>
      </article>`;
  }

  function renderSidebar(doc) {
    els.sideDocs.innerHTML = docs
      .map((item) => `<a href="#/doc/${item.id}" class="${item.id === doc.id ? 'is-active' : ''}">${escapeHtml(item.title)}</a>`)
      .join('');

    els.toc.innerHTML = doc.toc
      .map((item) => {
        const read = sectionRead(doc, item.id);
        const review = sectionReview(doc, item.id);
        const note = sectionNote(doc, item.id);
        const marks = `${note ? '<span class="toc-mark note" title="Có ghi chú"></span>' : ''}${review ? '<span class="toc-mark review" title="Cần ôn"></span>' : ''}`;
        const children = item.children.length
          ? `<div class="toc-children">${item.children
              .map(
                (child) =>
                  `<a class="toc-child" data-section="${child.id}" href="#/doc/${doc.id}/${child.id}" title="${escapeHtml(child.text)}">${escapeHtml(child.text)}</a>`,
              )
              .join('')}</div>`
          : '';
        return `
          <div class="toc-group" data-group="${item.id}">
            <div class="toc-row">
              <a class="toc-link${read ? ' is-read' : ''}${review ? ' has-review' : ''}${note ? ' has-note' : ''}" data-section="${item.id}" href="#/doc/${doc.id}/${item.id}" title="${escapeHtml(item.text)}">
                <span class="toc-dot"></span>
                <span class="toc-text">${escapeHtml(item.text)}</span>
                <span class="toc-marks" aria-hidden="true">${marks}</span>
                <span class="toc-count" data-count-section="${item.id}"></span>
              </a>
              ${item.children.length ? `<button class="toc-expand" type="button" aria-label="Mở rộng mục" aria-expanded="false">${ICONS.chevron}</button>` : ''}
            </div>
            ${children}
          </div>`;
      })
      .join('');

    const index = docs.findIndex((item) => item.id === doc.id);
    const next = docs[index + 1];
    els.sideFoot.innerHTML = next
      ? `<span class="side-foot-label">Tài liệu tiếp theo</span><a href="#/doc/${next.id}">${escapeHtml(next.title)} ${ICONS.arrow}</a>`
      : '<span class="side-foot-label">Đã hết lộ trình</span><a href="#/">Về trang tổng quan</a>';
  }

  function hydrateTasks(doc) {
    for (const box of view.querySelectorAll('.task-box')) {
      box.checked = Boolean(state.tasks[box.dataset.task]);
    }
  }

  function decorateTables() {
    for (const wrap of view.querySelectorAll('.table-wrap')) {
      const hint = document.createElement('p');
      hint.className = 'table-hint';
      hint.textContent = 'Bảng rộng — cuộn ngang để xem thêm →';
      const sync = () => {
        hint.hidden = wrap.scrollWidth <= wrap.clientWidth + 4;
      };
      wrap.tabIndex = 0;
      wrap.setAttribute('role', 'region');
      wrap.setAttribute('aria-label', 'Bảng có thể cuộn ngang');
      wrap.after(hint);
      hint.hidden = true;
      requestAnimationFrame(sync);
    }
  }

  function isWeekSection(text) {
    return /(?:^|\s)Tuần\s+\d/i.test(text);
  }

  function enhanceSections(doc) {
    const content = document.getElementById('docContent');
    if (!content) return;
    const headings = [...content.children].filter((node) => node.tagName === 'H2');
    for (const heading of headings) {
      const meta = doc.toc.find((item) => item.id === heading.id);
      const title = meta ? meta.text : heading.textContent;
      const week = isWeekSection(title);
      const tasks = doc.tasks.filter((task) => task.section === heading.id);
      const note = sectionNote(doc, heading.id);
      const tools = document.createElement('div');
      tools.className = `section-tools${week ? ' is-week' : ''}${note ? ' has-note' : ''}`;
      tools.dataset.sectionTools = heading.id;
      tools.innerHTML = `
        <div class="section-tools-info">
          ${week ? '<span class="week-badge">Tuần học</span>' : ''}
          ${tasks.length ? `<span class="section-task-count js-task-count">${tasks.filter((task) => state.tasks[task.id]).length}/${tasks.length} bài tập</span>` : ''}
        </div>
        <div class="section-tools-actions">
          <button class="tool-btn js-read" type="button" data-tool="read" aria-pressed="false">${ICONS.check}<span>Đánh dấu đã đọc</span></button>
          <button class="tool-btn js-review" type="button" data-tool="review" aria-pressed="false">${ICONS.bookmark}<span>Cần ôn</span></button>
          <button class="tool-btn js-note" type="button" data-tool="note">${ICONS.pencil}<span>Ghi chú</span><span class="tool-dot" aria-hidden="true"></span></button>
        </div>`;

      let last = heading;
      let next = heading.nextElementSibling;
      while (next && next.tagName !== 'H2') {
        last = next;
        next = next.nextElementSibling;
      }
      last.after(tools);
    }
    syncSectionTools(doc);
  }

  function syncSectionTools(doc) {
    if (!doc) return;
    for (const tools of view.querySelectorAll('.section-tools')) {
      const sectionId = tools.dataset.sectionTools;
      const week = tools.classList.contains('is-week');
      const read = sectionRead(doc, sectionId);
      const review = sectionReview(doc, sectionId);
      const note = sectionNote(doc, sectionId);
      const tasks = doc.tasks.filter((task) => task.section === sectionId);
      const done = tasks.filter((task) => state.tasks[task.id]).length;

      const readBtn = tools.querySelector('[data-tool="read"]');
      if (readBtn) {
        readBtn.classList.toggle('is-on', read);
        readBtn.setAttribute('aria-pressed', String(read));
        const label = readBtn.querySelector('span');
        if (label) label.textContent = read ? (week ? 'Đã xong tuần' : 'Đã đọc') : (week ? 'Xác nhận xong tuần' : 'Đánh dấu đã đọc');
      }
      const reviewBtn = tools.querySelector('[data-tool="review"]');
      if (reviewBtn) {
        reviewBtn.classList.toggle('is-on', review);
        reviewBtn.setAttribute('aria-pressed', String(review));
      }
      const noteBtn = tools.querySelector('[data-tool="note"]');
      if (noteBtn) noteBtn.classList.toggle('has-note', Boolean(note));

      const count = tools.querySelector('.js-task-count');
      if (count && tasks.length) {
        count.textContent = `${done}/${tasks.length} bài tập`;
        count.classList.toggle('is-done', done === tasks.length);
      }
      tools.classList.toggle('is-complete', read && (tasks.length === 0 || done === tasks.length));
      tools.classList.toggle('has-note', Boolean(note));
    }
  }

  function updateTocCounts(doc) {
    const counts = new Map();
    for (const task of doc.tasks) {
      const entry = counts.get(task.section) || { total: 0, done: 0 };
      entry.total += 1;
      if (state.tasks[task.id]) entry.done += 1;
      counts.set(task.section, entry);
    }
    for (const node of els.toc.querySelectorAll('[data-count-section]')) {
      const entry = counts.get(node.dataset.countSection);
      if (!entry) {
        node.textContent = '';
        node.classList.remove('is-done');
        continue;
      }
      node.textContent = `${entry.done}/${entry.total}`;
      node.classList.toggle('is-done', entry.done === entry.total);
    }
  }

  /* ---------------- section marks, notes & notebook ---------------- */

  function setMark(store, docId, sectionId, on) {
    if (on) {
      if (!store[docId]) store[docId] = {};
      store[docId][sectionId] = Date.now();
      return;
    }
    if (!store[docId]) return;
    delete store[docId][sectionId];
    if (!Object.keys(store[docId]).length) delete store[docId];
  }

  function updateSidebarMarks(doc) {
    if (!doc) return;
    for (const item of doc.toc) {
      const link = els.toc.querySelector(`.toc-link[data-section="${item.id}"]`);
      if (!link) continue;
      const note = sectionNote(doc, item.id);
      const review = sectionReview(doc, item.id);
      link.classList.toggle('is-read', sectionRead(doc, item.id));
      link.classList.toggle('has-review', review);
      link.classList.toggle('has-note', Boolean(note));
      const marks = link.querySelector('.toc-marks');
      if (marks) {
        marks.innerHTML = `${note ? '<span class="toc-mark note" title="Có ghi chú"></span>' : ''}${
          review ? '<span class="toc-mark review" title="Cần ôn"></span>' : ''
        }`;
      }
    }
  }

  function sectionLabel(doc, sectionId) {
    const heading = findHeading(doc, sectionId);
    return heading ? heading.text : 'Mục này';
  }

  function toggleSectionRead(doc, sectionId) {
    const on = !sectionRead(doc, sectionId);
    setMark(state.read, doc.id, sectionId, on);
    saveState();
    refreshProgress();
    updateSidebarMarks(doc);
    if (!on) {
      showToast('Đã bỏ đánh dấu mục này');
      return;
    }
    if (isWeekSection(sectionLabel(doc, sectionId))) {
      const tasks = doc.tasks.filter((task) => task.section === sectionId);
      const remaining = tasks.filter((task) => !state.tasks[task.id]).length;
      showToast(remaining ? `Đã xác nhận tuần · còn ${remaining} bài tập chưa tick` : 'Đã xác nhận xong tuần');
    } else {
      showToast('Đã đánh dấu đã đọc');
    }
  }

  function setSectionReview(doc, sectionId, on) {
    setMark(state.review, doc.id, sectionId, on);
    saveState();
    syncSectionTools(doc);
    updateSidebarMarks(doc);
    updateBookBadge();
    showToast(on ? 'Đã thêm vào mục cần ôn' : 'Đã bỏ khỏi mục cần ôn');
  }

  function updateBookBadge() {
    const { notes, review } = notebookCounts();
    const total = notes + review;
    els.bookCount.hidden = total === 0;
    els.bookCount.textContent = total > 99 ? '99+' : String(total);
    els.bookTrigger.setAttribute(
      'aria-label',
      total ? `Sổ tay — ${notes} ghi chú, ${review} mục cần ôn` : 'Mở sổ tay ghi chú',
    );
  }

  /* ---------------- note modal ---------------- */

  let noteReturnFocus = null;

  function openNote(doc, sectionId) {
    const existing = sectionNote(doc, sectionId);
    noteTarget = { docId: doc.id, sectionId };
    noteReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    els.noteKicker.textContent = `Ghi chú · ${doc.label}`;
    els.noteTitle.textContent = sectionLabel(doc, sectionId);
    els.noteInput.value = existing ? existing.text : '';
    els.noteDelete.hidden = !existing;
    closeBook(true);
    els.noteOverlay.hidden = false;
    updateBodyLock();
    requestAnimationFrame(() => {
      els.noteInput.focus();
      const end = els.noteInput.value.length;
      els.noteInput.setSelectionRange(end, end);
    });
  }

  function closeNote(skipFocus) {
    if (!els.noteOverlay || els.noteOverlay.hidden) return;
    els.noteOverlay.hidden = true;
    noteTarget = null;
    updateBodyLock();
    const target = noteReturnFocus;
    noteReturnFocus = null;
    if (skipFocus) return;
    if (target && target.isConnected && target.offsetParent !== null) target.focus({ preventScroll: true });
    else els.bookTrigger.focus({ preventScroll: true });
  }

  function commitNote(remove) {
    if (!noteTarget) return;
    const doc = docById.get(noteTarget.docId);
    if (!doc) return closeNote();
    const { sectionId } = noteTarget;
    const text = els.noteInput.value.trim();
    if (remove || !text) {
      if (state.notes[doc.id]) {
        delete state.notes[doc.id][sectionId];
        if (!Object.keys(state.notes[doc.id]).length) delete state.notes[doc.id];
      }
    } else {
      if (!state.notes[doc.id]) state.notes[doc.id] = {};
      state.notes[doc.id][sectionId] = { text: text.slice(0, 4000), ts: Date.now() };
    }
    saveState();
    closeNote();
    if (currentDoc && currentDoc.id === doc.id) {
      syncSectionTools(doc);
      updateSidebarMarks(doc);
    }
    updateBookBadge();
    showToast(remove || !text ? 'Đã xoá ghi chú' : 'Đã lưu ghi chú');
  }

  /* ---------------- notebook overlay ---------------- */

  function bookItem(doc, heading, inner, button) {
    return `
      <div class="book-item">
        <a class="book-item-main" href="#/doc/${doc.id}/${heading.id}">${inner}</a>
        ${button}
      </div>`;
  }

  function bookTemplate() {
    const counts = notebookCounts();
    const groups = docs
      .map((doc) => ({
        doc,
        notes: doc.toc.filter((heading) => sectionNote(doc, heading.id)).map((heading) => ({ heading, note: sectionNote(doc, heading.id) })),
        review: doc.toc.filter((heading) => sectionReview(doc, heading.id)).map((heading) => ({ heading, ts: state.review[doc.id][heading.id] })),
      }))
      .filter((group) => group.notes.length || group.review.length);

    if (!groups.length) {
      return `
        <div class="book-empty">
          <strong>Sổ tay đang trống.</strong>
          Cuối mỗi mục trong tài liệu có ba nút: <b>Đánh dấu đã đọc</b>, <b>Cần ôn</b> và <b>Ghi chú</b>.
          Ghi chú và mục cần ôn sẽ được gom về đây.
        </div>`;
    }

    const body = groups
      .map(({ doc, notes, review }) => {
        const noteList = notes
          .map(({ heading, note }) =>
            bookItem(
              doc,
              heading,
              `<span class="book-item-title">${escapeHtml(heading.text)}</span>
               <span class="book-item-note">${escapeHtml(note.text)}</span>
               <span class="book-item-meta">Ghi ${timeAgo(note.ts)}</span>`,
              `<button class="book-item-btn" type="button" data-note-doc="${doc.id}" data-note-section="${heading.id}">Sửa</button>`,
            ),
          )
          .join('');
        const reviewList = review
          .map(({ heading, ts }) =>
            bookItem(
              doc,
              heading,
              `<span class="book-item-title">${escapeHtml(heading.text)}</span>
               <span class="book-item-meta">Đánh dấu ${timeAgo(ts)}</span>`,
              `<button class="book-item-btn" type="button" data-review-doc="${doc.id}" data-review-section="${heading.id}">Bỏ</button>`,
            ),
          )
          .join('');
        return `
          <section class="book-group">
            <h3><span class="doc-badge ${doc.id}">${escapeHtml(doc.label)}</span>${escapeHtml(doc.title)}</h3>
            ${noteList ? `<div class="book-sub">Ghi chú <span>${notes.length}</span></div><div class="book-list">${noteList}</div>` : ''}
            ${reviewList ? `<div class="book-sub">Cần ôn <span>${review.length}</span></div><div class="book-list">${reviewList}</div>` : ''}
          </section>`;
      })
      .join('');

    return `
      <div class="book-summary">
        <span><b>${counts.notes}</b> ghi chú</span>
        <span><b>${counts.review}</b> mục cần ôn</span>
      </div>
      ${body}`;
  }

  function renderBook() {
    els.bookBody.innerHTML = bookTemplate();
  }

  function openBook() {
    closeMobileSidebar();
    closeSearch(true);
    closeNote(true);
    renderBook();
    els.bookOverlay.hidden = false;
    updateBodyLock();
    requestAnimationFrame(() => els.bookClose.focus());
  }

  function closeBook(skipFocus) {
    if (!els.bookOverlay || els.bookOverlay.hidden) return;
    els.bookOverlay.hidden = true;
    updateBodyLock();
    if (!skipFocus) els.bookTrigger.focus({ preventScroll: true });
  }

  els.bookTrigger.addEventListener('click', () => {
    if (els.bookOverlay.hidden) openBook();
    else closeBook();
  });
  els.bookClose.addEventListener('click', () => closeBook());
  els.bookOverlay.addEventListener('click', (event) => {
    if (event.target === els.bookOverlay) closeBook();
  });

  els.bookBody.addEventListener('click', (event) => {
    const edit = event.target.closest('[data-note-section]');
    if (edit) {
      const doc = docById.get(edit.dataset.noteDoc);
      if (doc) {
        closeBook(true);
        openNote(doc, edit.dataset.noteSection);
      }
      return;
    }
    const clear = event.target.closest('[data-review-section]');
    if (clear) {
      const doc = docById.get(clear.dataset.reviewDoc);
      if (!doc) return;
      setMark(state.review, doc.id, clear.dataset.reviewSection, false);
      saveState();
      if (currentDoc && currentDoc.id === doc.id) {
        syncSectionTools(doc);
        updateSidebarMarks(doc);
      }
      renderBook();
      updateBookBadge();
      showToast('Đã bỏ khỏi mục cần ôn');
      return;
    }
    if (event.target.closest('a[href^="#/"]')) closeBook(true);
  });

  els.noteSave.addEventListener('click', () => commitNote(false));
  els.noteCancel.addEventListener('click', () => closeNote());
  els.noteDelete.addEventListener('click', () => commitNote(true));
  els.noteClose.addEventListener('click', () => closeNote());
  els.noteOverlay.addEventListener('click', (event) => {
    if (event.target === els.noteOverlay) closeNote();
  });
  els.noteInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeNote();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      commitNote(false);
    }
  });

  /* ---------------- section tool clicks ---------------- */

  view.addEventListener('click', (event) => {
    const button = event.target.closest('[data-tool]');
    if (!button || !currentDoc) return;
    const tools = button.closest('.section-tools');
    if (!tools) return;
    const sectionId = tools.dataset.sectionTools;
    const tool = button.dataset.tool;
    if (tool === 'read') toggleSectionRead(currentDoc, sectionId);
    else if (tool === 'review') setSectionReview(currentDoc, sectionId, !sectionReview(currentDoc, sectionId));
    else if (tool === 'note') openNote(currentDoc, sectionId);
  });

  function refreshProgress() {
    if (!currentDoc) return;
    const stats = docStats(currentDoc);
    const text = `${stats.read}/${stats.sections} mục · ${stats.tasksDone}/${stats.tasksTotal} bài tập`;
    const meta = view.querySelector('.js-doc-progress');
    if (meta) meta.textContent = `Đã đọc ${stats.read}/${stats.sections} mục`;
    const completeText = document.getElementById('docCompleteText');
    if (completeText) completeText.textContent = text;
    const completeBar = document.getElementById('docCompleteBar');
    if (completeBar) completeBar.style.width = `${stats.pct}%`;
    els.sidePercent.textContent = `${stats.pct}%`;
    els.sideBarFill.style.width = `${stats.pct}%`;
    updateTocCounts(currentDoc);
    syncSectionTools(currentDoc);
  }

  function syncFilterButton() {
    const button = document.getElementById('filterDoneBtn');
    if (!button) return;
    button.classList.toggle('is-on', state.hideDone);
    button.setAttribute('aria-pressed', String(state.hideDone));
    button.textContent = state.hideDone ? 'Hiện bài đã xong' : 'Ẩn bài đã xong';
  }

  function renderDoc(doc, slug) {
    currentDoc = doc;
    activeHeadingId = '';
    activeSectionId = '';
    document.title = `${doc.title} — Hack Roadmap`;
    document.body.classList.add('has-sidebar');
    setMenuVisible(true);
    applyTocVisibility();
    view.classList.toggle('hide-done', state.hideDone);
    view.innerHTML = docTemplate(doc);
    renderSidebar(doc);
    hydrateTasks(doc);
    decorateTables();
    enhanceSections(doc);
    refreshProgress();
    syncFilterButton();
    updateBookBadge();
    currentHeadings = buildHeadingList(doc);

    const filterBtn = document.getElementById('filterDoneBtn');
    if (filterBtn) {
      filterBtn.addEventListener('click', () => {
        state.hideDone = !state.hideDone;
        saveState();
        view.classList.toggle('hide-done', state.hideDone);
        syncFilterButton();
        const done = docStats(doc).tasksDone;
        showToast(
          state.hideDone
            ? done
              ? `Đã ẩn ${done} bài tập đã xong`
              : 'Chưa có bài tập nào đã xong'
            : 'Đã hiện lại toàn bộ bài tập',
        );
      });
    }

    const resetBtn = document.getElementById('resetDocBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (!window.confirm(`Đặt lại tiến độ của “${doc.title}”? Đánh dấu đã đọc, bài tập đã tick, ghi chú và mục cần ôn của tài liệu này sẽ bị xoá.`)) return;
        for (const task of doc.tasks) delete state.tasks[task.id];
        delete state.read[doc.id];
        delete state.review[doc.id];
        delete state.notes[doc.id];
        if (state.last && state.last.doc === doc.id) state.last = null;
        saveState();
        renderDoc(doc, '');
        updateBookBadge();
        window.scrollTo({ top: 0, behavior: 'instant' });
        showToast('Đã đặt lại tiến độ tài liệu');
      });
    }

    if (!state.last || state.last.doc !== doc.id) {
      state.last = { doc: doc.id, section: slug || '', ts: Date.now() };
      saveState();
    }

    requestAnimationFrame(() => {
      if (slug) scrollToSection(slug, false);
      else window.scrollTo({ top: 0, behavior: 'instant' });
      updateScrollUI();
    });
  }

  function buildHeadingList(doc) {
    const content = document.getElementById('docContent');
    if (!content) return [];
    const list = [];
    let parent = '';
    for (const element of content.querySelectorAll('h2, h3')) {
      if (element.tagName === 'H2') parent = element.id;
      list.push({ el: element, id: element.id, parent, level: element.tagName === 'H2' ? 2 : 3 });
      element.dataset.parent = parent;
    }
    return list;
  }

  function scrollToSection(slug, smooth) {
    const element = document.getElementById(slug);
    if (!element) return;
    const header = els.topbar ? els.topbar.offsetHeight : 64;
    const top = Math.max(0, window.scrollY + element.getBoundingClientRect().top - header - 14);
    const near = Math.abs(top - window.scrollY) < window.innerHeight * 3;
    window.scrollTo({ top, behavior: smooth && near ? 'smooth' : 'instant' });
    activeHeadingId = slug;
    updateActiveToc(slug, element.dataset.parent || slug);
  }

  function setMenuVisible(visible) {
    els.menuBtn.hidden = !visible;
  }

  /* Ẩn/hiện mục lục: trên màn hình rộng thì thu cột trái, trên mobile thì mở drawer. */

  function syncMenuButton() {
    const wide = window.innerWidth > 1080;
    const tocHidden = Boolean(state.tocHidden);
    const open = wide
      ? document.body.classList.contains('has-sidebar') && !tocHidden
      : document.body.classList.contains('sidebar-open');
    const label = wide && !tocHidden ? 'Ẩn mục lục ([)' : 'Mở mục lục ([)';
    els.menuBtn.setAttribute('aria-label', label);
    els.menuBtn.title = label;
    els.menuBtn.setAttribute('aria-expanded', String(open));
  }

  function applyTocVisibility() {
    document.body.classList.toggle('toc-hidden', Boolean(state.tocHidden));
    syncMenuButton();
  }

  function toggleToc() {
    if (window.innerWidth > 1080) {
      state.tocHidden = !state.tocHidden;
      saveState();
      applyTocVisibility();
      return;
    }
    if (document.body.classList.contains('sidebar-open')) closeMobileSidebar();
    else openMobileSidebar();
  }

  /* ---------------- active section & progress ---------------- */

  function updateActiveToc(headingId, sectionId) {
    const current = els.toc.querySelector('.is-current');
    if (current) current.classList.remove('is-current');
    for (const ancestor of els.toc.querySelectorAll('.is-ancestor')) ancestor.classList.remove('is-ancestor');
    if (!headingId) return;
    let link = els.toc.querySelector(`[data-section="${headingId}"]`);
    if (!link && sectionId) link = els.toc.querySelector(`[data-section="${sectionId}"]`);
    if (!link) return;
    link.classList.add('is-current');

    const group = link.closest('.toc-group');
    if (group && !group.classList.contains('is-open')) {
      group.classList.add('is-open');
      const button = group.querySelector('.toc-expand');
      if (button) button.setAttribute('aria-expanded', 'true');
    }
    if (link.classList.contains('toc-child') && group) {
      const parent = group.querySelector('.toc-link');
      if (parent) parent.classList.add('is-ancestor');
    }
    const sidebarRect = els.sidebar.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    if (linkRect.top < sidebarRect.top + 80) {
      els.sidebar.scrollTop += linkRect.top - sidebarRect.top - 80;
    } else if (linkRect.bottom > sidebarRect.bottom - 24) {
      els.sidebar.scrollTop += linkRect.bottom - sidebarRect.bottom + 24;
    }
  }

  function updateScrollUI() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (els.readProgress) els.readProgress.style.transform = `scaleX(${ratio})`;
    if (!currentDoc || !currentHeadings.length) return;

    let active = null;
    for (const heading of currentHeadings) {
      if (heading.el.getBoundingClientRect().top <= 120) active = heading;
      else break;
    }

    if (!active) {
      if (activeHeadingId) {
        activeHeadingId = '';
        activeSectionId = '';
        updateActiveToc('', '');
      }
      return;
    }

    if (active.id !== activeHeadingId) {
      activeHeadingId = active.id;
      updateActiveToc(active.id, active.parent);
      if (active.parent) setLastSection(currentDoc.id, active.parent);
    }

    if (active.parent && active.parent !== activeSectionId) {
      activeSectionId = active.parent;
    }
  }

  function setLastSection(docId, sectionId) {
    state.last = { doc: docId, section: sectionId, ts: Date.now() };
    saveState();
  }

  window.addEventListener(
    'scroll',
    () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollTicking = false;
        updateScrollUI();
      });
    },
    { passive: true },
  );

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) closeMobileSidebar();
    syncMenuButton();
    updateScrollUI();
    for (const hint of view.querySelectorAll('.table-hint')) {
      const wrap = hint.previousElementSibling;
      if (wrap) hint.hidden = wrap.scrollWidth <= wrap.clientWidth + 4;
    }
  });

  /* ---------------- sidebar interactions ---------------- */

  els.toc.addEventListener('click', (event) => {
    const expand = event.target.closest('.toc-expand');
    if (expand) {
      const group = expand.closest('.toc-group');
      const open = group.classList.toggle('is-open');
      expand.setAttribute('aria-expanded', open ? 'true' : 'false');
      return;
    }
    const link = event.target.closest('a[href^="#/"]');
    if (link) {
      closeMobileSidebar();
      if (link.getAttribute('href') === location.hash) {
        event.preventDefault();
        const section = link.dataset.section;
        if (section) scrollToSection(section, true);
      }
    }
  });

  /* ---------------- global link handling ---------------- */

  view.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#/"]');
    if (link && link.getAttribute('href') === location.hash) {
      event.preventDefault();
      if (currentDoc) {
        const parsed = parseHash();
        if (parsed.slug) scrollToSection(parsed.slug, true);
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  });

  /* ---------------- tasks & copy ---------------- */

  view.addEventListener('change', (event) => {
    const box = event.target.closest('.task-box');
    if (!box) return;
    if (box.checked) state.tasks[box.dataset.task] = Date.now();
    else delete state.tasks[box.dataset.task];
    saveState();
    refreshProgress();
  });

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      try {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand('copy');
        area.remove();
        return ok;
      } catch (fallbackError) {
        return false;
      }
    }
  }

  view.addEventListener('click', async (event) => {
    const button = event.target.closest('.copy-btn');
    if (!button) return;
    const block = button.closest('.codeblock');
    const code = block ? block.querySelector('pre code') : null;
    if (!code) return;
    const ok = await copyText(code.textContent);
    if (!ok) {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      showToast('Không copy tự động được — code đã được chọn, nhấn Ctrl+C');
      return;
    }
    button.classList.add('is-copied');
    const label = button.querySelector('.copy-text');
    if (label) label.textContent = 'Đã copy';
    setTimeout(() => {
      button.classList.remove('is-copied');
      if (label) label.textContent = 'Copy';
    }, 1600);
  });

  /* ---------------- mobile drawer & body lock ---------------- */

  function updateBodyLock() {
    const overlayOpen =
      (els.searchOverlay && !els.searchOverlay.hidden) ||
      (els.bookOverlay && !els.bookOverlay.hidden) ||
      (els.noteOverlay && !els.noteOverlay.hidden) ||
      document.body.classList.contains('sidebar-open');
    document.body.classList.toggle('sidebar-locked', Boolean(overlayOpen));
  }

  function openMobileSidebar() {
    document.body.classList.add('sidebar-open');
    syncMenuButton();
    updateBodyLock();
  }

  function closeMobileSidebar() {
    document.body.classList.remove('sidebar-open');
    syncMenuButton();
    updateBodyLock();
  }

  els.menuBtn.addEventListener('click', toggleToc);

  els.scrim.addEventListener('click', closeMobileSidebar);

  /* ---------------- search ---------------- */

  function buildSearchIndex() {
    const entries = [];
    for (const doc of docs) {
      for (const section of doc.sections) {
        entries.push({
          docId: doc.id,
          docLabel: doc.label,
          docTitle: doc.title,
          id: section.id,
          title: section.title,
          titleNorm: normalizeDetailed(section.title),
          body: section.text,
          bodyNorm: normalizeDetailed(section.text),
        });
      }
    }
    return entries;
  }

  searchIndex = buildSearchIndex();

  function highlightText(raw, query) {
    if (!query) return escapeHtml(raw);
    const normalized = normalizeDetailed(raw);
    const positions = [];
    let index = normalized.text.indexOf(query);
    while (index >= 0 && positions.length < 12) {
      positions.push(index);
      index = normalized.text.indexOf(query, index + query.length);
    }
    if (!positions.length) return escapeHtml(raw);
    let result = '';
    let last = 0;
    for (const position of positions) {
      const start = normalized.map[position];
      const endPos = position + query.length - 1;
      const end = endPos < normalized.map.length ? normalized.map[endPos] + 1 : raw.length;
      if (start < last) continue;
      result += `${escapeHtml(raw.slice(last, start))}<mark>${escapeHtml(raw.slice(start, end))}</mark>`;
      last = end;
    }
    result += escapeHtml(raw.slice(last));
    return result;
  }

  function makeSnippet(entry, query, bodyIndex) {
    if (bodyIndex < 0) {
      const text = entry.body.slice(0, 180);
      return highlightText(text, query) + (entry.body.length > 180 ? '…' : '');
    }
    const map = entry.bodyNorm.map;
    const rawIndex = map[Math.min(bodyIndex, map.length - 1)] || 0;
    let start = Math.max(0, rawIndex - 70);
    let end = Math.min(entry.body.length, rawIndex + 180);
    if (start > 0) {
      const space = entry.body.indexOf(' ', start);
      if (space >= 0 && space < rawIndex - 20) start = space + 1;
    }
    if (end < entry.body.length) {
      const space = entry.body.lastIndexOf(' ', end);
      if (space > rawIndex + 40) end = space;
    }
    const slice = entry.body.slice(start, end);
    return `${start > 0 ? '… ' : ''}${highlightText(slice, query)}${end < entry.body.length ? ' …' : ''}`;
  }

  function searchEmptyTemplate(message) {
    return `
      <div class="search-empty">
        <strong>${message}</strong>
        Gõ tên tuần, API, lệnh asm hoặc khái niệm — không dấu vẫn tìm được.
        <div class="search-suggest">
          <button class="chip" type="button" data-query="MinHook">MinHook</button>
          <button class="chip" type="button" data-query="ReadProcessMemory">ReadProcessMemory</button>
          <button class="chip" type="button" data-query="pointer chain">pointer chain</button>
          <button class="chip" type="button" data-query="mod apk">mod APK</button>
        </div>
      </div>`;
  }

  function runSearch() {
    const raw = els.searchInput.value.trim();
    const query = normalizeQuery(raw);
    searchActive = -1;
    searchResults = [];

    if (!raw) {
      els.searchResults.innerHTML = searchEmptyTemplate(`Tìm trong ${docs.length} tài liệu`);
      bindSearchSuggestions();
      return;
    }
    if (query.length < 2) {
      els.searchResults.innerHTML = searchEmptyTemplate('Gõ thêm ít nhất 2 ký tự');
      bindSearchSuggestions();
      return;
    }

    const scored = [];
    for (const entry of searchIndex) {
      const titleIndex = entry.titleNorm.text.indexOf(query);
      const bodyIndex = entry.bodyNorm.text.indexOf(query);
      if (titleIndex < 0 && bodyIndex < 0) continue;
      let count = 0;
      let cursor = bodyIndex;
      while (cursor >= 0 && count < 8) {
        count += 1;
        cursor = entry.bodyNorm.text.indexOf(query, cursor + query.length);
      }
      let score = 0;
      if (titleIndex >= 0) score += 400 - Math.min(titleIndex, 120);
      if (bodyIndex >= 0) score += 80 + Math.min(count, 8) * 12;
      scored.push({ entry, score, bodyIndex });
    }

    scored.sort((a, b) => b.score - a.score);
    searchResults = scored.slice(0, 30);

    if (!searchResults.length) {
      els.searchResults.innerHTML = searchEmptyTemplate(`Không tìm thấy “${escapeHtml(raw)}”`);
      bindSearchSuggestions();
      return;
    }

    els.searchResults.innerHTML = searchResults
      .map(
        (result, index) => `
          <button class="search-result${index === 0 ? ' is-active' : ''}" type="button" data-index="${index}">
            <span class="search-result-top">
              <span class="doc-badge ${result.entry.docId}">${escapeHtml(result.entry.docLabel)}</span>
              <span class="search-result-title">${highlightText(result.entry.title, query)}</span>
            </span>
            <span class="search-result-snippet">${makeSnippet(result.entry, query, result.bodyIndex)}</span>
          </button>`,
      )
      .join('');
    searchActive = 0;
  }

  function bindSearchSuggestions() {
    for (const button of els.searchResults.querySelectorAll('[data-query]')) {
      button.addEventListener('click', () => {
        els.searchInput.value = button.dataset.query;
        runSearch();
        els.searchInput.focus();
      });
    }
  }

  function openSearch() {
    closeMobileSidebar();
    closeBook(true);
    closeNote(true);
    els.searchOverlay.hidden = false;
    updateBodyLock();
    els.searchInput.value = '';
    runSearch();
    requestAnimationFrame(() => els.searchInput.focus());
  }

  function closeSearch() {
    if (!els.searchOverlay || els.searchOverlay.hidden) return;
    els.searchOverlay.hidden = true;
    updateBodyLock();
  }

  function openResult(index) {
    const result = searchResults[index];
    if (!result) return;
    const { entry } = result;
    const hash = `#/doc/${entry.docId}${entry.id ? `/${entry.id}` : ''}`;
    closeSearch();
    if (location.hash === hash) {
      if (currentDoc) {
        if (entry.id) scrollToSection(entry.id, true);
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      location.hash = hash;
    }
  }

  els.searchTrigger.addEventListener('click', openSearch);
  els.searchClose.addEventListener('click', closeSearch);
  els.searchInput.addEventListener('input', runSearch);

  els.searchResults.addEventListener('click', (event) => {
    const button = event.target.closest('.search-result');
    if (button) openResult(Number(button.dataset.index));
  });

  els.searchOverlay.addEventListener('click', (event) => {
    if (event.target === els.searchOverlay) closeSearch();
  });

  els.searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSearch();
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!searchResults.length) return;
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      searchActive = (searchActive + direction + searchResults.length) % searchResults.length;
      for (const node of els.searchResults.querySelectorAll('.search-result')) {
        node.classList.toggle('is-active', Number(node.dataset.index) === searchActive);
      }
      const activeNode = els.searchResults.querySelector('.search-result.is-active');
      if (activeNode) activeNode.scrollIntoView({ block: 'nearest' });
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      openResult(searchActive);
    }
  });

  document.addEventListener('keydown', (event) => {
    const tag = (event.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea' || event.target.isContentEditable;
    const noteOpen = els.noteOverlay && !els.noteOverlay.hidden;
    const bookOpen = els.bookOverlay && !els.bookOverlay.hidden;
    if (event.key === 'Escape') {
      if (noteOpen) closeNote();
      else if (bookOpen) closeBook();
      else if (!els.searchOverlay.hidden) closeSearch();
      else closeMobileSidebar();
      return;
    }
    if (noteOpen) return;
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (els.searchOverlay.hidden) openSearch();
      else closeSearch();
      return;
    }
    if (event.key === '/' && !typing && els.searchOverlay.hidden) {
      event.preventDefault();
      openSearch();
      return;
    }
    if (event.key === '[' && !typing && els.searchOverlay.hidden
      && document.body.classList.contains('has-sidebar')) {
      event.preventDefault();
      toggleToc();
    }
  });

  /* ---------------- service worker ---------------- */

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  /* ---------------- boot ---------------- */

  if (state.theme) applyTheme(state.theme);
  else applyTheme(document.documentElement.dataset.theme || 'dark');

  route();
};
