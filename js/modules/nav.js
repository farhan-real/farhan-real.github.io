/**
 * Navigation Module: Mobile Hamburger Menu & Active Link Highlighter on scroll
 */
export function initNav() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  // Toggle Mobile Menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
      const icon = navToggle.querySelector('i');
      if (navMenu.classList.contains('show-menu')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
  }

  // Close Mobile Menu on Link Click
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      if (navToggle) {
        navToggle.querySelector('i').className = 'fa-solid fa-bars';
      }
    });
  });

  // Highlight active link while scrolling
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          activeLink.classList.add('active-link');
        } else {
          activeLink.classList.remove('active-link');
        }
      }
    });
  });
}