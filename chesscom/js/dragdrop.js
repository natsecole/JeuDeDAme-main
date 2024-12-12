// Déplacement
var div = document.querySelectorAll("divcase")
var every_pion = document.getElementsByClassName("pion")
var dragged = "";
var dragged_base = "";
var eaten = false
var eated = []
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    dragged = ev.target
    dragged_base = + ev.target
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nb_case = parseInt(ev.target.getAttribute("data-case-number"));
    var num_pion = parseInt(dragged.getAttribute("data-index-number"));
    if (dragged.getAttribute("data-type") == "pion") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if (num_pion == nb_case - 11 || num_pion == nb_case - 9 || num_pion == nb_case + 11 || num_pion == nb_case + 9) {
                if (eaten == false) {
                    dragged.setAttribute("data-index-number", nb_case)
                    dragged.setAttribute('draggable', 'false')
                    devientDameOuPas(ev.target)
                    ev.target.appendChild(document.getElementById(data));
                }
            } else if (num_pion == nb_case - 22 || num_pion == nb_case - 18 || num_pion == nb_case + 22 || num_pion == nb_case + 18) {
                var new_case_number =  (num_pion == nb_case - 22) ? nb_case - 11 : ((num_pion == nb_case - 18) ? nb_case - 9 : ((num_pion == nb_case + 22) ? nb_case + 11 : nb_case + 9))
                eaten = true
                var couleur = (num_pion == nb_case - 22 || num_pion == nb_case - 18) ? "pion_blanc" : "pion_noir"
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${new_case_number}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == couleur) {
                        eated.push(case_avant.firstChild)
                        moved(ev)
                        devientDameOuPas(ev.target)
                        ev.target.appendChild(document.getElementById(data));
                    }
                }
            }
        }
    } else if (dragged.getAttribute("data-type") == "dame") {

    }
}


var tourBlancOuPas = true

document.addEventListener('keyup', event => {
    if (event.code == "Space") {
        //if(dragged != dragged_base) {
        eaten = false
        eated.forEach((element) => {
            element.classList.add("byebye")
        })
        eated.length = 0
        if (tourBlancOuPas === true) {
            tourNoir()
            dragged_base = "";

        } else if (tourBlancOuPas === false) {
            tourBlanc()
            dragged_base = "";
        }
        //}
    }
})

function moved(ev) {
    Array.from(every_pion).forEach((element) => {
        if (element.getAttribute("name") == dragged.getAttribute("name")) {
            if (element != ev.target) {
                element.setAttribute('draggable', 'false')
            }
        }
    });
}

function devientDameOuPas(casedame) {
    var case_number = casedame.getAttribute("data-case-number")
    var ctx = dragged.getContext("2d")
    if (dragged.getAttribute("name") == "pion_blanc") {
        if ((case_number >= 0 && case_number <= 9)) {
            dragged.setAttribute('data-type', "dame")
            ctx.font = "40px TourFout"
            ctx.textAlign = "center";
            ctx.fillStyle = "#000000"
            ctx.fillText("D", 37.5, 55)
        }
    } if (dragged.getAttribute("name") == "pion_noir") {
        if ((case_number >= 90 && case_number <= 99)) {
            dragged.setAttribute('data-type', "dame")
            ctx.font = "40px TourFout"
            ctx.textAlign = "center";
            ctx.fillStyle = "#ffffff"
            ctx.fillText("D", 37.5, 55)
        }
    }
}