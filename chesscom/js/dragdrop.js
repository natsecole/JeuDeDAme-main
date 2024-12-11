// Déplacement
var div = document.querySelectorAll("divcase")
var every_pion = document.getElementsByClassName("pion")
var dragged = "";

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    dragged = ev.target
    dragged_base = ev.target
}

function drop(ev) {
    ev.preventDefault();
    
    var data = ev.dataTransfer.getData("text");
    var nb_case = parseInt(ev.target.getAttribute("data-case-number"));
    console.log(nb_case);
    var num_pion = parseInt(dragged.getAttribute("data-index-number"))
    if (dragged.getAttribute("name") == "pion_noir") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if (num_pion == nb_case - 11) {
                dragged.setAttribute("data-index-number", nb_case)
                dragged.setAttribute('dragged', 'false')
                ev.target.appendChild(document.getElementById(data));
            } else if (num_pion == nb_case - 9) {
                dragged.setAttribute("data-index-number", nb_case)
                dragged.setAttribute('dragged', 'false')
                ev.target.appendChild(document.getElementById(data));
            } else if (num_pion == nb_case - 22) {
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case - 11}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_blanc") {
                        ev.target.appendChild(document.getElementById(data));
                        case_avant.firstChild.classList.add("byebye")
                    }
                }
            } else if (num_pion == nb_case - 18) {
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case - 9}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_blanc") {
                        ev.target.appendChild(document.getElementById(data));
                        case_avant.firstChild.classList.add("byebye")
                    }
                }
                
            }
        }
    } else if (dragged.getAttribute("name") == "pion_blanc") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if (num_pion == nb_case + 11) {
                dragged.setAttribute("data-index-number", nb_case)
                dragged.setAttribute('dragged', 'false')
                ev.target.appendChild(document.getElementById(data));
            } else if (num_pion == nb_case + 9) {
                dragged.setAttribute("data-index-number", nb_case)
                dragged.setAttribute('dragged', 'false')
                ev.target.appendChild(document.getElementById(data));
            } else if (num_pion == nb_case + 22) {
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case + 11}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_noir") {
                        ev.target.appendChild(document.getElementById(data));
                        case_avant.firstChild.classList.add("byebye")
                    }
                }
            } else if (num_pion == nb_case + 18) {
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case + 9}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_noir") {
                        ev.target.appendChild(document.getElementById(data));
                        case_avant.firstChild.classList.add("byebye")
                    }
                }
            }
        }
    }
}


var tourBlancOuPas = true

document.addEventListener('keyup', event => {
    if (event.code == "Space") {
        console.log(tourBlancOuPas);
        if(dragged === dragged_base) {
            if (tourBlancOuPas === true) {     
                tourNoir()
            } else if (tourBlancOuPas === false) {
                tourBlanc()
            }
        }
    }
})

// function onDragEnd(ev) {

// }

function onDragStarting(ev) {
    Array.from(every_pion).forEach((element) => {
        console.log("sl");
        if(element.getAttribute("name") == dragged.getAttribute("name")) {
            if(element != ev.target) {
                element.setAttribute('draggable', 'false')
            }
        }
    });
}

