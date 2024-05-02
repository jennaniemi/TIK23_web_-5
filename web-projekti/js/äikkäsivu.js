function pointsCalculate(pointsCurrent, pointsLocal) {
    let pointsStored = localStorage.getItem(pointsLocal);
    if (pointsStored === null) {
        localStorage.setItem(pointsLocal, pointsCurrent.toString());
    } else {
        pointsStored = pointsCurrent;
        localStorage.setItem(pointsLocal, pointsStored.toString());
    }
};

let pisteet = "pisteetaikka"

//käytä tätä, kokonaispisteissä
let kokonaispisteet = 0

pointsCalculate(kokonaispisteet,pisteet)

// Tavutustehtävät
const tavutusVastaukset = [
    'au-to',
    'ta-lo',
    'kis-sa',
    'kuk-ka',
    'kir-ja',
    'lin-tu',
    'mai-to',
    'kel-lo',
    'pöy-tä',
    'lauk-ku'
];

for (let i = 0; i < tavutusVastaukset.length; i++) {
    const inputId = `perus${i + 1}`;
    const inputElement = document.getElementById(inputId);
    const buttonElement = inputElement.nextElementSibling;

    buttonElement.addEventListener('click', () => {
        const vastaus = inputElement.value.trim().toLowerCase();
        console.log(`Vastaus: "${vastaus}"`);
        console.log(`Odotettu vastaus: "${tavutusVastaukset[i]}"`);
        if (vastaus === tavutusVastaukset[i]) {
            alert('Oikein!');
            kokonaispisteet++
            pistemäärä.innerHTML = kokonaispisteet
            pointsCalculate(kokonaispisteet, pisteet)
        } else {
            alert('Väärin!');
        }
    });
}

const pistemäärä = document.querySelector("#pistemäärä")

// Sanaluokkatehtävät
const sanaluokkaVastaukset = [
    'substantiivi',
    'verbi',
    'adjektiivi',
    'adverbi',
    'substantiivi',
    'verbi',
    'adjektiivi',
    'adverbi',
    'substantiivi',
    'verbi'
];

for (let i = 0; i < sanaluokkaVastaukset.length; i++) {
    const inputId = `perus${i + 11}`;
    const inputElement = document.getElementById(inputId);
    const buttonElement = inputElement.nextElementSibling;

    buttonElement.addEventListener('click', () => {
        const vastaus = inputElement.value.trim().toLowerCase();
        if (vastaus === sanaluokkaVastaukset[i]) {
            alert('Oikein!');
            kokonaispisteet++
            pistemäärä.innerHTML = kokonaispisteet
            pointsCalculate(kokonaispisteet, pisteet)
            
        } else {
            alert('Väärin!');
        }
    });
}

