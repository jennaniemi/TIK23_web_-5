const pointsAll = document.querySelector('#pointsall');
const pointsFin = document.querySelector('#pointsfin');
const pointsEng = document.querySelector('#pointseng');
const pointsGeo = document.querySelector('#pointsgeo');
const pointsHis = document.querySelector('#pointshis');
const pointsMat = document.querySelector('#pointsmat');

const infoButton = document.querySelector("#infobutton"); 
const infoContent = document.querySelector("#infocontent");

//info
infoButton.addEventListener('click', () => {
    if (infoContent.style.display === 'none') {
        infoContent.style.display = 'block';
    } else {
        infoContent.style.display = 'none';
    } 
})

function calc(points1, points2, points3, points4, points5, output) {
    let points = (points1+points2+points3+points4+points5)
    output.innerhtml = points
}