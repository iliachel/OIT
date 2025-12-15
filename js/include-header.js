document.addEventListener('DOMContentLoaded', () => {
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    // Calculate the correct relative path to the project root
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const depth = pathSegments.includes('sections')
      ? pathSegments.length - 1
      : 0;
    const rootPath = depth > 0 ? '../'.repeat(depth) : './';

    fetch(`${rootPath}common/header.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const processedData = data.replace(/{ROOT}/g, rootPath);
        headerPlaceholder.innerHTML = processedData;

        // Re-initialize the scripts that depend on the header
        const themeScript = document.createElement('script');
        themeScript.src = `${rootPath}js/theme.js`;
        document.body.appendChild(themeScript);

        const mobileMenuScript = document.createElement('script');
        mobileMenuScript.src = `${rootPath}js/mobile-menu.js`;
        document.body.appendChild(mobileMenuScript);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
});
