#!/bin/bash
# Auto-generate projects-gallery.js from converted images
# Run AFTER convert-compress.sh completes
# Output: /Users/markgarza/Desktop/Randy Website/js/projects-gallery.js

PROJ_DIR="/Users/markgarza/Desktop/Randy Website/images/projects"
OUTPUT="/Users/markgarza/Desktop/Randy Website/js/projects-gallery.js"

# Helper: list image files for a folder as JS array entries
list_images() {
  local SAFE_NAME="$1"
  local DIR="$PROJ_DIR/$SAFE_NAME"
  local FIRST=1
  find "$DIR" -maxdepth 1 \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" \) | sort | while IFS= read -r f; do
    FNAME=$(basename "$f")
    if [ "$FIRST" = "1" ]; then
      FIRST=0
    else
      printf ",\n"
    fi
    printf "        { src: 'images/projects/%s/%s', ratio: '4/3' }" "$SAFE_NAME" "$FNAME"
  done
  echo ""
}

# Helper: get images for harper-ranch split into before/during/after by file date
harper_ranch_phase() {
  local PHASE="$1"
  local DIR="$PROJ_DIR/harper-ranch-conversion"
  local FIRST=1
  find "$DIR" -maxdepth 1 \( -iname "*.jpg" -o -iname "*.jpeg" \) | sort | while IFS= read -r f; do
    FNAME=$(basename "$f")
    FDATE=$(stat -f "%Sm" -t "%Y-%m-%d" "$f" 2>/dev/null)
    YEAR=$(echo "$FDATE" | cut -d'-' -f1)
    MONTH=$(echo "$FDATE" | cut -d'-' -f2 | sed 's/^0//')

    FILE_PHASE=""
    if [ "$YEAR" = "2025" ] && [ "$MONTH" -le "11" ]; then
      FILE_PHASE="before"
    elif [ "$YEAR" = "2025" ] && [ "$MONTH" = "12" ]; then
      FILE_PHASE="during"
    else
      FILE_PHASE="after"
    fi

    if [ "$FILE_PHASE" = "$PHASE" ]; then
      if [ "$FIRST" = "1" ]; then
        FIRST=0
      else
        printf ",\n"
      fi
      printf "        { src: 'images/projects/harper-ranch-conversion/%s', ratio: '4/3' }" "$FNAME"
    fi
  done
  echo ""
}

# Get cover image (first image in folder)
cover_image() {
  local SAFE_NAME="$1"
  local DIR="$PROJ_DIR/$SAFE_NAME"
  find "$DIR" -maxdepth 1 \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" \) | sort | head -1 | xargs basename 2>/dev/null
}

echo "Generating projects-gallery.js..."

# Capture image lists (subshells)
TC_IMAGES=$(list_images "turtle-creek-custom")
AR_IMAGES=$(list_images "investment-remodel")
HW_IMAGES=$(list_images "harper-white-house")
KR_IMAGES=$(list_images "kerrville-remodel")
HU_IMAGES=$(list_images "hunt-custom")
SB_IMAGES=$(list_images "signature-bath-remodel")
SC_IMAGES=$(list_images "shalako-custom")
RR_IMAGES=$(list_images "riverhill-remodel")
BC_IMAGES=$(list_images "barn-courtyard")
HE_IMAGES=$(list_images "harper-estate-remodel")
TC2_IMAGES=$(list_images "turtle-creek-custom-2")
HB_IMAGES=$(list_images "harper-barndo")

HR_BEFORE=$(harper_ranch_phase "before")
HR_DURING=$(harper_ranch_phase "during")
HR_AFTER=$(harper_ranch_phase "after")

# Cover for Harper Ranch
HR_COVER=$(cover_image "harper-ranch-conversion")

# Write the JS file
cat > "$OUTPUT" << 'JSEOF'
/* ============================================
   R.L. SIMMONS BUILDER — Projects Gallery
   ============================================ */

// ---- Project Data ----
// Add new projects by adding entries here. No HTML changes needed.
const projects = [
JSEOF

# Append each project (bash heredoc per project for readability)
cat >> "$OUTPUT" << JSEOF
  {
    id: 'harper-ranch-conversion',
    title: 'Harper Ranch Conversion',
    category: 'ranch-conversion',
    categoryLabel: 'Ranch Conversion',
    description: 'One of our most dramatic transformations. An existing ranch structure reimagined from the ground up — preserved character, elevated living. The before and after tells the whole story.',
    cover: 'images/projects/harper-ranch-conversion/${HR_COVER}',
    phases: {
      before: [
${HR_BEFORE}      ],
      during: [
${HR_DURING}      ],
      after: [
${HR_AFTER}      ]
    }
  },
  {
    id: 'turtle-creek-custom',
    title: 'Turtle Creek Custom Home',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A premium custom home on Turtle Creek. Built to capture Hill Country views while integrating naturally into the native landscape. Every detail designed with the owners in mind.',
    phases: {
      after: [
${TC_IMAGES}      ]
    }
  },
  {
    id: 'turtle-creek-custom-2',
    title: 'Turtle Creek Custom Home II',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A second custom build along Turtle Creek. Different vision, same standard of craftsmanship. Premium materials and thoughtful design throughout.',
    phases: {
      after: [
${TC2_IMAGES}      ]
    }
  },
  {
    id: 'shalako-custom',
    title: 'Shalako Custom Home',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A custom home built to fit its land. The site drove every design decision — orientation, materials, and flow all respond to the Hill Country landscape surrounding it.',
    phases: {
      after: [
${SC_IMAGES}      ]
    }
  },
  {
    id: 'hunt-custom',
    title: 'Hunt Area Custom Home',
    category: 'new-build',
    categoryLabel: 'New Build',
    description: 'A custom home in the Hunt area of the Guadalupe River Valley. Built for a family who wanted something that felt like it belonged there — not dropped on it.',
    phases: {
      after: [
${HU_IMAGES}      ]
    }
  },
  {
    id: 'kerrville-remodel',
    title: 'Kerrville Signature Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A major interior transformation in Kerrville. New kitchen, living spaces, and master suite designed around how the family actually uses their home. Function and beauty, together.',
    phases: {
      after: [
${KR_IMAGES}      ]
    }
  },
  {
    id: 'riverhill-remodel',
    title: 'Riverhill Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A whole-home remodel that gave a dated property a new identity. Updated layout, finishes, and systems — built to last another generation.',
    phases: {
      after: [
${RR_IMAGES}      ]
    }
  },
  {
    id: 'harper-white-house',
    title: 'Harper White House Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A Harper property given new life. Structural updates, interior overhaul, and exterior refinement — while keeping the character that made the original worth saving.',
    phases: {
      after: [
${HW_IMAGES}      ]
    }
  },
  {
    id: 'investment-remodel',
    title: 'Investment Property Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A full remodel of an investment property. Smart material choices and durable finishes designed for long-term performance, not just first impressions.',
    phases: {
      after: [
${AR_IMAGES}      ]
    }
  },
  {
    id: 'harper-estate-remodel',
    title: 'Harper Estate Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A substantial Harper area home given a top-to-bottom refresh. This project combined structural work with premium interior finishes across the entire property.',
    phases: {
      after: [
${HE_IMAGES}      ]
    }
  },
  {
    id: 'signature-bath-remodel',
    title: 'Signature Bath Remodel',
    category: 'remodel',
    categoryLabel: 'Remodel',
    description: 'A bathroom transformation that shows what attention to detail looks like at the highest level. Materials, layout, and light — all working together.',
    phases: {
      after: [
${SB_IMAGES}      ]
    }
  },
  {
    id: 'barn-courtyard',
    title: 'Barn Courtyard Conversion',
    category: 'ranch-conversion',
    categoryLabel: 'Ranch Conversion',
    description: 'An underused barn and courtyard reimagined as a living and entertaining space. The original structure set the bones — we built the rest around it.',
    phases: {
      after: [
${BC_IMAGES}      ]
    }
  },
  {
    id: 'harper-barndo',
    title: 'Harper Barndominium Conversion',
    category: 'ranch-conversion',
    categoryLabel: 'Ranch Conversion',
    description: 'A barndominium conversion in Harper. Built for someone who wanted the feel of ranch life with the comfort of a custom home — and got both.',
    phases: {
      after: [
${HB_IMAGES}      ]
    }
  }
];

JSEOF

# Append the JS functions (renderProjectCards, initFilterTabs, initModal)
cat >> "$OUTPUT" << 'JSEOF'
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
    const coverImg = project.cover || (firstPhase && firstPhase[0] && firstPhase[0].src) || '';
    const imgHTML = coverImg
      ? `<img src="${coverImg}" alt="${project.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
      : `<div class="placeholder-img" style="width:100%;height:100%;">Project Photo</div>`;

    return `
      <div class="project-card reveal" data-category="${project.category}" data-project-id="${project.id}">
        <div class="project-card__image img-zoom">
          ${imgHTML}
        </div>
        <div class="project-card__overlay"></div>
        <div class="project-card__info">
          <span class="project-card__category">${project.categoryLabel}</span>
          <h3 class="project-card__title">${project.title}</h3>
          <span class="project-card__link">View Project &rarr;</span>
        </div>
      </div>
    `;
  }).join('');

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
    header.innerHTML = `
      <span class="project-modal__category">${project.categoryLabel}</span>
      <h2>${project.title}</h2>
      <p class="project-modal__description">${project.description}</p>
    `;

    const phases = Object.keys(project.phases);
    if (phases.length > 1) {
      phaseTabs.style.display = 'flex';
      phaseTabs.innerHTML = phases.map((phase, i) => `
        <button class="phase-tab ${i === 0 ? 'active' : ''}" data-phase="${phase}">
          ${phase.charAt(0).toUpperCase() + phase.slice(1)}
        </button>
      `).join('');

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

    renderGallery(project.phases[phases[0]]);
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function renderGallery(images) {
    gallery.innerHTML = images.map((img, i) => {
      if (!img.src || img.placeholder) {
        return `
          <div class="modal-gallery__item" data-index="${i}">
            <div class="placeholder-img" style="aspect-ratio: ${img.ratio || '4/3'};">Project Photo</div>
          </div>`;
      }
      return `
        <div class="modal-gallery__item" data-index="${i}">
          <img src="${img.src}" alt="Project photo" loading="lazy">
        </div>`;
    }).join('');
  }

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
JSEOF

echo "Done! Generated: $OUTPUT"
echo "Project count: $(grep -c "id: '" "$OUTPUT")"
