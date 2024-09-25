const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        header.style.background = "#000"
		modeButton.textContent = "🔆";
	} else {
		// main.style.background = "#eee";
		// main.style.color = "#000";
		main.style.background = "#ffeac4";
		main.style.color = "#000";
		header.style.background = "#ffeac4";
		modeButton.textContent = "🕶️";
	}
});