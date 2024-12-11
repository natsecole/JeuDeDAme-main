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
    dragged_base =+ ev.target
}

function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    var nb_case = parseInt(ev.target.getAttribute("data-case-number"));
    console.log(nb_case + 18);
 
    
    var num_pion = parseInt(dragged.getAttribute("data-index-number"))
    console.log(num_pion);
    if (dragged.getAttribute("name") == "pion_noir") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if (num_pion == nb_case - 11) {
                if(eaten == false) {
                    dragged.setAttribute("data-index-number", nb_case)
                    dragged.setAttribute('draggable', 'false')
                    ev.target.appendChild(document.getElementById(data));
                }
            } else if (num_pion == nb_case - 9) {
                if(eaten == false) {
                    dragged.setAttribute("data-index-number", nb_case)
                    dragged.setAttribute('draggable', 'false')
                    ev.target.appendChild(document.getElementById(data));
                }
            } else if (num_pion == nb_case - 22) {
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case - 11}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_blanc") {
                        eated.push(case_avant.firstChild)
                        ev.target.appendChild(document.getElementById(data));
                        //case_avant.firstChild.classList.add("byebye")
                    }
                }
            } else if (num_pion == nb_case - 18) {
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case - 9}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_blanc") {
                        eated.push(case_avant.firstChild)
                        ev.target.appendChild(document.getElementById(data));
                        // case_avant.firstChild.classList.add("byebye")
                    }
                }
            } else if (num_pion == nb_case + 22) { //evan
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case - 11}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_blanc") {
                        eated.push(case_avant.firstChild)
                        ev.target.appendChild(document.getElementById(data));
                        //case_avant.firstChild.classList.add("byebye")
                    }
                }
            } else if (num_pion == nb_case + 18) { //evan
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case - 9}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_blanc") {
                        eated.push(case_avant.firstChild)
                        ev.target.appendChild(document.getElementById(data));
                        // case_avant.firstChild.classList.add("byebye")
                    }
                }
            }
        }
    } else if (dragged.getAttribute("name") == "pion_blanc") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if (num_pion == nb_case + 11) {
                if(eaten == false) {
                    dragged.setAttribute("data-index-number", nb_case)
                    dragged.setAttribute('draggable', 'false')
                    ev.target.appendChild(document.getElementById(data));
                }
            } else if (num_pion == nb_case + 9) {
                if(eaten == false) {
                    dragged.setAttribute("data-index-number", nb_case)
                    dragged.setAttribute('draggable', 'false')
                    ev.target.appendChild(document.getElementById(data));
                }
            } else if (num_pion == nb_case + 22) {
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case + 11}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_noir") {
                        eated.push(case_avant.firstChild)
                        ev.target.appendChild(document.getElementById(data));
                        //case_avant.firstChild.classList.add("byebye")
                    }
                }
            } else if (num_pion == nb_case + 18) {
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case + 9}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_noir") {
                        eated.push(case_avant.firstChild)
                        ev.target.appendChild(document.getElementById(data));
                        //case_avant.firstChild.classList.add("byebye")
                    }
                }
            }  else if (num_pion == nb_case - 22) { //evan 
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case + 11}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_noir") {
                        eated.push(case_avant.firstChild)
                        ev.target.appendChild(document.getElementById(data));
                        //case_avant.firstChild.classList.add("byebye")
                    }
                }
            } else if (num_pion == nb_case - 18) { //evan
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case + 9}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_noir") {
                        eated.push(case_avant.firstChild)
                        ev.target.appendChild(document.getElementById(data));
                        //case_avant.firstChild.classList.add("byebye")
                    }
                }
            }
        }
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

// function moved(ev) {
//     Array.from(every_pion).forEach((element) => {
//         console.log("sl");
//         if(element.getAttribute("name") == dragged.getAttribute("name")) {
//             if(element != ev.target) {
//                 element.setAttribute('draggable', 'false')
//             }
//         }
//     });
// }

