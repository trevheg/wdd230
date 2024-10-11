const visitsDisplay = document.querySelector(".visits");

let visitsNumber = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (visitsNumber !== 0) {
    visitsDisplay.textContent = visitsNumber;
} else {
    visitsDisplay.textContent = `This is your first visit.`;
}

visitsNumber++;
localStorage.setItem("numVisits-ls", visitsNumber);