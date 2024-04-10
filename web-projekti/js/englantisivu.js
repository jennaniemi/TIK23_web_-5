let num = 0;
const full = document.querySelector("#full");

function countAll() {
    let newCorrect = parseInt(full.textContent);
    newCorrect++;
    full.innerHTML = newCorrect;
};

function color() { //funktio 4
    num++; //numero kasvaa
    let bar = "#ta" + num;  //luodaan palkin kohdan id
    const ta = document.querySelector(bar); //haetaan kohta
    ta.style.backgroundColor = "green"; //kohdan värin vaihto
};

function correct(amount, point) { //funktio 3
    let currentCount = parseInt(point.textContent);
    if (currentCount != amount) { //outputissa oleva kirjain luku muutetaan oikeaksi luvuksi ja verrataan tehtävien määrään
        let correct = currentCount + 1; //jos tehtäviä ei ollut tehty rajattu määrä tehtyjen tehtävien määrä kasvaa
        point.innerHTML = correct; //output päivittyy
        alert("correct!"); //palauttaa correctin
        if (correct === amount) { //jos tehtävän kaikki kohdat on suoritettu
            color() //palkki etenee
            countAll() //ratkaistujen tehtävien lukumäärä kasvaa
        };
    };
};

function trial(button, inpt, answer, amount, point) { //funktio 2
    if (inpt === answer) { //trial funktio tarkistaa tehtävän
        if (!button.dataset.incremented) { //jos tehtävä on mennyt oikein ja nappi ei ole käytetty
        correct(amount, point); //funktio correct käynnistyy
        button.dataset.incremented = true; //nappi muuttuu käytetyksi, jolloin ei voi laittaa oikeaa vastausta uudelleen
        };
    } else {
        alert("false."); //väärä vastaus palauttaa falsen
    };
};

function guess(button, inpt, answer, amount, point) { //funktio 1
    button.addEventListener('click',() => { //nappi, joka on guess funktioon määritelty aktivoi sen
        trial(button, inpt.value, answer, amount, point); //alkaa uusi trial funktio
    });
};

const infoButton = document.querySelector("#infobutton") 
const infoContent = document.querySelector("#infocontent")

infoButton.addEventListener('click', () => { //info nappai painetaan
    if (infoContent.style.display === 'none') { //jos info ei näy
        infoContent.style.display = 'block'; //se paljastuu
    } else { //muuten
        infoContent.style.display = 'none'; //se menee piiloon
    }; 
});

//Template
//const button<x> = document.querySelector("#button<x>");
//const input<x> = document.querySelector("#word<x>");
//const output<x> = document.querySelector("#output<x>");
//const t<x> = guess(button<x>, input<x>, "****", <x>, output<x>);

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

