const buttons = {
    showRules: document.querySelector('.glow-on-hover:nth-of-type(1)'),
    showMoves: document.querySelector('.glow-on-hover:nth-of-type(2)'),
    showTips: document.querySelector('.glow-on-hover:nth-of-type(3)')
};

const modals = {
    rulesModal: document.getElementById('rulesModal'),
    movesModal: document.getElementById('movesModal'),
    tipsModal: document.getElementById('tipsModal')
};

const overlay = document.getElementById('overlay');
const closeButtons = document.querySelectorAll('.closeModal');

const images = [
    { src: "Prise par un pion.jpg", description: "LA PRISE PAR UN PION - Un pion peut en prendre un autre en sautant par dessus le pion adverse pour se rendre sur la case vide située derrière celui-ci. Le pion sauté est retiré du jeu. La prise peut également s'effectuer en arrière. La prise est obligatoire. Si, après avoir pris un premier pion, vous vous retrouvez de nouveau en position de prise, vous devez continuer, jusqu'à ce que cela ne soit plus possible.  Les pions doivent être enlevés à la fin de la prise et non pas un par un au fur et à mesure."},
    { src: "Prise majoritaire.jpg", description: "LA PRISE MAJORITAIRE - Lorsque plusieurs prises sont possibles, il faut toujours prendre du côté du plus grand nombre de pièces. Cela signifie que si on peut prendre une dame ou deux pions, il faut prendre les deux pions.  Dans l'exemple ci-contre, un pion blanc peut prendre un pion noir, mais l'autre pion blanc peut en prendre 3, c'est donc ce coup qui doit être joué." },
    { src: "Prise par la dame.jpg", description: "LA PRISE PAR LA DAME - Puisque la dame a une plus grande marge de manoeuvre, elle a aussi de plus grandes possibilités pour les prises. La dame doit prendre tout pion situé sur sa diagonale (s'il y a une case libre derrière) et doit changer de direction à chaque fois qu'une nouvelle prise est possible. On ne peut passer qu'une seule fois sur un même pion. En revanche, on peut passer deux fois sur la même case." }
];

let currentImageIndex = 0;

const moveImage = document.getElementById('moveImage');
const imageDescription = document.getElementById('imageDescription');
const prevImageButton = document.getElementById('prevImage');
const nextImageButton = document.getElementById('nextImage');

function updateImage() {
    moveImage.src = images[currentImageIndex].src;
    imageDescription.textContent = images[currentImageIndex].description;
}

prevImageButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextImageButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

function openModal(modal) {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    Object.values(modals).forEach(modal => {
        modal.style.display = 'none';
    });
    overlay.style.display = 'none';
}

buttons.showRules.addEventListener('click', () => openModal(modals.rulesModal));
buttons.showMoves.addEventListener('click', () => openModal(modals.movesModal));
buttons.showTips.addEventListener('click', () => openModal(modals.tipsModal));

closeButtons.forEach(button => button.addEventListener('click', closeModal));
overlay.addEventListener('click', closeModal);
