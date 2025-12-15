function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuContainer = document.getElementById('mobile-menu-container');

  if (mobileMenuToggle && mobileMenuContainer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuContainer.classList.toggle('is-open');
    });
  }
}

// Also run on initial load, in case the header isn't dynamically loaded
initMobileMenu();
