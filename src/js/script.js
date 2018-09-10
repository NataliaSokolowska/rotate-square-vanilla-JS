const deg = 10;
let rotate = 0;

const btnPlus = document.getElementById('increase');
const btnMinus = document.querySelector('.decrease-button');
const btnReset = document.getElementById('reset');
const btnText = document.getElementById('value');
const btnType = document.getElementById('submit');
const div = document.getElementById('square');


function rotateSquarePlus() {
    if(rotate < 360) {
        rotate += deg;
        rotateBoth();
    }
    else if (rotate = 360) {
        alert('This is maximum value! Click reset.');
        rotate = 0;
    }
}

function rotateSquareMinus() {
    if(rotate > -360) {
        rotate -= deg;
        rotateBoth();
    }
    else if (rotate = -360) {
        alert('This is minimum value! Click reset.');
        rotate = 0;
    }
}

function clickButton(e) {
    e.preventDefault();
    //console.log('click');
    //console.log(btnText.value);
    rotate = btnText.value;
    if(rotate > -360 && rotate < 360) {
        rotateBoth();
    } else {
        alert('This is minimum value! Click reset.');
        rotate = 0;
    } 
}

function resetRotate() {
    rotateBoth();
    btnText.value = 0;
    rotate = 0;
}

function rotateBoth() {
    document.getElementById('score').value = rotate + " degrees";
    div.style.transform = "rotate(" + rotate + "deg)";
    div.style.transition = 0.5 + "s";
}

btnPlus.addEventListener('click', rotateSquarePlus);
btnMinus.addEventListener('click', rotateSquareMinus);
btnReset.addEventListener('click', resetRotate);
btnType.addEventListener('click', clickButton);