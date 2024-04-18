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
const t1 = guessButton(button1, input1, "word", 5, output1);

const button2 = document.querySelector("#button2");
const input2 = document.querySelector("#word2");
const t2 = guessButton(button2, input2, "word", 5, output1);

const button3 = document.querySelector("#button3");
const input3 = document.querySelector("#word3");
const t3 = guessButton(button3, input3, "word", 5, output1);

const button4 = document.querySelector("#button4");
const input4 = document.querySelector("#word4");
const t4 = guessButton(button4, input4, "word", 5, output1);

const button5 = document.querySelector("#button5");
const input5 = document.querySelector("#word5");
const t5 = guessButton(button5, input5, "word", 5, output1);

const button6 = document.querySelector("#button6");
const input6 = document.querySelector("#word6");
const output2 = document.querySelector("#output2");
const t6 = guessButton(button6, input6, "potato", 5, output2);

const button7 = document.querySelector("#button7");
const input7 = document.querySelector("#word7");
const t7 = guessButton(button7, input7, "word", 5, output2);

const button8 = document.querySelector("#button8");
const input8 = document.querySelector("#word8");
const t8 = guessButton(button8, input8, "word", 5, output2);

const button9 = document.querySelector("#button9");
const input9 = document.querySelector("#word9");
const t9 = guessButton(button9, input9, "word", 5, output2);

const button10 = document.querySelector("#button10");
const input10 = document.querySelector("#word10");
const t10 = guessButton(button10, input10, "word", 5, output2);

const button11 = document.querySelector("#button11");
const input11 = document.querySelector("#word11");
const output3 = document.querySelector("#output3");
const t11 = guessButton(button11, input11, "peruna", 5, output3);

const button12 = document.querySelector("#button12");
const input12 = document.querySelector("#word12");
const t12 = guessButton(button12, input12, "word", 5, output3);

const button13 = document.querySelector("#button13");
const input13 = document.querySelector("#word13");
const t13 = guessButton(button13, input13, "word", 5, output3);

const button14 = document.querySelector("#button14");
const input14 = document.querySelector("#word14");
const t14 = guessButton(button14, input14, "word", 5, output3);

const button15 = document.querySelector("#button15");
const input15 = document.querySelector("#word15");
const t15 = guessButton(button15, input15, "word", 5, output3);

const button16 = document.querySelector("#button16");
const input16 = document.querySelector("#word16");
const output4 = document.querySelector("#output4");
const t16 = guessButton(button16, input16, "potato", 5, output4);

const button17 = document.querySelector("#button17");
const input17 = document.querySelector("#word17");
const t17 = guessButton(button17, input17, "word", 5, output4);

const button18 = document.querySelector("#button18");
const input18 = document.querySelector("#word18");
const t18 = guessButton(button18, input18, "word", 5, output4);

const button19 = document.querySelector("#button19");
const input19 = document.querySelector("#word19");
const t19 = guessButton(button19, input19, "word", 5, output4);

const button20 = document.querySelector("#button20");
const input20 = document.querySelector("#word20");
const t20 = guessButton(button20, input20, "word", 5, output4);

