const input1 = document.querySelector("#word")
const button = document.querySelector("#button")

function trial(inpt, answer) {
    if (inpt === answer) {
        alert("correct!");
    } else {
        alert("false");
    }
}

button.addEventListener('click',() => {
    const t1 = new trial(input1.value, "word")
});