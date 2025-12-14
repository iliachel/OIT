AOS.init({
	duration: 800,
	once: true
});

const links = document.querySelectorAll('nav a');
const current = location.pathname.split('/').pop();

links.forEach(link => {
	if (link.getAttribute('href').includes(current)) {
		link.classList.add('active');
	}
});
