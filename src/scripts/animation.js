document.addEventListener("DOMContentLoaded", () => {
	const section_about_us = document.getElementById("about_us");
	const card_img_one = document.querySelector(".card.img1");
	const card_img_two = document.querySelector(".card.img2");
	const card_img_three = document.querySelector(".card.img3");

	function checkScroll() {
		const dimensions_about_us = section_about_us.getBoundingClientRect();
		const is_visible_about_us =
			dimensions_about_us.top < window.innerHeight &&
			dimensions_about_us.bottom > 0;

		const dimensions_card_img_one = card_img_one.getBoundingClientRect();
		const is_visible_card_img_one =
			dimensions_card_img_one.top < window.innerHeight &&
			dimensions_card_img_one.bottom > 0;

		const dimensions_card_img_two = card_img_two.getBoundingClientRect();
		const is_visible_card_img_two =
			dimensions_card_img_two.top < window.innerHeight &&
			dimensions_card_img_two.bottom > 0;

		const dimensions_card_img_three = card_img_three.getBoundingClientRect();
		const is_visible_card_img_three =
			dimensions_card_img_three.top < window.innerHeight &&
			dimensions_card_img_three.bottom > 0;

		// Add visible class to the About Us section when it is in view
		if (is_visible_about_us) {
			section_about_us.classList.add("visible");
		}

		// Add visible class to individual cards when they are in view
		if (is_visible_card_img_one) {
			card_img_one.classList.add("visible");
		}
		if (is_visible_card_img_two) {
			card_img_two.classList.add("visible");
		}
		if (is_visible_card_img_three) {
			card_img_three.classList.add("visible");
		}
	}

	checkScroll(); // Check visibility on page load

	window.addEventListener("scroll", checkScroll); // Check visibility on scroll
});