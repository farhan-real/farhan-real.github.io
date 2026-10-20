import { skillsData } from '../data/skills.js';

export function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (cat) => `
      <div class="skill-category">
        <h4>${cat.category}</h4>
        <div class="skill-tags">
          ${cat.items.map((skill) => `<span>${skill}</span>`).join('')}
        </div>
      </div>
    `
    )
    .join('');
}