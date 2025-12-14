const btn = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'light') {
	document.body.classList.add('light');
}

btn.addEventListener('click', () => {
	document.body.classList.toggle('light');
	localStorage.setItem(
		'theme',
		document.body.classList.contains('light') ? 'light' : 'dark'
	);
});
