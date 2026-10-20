import { skillsData } from '../data/skills.js';

export function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (cat) => `
      <div class="skill-category">
        <!-- Category Header -->
        <div class="skill-category__header">
          <div class="skill-category__icon">
            <i class="${cat.icon}"></i>
          </div>
          <h3 class="skill-category__title">${cat.category}</h3>
        </div>

        <!-- Horizontal Skills List -->
        <div class="skill-items">
          ${cat.items
            .map(
              (skill) => `
            <div class="skill-pill">
              <i class="${skill.icon} skill-pill__icon"></i>
              <span class="skill-pill__name">${skill.name}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `
    )
    .join('');
}