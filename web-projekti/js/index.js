/* Funktio responsiiviselle navigaatiolle (lisätään luokan nimen perään responsive - loput muokkaukset media queryssä*/

function navFunction() {
    var x = document.getElementById("navigaatio");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

const pointsAll = document.querySelector('#pointsall');
const show = document.getElementById("show");

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

let nimi = "nimi"

function showTrue(value){
    if (value === true) {
    document.getElementById("namefield").hidden = true
    }
} 

function showName(e){
    var firstName= document.getElementById("firstname").value;
    show.innerText = firstName;
    showTrue(showName)
}


function nameLocate(nimi) {
    nameStored = localStorage.getItem(nimi);
    if (isNaN(nameStored)) {
        nameStored = "";
        show.innerText = nameStored;
    } else {
        show.innerText = nameStored;
        showName(e)
    }
}

pointsCalculate(firstName, nimi)

nameLocate(nimi)
