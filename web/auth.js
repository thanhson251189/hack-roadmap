/* Unlocks the encrypted study content, then boots app.js. */
(() => {
  'use strict';

  const KEY_STORE = 'hackroadmap.key.v1';
  const lock = window.CONTENT_LOCK;

  const els = {
    screen: document.getElementById('lockScreen'),
    form: document.getElementById('lockForm'),
    email: document.getElementById('lockEmail'),
    password: document.getElementById('lockPassword'),
    error: document.getElementById('lockError'),
    submit: document.getElementById('lockSubmit'),
    logout: document.getElementById('lockLogout'),
  };

  function decode64(value) {
    const raw = atob(value);
    const bytes = new Uint8Array(raw.length);
    for (let index = 0; index < raw.length; index += 1) bytes[index] = raw.charCodeAt(index);
    return bytes;
  }

  function encode64(bytes) {
    return btoa(String.fromCharCode(...new Uint8Array(bytes)));
  }

  async function sha256Hex(text) {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  function deriveKey(password, salt, iterations) {
    return crypto.subtle
      .importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey'])
      .then((material) =>
        crypto.subtle.deriveKey(
          { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
          material,
          { name: 'AES-GCM', length: 256 },
          true,
          ['decrypt'],
        ),
      );
  }

  async function readPayload(key) {
    const plain = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: decode64(lock.cipher.iv) },
      key,
      decode64(lock.payload),
    );
    if (lock.zip === 'gzip') {
      if (typeof DecompressionStream !== 'function') throw new Error('no-gzip');
      const stream = new Blob([plain]).stream().pipeThrough(new DecompressionStream('gzip'));
      return JSON.parse(await new Response(stream).text());
    }
    return JSON.parse(new TextDecoder().decode(plain));
  }

  function start(payload) {
    window.CONTENT = payload;
    document.body.classList.remove('is-locked');
    if (els.screen) els.screen.hidden = true;
    if (els.logout) els.logout.hidden = false;
    window.__bootApp();
  }

  function showError(message) {
    if (!els.error) return;
    els.error.textContent = message;
    els.error.hidden = !message;
  }

  function setBusy(busy) {
    if (!els.submit) return;
    els.submit.disabled = busy;
    els.submit.textContent = busy ? 'Đang mở khoá…' : 'Đăng nhập';
  }

  async function tryUnlock(key) {
    try {
      const payload = await readPayload(key);
      start(payload);
      return true;
    } catch {
      return false;
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    showError('');
    const email = (els.email.value || '').trim().toLowerCase();
    const password = els.password.value || '';
    if (!password) {
      showError('Nhập mật khẩu để mở khoá.');
      return;
    }
    setBusy(true);
    try {
      if (lock.user && (await sha256Hex(`${lock.kdf.salt}:${email}`)) !== lock.user) {
        showError('Email hoặc mật khẩu không đúng.');
        return;
      }
      const key = await deriveKey(password, decode64(lock.kdf.salt), lock.kdf.iterations);
      if (!(await tryUnlock(key))) {
        showError('Email hoặc mật khẩu không đúng.');
        return;
      }
      localStorage.setItem(KEY_STORE, encode64(await crypto.subtle.exportKey('raw', key)));
    } catch {
      showError('Trình duyệt không hỗ trợ giải mã. Dùng Chrome/Edge/Firefox bản mới.');
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    localStorage.removeItem(KEY_STORE);
    location.reload();
  }

  async function boot() {
    if (!lock) {
      // Bản build --plain (chỉ dùng khi phát triển): vào thẳng.
      if (window.CONTENT) {
        document.body.classList.remove('is-locked');
        if (els.screen) els.screen.hidden = true;
        window.__bootApp();
        return;
      }
      showError('Chưa có content.js. Chạy node build.js.');
      return;
    }

    document.body.classList.add('is-locked');
    if (els.logout) els.logout.hidden = true;

    const saved = localStorage.getItem(KEY_STORE);
    if (saved && window.crypto && crypto.subtle) {
      try {
        const key = await crypto.subtle.importKey('raw', decode64(saved), 'AES-GCM', false, ['decrypt']);
        if (await tryUnlock(key)) return;
      } catch {
        /* khoá cũ không còn dùng được */
      }
      localStorage.removeItem(KEY_STORE);
    }

    if (!window.crypto || !crypto.subtle) {
      showError('Trang cần HTTPS (hoặc localhost) để giải mã nội dung.');
      if (els.submit) els.submit.disabled = true;
    }
    if (els.screen) els.screen.hidden = false;
    if (els.email && !lock.user) els.email.value = '';
  }

  if (els.form) els.form.addEventListener('submit', onSubmit);
  if (els.logout) els.logout.addEventListener('click', logout);
  boot();
})();
