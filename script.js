const playContainer = document.getElementById('play-container');
const score = document.getElementById('score-count')
let fishCount = 0;
const newFish = `<div class="fish" onclick="loadNewFish()"></div>`;
let trashCount = 0;
const newTrash = `<div class="trash" onclick="increaseInterval(this)"></div>`;
let interval = 500;
let odds = 20;

setTimeout(generateFish, interval);

function loadNewFish() {
    updateScoreCount();
    removeLastFish();
    const verifyAddTrash = trashOdds();
    if (verifyAddTrash == true) {
        setTimeout(generateTrash, interval);
    } else {
        setTimeout(generateFish, interval);
    }
}

function generateFish() {
    const coordX = genCoord();
    const coordY = genCoord();
    playContainer.innerHTML += newFish;
    const fishClass = document.getElementsByClassName('fish');
    const thisFish = fishClass[fishCount];
    thisFish.style.left = `calc(${coordX}% - 16px`;
    thisFish.style.top = `calc(${coordY}% - 16px`;
    fishCount++;
}

function generateTrash() {
    const coordX = genCoord();
    const coordY = genCoord();
    playContainer.innerHTML += newTrash;
    const trashClass = document.getElementsByClassName('trash');
    const thisTrash = trashClass[trashCount];
    thisTrash.style.left = `calc(${coordX}% - 16px`;
    thisTrash.style.top = `calc(${coordY}% - 16px`;
    setTimeout(loadNewFish, interval);
    trashCount++;
}

function genCoord() {
    const num = (Math.random() * 100).toFixed();
    return num;
}

function updateScoreCount() {
    score.innerText = fishCount;
}

function removeLastFish() {
    const fishClass = document.getElementsByClassName('fish');
    const lastFish = fishClass[fishCount - 1];
    lastFish.style.display = 'none';
}

function trashOdds() {
    const num = (Math.random() * 100).toFixed();
    if (num >= 0 && num <= odds) {
        return true;
    } else {
        return false;
    }
}

function increaseInterval(e) {
    interval += 250;
    e.style.display = 'none';
    trashCount++;
}
