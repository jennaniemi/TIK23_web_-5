/* Funktio responsiiviselle navigaatiolle (lisätään luokan nimen perään responsive - loput muokkaukset media queryssä*/

function navFunction() {
    var x = document.getElementById("navigaatio");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
var points = 0

// Funktio laskee pisteet väliaikaiseen tallennustilaan ja lisää ne kooste-sivulle, jos vastaus on oikea
function pointsCalculate(pointsCurrent, pointsLocal) {
    let pointsStored = localStorage.getItem(pointsLocal);
    if (pointsStored === null) {
        localStorage.setItem(pointsLocal, pointsCurrent.toString());
    } else {
        pointsStored = pointsCurrent;
        localStorage.setItem(pointsLocal, pointsStored.toString());
    }
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
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 2:
                // Tarkistetaan vastaus toiseen kysymykseen ja lisätään pisteitä tarvittaessa, kaikissa lopuissa caseissa toistuu sama
                if (document.querySelector('input[name="question2"]:checked').value === 'Washington') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 3:
                if (document.querySelector('input[name="question3"]:checked').value === 'SIJ') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 4:
                if (document.querySelector('input[name="question4"]:checked').value === '4653') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 5:
                if (document.querySelector('input[name="question5"]:checked').value === 'orjuus') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 6:
                if (document.querySelector('input[name="question6"]:checked').value === 'normannit') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 7:
                if (document.querySelector('input[name="question7"]:checked').value === 'alueet') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 8:
                if (document.querySelector('input[name="question8"]:checked').value === 'Curie') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 9:
                if (document.querySelector('input[name="question9"]:checked').value === 'Augustulus') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
                } else {
                    alert("Väärin!");
                }
                break;
            case 10:
                if (document.querySelector('input[name="question10"]:checked').value === 'ydinase') {
                    points += 2
                    pointsCalculate(points, 'pisteethistoria');
                    alert("Oikein!");
                    updatePoints();
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
    pistetiedot.textContent = "Pisteet: " + points + "/20"; }

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
   