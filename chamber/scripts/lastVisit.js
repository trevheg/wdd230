const visitsDisplay = document.querySelector(".visits");
const theDateToday = new Date();
const today = Date.now();
const msToDays = 86400000;
let lastVisit = Number(window.localStorage.getItem("lastVisit")) || today;
const visitDifference = today - lastVisit;
const lastVisitDays = (visitDifference / msToDays).toFixed(0);

if (lastVisit != today) {
    if (lastVisitDays == 0) {
        visitsDisplay.textContent = `Back so soon! Awesome!`;
    } else {
        visitsDisplay.textContent = `You last visited ${lastVisitDays} days ago.`;
    }
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

lastVisit = today;
localStorage.setItem("lastVisit", lastVisit);