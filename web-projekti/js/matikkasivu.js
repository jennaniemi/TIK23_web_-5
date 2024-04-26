const laskut = document.querySelectorAll('.laskut');
let pisteet = "pisteetmatikka";
let kokonaispisteet = 0;

if (kokonaispisteet === 0) {
    document.getElementById('pisteet').innerText = "Pisteet: " + kokonaispisteet + "/20";
}

function squareRoot(x) {
    return Math.sqrt(x);
}

laskut.forEach(laskut => {
    // Valitaan nykyisen laskun nappi
    const button = laskut.querySelector('button');

    // Tarkistetaan onko Event Listener jo liitetty
    if (!button.clickHandlerAttached) {

        // Asetetaan kuuntelija napille
        button.addEventListener('click', function() {
            // Otetaan nykyisen napin input- kenttä
            const inputField = laskut.querySelector('input');
            // Otetaan talteen käyttäjän syöte
            const inputValue = inputField.value;
            
            // Suoritetaan lasku
            const labelText = laskut.querySelector('label').textContent;
            const calculation = labelText.split('=')[0].trim();
            
            // Korvataan potenssit (^) ja neliöjuuret (√) niiden vastaavilla operaatioilla
            const calculationWithPower = calculation.replace(/\^/g, '**');
            const calculationWithSquareRoot = calculationWithPower.replace(/√(\d+)/g, 'squareRoot($1)');

            // Lasketaan tulos eval-funktiolla
            const result = eval(calculationWithSquareRoot);
            console.log(`Lasku: ${calculation}, Tulos: ${result}`);
            
            
            // Vertaillaan käyttäjän antamaa arvoa ja oikeaa vastausta
            if (parseInt(inputValue) === result) {
                alert('Oikein!');
                kokonaispisteet++;
                document.getElementById('pisteet').innerText = "Pisteet: " + kokonaispisteet + "/20";
                
                // Jos kysymys on oikein, otetaan nappi pois käytöstä estääksemme ylimääräisten pisteiden kerääminen
                button.disabled = true;
                pointsCalculate(kokonaispisteet, pisteet);
            } else {
                alert('Väärin, yritä uudelleen.');
                inputField.value = ''; //Puhdistetaan input- kenttä valmiíksi jotta on helpompi arvata uudelleen
            }
        });
        // Osoitetaan että event listener on liitetty
        button.clickHandlerAttached = true;
    }
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

