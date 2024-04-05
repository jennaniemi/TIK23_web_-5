function trial(inpt, answer) {
    if (inpt === answer) {
        alert("correct!");
    } else {
        alert("false.");
    }
}

function quess(button, inpt, answer) {
    button.addEventListener('click',() => {
        const t = new trial(inpt.value, answer)
    });
}

const button1 = document.querySelector("#button1")
const input1 = document.querySelector("#word1")
const t1 = new quess(button1, input1, "word")

const button2 = document.querySelector("#button2")
const input2 = document.querySelector("#word2")
const t2 = new quess(button2, input2, "potato")