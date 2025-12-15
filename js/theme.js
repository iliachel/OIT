function initTheme() {
  const btn = document.getElementById('theme-toggle');

  // Set initial theme from localStorage
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      localStorage.setItem(
        'theme',
        document.body.classList.contains('light') ? 'light' : 'dark'
      );
    });
  }
}

// Also run on initial load
initTheme();
