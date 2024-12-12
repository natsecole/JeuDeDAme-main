var casediv = document.getElementsByName("casedame");
const canvas_attr = [["draggable", "true"], ["ondragstart", "drag(event)"]]
var i = 0
var j = 0
casediv.forEach((element) => {
    var pion = document.createElement('canvas')
    var ctx = pion.getContext("2d")
    var n_case = parseInt(element.getAttribute('data-case-number'))

    canvas_attr.forEach((elem) => {
        pion.setAttribute(elem[0], elem[1])
    })

    pion.setAttribute("width", element.clientWidth)
    pion.setAttribute("height", element.clientHeight)
    var xarc = element.clientWidth / 2

    if (i % 2 == 0 && i <= 42 && element.getAttribute("class") == "divcase casenoir") {
        pion.classList.add("pion")
        pion.setAttribute('data-type', "pion")
        pion.setAttribute('id', 'pion-case-' + n_case)
        pion.setAttribute('data-index-number', n_case)
        pion.setAttribute('name', 'pion_noir')
        ctx.fillStyle = "#5c5957"
        ctx.arc(xarc, xarc, xarc - 10, 0, 2 * Math.PI, true);
        ctx.lineWidth = 4;
        ctx.stroke()
        ctx.fill();
        element.appendChild(pion)
        j++
    } else if (i % 2 == 0 && i >= 66 && element.getAttribute("class") == "divcase casenoir") {
        pion.classList.add("pion")
        pion.setAttribute('id', 'pion-case-' + n_case)
        pion.setAttribute('data-type', "pion")
        pion.setAttribute('data-index-number', n_case)
        pion.setAttribute('name', 'pion_blanc')
        ctx.fillStyle = "#f9f9f9"
        ctx.arc(xarc, xarc, xarc - 10, 0, 2 * Math.PI, true);
        ctx.lineWidth = 4;
        ctx.stroke()
        ctx.fill();
        element.appendChild(pion)
        j++
    }
    i++
});