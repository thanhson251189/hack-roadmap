import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { Marked } from 'marked';
import hljs from 'highlight.js';

const WEB_DIR = import.meta.dirname;
const ROOT_DIR = path.resolve(WEB_DIR, '..');

// The study content is personal, so the published bundle ships encrypted and the
// plain Markdown sources are no longer copied into the site. Set HACK_PASS (and
// optionally HACK_USER) before building; pass --plain only for local drafts.
const LOCK_ITERATIONS = 310000;

const DOCS = [
  {
    id: 'zero',
    file: 'Lo-Trinh-Tu-So-0.md',
    label: 'Từ số 0',
    title: 'Lộ Trình Từ Số 0',
    kind: 'foundation',
    eyebrow: 'Tuần 1–12 · Nền tảng',
    tagline: 'Chưa từng viết dòng code nào? Bắt đầu ở đây: C, con trỏ, bộ nhớ, project quản lý người chơi.',
    accent: 'emerald',
    order: 1,
  },
  {
    id: 'solutions',
    file: 'Loi-Giai-Va-Bai-Tap-Mo-Rong-12-Tuan.md',
    label: 'Lời giải',
    title: 'Lời Giải & Bài Tập Mở Rộng',
    kind: 'companion',
    eyebrow: 'Đi kèm tuần 1–12',
    tagline: 'Đáp án chi tiết, bài tập mở rộng có gợi ý, bug cố ý và thang chấm — dùng song song với lộ trình 12 tuần.',
    accent: 'sky',
    order: 2,
  },
  {
    id: 'hack16',
    file: 'Lo-Trinh-Hack-Game-16-Tuan.md',
    label: '16 tuần',
    title: 'Lộ Trình Hack Game 16 Tuần',
    kind: 'main',
    eyebrow: 'Tuần 1–16 · Đích đến',
    tagline: 'Cheat Engine, reverse engineering, trainer C++, DLL injection, hook, overlay, mod Android và project cuối khóa.',
    accent: 'amber',
    order: 3,
  },
  {
    id: 'android',
    file: 'Giao-An-Hack-Game-Mobile-Android.md',
    label: 'Android',
    title: 'Hack Game Mobile Android',
    kind: 'main',
    eyebrow: 'Tuần 1–16 · Nhánh mobile',
    tagline: 'Java, adb, APK, smali, ARM64, Frida, IL2CPP và mod menu native — làm mod APK cho game offline.',
    accent: 'violet',
    order: 4,
  },
  {
    id: 'giaotrinh',
    file: 'Giao-Trinh-Ngon-Ngu-Lap-Trinh-C.md',
    label: 'Giáo trình',
    title: 'Giáo Trình Ngôn Ngữ Lập Trình C',
    kind: 'reference',
    eyebrow: 'Sách tham khảo · 8 chương',
    tagline: 'Trương Ngọc Sơn và cộng sự (NXB ĐHQG-HCM, 2020) — bản đọc trên web của giáo trình 211 trang, đủ 8 chương từ lưu đồ đến tiền xử lý.',
    accent: 'rose',
    order: 5,
  },
];

const LANG_MAP = {
  c: 'c',
  h: 'c',
  cpp: 'cpp',
  cxx: 'cpp',
  'c++': 'cpp',
  java: 'java',
  kotlin: 'kotlin',
  smali: 'smali',
  cmake: 'cmake',
  gradle: 'gradle',
  arm64: 'armasm',
  aarch64: 'armasm',
  js: 'javascript',
  javascript: 'javascript',
  bat: 'dos',
  batch: 'dos',
  cmd: 'dos',
  asm: 'x86asm',
  nasm: 'x86asm',
  x86asm: 'x86asm',
  py: 'python',
  python: 'python',
  sh: 'bash',
  bash: 'bash',
  shell: 'bash',
  ps1: 'powershell',
  powershell: 'powershell',
  json: 'json',
  xml: 'xml',
  html: 'xml',
  makefile: 'makefile',
  make: 'makefile',
  diff: 'diff',
  text: 'plaintext',
  txt: 'plaintext',
  plaintext: 'plaintext',
};

const LANG_LABEL = {
  c: 'C',
  cpp: 'C++',
  java: 'Java',
  kotlin: 'Kotlin',
  smali: 'Smali',
  cmake: 'CMake',
  gradle: 'Gradle',
  armasm: 'ARM64',
  javascript: 'JavaScript',
  dos: 'Batch',
  x86asm: 'ASM',
  python: 'Python',
  bash: 'Shell',
  powershell: 'PowerShell',
  json: 'JSON',
  xml: 'XML',
  makefile: 'Makefile',
  diff: 'Diff',
  plaintext: 'Text',
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function decodeEntities(value) {
  return String(value)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

function stripTags(value) {
  return decodeEntities(String(value).replace(/<[^>]*>/g, ' '));
}

function plainText(html) {
  return stripTags(String(html).replace(/<div class="codeblock-head">[\s\S]*?<\/div>/g, ' '))
    .replace(/[ \t\f\v]+/g, ' ')
    .replace(/\s*\n\s*/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90);
}

function uniqueSlug(base, counts) {
  const slug = base || 'muc';
  const seen = counts.get(slug) || 0;
  counts.set(slug, seen + 1);
  return seen === 0 ? slug : `${slug}-${seen + 1}`;
}

function shortHash(value) {
  return crypto.createHash('sha1').update(value).digest('hex').slice(0, 10);
}

function normalizeLinkTarget(value) {
  return slugify(stripTags(value).replace(/^\s*\d+[.)]?\s*/, ''));
}

function highlightCode(text, lang) {
  const raw = (lang || '').trim().toLowerCase();
  const mapped = LANG_MAP[raw] || (hljs.getLanguage(raw) ? raw : 'plaintext');
  let html;
  try {
    html = hljs.highlight(text, { language: mapped }).value;
  } catch {
    html = escapeHtml(text);
  }
  const label = LANG_LABEL[mapped] || raw.toUpperCase() || 'Text';
  return {
    html,
    lang: mapped,
    label,
  };
}

function transformTasks(html, docId, sectionId, taskCounts, tasks) {
  // Loose lists wrap the item body in <p>, so allow that around the checkbox.
  return html.replace(
    /<li>(?:<p>)?<input disabled[^>]*type="checkbox">([\s\S]*?)(?:<\/p>\s*)?<\/li>/g,
    (match, body) => {
      const text = plainText(body);
      const base = `t_${docId}_${shortHash(text)}`;
      const seen = taskCounts.get(base) || 0;
      taskCounts.set(base, seen + 1);
      const id = seen === 0 ? base : `${base}_${seen + 1}`;
      tasks.push({ id, section: sectionId, text });
      return `<li class="task-item"><label class="task"><input type="checkbox" class="task-box" data-task="${id}"><span class="task-label">${body.trim()}</span></label></li>`;
    },
  );
}

function wrapTables(html) {
  return html
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, '</table></div>');
}

function autoLinkToc(html, docId, headingMap) {
  return html.replace(/<li>([\s\S]*?)<\/li>/g, (match, body) => {
    if (body.includes('<a ')) return match;
    const text = plainText(body);
    const key = normalizeLinkTarget(text);
    const target = headingMap.get(key);
    if (!target) return match;
    return `<li><a class="toc-jump" href="#/doc/${docId}/${target}"><span>${body.trim()}</span><svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>`;
  });
}

function buildDoc(doc) {
  const filePath = path.join(ROOT_DIR, doc.file);
  const source = fs.readFileSync(filePath, 'utf8');
  const titleMatch = source.match(/^#\s+(.+)$/m);
  const rawTitle = titleMatch ? titleMatch[1].trim() : doc.title;

  const headings = [];
  const slugCounts = new Map();
  const urlHeadingCounts = new Map();

  const marked = new Marked({ gfm: true, breaks: false });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        if (depth === 1) return '';
        const text = plainText(inner);
        const base = slugify(text);
        const id = uniqueSlug(base, slugCounts);
        headings.push({ id, text, depth, html: inner });
        return `<h${depth} id="${id}">${inner}<a class="h-anchor" href="#/doc/${doc.id}/${id}" aria-label="Liên kết tới mục này" tabindex="-1">#</a></h${depth}>`;
      },
      code({ text, lang }) {
        const highlighted = highlightCode(text, lang);
        return `<div class="codeblock" data-lang="${highlighted.lang}"><div class="codeblock-head"><span class="code-lang">${escapeHtml(highlighted.label)}</span><button class="copy-btn" type="button" aria-label="Sao chép đoạn code"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 5.5V4A1.5 1.5 0 009 2.5H4A1.5 1.5 0 002.5 4v5A1.5 1.5 0 004 10.5h1.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg><span class="copy-text">Copy</span></button></div><pre><code class="hljs language-${highlighted.lang}">${highlighted.html}</code></pre></div>`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//i.test(href || '');
        const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
        const rel = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${escapeHtml(href || '#')}"${titleAttr}${rel}>${text}</a>`;
      },
      checkbox({ checked }) {
        return `<input disabled="" type="checkbox"${checked ? ' checked=""' : ''}>`;
      },
    },
  });

  let html = wrapTables(marked.parse(source));

  const taskCounts = new Map();
  const tasks = [];
  const sections = [];
  const parts = html.split(/(?=<h2 id=")/);

  const intro = parts.shift() || '';
  const introText = plainText(intro);
  if (introText) {
    sections.push({
      id: '',
      title: doc.title,
      level: 2,
      text: introText.slice(0, 6000),
      intro: true,
    });
  }

  const headingMap = new Map();
  for (const heading of headings) {
    if (heading.depth > 3) continue;
    const key = normalizeLinkTarget(heading.text);
    if (!headingMap.has(key)) headingMap.set(key, heading.id);
  }

  const processed = [];
  for (const part of parts) {
    const match = part.match(/^<h2 id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/);
    if (!match) {
      processed.push(part);
      continue;
    }
    const sectionId = match[1];
    const headingMeta = headings.find((heading) => heading.id === sectionId);
    const sectionTitle = headingMeta ? headingMeta.text : plainText(match[2]);
    let sectionHtml = transformTasks(part, doc.id, sectionId, taskCounts, tasks);
    if (sectionTitle === 'Mục lục') {
      sectionHtml = autoLinkToc(sectionHtml, doc.id, headingMap);
    }
    processed.push(sectionHtml);
    sections.push({
      id: sectionId,
      title: sectionTitle,
      level: 2,
      text: plainText(part.slice(match[0].length)).slice(0, 20000),
    });

    const subParts = sectionHtml.split(/(?=<h3 id=")/);
    for (let i = 1; i < subParts.length; i += 1) {
      const subMatch = subParts[i].match(/^<h3 id="([^"]+)"[^>]*>([\s\S]*?)<\/h3>/);
      if (!subMatch) continue;
      const subMeta = headings.find((heading) => heading.id === subMatch[1]);
      sections.push({
        id: subMatch[1],
        title: subMeta ? subMeta.text : plainText(subMatch[2]),
        level: 3,
        parent: sectionId,
        text: plainText(subParts[i].slice(subMatch[0].length)).slice(0, 20000),
      });
    }
  }

  // The hero already renders the H1, but everything else before the first H2
  // (scope notes, safety rules, verification status) belongs on the page.
  const introBody = intro
    .replace(/^\s*<h1[\s\S]*?<\/h1>\s*/i, '')
    .replace(/^\s*<hr\s*\/?>\s*/i, '')
    .trim();
  html = introBody ? `<div class="doc-intro">${introBody}</div>${processed.join('')}` : processed.join('');

  // Week quick-jump chips, derived from headings in document order.
  const weeks = [];
  const covered = new Set();
  for (const heading of headings) {
    if (heading.depth > 3) continue;
    if (/tóm tắt/i.test(heading.text)) continue;
    const match = heading.text.match(/(?:^|\s)Tuần\s+(\d+)(?:\s*[–\-]\s*(\d+))?/i);
    if (!match) continue;
    const start = Number(match[1]);
    const end = match[2] ? Number(match[2]) : null;
    if (covered.has(start)) continue;
    covered.add(start);
    if (end && end > start) {
      for (let i = start; i <= end; i += 1) covered.add(i);
    }
    weeks.push({
      label: end && end > start ? `Tuần ${start}–${end}` : `Tuần ${start}`,
      id: heading.id,
    });
  }

  const toc = [];
  for (const heading of headings) {
    if (heading.depth === 2) {
      toc.push({ id: heading.id, text: heading.text, children: [] });
    } else if (heading.depth === 3) {
      if (!toc.length) toc.push({ id: heading.id, text: heading.text, children: [] });
      else toc[toc.length - 1].children.push({ id: heading.id, text: heading.text });
    }
  }

  const allText = plainText(html);
  const words = allText ? allText.split(/\s+/).length : 0;

  return {
    id: doc.id,
    label: doc.label,
    title: doc.title,
    sourceTitle: rawTitle,
    kind: doc.kind,
    eyebrow: doc.eyebrow,
    tagline: doc.tagline,
    accent: doc.accent,
    order: doc.order,
    file: doc.file,
    bytes: Buffer.byteLength(source, 'utf8'),
    words,
    minutes: Math.max(1, Math.round(words / 200)),
    html,
    toc,
    sections,
    weeks,
    tasks,
    headingCount: toc.length,
    checkboxCount: tasks.length,
    codeBlocks: (html.match(/class="codeblock"/g) || []).length,
  };
}

function base64(buffer) {
  return Buffer.from(buffer).toString('base64');
}

function lockPayload(payload, passphrase, email) {
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(passphrase, salt, LOCK_ITERATIONS, 32, 'sha256');
  // Gzip first: ciphertext does not compress, and this keeps the bundle small.
  const plain = zlib.gzipSync(Buffer.from(JSON.stringify(payload), 'utf8'));
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([cipher.update(plain), cipher.final()]);
  return {
    version: 1,
    zip: 'gzip',
    kdf: { name: 'PBKDF2-SHA256', iterations: LOCK_ITERATIONS, salt: base64(salt) },
    cipher: { name: 'AES-256-GCM', iv: base64(iv) },
    user: email ? crypto.createHash('sha256').update(`${base64(salt)}:${email.trim().toLowerCase()}`).digest('hex') : '',
    payload: base64(Buffer.concat([ciphertext, cipher.getAuthTag()])),
  };
}

function main() {
  const docs = DOCS.map(buildDoc);

  const payload = {
    generatedAt: new Date().toISOString(),
    docs,
    totals: {
      docs: docs.length,
      weeks: 28,
      sections: docs.reduce((sum, d) => sum + d.headingCount, 0),
      tasks: docs.reduce((sum, d) => sum + d.checkboxCount, 0),
      minutes: docs.reduce((sum, d) => sum + d.minutes, 0),
    },
  };

  const plain = process.argv.includes('--plain');
  const passphrase = (process.env.HACK_PASS || '').trim();
  if (!plain && !passphrase) {
    console.error('Thiếu HACK_PASS. Ví dụ: $env:HACK_PASS="mat-khau"; npm run build');
    console.error('Chỉ muốn bản nháp không mã hoá thì chạy: node build.js --plain');
    process.exitCode = 1;
    return;
  }

  const outPath = path.join(WEB_DIR, 'content.js');
  const banner =
    '/* Generated by build.js from the Markdown files in the parent folder. Do not edit by hand. */\n';

  if (plain) {
    fs.writeFileSync(outPath, `${banner}window.CONTENT = ${JSON.stringify(payload)};\n`, 'utf8');
    console.warn('!!! Bản build KHÔNG mã hoá — chỉ dùng để xem thử, đừng deploy.');
  } else {
    const locked = lockPayload(payload, passphrase, process.env.HACK_USER || '');
    fs.writeFileSync(outPath, `${banner}window.CONTENT_LOCK = ${JSON.stringify(locked)};\n`, 'utf8');
  }

  const kb = (Buffer.byteLength(fs.readFileSync(outPath)) / 1024).toFixed(1);
  console.log(`Built ${docs.length} docs → content.js (${kb} KB, ${plain ? 'plain' : 'AES-256-GCM'})`);
  for (const doc of docs) {
    console.log(
      `  ${doc.id.padEnd(10)} ${String(doc.headingCount).padStart(3)} mục  ${String(doc.checkboxCount).padStart(3)} bài tập  ${String(doc.codeBlocks).padStart(3)} code  ~${doc.minutes} phút`,
    );
  }
}

main();
