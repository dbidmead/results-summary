// import scoreData from './data.json' assert { type: "json" };

const scoreData = await fetch('./data.json').then(res => res.json());

const reactionScoreDisplay = document.getElementById("rxn-score");
const memoryScoreDisplay = document.getElementById("mem-score");
const verbalScoreDisplay = document.getElementById("ver-score");
const visualScoreDisplay = document.getElementById("vis-score");
const overallScoreDisplay = document.getElementById("overall-score");

const reactionImgDisplay = document.getElementById("rxn-img");
const memoryImgDisplay = document.getElementById("mem-img");
const verbalImgDisplay = document.getElementById("ver-img");
const visualImgDisplay = document.getElementById("vis-img");


let reactionScore = null;
let reactionImg = null;

let memoryScore = null;
let memoryImg = null;

let verbalScore = null;
let verbalImg = null;

let visualScore = null;
let visualImg = null;

let avgScore = null;

// console.log(scoreData)

scoreData.forEach((obj) => {
    switch (obj.category) {
        case "Reaction":
            reactionScore = obj.score;
            reactionImg = obj.icon;
            break;
        case "Memory":
            memoryScore = obj.score;
            memoryImg = obj.icon;
            break;
        case "Verbal":
            verbalScore = obj.score;
            verbalImg = obj.icon;
            break;
        case "Visual":
            visualScore = obj.score;
            visualImg = obj.icon;
            break;
    }
})
avgScore = Math.round((reactionScore + memoryScore + verbalScore + visualScore) / 4);

reactionScoreDisplay.innerHTML = reactionScore;
memoryScoreDisplay.innerHTML = memoryScore;
verbalScoreDisplay.innerHTML = verbalScore;
visualScoreDisplay.innerHTML = visualScore;
overallScoreDisplay.innerHTML = avgScore;

reactionImgDisplay.src = reactionImg;
memoryImgDisplay.src = memoryImg;
verbalImgDisplay.src = verbalImg;
visualImgDisplay.src = visualImg;