import { aboutData } from '../data/about.js';

export function renderAbout() {
  const navBrand = document.getElementById('nav-brand-name');
  if (navBrand) navBrand.textContent = aboutData.name;

  const heroBadge = document.getElementById('hero-badge');
  if (heroBadge) {
    heroBadge.innerHTML = `<span class="status-dot"></span> ${aboutData.statusBadge}`;
  }

  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = aboutData.name;

  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle) heroSubtitle.textContent = aboutData.roleTitle;

  const heroDesc = document.getElementById('hero-desc');
  if (heroDesc) heroDesc.textContent = aboutData.description;

  const heroGithubBtn = document.getElementById('hero-github-btn');
  if (heroGithubBtn && aboutData.links.github) {
    heroGithubBtn.href = aboutData.links.github;
  }

  const socialsContainer = document.getElementById('hero-socials');
  if (socialsContainer) {
    socialsContainer.innerHTML = '';
    if (aboutData.links.github) {
      socialsContainer.innerHTML += `
        <a href="${aboutData.links.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>`;
    }
    if (aboutData.links.linkedin) {
      socialsContainer.innerHTML += `
        <a href="${aboutData.links.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>`;
    }
    if (aboutData.email) {
      socialsContainer.innerHTML += `
        <a href="mailto:${aboutData.email}" aria-label="Email">
          <i class="fa-regular fa-envelope"></i>
        </a>`;
    }
  }

  const cardsContainer = document.getElementById('about-cards-container');
  if (cardsContainer) {
    cardsContainer.innerHTML = aboutData.cards
      .map(
        (card) => `
        <div class="about-card">
          <i class="${card.icon} about-icon"></i>
          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </div>
      `
      )
      .join('');
  }

  // Education Timeline
  const timelineContainer = document.getElementById('education-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = aboutData.education
      .map(
        (item) => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">${item.period}</span>
            <h3 class="timeline-title">${item.institution}</h3>
            <p class="timeline-institution">${item.degree}</p>
            ${item.description ? `<p class="timeline-desc">${item.description}</p>` : ''}
          </div>
        </div>
      `
      )
      .join('');
  }

  const contactEmailBtn = document.getElementById('contact-email-btn');
  if (contactEmailBtn && aboutData.email) {
    contactEmailBtn.href = `mailto:${aboutData.email}`;
  }

  const contactGithubBtn = document.getElementById('contact-github-btn');
  if (contactGithubBtn && aboutData.links.github) {
    contactGithubBtn.href = aboutData.links.github;
  }

  const footerName = document.getElementById('footer-name');
  if (footerName) {
    footerName.textContent = aboutData.copyright || aboutData.name;
  }
}