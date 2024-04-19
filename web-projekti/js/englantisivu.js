let limit = 20;
let num = 0;
let points1 = 'points'
const full = document.querySelector("#full");

//nav
function navFunction() {
    var x = document.getElementById("navigaatio");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

//amount of tasks
function countAll() {
    let newCorrect = parseInt(full.textContent); 
    newCorrect++; 
    full.innerHTML = newCorrect; 
    pointsCalculate(newCorrect, points1)
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
function correct(amount, output) { 
    let currentCount = parseInt(output.textContent);
    if (currentCount != amount) { 
        let correct = currentCount + 1; 
        output.innerHTML = correct; 
        alert("correct!");
        color() 
        countAll() 
    };
};

//Answer to the guess
function guessAnswer(button, input, answer, amount, output) { 
    if (input === answer) { 
        if (!button.dataset.incremented) { 
        correct(amount, output); 
        button.dataset.incremented = true; 
        };
    } else {
        alert("false."); 
    };
};

//Guessing the answer
function guessButton(button, input, answer, amount, output) { 
    button.addEventListener('click',() => { 
        guessAnswer(button, input.value, answer, amount, output); 
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
function pointsCalculate(pointsCurrent, pointsLocal) {
    let pointsStored = localStorage.getItem(pointsLocal);
    if (pointsStored === null) {
        localStorage.setItem(pointsLocal, pointsCurrent.toString());
    } else {
        pointsStored = pointsCurrent;
        localStorage.setItem(pointsLocal, pointsStored.toString());
    }
};

//task template
function template(number, answer, amount, outputNumber) {
    let buttonTemp = "#button" + number;
    const button = document.querySelector(buttonTemp);
    let inputTemp = "#input" + number;
    const input = document.querySelector(inputTemp);
    let outputTemp = "#output" + outputNumber;
    const output = document.querySelector(outputTemp);
    const task = guessButton(button, input, answer, amount, output);
};

template(1, "koira", 5, 1)
template(2, "kissa", 5, 1)
template(3, "mato", 5, 1)
template(4, "hevonen", 5, 1)
template(5, "lammas", 5, 1)
template(6, "potato", 5, 2)
template(7, "carrot", 5, 2)
template(8, "tomato", 5, 2)
template(9, "blueberry", 5, 2)
template(10, "banana", 5, 2)
template(11, "sleep", 5, 3)
template(12, "swim", 5, 3)
template(13, "climb", 5, 3)
template(14, "eat", 5, 3)
template(15, "write", 5, 3)
template(16, "nukkua", 5, 4)
template(17, "uida", 5, 4)
template(18, "kiivetä", 5, 4)
template(19, "syödä", 5, 4)
template(20, "kirjoittaa", 5, 4)




