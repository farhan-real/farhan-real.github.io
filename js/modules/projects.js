import { projectCategories, projectsData } from '../data/projects.js';

export function initProjects() {
  const filtersContainer = document.getElementById('project-filters');
  const projectsContainer = document.getElementById('projects-container');

  if (!filtersContainer || !projectsContainer) return;

  // 1. Render Categories Filter Buttons
  filtersContainer.innerHTML = projectCategories
    .map(
      (cat, idx) => `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}">
        ${cat.label}
      </button>
    `
    )
    .join('');

  // 2. Render Split Projects
  function renderProjects(categoryFilter = 'all') {
    projectsContainer.innerHTML = '';

    const filtered =
      categoryFilter === 'all'
        ? projectsData
        : projectsData.filter((item) => item.categories && item.categories.includes(categoryFilter));

    filtered.forEach((project) => {
      const card = document.createElement('article');
      card.className = 'project-card';

      const siteButton = project.site
        ? `<a href="${project.site}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-site">
             <i class="fa-solid fa-arrow-up-right-from-square"></i> Site
           </a>`
        : '';

      const codeButton = project.code
        ? `<a href="${project.code}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-code">
             <i class="fa-brands fa-github"></i> Code
           </a>`
        : '';

      card.innerHTML = `
        <div class="project-card-main">
          <div class="project-card-title-group">
            <div class="project-card-icon">
              <i class="${project.icon}"></i>
            </div>
            <h3 class="project-card-title">${project.name}</h3>
          </div>

          <p class="project-card-desc">${project.description}</p>

          <div class="project-card-tags">
            ${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}
          </div>
        </div>

        <div class="project-card-actions">
          ${siteButton}
          ${codeButton}
        </div>
      `;

      projectsContainer.appendChild(card);
    });
  }

  renderProjects('all');

  const filterBtns = filtersContainer.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}