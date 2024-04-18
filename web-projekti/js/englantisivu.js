let limit = 4;
let num = 0;
let points1 = 'points'
const full = document.querySelector("#full");

//amount of tasks
function countAll() {
    let newCorrect = parseInt(full.textContent); 
    newCorrect++; 
    full.innerHTML = newCorrect; 
    pointsCalculate(newCorrect)
    if (newCorrect === limit) { 
        alert("All tasks completed!") 
    }
};

//progress bar prosesses
function color() { 
    num++; 
    let bar = "#ta" + num;  
    const ta = document.querySelector(bar); 
    ta.style.backgroundColor = "green"; 
};

//correct answer
function correct(amount, point) { 
    let currentCount = parseInt(point.textContent);
    if (currentCount != amount) { 
        let correct = currentCount + 1; 
        point.innerHTML = correct; 
        alert("correct!");
        color() 
        countAll() 
    };
};

//Answer to the guess
function guessAnswer(button, inpt, answer, amount, point) { 
    if (inpt === answer) { 
        if (!button.dataset.incremented) { 
        correct(amount, point); 
        button.dataset.incremented = true; 
        };
    } else {
        alert("false."); 
    };
};

//Guessing the answer
function guessButton(button, inpt, answer, amount, point) { 
    button.addEventListener('click',() => { 
        guessAnswer(button, inpt.value, answer, amount, point); 
    });
};

const infoButton = document.querySelector("#infobutton") 
const infoContent = document.querySelector("#infocontent")

//info
infoButton.addEventListener('click', () => { 
    if (infoContent.style.display === 'none') { 
        infoContent.style.display = 'block'; 
    } else { 
        infoContent.style.display = 'none'; 
    }; 
});

//points push
function pointsCalculate(pointsCurrent) {
    let pointsStored = localStorage.getItem(points1);
    if (pointsStored === null) {
        localStorage.setItem(points1, pointsCurrent.toString());
    } else {
        pointsStored = 0;
        pointsStored += pointsCurrent;
        localStorage.setItem(points1, pointsStored.toString());
    }
};

//Template
//const button<x> = document.querySelector("#button<x>");
//const input<x> = document.querySelector("#word<x>");
//const output<x> = document.querySelector("#output<x>");
//const t<x> = guess(button<x>, input<x>, "****", <x>, output<x>);

const button1 = document.querySelector("#button1");
const input1 = document.querySelector("#word1");
const output1 = document.querySelector("#output1");
const t1 = guessButton(button1, input1, "word", 2, output1);

const button2 = document.querySelector("#button2");
const input2 = document.querySelector("#word2");
const t2 = guessButton(button2, input2, "word", 2, output1);

const button3 = document.querySelector("#button3");
const input3 = document.querySelector("#word3");
const output2 = document.querySelector("#output2");
const t3 = guessButton(button3, input3, "potato", 1, output2);

const button4 = document.querySelector("#button4");
const input4 = document.querySelector("#word4");
const output3 = document.querySelector("#output3");
const t4 = guessButton(button4, input4, "peruna", 1, output3);

