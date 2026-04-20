/* ============================================
   R.L. SIMMONS BUILDER — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initStickyHeader();
  initMobileNav();
  initQuestionScroll();
  initFormValidation();
});

/* ---- Scroll Reveal (Intersection Observer) ---- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ---- Sticky Header ---- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 100;

  function onScroll() {
    const currentScroll = window.scrollY;
    header.classList.toggle('header-scrolled', currentScroll > scrollThreshold);
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Check initial state
}

/* ---- Mobile Navigation ---- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.classList.toggle('nav-open');
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
    }
  });
}

/* ---- Question Scroll Section (Homepage) ---- */
function initQuestionScroll() {
  const wrapper = document.querySelector('.questions-scroll');
  if (!wrapper) return;

  const items = wrapper.querySelectorAll('.question-item');
  const hint = wrapper.querySelector('.questions-scroll__hint');
  if (!items.length) return;

  const totalItems = items.length;

  function onScroll() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperTop = -wrapperRect.top;
    const wrapperHeight = wrapper.offsetHeight - window.innerHeight;

    if (wrapperTop < 0 || wrapperTop > wrapperHeight) {
      items.forEach(item => item.classList.remove('visible'));
      if (wrapperTop > wrapperHeight) {
        // Past the section — keep last item visible
        items[totalItems - 1].classList.add('visible');
      }
      return;
    }

    // Fade scroll hint once user starts scrolling into the section
    if (hint) hint.style.opacity = wrapperTop > 60 ? '0' : '0.5';

    const progress = wrapperTop / wrapperHeight;
    const segmentSize = 1 / totalItems;

    items.forEach((item, i) => {
      const segmentStart = i * segmentSize;
      const segmentEnd = (i + 1) * segmentSize;

      // First question is visible immediately on section entry (no scroll required)
      // All others appear early in their segment and stay visible through most of it
      const segmentMid  = i === 0 ? 0 : segmentStart + segmentSize * 0.06;
      const segmentFade = segmentEnd - segmentSize * 0.06;

      if (progress >= segmentMid && progress <= segmentFade) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run immediately so first question shows on section entry
}

/* ---- Form Validation ---- */
function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    form.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('error');
    });

    // Validate required fields
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.closest('.form-group').classList.add('error');
      }
    });

    // Validate email
    const emailField = form.querySelector('[type="email"]');
    if (emailField && emailField.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailField.value)) {
        isValid = false;
        emailField.closest('.form-group').classList.add('error');
      }
    }

    if (isValid) {
      // Show success message
      form.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) {
        success.style.display = 'block';
      }
    }
  });
}
