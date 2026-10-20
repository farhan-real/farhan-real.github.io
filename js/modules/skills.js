import { skillsData } from '../data/skills.js';

export function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (cat) => `
      <div class="skill-category">
        <div class="skill-category-header">
          <div class="skill-category-icon">
            <i class="${cat.icon}"></i>
          </div>
          <h3 class="skill-category-title">${cat.category}</h3>
        </div>

        <div class="skill-items">
          ${cat.items
            .map(
              (skill) => `
            <div class="skill-pill">
              <i class="${skill.icon} skill-pill-icon"></i>
              <span class="skill-pill-name">${skill.name}</span>
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