document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuContainer = document.getElementById('mobile-menu-container');

  if (mobileMenuToggle && mobileMenuContainer) {
    mobileMenuToggle.addEventListener('click', () => {
      const isVisible = mobileMenuContainer.style.display === 'flex';
      mobileMenuContainer.style.display = isVisible ? 'none' : 'flex';
    });
  }
});
