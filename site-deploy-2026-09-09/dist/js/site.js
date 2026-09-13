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

  // --- Accessibility: keyboard activation for elements migrated from the live
  // engine as div/span "buttons" (accordion headers, flip-cards, menu toggle,
  // password eye, tooltips). Additive only — never touches vendor/init.js or
  // vendor/menu.js, which still own the actual click behaviour.
  document.querySelectorAll('.accord-header, .flip-card, .menu-toggle, .menu-close, [role="button"]:not(a):not(button)').forEach(el => {
    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });

  // FAQ accordion: keep aria-expanded in sync with whatever toggles .accord-opened
  document.querySelectorAll('.accord-header').forEach(h => {
    h.addEventListener('click', () => {
      setTimeout(() => h.setAttribute('aria-expanded', h.classList.contains('accord-opened') ? 'true' : 'false'));
    });
  });

  // Pricing flip-cards: keep aria-pressed in sync with whatever toggles .flipped
  document.querySelectorAll('.flip-card').forEach(c => {
    c.addEventListener('click', () => {
      setTimeout(() => c.setAttribute('aria-pressed', c.classList.contains('flipped') ? 'true' : 'false'));
    });
  });

  // Header dropdowns ("About us", "News"): announce expanded state to screen readers
  document.querySelectorAll('li.has-children').forEach(li => {
    const trigger = li.querySelector(':scope > a');
    if (!trigger) return;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    const sync = () => trigger.setAttribute('aria-expanded', (li.classList.contains('open') || li.matches(':hover, :focus-within')) ? 'true' : 'false');
    li.addEventListener('mouseenter', sync);
    li.addEventListener('mouseleave', sync);
    li.addEventListener('focusin', sync);
    li.addEventListener('focusout', sync);
    li.addEventListener('click', () => setTimeout(sync));
  });

  // --- Polish pass: pricing price count-up, refined reveal for testimonials/
  // footer. Skipped entirely under prefers-reduced-motion — the values are
  // already correct in the HTML, this only adds the count-up motion.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    // Pricing cards: animate the price counting up from 0 the first time a
    // card enters view. Static, correct value is already in the markup, so
    // this degrades safely if it never fires.
    const easeOutExpo = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const formatAMD = n => Math.round(n).toLocaleString('en-US').replace(/,/g, ' ');
    const priceEls = document.querySelectorAll('.m_price__num[data-count]');
    if (priceEls.length) {
      const countIO = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          countIO.unobserve(el);
          const target = Number(el.dataset.count);
          const duration = 900;
          const start = performance.now();
          const tick = now => {
            const p = Math.min(1, (now - start) / duration);
            el.textContent = formatAMD(target * easeOutExpo(p));
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = formatAMD(target);
          };
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.4 });
      priceEls.forEach(el => countIO.observe(el));
    }

    // Testimonial cards and footer columns: a slightly more considered
    // reveal (blur + rise) than the flat AOS fade-up used elsewhere —
    // reserved for these two spots so it reads as a deliberate accent,
    // not a site-wide mannerism.
    const polishIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-polished-in');
        polishIO.unobserve(entry.target);
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.quote, .footer .ctts > div, .footer__brand').forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 6) * 60}ms`;
      el.classList.add('is-polish-pending');
      polishIO.observe(el);
    });
  } else {
    // No IntersectionObserver, or reduced motion: leave these elements in
    // their plain visible state — .is-polish-pending is never added, so the
    // opacity:0 CSS rule (which only applies to that class) never triggers.
  }
})();
