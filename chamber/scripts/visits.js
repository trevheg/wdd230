const visitsDisplay = document.querySelector(".visits");

let visitsNumber = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (visitsNumber !== 0) {
    visitsDisplay.textContent = `Number of visits: ` + visitsNumber;
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

visitsNumber++;
localStorage.setItem("numVisits-ls", visitsNumber);
localStorage.setItem("lastVisitDate", lastVisit)