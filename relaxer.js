const container = document.querySelector('.container');
const text = document.querySelector('#text');
const countDom = document.querySelector('#count');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

let count = 0;

breaheAnimation();


function breaheAnimation() {
    countDom.innerText = count++ + "";
    text.innerText = 'Breathe In!';

    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}


setInterval(breaheAnimation, totalTime);