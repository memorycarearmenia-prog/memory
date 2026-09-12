/* MemoryCare — presentation-only behaviours. Business logic stays in vendor/init.js. */
(function () {
  const header = document.querySelector('header.header');
  const onScroll = () => { if (header) header.classList.toggle('is-scrolled', window.scrollY > 24); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // active account menu item
  document.querySelectorAll('.vmenu a').forEach(a => {
    if (location.pathname.replace(/\/$/, '') === a.getAttribute('href').replace(/\/$/, '')) a.classList.add('is-active');
  });

  // hero headline word-by-word entrance
  document.querySelectorAll('[data-words]').forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(' ');
  });

  // simple reveal for non-AOS elements
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
  } else document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-in'));

  // live password checklist (visual only; server still validates)
  const pw = document.querySelector('#rp');
  const list = document.querySelector('.pw-checklist');
  if (pw && list) {
    const rules = {
      len: v => v.length >= 8,
      latin: v => /^[A-Za-z0-9@$!%*?&]*$/.test(v) && v.length > 0,
      lower: v => /[a-z]/.test(v),
      upper: v => /[A-Z]/.test(v),
      digit: v => /\d/.test(v),
      special: v => /[@$!%*?&]/.test(v),
    };
    const update = () => { const v = pw.value; list.querySelectorAll('li').forEach(li => li.classList.toggle('ok', !!rules[li.dataset.rule]?.(v))); };
    pw.addEventListener('input', update); update();
  }

  // inline hints on blur (visual only — no fields are blocked, server messages stay authoritative)
  document.querySelectorAll('form .field[data-validate]').forEach(f => {
    const input = f.querySelector('input, textarea');
    if (!input) return;
    const check = () => {
      const t = f.dataset.validate, v = input.value.trim();
      let bad = false;
      if (t === 'required') bad = !v;
      if (t === 'email') bad = !!v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (t === 'phone') bad = !!v && !/^[+\d][\d\s()-]{6,}$/.test(v);
      f.classList.toggle('is-error', bad);
      input.setAttribute('aria-invalid', bad ? 'true' : 'false');
    };
    input.addEventListener('blur', check);
    input.addEventListener('input', () => { if (f.classList.contains('is-error')) check(); });
  });

  // order page: reflect selected plan into summary + consent gate
  const order = document.querySelector('#package-order');
  if (order) {
    const consent = order.querySelector('input[name="agree"]');
    const btn = order.querySelector('button.btn');
    const gate = () => { if (consent && btn) btn.disabled = !consent.checked; };
    consent && consent.addEventListener('change', gate); gate();
  }

  // contact map: fall back to address card if the iframe fails on small tablets
  const map = document.querySelector('.contact_wrapper_map iframe');
  if (map) map.addEventListener('error', () => { const fb = document.querySelector('.map-fallback'); if (fb) fb.style.display = 'grid'; });

  // hero video: respect reduced motion & data saver
  const hv = document.querySelector('.hero__media video');
  if (hv) {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const save = navigator.connection && navigator.connection.saveData;
    if (rm || save) { hv.removeAttribute('autoplay'); hv.pause(); hv.style.display = 'none'; }
  }
})();
