let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let text1 = document.getElementById("text1");
let quer = "Quer"
let ae = "Ae"

function putText(text) {
    text1.textContent = text;
}

function sim() {
    ae = ae + "e"
    putText(ae)
}
function swapButtons() {
    quer = quer + "?"
    if (b1.nextElementSibling === b2) {
        b1.before(b2); // b2 vai para antes de b1
        putText(quer);
    } else {
        b2.before(b1);
        putText(quer);
    }
}