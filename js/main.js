import { initTheme } from './modules/theme.js';
import { initNav } from './modules/nav.js';
import { renderAbout } from './modules/about.js';
import { renderSkills } from './modules/skills.js';
import { initProjects } from './modules/projects.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize System Features
  initTheme();
  initNav();

  // 2. Populate dynamic content from data files
  renderAbout();
  renderSkills();
  initProjects();

  // 3. Set current copyright year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});