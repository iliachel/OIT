document.addEventListener('DOMContentLoaded', () => {
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    const isSubdirectory = window.location.pathname.includes('/sections/');
    const rootPath = isSubdirectory ? '../' : '';

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
