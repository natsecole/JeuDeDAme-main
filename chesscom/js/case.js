var casediv = document.getElementsByName("casedame")

var i = 0
casediv.forEach((element) => {
    if (i == 0) {
        element.classList.add("casenoir")
    } else if (i % 2 == 0) {
        element.classList.add("casenoir")
    } else {
        element.classList.add("casebeige")
    }
    i++
});