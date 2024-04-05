
function correct(amount, point) {
    if (parseInt(point.textContent) != amount) {
        let correct = parseInt(point.textContent)+1;
        point.innerHTML = correct;
        alert("correct!");
    }
};

function trial(button, inpt, answer, amount, point) {
    if (inpt === answer) {
        if (!button.dataset.incremented) {
        correct(amount, point);
        button.dataset.incremented = true;
        };
    } else {
        alert("false.");
    }
};

function guess(button, inpt, answer, amount, point) {
    button.addEventListener('click',() => {
        trial(button, inpt.value, answer, amount, point);
    });
};

const button1 = document.querySelector("#button1");
const input1 = document.querySelector("#word1");
const output1 = document.querySelector("#output1");
const t1 = guess(button1, input1, "word", 2, output1);

const button2 = document.querySelector("#button2");
const input2 = document.querySelector("#word2");
const t2 = guess(button2, input2, "word", 2, output1);

const button3 = document.querySelector("#button3");
const input3 = document.querySelector("#word3");
const output2 = document.querySelector("#output2");
const t3 = guess(button3, input3, "potato", 1, output2);