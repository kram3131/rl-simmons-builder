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

  const sticky = wrapper.querySelector('.questions-scroll__sticky');
  const items = wrapper.querySelectorAll('.question-item');
  const hint = wrapper.querySelector('.questions-scroll__hint');
  if (!items.length) return;

  const totalItems = items.length;
  const AUTO_INTERVAL = 3800; // ms per question
  let currentIndex = 0;
  let autoTimer = null;
  let scrollOverride = false; // true when user is manually scrolling

  // --- Build progress dots ---
  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'questions-scroll__dots';
  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('span');
    dot.className = 'questions-dot';
    dotsWrap.appendChild(dot);
  }
  if (sticky) sticky.appendChild(dotsWrap);
  const dots = dotsWrap.querySelectorAll('.questions-dot');

  // --- Build replay button ---
  const replayBtn = document.createElement('button');
  replayBtn.className = 'questions-replay';
  replayBtn.setAttribute('aria-label', 'Watch questions again');
  replayBtn.innerHTML = '↺ &nbsp;Watch again';
  if (sticky) sticky.appendChild(replayBtn);

  // --- Show a specific item ---
  function showItem(index) {
    index = Math.max(0, Math.min(index, totalItems - 1));
    items.forEach(item => item.classList.remove('visible'));
    dots.forEach(dot => dot.classList.remove('active'));
    items[index].classList.add('visible');
    dots[index].classList.add('active');
    currentIndex = index;
    // Show/hide replay button based on whether we're on the last item
    replayBtn.classList.toggle('visible', index === totalItems - 1);
  }

  // --- Replay: reset to first question and restart ---
  replayBtn.addEventListener('click', () => {
    replayBtn.classList.remove('visible');
    scrollOverride = false;
    showItem(0);
    startTimer();
  });

  // --- Auto-advance timer ---
  function startTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (!scrollOverride && currentIndex < totalItems - 1) {
        showItem(currentIndex + 1);
      } else if (currentIndex >= totalItems - 1) {
        clearInterval(autoTimer); // Stop at final CTA
      }
    }, AUTO_INTERVAL);
  }

  function stopTimer() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  // --- Show first question immediately, hide scroll hint ---
  showItem(0);
  if (hint) hint.style.display = 'none';

  // --- Start timer when section enters viewport ---
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startTimer();
      } else {
        stopTimer();
      }
    });
  }, { threshold: 0.2 });
  sectionObserver.observe(wrapper);

  // --- Scroll also advances questions (lets fast scrollers skip ahead) ---
  let scrollTimeout;
  function onScroll() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperTop = -wrapperRect.top;
    const wrapperHeight = wrapper.offsetHeight - window.innerHeight;
    if (wrapperTop < 0 || wrapperTop > wrapperHeight) return;

    const progress = wrapperTop / wrapperHeight;
    const scrollIndex = Math.min(Math.floor(progress * totalItems), totalItems - 1);

    // If scroll is ahead of the timer, jump to that item
    if (scrollIndex > currentIndex) {
      scrollOverride = true;
      showItem(scrollIndex);
      // Resume auto-advance from this new position after a brief pause
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollOverride = false;
        startTimer();
      }, 1200);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
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
