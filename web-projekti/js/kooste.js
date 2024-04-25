const pointsAll = document.querySelector('#pointsall');
const pointsFin = document.querySelector('#pointsfin');
const pointsEng = document.querySelector('#pointseng');
const pointsGeo = document.querySelector('#pointsgeo');
const pointsHis = document.querySelector('#pointshis');
const pointsMat = document.querySelector('#pointsmat');

const infoButton = document.querySelector("#infobutton"); 
const infoContent = document.querySelector("#infocontent");

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
    } if (num === 1) {
        pointsAllCount(pointsStored, pointsOutput);
    } else {
        pointsOutput.innerHTML = 0
        pointsReveal(pointsStored, pointsOutput);
    };
};

//info
infoButton.addEventListener('click', () => {
    infoContent.classList.toggle('active')
});

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

pointsRetrieve(points1, pointsEng, 0)
pointsRetrieve(points1, pointsAll, 1)

pointsRetrieve(points2, pointsGeo, 0)
pointsRetrieve(points2, pointsAll, 1)

pointsRetrieve(points3, pointsFin, 0)
pointsRetrieve(points3, pointsFin, 1)

pointsRetrieve(points4, pointsHis, 0)
pointsRetrieve(points4, pointsHis, 1)

pointsRetrieve(points5, pointsMat, 0)
pointsRetrieve(points5, pointsMat, 1)