const buttons = document.querySelector('button')
const laskut = document.querySelectorAll('.laskut');

laskut.forEach(laskut => {
    // Valitaan nykyisen laskun nappi
    const button = laskut.querySelector('button');

    // Asetetaan kuuntelija napille
    button.addEventListener('click', function() {
        // Otetaan nykyisen napin input- kenttä
        const inputField = laskut.querySelector('input');
        // Otetaan talteen käyttäjän syöte
        const inputValue = inputField.value;

        // Suoritetaan lasku
        const labelText = laskut.querySelector('label').textContent;
        const calculation = labelText.split('=')[0].trim(); // Extract the calculation part from the label
        const result = eval(calculation); // Evaluate the calculation

        // Vertaillaan käyttäjän antamaa arvoa ja oikeaa vastausta
        if (parseInt(inputValue) === result) {
            alert('Oikein!');
        } else {
            alert('Väärin, yritä uudelleen.');
            inputField.value = ''; // Puhdistetaan input- kenttä valmiíksi jotta on helpompi arvata uudelleen
        }
    });
});

function navFunction() {
    var x = document.getElementById("navigaatio");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function pointsCalculate(pointsCurrent, pointsLocal) {
    let pointsStored = localStorage.getItem(pointsLocal);
    if (pointsStored === null) {
        localStorage.setItem(pointsLocal, pointsCurrent.toString());
    } else {
        pointsStored = pointsCurrent;
        localStorage.setItem(pointsLocal, pointsStored.toString());
    }
};

let pisteet = "pisteetmatikka"

//käytä tätä, kokonaispisteissä
let kokonaispisteet = 0

pointsCalculate(kokonaispisteet,pisteet)