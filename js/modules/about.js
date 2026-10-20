import { aboutData } from '../data/about.js';

export function renderAbout() {
  // 1. Navigation & Brand Name
  const navBrand = document.getElementById('nav-brand-name');
  if (navBrand) navBrand.textContent = aboutData.name;

  // 2. Hero Elements
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

  // 3. Hero Social Icons
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

  // 4. About Cards
  const cardsContainer = document.getElementById('about-cards-container');
  if (cardsContainer) {
    cardsContainer.innerHTML = aboutData.cards
      .map(
        (card) => `
        <div class="about__card">
          <i class="${card.icon} about__icon"></i>
          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </div>
      `
      )
      .join('');
  }

  // 5. Education Timeline
  const timelineContainer = document.getElementById('education-timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = aboutData.education
      .map(
        (item) => `
        <div class="timeline__item">
          <div class="timeline__dot"></div>
          <div class="timeline__content">
            <span class="timeline__date">${item.period}</span>
            <h3 class="timeline__title">${item.degree}</h3>
            <p class="timeline__institution">${item.institution}</p>
            <p class="timeline__desc">${item.description}</p>
          </div>
        </div>
      `
      )
      .join('');
  }

  // 6. Contact Section Buttons
  const contactEmailBtn = document.getElementById('contact-email-btn');
  if (contactEmailBtn && aboutData.email) {
    contactEmailBtn.href = `mailto:${aboutData.email}`;
  }

  const contactGithubBtn = document.getElementById('contact-github-btn');
  if (contactGithubBtn && aboutData.links.github) {
    contactGithubBtn.href = aboutData.links.github;
  }

  // 7. Footer Name
  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = aboutData.name;
}