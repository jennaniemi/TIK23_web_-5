const input1 = document.querySelector("#word")
const button = document.querySelector("#button")

button.addEventListener('click',() => {
    const word = input1.value;
    const word2 = "word";
    if (word === word2) {
        alert("correct!");
    } else {
        alert("false");
    }
});
