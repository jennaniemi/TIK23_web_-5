
var points = 0

// Funktio laskee pisteet väliaikaiseen tallennustilaan ja lisää ne kooste-sivulle, jos vastaus on oikea
function pointsCalculate(pointsCurrent, pointsLocal) {
    let pointsStored = localStorage.getItem(pointsLocal);
    if (pointsStored === null) {
        localStorage.setItem(pointsLocal, pointsCurrent.toString());
    } else {
        pointsStored = parseInt(pointsStored) + pointsCurrent;
        localStorage.setItem(pointsLocal, pointsStored.toString());
    }

// Lisätään pisteet nykyiseen pistemäärään ja päivitetään näytettävät pisteet sivulla
    points += pointsCurrent;
    updatePoints();
}

// Lisätään tapahtumankäsittelijä jokaiselle "Arvaa" napille
var buttons = document.querySelectorAll('button');
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        event.preventDefault();
        // Tarkistetaan onko vastaus oikea vai väärä
        switch (index + 1) {
            case 1:
                // Tarkistetaan vastaus ensimmäiseen kysymykseen ja lisätään pisteitä tarvittaessa
                if (document.querySelector('input[name="question1"]:checked').value === '1918') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 2:
                // Tarkistetaan vastaus toiseen kysymykseen ja lisätään pisteitä tarvittaessa, kaikissa lopuissa caseissa toistuu sama
                if (document.querySelector('input[name="question2"]:checked').value === 'Washington') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 3:
                if (document.querySelector('input[name="question3"]:checked').value === 'SIJ') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 4:
                if (document.querySelector('input[name="question4"]:checked').value === '4653') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 5:
                if (document.querySelector('input[name="question5"]:checked').value === 'orjuus') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 6:
                if (document.querySelector('input[name="question6"]:checked').value === 'normannit') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 7:
                if (document.querySelector('input[name="question7"]:checked').value === 'alueet') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 8:
                if (document.querySelector('input[name="question8"]:checked').value === 'Curie') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 9:
                if (document.querySelector('input[name="question9"]:checked').value === 'Augustulus') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            case 10:
                if (document.querySelector('input[name="question10"]:checked').value === 'ydinase') {
                    pointsCalculate(1, 'pisteethistoria');
                    alert("Oikein!");
                } else {
                    alert("Väärin!");
                }
                break;
            default:
                break;
        }
        // Tehdään Arvaa-napista toimintakelvoton arvauksen jälkeen 
        button.removeEventListener('click', arguments.callee);
        button.disabled = true;
    });
});

// Päivitetään pisteet sivulla, etsitään HTML-elementti johon pistetiedot päivitetään ja näytetään teksti pisteiden määrästä
function updatePoints() {
    var pistetiedot = document.getElementById('pistetiedot');
    pistetiedot.textContent = "Pisteet: " + points + "/10"; }

// Etsitään päivitysnappi
var refreshButton = document.getElementById('refreshButton');

// Lisätään tapahtumankäsittelijä napille
refreshButton.addEventListener('click', function() {
    // Päivitetään sivu
    location.reload();
});

// Lisätään tapahtumankäsittelijä napille, joka vie takaisin sivun alkuun
refreshButton.addEventListener('click', function() {
    window.scrollTo(0, 0);
});
   