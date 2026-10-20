import { projectCategories, projectsData } from '../data/projects.js';

export function initProjects() {
  const filtersContainer = document.getElementById('project-filters');
  const projectsContainer = document.getElementById('projects-container');

  if (!filtersContainer || !projectsContainer) return;

  // 1. Render Categories Filter Buttons dynamically
  filtersContainer.innerHTML = projectCategories
    .map(
      (cat, idx) => `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}">
        ${cat.label}
      </button>
    `
    )
    .join('');

  // 2. Render Project Cards (Handles optional 'site' link seamlessly)
  function renderProjects(categoryFilter = 'all') {
    projectsContainer.innerHTML = '';

    const filtered =
      categoryFilter === 'all'
        ? projectsData
        : projectsData.filter((item) => item.category === categoryFilter);

    filtered.forEach((project) => {
      const card = document.createElement('article');
      card.className = 'project-card';

      // Conditional check: only generate Site button if 'site' URL is provided
      const siteButton = project.site
        ? `<a href="${project.site}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn--site">
             <i class="fa-solid fa-arrow-up-right-from-square"></i> Site
           </a>`
        : '';

      const codeButton = project.code
        ? `<a href="${project.code}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn--code">
             <i class="fa-brands fa-github"></i> Code
           </a>`
        : '';

      card.innerHTML = `
        <div class="project-card__banner">
          <i class="${project.icon}"></i>
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.name}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tags">
            ${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}
          </div>
          <div class="project-card__actions">
            ${siteButton}
            ${codeButton}
          </div>
        </div>
      `;

      projectsContainer.appendChild(card);
    });
  }

  // Initial Render (All)
  renderProjects('all');

  // Filter Button Click Handlers
  const filterBtns = filtersContainer.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}