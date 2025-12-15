document.addEventListener("DOMContentLoaded", () => {

	/* =======================
		 AOS animation
	======================= */
	if (typeof AOS !== "undefined") {
		AOS.init({
			duration: 800,
			once: true
		});
	}

	/* =======================
		 Active nav link
	======================= */
	const navLinks = document.querySelectorAll("nav a");
	if (navLinks.length > 0) {
		const currentPage = location.pathname.split("/").pop();

		navLinks.forEach(link => {
			const href = link.getAttribute("href");
			if (href && href.includes(currentPage)) {
				link.classList.add("active");
			}
		});
	}

	/* =======================
		 Experience counter
	======================= */
	const counterElement = document.getElementById("experience-counter");

	if (counterElement) {

		function updateExperienceCounter() {
			// Start date: September 1, 2024, 00:00
			const startDate = new Date(2025, 8, 1, 0, 0, 0);
			const now = new Date();

			let diffMs = now - startDate;
			if (diffMs < 0) diffMs = 0;

			const totalMinutes = Math.floor(diffMs / (1000 * 60));
			const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
			const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

			// HR-style month calculation (30 days)
			const months = Math.floor(totalDays / 30);
			const days = totalDays % 30;
			const hours = totalHours % 24;
			const minutes = totalMinutes % 60;

			counterElement.textContent =
				`${months} months, ${days} days, ${hours} hours, ${minutes} minutes`;
		}

		updateExperienceCounter();
		setInterval(updateExperienceCounter, 60000); // update every minute
	}

});
