/* ============================================
   R.L. SIMMONS BUILDER — Projects Gallery
   ============================================ */

// ---- Project Data ----
// Add new projects by adding entries here. No HTML changes needed.
const projects = [
  {
    id: 'harper-ranch-conversion',
    title: 'Harper Ranch Conversion',
    category: 'ranch-conversion',
    categoryLabel: 'Ranch Conversion',
    description: 'One of our most dramatic transformations. An existing ranch structure reimagined from the ground up — preserved character, elevated living. Stone walls, exposed beams, and custom finishes throughout.',
    cover: 'images/projects/harper-ranch-conversion/Harper Ranch Custom Conversion AFTER.jpg',
    phases: {
      before: [
        { src: 'images/projects/harper-ranch-conversion/IMG_3649.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4365.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4369.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4638.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4639.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4640.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4641.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4673.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4674.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4675.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4816.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4817.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4818.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4819.jpg', ratio: '4/3' }
      ],
      during: [
        { src: 'images/projects/harper-ranch-conversion/IMG_0015.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_0016.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_0017.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_0018.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_0019.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_0020.jpg', ratio: '4/3' }
      ],
      after: [
        { src: 'images/projects/harper-ranch-conversion/Harper Ranch Custom Conversion AFTER.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4927.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4928.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4937.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4938.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4939.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4940.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4941.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4942.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4974.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4975.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4976.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4977.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4978.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4979.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4980.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-ranch-conversion/IMG_4981.jpg', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'turtle-creek-custom',
    title: 'Turtle Creek Custom Home',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A premium custom home on Turtle Creek. Built to capture Hill Country views while integrating naturally into the native landscape.',
    cover: 'images/projects/turtle-creek-custom/139054074_255835662564113_5296648502612796918_n.jpg',
    phases: {
      after: [
        { src: 'images/projects/turtle-creek-custom/139054074_255835662564113_5296648502612796918_n.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom/139156334_255835505897462_9167975170167785063_n.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom/139442661_255835545897458_7690003062604066344_n.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom/139771501_255835635897449_1328866560198060390_n.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom/140234687_255835705897442_8244466150570172520_n.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom/140322941_255835565897456_3946456980165965873_n.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom/140512222_255835605897452_4895912768524173622_n.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom/6A3752B1-6AA8-4805-B30E-EE4336EAFA10.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom/CE977454-D808-43EC-8DEE-3F327B050D20.jpeg.webp', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'turtle-creek-custom-2',
    title: 'Turtle Creek Custom Home II',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A second custom build along Turtle Creek. Different vision, same standard of craftsmanship. Premium materials and thoughtful design throughout.',
    cover: 'images/projects/turtle-creek-custom-2/IMG_3411.jpg',
    phases: {
      after: [
        { src: 'images/projects/turtle-creek-custom-2/IMG_3411.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom-2/IMG_3412.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom-2/IMG_3413.jpg', ratio: '4/3' },
        { src: 'images/projects/turtle-creek-custom-2/IMG_3414.jpg', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'shalako-custom',
    title: 'Shalako Custom Home',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A custom home built to fit its land. The site drove every design decision — orientation, materials, and flow all respond to the Hill Country landscape surrounding it.',
    cover: 'images/projects/shalako-custom/3E2FEEFA-12C9-4587-8130-B3B33FCFBB6A.jpeg.webp',
    phases: {
      after: [
        { src: 'images/projects/shalako-custom/3E2FEEFA-12C9-4587-8130-B3B33FCFBB6A.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/shalako-custom/9B82E57A-DB57-4371-BF6B-B075B0A4E858.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/shalako-custom/A1DE618B-C8BC-423C-BB4D-312F3096BBD1.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/shalako-custom/BDA050C5-8CF9-414D-B408-31E7D34BE1DE.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/shalako-custom/F5011FAD-566B-4F16-881F-15EB1127CA6B.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/shalako-custom/F81AA97B-BEE0-4D97-BDD4-E9E1C39F7CB4.jpeg.webp', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'hunt-custom',
    title: 'Hunt Area Custom Home',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A custom home in the Hunt area of the Guadalupe River Valley. Built for a family who wanted something that felt like it belonged there — not dropped on it.',
    cover: 'images/projects/hunt-custom/499148501_1275790021213887_3440000908764291552_n.jpg',
    phases: {
      after: [
        { src: 'images/projects/hunt-custom/499148501_1275790021213887_3440000908764291552_n.jpg', ratio: '4/3' },
        { src: 'images/projects/hunt-custom/IMG_4845.jpeg.webp', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'kerrville-remodel',
    title: 'Kerrville Signature Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A major interior transformation in Kerrville. Updated kitchen, living spaces, and master suite designed around how the family actually uses their home.',
    cover: 'images/projects/kerrville-remodel/139902053_257813925699620_2547098436591555602_n.jpg',
    phases: {
      after: [
        { src: 'images/projects/kerrville-remodel/139902053_257813925699620_2547098436591555602_n.jpg', ratio: '4/3' },
        { src: 'images/projects/kerrville-remodel/140292480_257813929032953_7593746905124458265_n.jpg', ratio: '4/3' },
        { src: 'images/projects/kerrville-remodel/141319132_257813919032954_4498556225954617146_n.jpg', ratio: '4/3' },
        { src: 'images/projects/kerrville-remodel/222B4C8D-AE08-410E-B78F-7FEFD0575814.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/kerrville-remodel/B1512F96-D3CC-49AB-8FC3-BF4B54D23BBF.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/kerrville-remodel/F5A18F99-5AB0-4E21-B88F-53D2BAB924AC.jpeg.webp', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'riverhill-remodel',
    title: 'Riverhill Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A whole-home remodel that gave a dated property a new identity. Updated layout, finishes, and systems — built to last another generation.',
    cover: 'images/projects/riverhill-remodel/489D851E-36D7-461B-9F8E-1A4370534DB7.jpeg.webp',
    phases: {
      after: [
        { src: 'images/projects/riverhill-remodel/489D851E-36D7-461B-9F8E-1A4370534DB7.jpeg.webp', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'harper-white-house',
    title: 'Harper White House Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A Harper property given new life. Structural updates, interior overhaul, and exterior refinement — while keeping the character that made the original worth saving.',
    cover: 'images/projects/harper-white-house/IMG_0524.jpg',
    phases: {
      after: [
        { src: 'images/projects/harper-white-house/IMG_0524.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0525.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0528.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0529.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0531.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0532.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0535.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0536.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0537.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0538.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_0539.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_2129.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_2130.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_2131.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_2132.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_2133.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-white-house/IMG_2134.jpg', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'investment-remodel',
    title: 'Investment Property Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A full remodel of an investment property. Smart material choices and durable finishes designed for long-term performance, not just first impressions.',
    cover: 'images/projects/investment-remodel/64962C94-2077-49CE-B774-2C69BE46E787.jpeg.webp',
    phases: {
      after: [
        { src: 'images/projects/investment-remodel/64962C94-2077-49CE-B774-2C69BE46E787.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/investment-remodel/66DED92C-451F-4281-B76C-C01A7ACA0650.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/investment-remodel/9B671524-E1B4-4A59-86FF-724D63BB841C.jpeg.webp', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'harper-estate-remodel',
    title: 'Harper Estate Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A substantial Harper area home given a top-to-bottom refresh. Structural work combined with premium interior finishes across the entire property.',
    cover: 'images/projects/harper-estate-remodel/IMG_3191.jpg',
    phases: {
      after: [
        { src: 'images/projects/harper-estate-remodel/IMG_3191.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3195.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3196.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3197.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3198.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3199.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3200.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3201.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3202.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3203.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3204.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3205.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_3206.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4638.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4639.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4640.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4641.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4673.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4674.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4675.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4816.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4817.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4818.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-estate-remodel/IMG_4819.jpg', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'signature-bath-remodel',
    title: 'Signature Bath Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A bathroom transformation that shows what attention to detail looks like at the highest level. Materials, layout, and light — all working together.',
    cover: 'images/projects/signature-bath-remodel/IMG_3644.jpg',
    phases: {
      after: [
        { src: 'images/projects/signature-bath-remodel/IMG_3644.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_3645.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_3646.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_3647.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_3648.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_3649.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_4364.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_4365.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_4366.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_4367.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_4368.jpg', ratio: '4/3' },
        { src: 'images/projects/signature-bath-remodel/IMG_4369.jpg', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'barn-courtyard',
    title: 'Barn Courtyard Conversion',
    category: 'ranch-conversion',
    categoryLabel: 'Ranch Conversion',
    description: 'An underused barn and courtyard reimagined as a living and entertaining space. The original structure set the bones — we built the rest around it.',
    cover: 'images/projects/barn-courtyard/1EA3CDBF-79E2-4DAE-A61F-84089CB60F1D.jpeg.webp',
    phases: {
      after: [
        { src: 'images/projects/barn-courtyard/1EA3CDBF-79E2-4DAE-A61F-84089CB60F1D.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/barn-courtyard/712FA541-9FD9-4499-91C4-EE4C8970FA9D.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/barn-courtyard/992B215E-D157-465D-A9E5-C80E5567CBE9.jpeg.webp', ratio: '4/3' },
        { src: 'images/projects/barn-courtyard/AC9279B2-32D1-41ED-8C04-70A020D74592.jpeg.webp', ratio: '4/3' }
      ]
    }
  },
  {
    id: 'harper-barndo',
    title: 'Harper Barndominium Conversion',
    category: 'ranch-conversion',
    categoryLabel: 'Ranch Conversion',
    description: 'A barndominium conversion in Harper. Built for someone who wanted the feel of ranch life with the comfort of a custom home — and got both.',
    cover: 'images/projects/harper-barndo/IMG_0034.jpg',
    phases: {
      after: [
        { src: 'images/projects/harper-barndo/IMG_0034.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_0041.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5142.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5143.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5144.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5145.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5146.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5147.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5148.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5149.jpg', ratio: '4/3' },
        { src: 'images/projects/harper-barndo/IMG_5150.jpg', ratio: '4/3' }
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

  grid.innerHTML = projects.map(project => {
    const phases = Object.keys(project.phases);
    const firstPhase = project.phases[phases[0]];
    const coverSrc = project.cover || (firstPhase && firstPhase[0] && firstPhase[0].src) || '';
    const imgHTML = coverSrc
      ? `<img src="${coverSrc}" alt="${project.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
      : `<div class="placeholder-img" style="width:100%;height:100%;">Project Photo</div>`;
    return `
      <div class="project-card reveal" data-category="${project.category}" data-project-id="${project.id}">
        <div class="project-card__image img-zoom">${imgHTML}</div>
        <div class="project-card__overlay"></div>
        <div class="project-card__info">
          <span class="project-card__category">${project.categoryLabel}</span>
          <h3 class="project-card__title">${project.title}</h3>
          <span class="project-card__link">View Project &rarr;</span>
        </div>
      </div>`;
  }).join('');

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
  const header   = modal.querySelector('.project-modal__header');
  const phaseTabs = modal.querySelector('.phase-tabs');
  const gallery  = modal.querySelector('.modal-gallery');

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    const project = projects.find(p => p.id === card.dataset.projectId);
    if (project) openModal(project);
  });

  function openModal(project) {
    header.innerHTML = `
      <span class="project-modal__category">${project.categoryLabel}</span>
      <h2>${project.title}</h2>
      <p class="project-modal__description">${project.description}</p>`;

    // Collapse all phases into one flat gallery, best photos first.
    // Tabs hidden until a project has a complete before/during/after set.
    phaseTabs.style.display = 'none';
    const phaseOrder = ['before', 'during', 'after'];
    const allImages = phaseOrder
      .filter(p => project.phases[p])
      .flatMap(p => project.phases[p]);
    renderGallery(allImages);
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function renderGallery(images) {
    gallery.innerHTML = images.map((img, i) => `
      <div class="modal-gallery__item" data-index="${i}">
        <img src="${img.src}" alt="Project photo" loading="lazy">
      </div>`).join('');
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
  function closeModal() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
}
