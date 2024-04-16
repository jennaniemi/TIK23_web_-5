const pointsAll = document.querySelector('#pointsall');
const pointsFin = document.querySelector('#pointsfin');
const pointsEng = document.querySelector('#pointseng');
const pointsGeo = document.querySelector('#pointsgeo');
const pointsHis = document.querySelector('#pointshis');
const pointsMat = document.querySelector('#pointsmat');

const infoButton = document.querySelector("#infobutton"); 
const infoContent = document.querySelector("#infocontent");

let points1 = 'points'

//revealing points
function pointsReveal(pointsSpecific, pointsOutput) {
    pointsOutput.innerhtml = pointsSpecific
};

//points retrieve
function pointsRetrieve(pointsStorage, pointsOutput, num) {
    let pointsStored = localStorage.getItem(pointsStorage);
    pointsStored = parseInt(pointsStored);
    if (num === 1) {
        pointsAll(pointsStored, pointsOutput);
    } else {
        pointsReveal(pointsStored, pointsOutput);
    };
};

//info
infoButton.addEventListener('click', () => {
    if (infoContent.style.display === 'none') {
        infoContent.style.display = 'block';
    } else {
        infoContent.style.display = 'none';
    } 
});

//calculating all points
function pointsAll(pointsStored, pointsOutput) {
    let pointsCount = parseInt(pointsOutput.textContent);
    pointsCount += pointsStored;
    pointsReveal(pointsCount, pointsOutput);
};

pointsRetrieve(points1, pointsEng, 0)