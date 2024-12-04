
// Déplacement amélioré
const divCases = document.querySelectorAll(".divcase");
const pions = document.querySelectorAll(".pion");
let draggedPion = null;

// Permet le dépôt
function allowDrop(event) {
    event.preventDefault();
}

// Début du drag
function drag(event) {
    draggedPion = event.target;
    event.dataTransfer.setData("text", event.target.id);
}

// Dépose et validation du mouvement
function drop(event) {
    event.preventDefault();
    const targetCase = event.target;
    const pionType = draggedPion.getAttribute("name");
    const currentPos = parseInt(draggedPion.getAttribute("data-index-number"));
    const newPos = parseInt(targetCase.getAttribute("data-case-number"));

    if (isValidMove(pionType, currentPos, newPos, targetCase)) {
        movePion(draggedPion, targetCase, newPos);
        checkCapture(pionType, currentPos, newPos);
        checkVictory();
    } else {
        console.log("Mouvement non valide");
    }
}

// Vérifie si un mouvement est valide
function isValidMove(pionType, currentPos, newPos, targetCase) {
    if (!targetCase.classList.contains("casenoir")) return false;
    const delta = pionType === "pion_noir" ? -1 : 1;
    const validMoves = [currentPos + 9 * delta, currentPos + 11 * delta];
    const captureMoves = [currentPos + 18 * delta, currentPos + 22 * delta];

    if (validMoves.includes(newPos)) return true;
    if (captureMoves.includes(newPos)) {
        const midCase = document.querySelector(`[data-case-number="${(currentPos + newPos) / 2}"]`);
        return midCase && midCase.firstChild && midCase.firstChild.getAttribute("name") !== pionType;
    }
    return false;
}

// Déplace le pion
function movePion(pion, targetCase, newPos) {
    pion.setAttribute("data-index-number", newPos);
    targetCase.appendChild(pion);
}

// Vérifie et applique une capture
function checkCapture(pionType, currentPos, newPos) {
    const midCaseNumber = (currentPos + newPos) / 2;
    const midCase = document.querySelector(`[data-case-number="${midCaseNumber}"]`);
    if (midCase && midCase.firstChild && midCase.firstChild.getAttribute("name") !== pionType) {
        midCase.removeChild(midCase.firstChild);
        console.log("Capture effectuée !");
    }
}

// Vérifie si un joueur a gagné
function checkVictory() {
    const noirRestant = document.querySelectorAll('[name="pion_noir"]').length;
    const blancRestant = document.querySelectorAll('[name="pion_blanc"]').length;
    if (noirRestant === 0) {
        alert("Les Blancs gagnent !");
    } else if (blancRestant === 0) {
        alert("Les Noirs gagnent !");
    }
}

// Ajout des événements
pions.forEach(pion => {
    pion.addEventListener("dragstart", drag);
});
divCases.forEach(divCase => {
    divCase.addEventListener("dragover", allowDrop);
    divCase.addEventListener("drop", drop);
});
