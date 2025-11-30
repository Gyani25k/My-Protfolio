// Render projects grid
function renderProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  
  grid.innerHTML = projectsData.map(project => `
    <div class="project-card" data-project-id="${project.id}">
      <div class="project-card__image">
        ${project.isVideo 
          ? `<video class="project-card__media" loading="lazy" muted playsinline>
               <source src="${project.image}" type="video/mp4">
             </video>`
          : `<img src="${project.image}" alt="${project.alt}" class="project-card__media" loading="lazy" />`
        }
        <div class="project-card__overlay">
          <span class="project-card__view">View Details</span>
        </div>
      </div>
      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__desc">${project.shortDesc}</p>
        <div class="project-card__tech">${project.techStack.split(', ').slice(0, 3).join(', ')}...</div>
      </div>
    </div>
  `).join('');
  
  // Add click event listeners
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.projectId);
      openProjectModal(projectId);
    });
  });
}

// Open project modal
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  
  // Split tech stack into individual tags
  const techTags = project.techStack.split(', ').map(tech => 
    `<span class="project-modal__tech-tag">${tech.trim()}</span>`
  ).join('');
  
  modalBody.innerHTML = `
    <div class="project-modal__top-section">
      <div class="project-modal__image">
        ${project.isVideo 
          ? `<video controls class="project-modal__media">
               <source src="${project.image}" type="video/mp4">
               Your browser does not support the video tag.
             </video>`
          : `<img src="${project.image}" alt="${project.alt}" class="project-modal__media" />`
        }
      </div>
      <div class="project-modal__header-content">
        <h2 class="project-modal__title">${project.title}</h2>
        <p class="project-modal__short-desc">${project.shortDesc}</p>
        ${project.link ? `
          <a href="${project.link}" class="project-modal__link-btn" target="_blank" rel="noopener noreferrer">
            <span>${project.linkText}</span>
            <svg class="project-modal__link-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 4.5L13.5 13.5M13.5 13.5V4.5M13.5 13.5H4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        ` : ''}
      </div>
    </div>
    
    <div class="project-modal__bottom-section">
      <div class="project-modal__description">
        <h3 class="project-modal__section-title">
          <svg class="project-modal__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2L11 4H16V16H4V4H9V2ZM10 5H5V15H15V6H10V5Z" fill="currentColor"/>
          </svg>
          Key Achievements
        </h3>
        <ul class="project-modal__description-list">
          ${project.description.map(item => `
            <li class="project-modal__description-item">
              <svg class="project-modal__check-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4.5L6.75 12.75L3 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="project-modal__description-text">${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      
      <div class="project-modal__tech">
        <h3 class="project-modal__section-title">
          <svg class="project-modal__section-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L3 7V17H8V12H12V17H17V7L10 2Z" fill="currentColor"/>
          </svg>
          Tech Stack
        </h3>
        <div class="project-modal__tech-container">
          ${techTags}
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('project-modal--active');
  // Prevent body scroll on mobile
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}

// Close project modal
function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('project-modal--active');
  // Restore body scroll
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  renderProjectsGrid();
  
  // Close modal events
  document.getElementById('closeModal')?.addEventListener('click', closeProjectModal);
  document.querySelector('.project-modal__overlay')?.addEventListener('click', closeProjectModal);
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
});

