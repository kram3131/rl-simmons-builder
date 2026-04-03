/* ============================================
   R.L. SIMMONS BUILDER — Projects Gallery
   ============================================ */

// ---- Project Data ----
// Add new projects by adding entries here. No HTML changes needed.
const projects = [
  {
    id: 'hill-country-estate',
    title: 'Hill Country Custom Estate',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A premium custom home nestled on 20 acres of Hill Country terrain. Designed to capture panoramic views while integrating seamlessly into the native landscape.',
    phases: {
      after: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '3/4' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '16/9' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '3/4' },
      ]
    }
  },
  {
    id: 'harper-ranch-conversion',
    title: 'Harper Ranch Conversion',
    category: 'ranch-conversion',
    categoryLabel: 'Ranch Conversion',
    description: 'A striking transformation of an existing ranch structure into a modern living space. The before and after on this project speaks for itself.',
    phases: {
      before: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '16/9' },
      ],
      during: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '3/4' },
        { src: '', placeholder: true, ratio: '4/3' },
      ],
      after: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '3/4' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '16/9' },
        { src: '', placeholder: true, ratio: '4/3' },
      ]
    }
  },
  {
    id: 'kerrville-remodel',
    title: 'Signature Kitchen & Living Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A complete interior transformation of a Kerrville home. New kitchen, living space, and master suite designed to match how the family actually lives.',
    phases: {
      before: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
      ],
      after: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '3/4' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
      ]
    }
  },
  {
    id: 'fredericksburg-custom',
    title: 'Fredericksburg Modern Ranch Home',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A modern take on ranch-style living just outside Fredericksburg. Clean lines, natural materials, and wide-open Hill Country views from every room.',
    phases: {
      during: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
      ],
      after: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '16/9' },
        { src: '', placeholder: true, ratio: '3/4' },
        { src: '', placeholder: true, ratio: '4/3' },
      ]
    }
  },
  {
    id: 'raw-land-development',
    title: 'Rural Acreage Development',
    category: 'land-development',
    categoryLabel: 'Land Development',
    description: 'A first-time rural buyer needed the full advisory. Roads, well, septic, electrical, and site prep before a single wall went up. This is what land-to-home looks like.',
    phases: {
      before: [
        { src: '', placeholder: true, ratio: '16/9' },
        { src: '', placeholder: true, ratio: '4/3' },
      ],
      during: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '16/9' },
      ],
      after: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '16/9' },
      ]
    }
  },
  {
    id: 'barn-conversion',
    title: 'Historic Barn Guest House',
    category: 'ranch-conversion',
    categoryLabel: 'Ranch Conversion',
    description: 'An aging barn with great bones became a stunning guest house. The original timber framing was preserved while adding modern comfort throughout.',
    phases: {
      before: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
      ],
      after: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '3/4' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
      ]
    }
  },
  {
    id: 'mason-remodel',
    title: 'Mason County Full Home Renovation',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A dated ranch house outside Mason got a complete overhaul. New layout, new systems, and a style that finally matches the landscape around it.',
    phases: {
      before: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
      ],
      after: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '3/4' },
      ]
    }
  },
  {
    id: 'junction-custom',
    title: 'Junction River Property Build',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A custom home on a challenging river property near Junction. Required creative foundation work and deep understanding of the terrain and flood plain.',
    phases: {
      during: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '16/9' },
      ],
      after: [
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '3/4' },
        { src: '', placeholder: true, ratio: '4/3' },
        { src: '', placeholder: true, ratio: '16/9' },
      ]
    }
  }
];

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  initFilterTabs();
  initModal();
});

// ---- Render Project Cards ----
function renderProjectCards() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(project => `
    <div class="project-card reveal" data-category="${project.category}" data-project-id="${project.id}">
      <div class="project-card__image img-zoom">
        <div class="placeholder-img" style="width:100%;height:100%;">Project Photo</div>
      </div>
      <div class="project-card__overlay"></div>
      <div class="project-card__info">
        <span class="project-card__category">${project.categoryLabel}</span>
        <h3 class="project-card__title">${project.title}</h3>
        <span class="project-card__link">View Project &rarr;</span>
      </div>
    </div>
  `).join('');

  // Re-init scroll reveal for dynamically added cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- Filter Tabs ----
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = () => document.querySelectorAll('.project-card');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      cards().forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ---- Project Modal ----
function initModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.project-modal__close');
  const header = modal.querySelector('.project-modal__header');
  const phaseTabs = modal.querySelector('.phase-tabs');
  const gallery = modal.querySelector('.modal-gallery');

  // Open modal on card click
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;

    const projectId = card.dataset.projectId;
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    openModal(project);
  });

  function openModal(project) {
    // Set header
    header.innerHTML = `
      <span class="project-modal__category">${project.categoryLabel}</span>
      <h2>${project.title}</h2>
      <p class="project-modal__description">${project.description}</p>
    `;

    // Set phase tabs
    const phases = Object.keys(project.phases);
    if (phases.length > 1) {
      phaseTabs.style.display = 'flex';
      phaseTabs.innerHTML = phases.map((phase, i) => `
        <button class="phase-tab ${i === 0 ? 'active' : ''}" data-phase="${phase}">
          ${phase.charAt(0).toUpperCase() + phase.slice(1)}
        </button>
      `).join('');

      // Phase tab click
      phaseTabs.querySelectorAll('.phase-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          phaseTabs.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          renderGallery(project.phases[tab.dataset.phase]);
        });
      });
    } else {
      phaseTabs.style.display = 'none';
    }

    // Render first phase gallery
    renderGallery(project.phases[phases[0]]);

    // Show modal
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function renderGallery(images) {
    gallery.innerHTML = images.map((img, i) => {
      if (img.placeholder) {
        return `
          <div class="modal-gallery__item" data-index="${i}">
            <div class="placeholder-img" style="aspect-ratio: ${img.ratio};">Project Photo</div>
          </div>
        `;
      }
      return `
        <div class="modal-gallery__item" data-index="${i}">
          <img src="${img.src}" alt="Project photo" loading="lazy">
        </div>
      `;
    }).join('');
  }

  // Close modal
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
}
