const pointsAll = document.querySelector('#pointsall');

pointsAll.innerHTML = 0

let points1 = 'points'
let points2 = 'pisteet'
let points3 = 'pisteetaikka'
let points4 = 'pisteethistoria'
let points5 = 'pisteetmatikka'

//revealing points
function pointsReveal(pointsSpecific, pointsOutput) {
    pointsOutput.innerHTML = pointsSpecific
};

//points retrieve
function pointsRetrieve(pointsStorage, pointsOutput, num) {
    let pointsStored = localStorage.getItem(pointsStorage);
    pointsStored = parseInt(pointsStored);
    if (isNaN(pointsStored)) {
        pointsStored = 0;
    } else {
        pointsAllCount(pointsStored, pointsOutput);
    }
};

//calculating all points
function pointsAllCount(pointsStored, pointsOutput) {
    let pointsCount = parseInt(pointsOutput.textContent);
    pointsCount += pointsStored;
    pointsReveal(pointsCount, pointsOutput);
};

function navFunction() {
    var x = document.getElementById("navigaatio");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}


pointsRetrieve(points1, pointsAll, 1)
pointsRetrieve(points2, pointsAll, 1)
pointsRetrieve(points3, pointsAll, 1)
pointsRetrieve(points4, pointsAll, 1)
pointsRetrieve(points5, pointsAll, 1)


function navFunction() {
    var x = document.getElementById("navigaatio");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}