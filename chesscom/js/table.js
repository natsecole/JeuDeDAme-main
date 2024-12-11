const initialize_div = document.querySelector('.initdiv')
const drag_attribute = [["ondrop", "drop(event)"], ["ondragover", "allowDrop(event)"]]
var k = 0;
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 11; j++) {
        var casediv = document.createElement('div')
        drag_attribute.forEach((attrib) => {
            casediv.setAttribute(attrib[0], attrib[1])
        })
        casediv.setAttribute("name", "casedame")
        if (j == 0) {
            casediv.setAttribute("id", "firstdiv")
            initialize_div.appendChild(casediv)
        } else {
            casediv.classList.add("divcase")
            casediv.setAttribute("data-case-number", k)
            initialize_div.appendChild(casediv)
            k++
        }
    }
}