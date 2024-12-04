
// Déplacement
var div = document.querySelectorAll("divcase")
var every_pion = document.getElementsByName("pion")
var dragged = "";

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    dragged = ev.target
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nb_case = parseInt(ev.target.getAttribute("data-index-number"));
    var num_pion = parseInt(dragged.getAttribute("data-index-number"))
    if (dragged.getAttribute("name") == "pion_noir") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if(num_pion == nb_case - 11 ) {
                dragged.setAttribute("data-index-number", nb_case)
                ev.target.appendChild(document.getElementById(data));
            } else if (num_pion == nb_case - 9) {
                dragged.setAttribute("data-index-number", nb_case)
                ev.target.appendChild(document.getElementById(data));
            }
        }
    } else if (dragged.getAttribute("name") == "pion_blanc") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if(num_pion == nb_case + 11 ) {
                dragged.setAttribute("data-index-number", nb_case)
                ev.target.appendChild(document.getElementById(data));
            } else if (num_pion == nb_case + 9) {
                dragged.setAttribute("data-index-number", nb_case)
                ev.target.appendChild(document.getElementById(data));
            }
        }
    }
}


function onDragEnd(ev) {

}

function onDragStart(ev) {

}

