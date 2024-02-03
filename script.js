var timer = 60;
var score = 0;
var hitrn = 0;


function createBubble() {
    clutter = "";

    for (var i = 1; i <= 184; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitrun").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score
}


function runTimer() {
    var stoptimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(stoptimer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over :</h1> <h1>Score = ${score}</h1>`
        }
    }, 1000)
}

function FullGame() {
    document.querySelector("#pbtm").addEventListener("click", function (dets) {
        var clickedNum = (Number((dets.target.textContent)));
        if (clickedNum === hitrn) {
            increaseScore();
            getNewHit();
            createBubble();
        }
    })
}

createBubble();
runTimer();
getNewHit();
FullGame();

