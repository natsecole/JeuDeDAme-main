var pion_noir = document.getElementsByName('pion_noir');
var pion_blanc = document.getElementsByName('pion_blanc');
var tourdiv = document.getElementById('tourdiv');
var case_property = document.getElementsByName("casedame")[1];
var pTour = document.getElementById("pTour")
var divpion = document.createElement('canvas');
var ctx = divpion.getContext("2d");
divpion.setAttribute("width", case_property.clientWidth);
divpion.setAttribute("height", case_property.clientHeight);

var xarc = case_property.clientWidth / 2;
divpion.setAttribute("id", "pion_div");
ctx.arc(xarc, xarc, xarc - 10, 0, 2 * Math.PI, true);
ctx.fillStyle = "#f9f9f9";
ctx.strokeStyle = "#f9f9f9"
ctx.stroke()
tourdiv.appendChild(divpion);



function tourBlanc() {
    pion_noir.forEach(pion => {
        pion.setAttribute('draggable', 'false');
    });
    pion_blanc.forEach(pion => {
        pion.setAttribute('draggable', 'true');  
    });
    pTour.innerHTML = "Trait aux blancs"
    ctx.fillStyle = "#f9f9f9";
    ctx.strokeStyle = "#f9f9f9"
    ctx.stroke()
    ctx.fill();
    tourBlancOuPas = true
}

function tourNoir() {
    pion_noir.forEach(pion => {
        pion.setAttribute('draggable', 'true');
    });
    pion_blanc.forEach(pion => {
        pion.setAttribute('draggable', 'false');
    });
    pTour.innerHTML = "Trait aux noirs"
    ctx.fillStyle = "#5c5957";
    ctx.strokeStyle = "#5c5957"
    ctx.lineWidth = 4
    ctx.stroke()
    ctx.fill();
    tourBlancOuPas = false
}

