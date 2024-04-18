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
    let outputTemp = "#input" + outputNumber;
    const output = document.querySelector(outputTemp);
    const task = guessButton(button, input, answer, amount, output);
};

template(1, "word", 5, 1)
template(2, "word", 5, 1)
template(3, "word", 5, 1)
template(4, "word", 5, 1)
template(5, "word", 5, 1)
template(6, "word", 5, 2)
template(7, "word", 5, 2)
template(8, "word", 5, 2)
template(9, "word", 5, 2)
template(10, "word", 5, 2)
template(11, "word", 5, 3)
template(12, "word", 5, 3)
template(13, "word", 5, 3)
template(14, "word", 5, 3)
template(15, "word", 5, 3)
template(16, "word", 5, 4)
template(17, "word", 5, 4)
template(18, "word", 5, 4)
template(19, "word", 5, 4)
template(20, "word", 5, 4)




