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