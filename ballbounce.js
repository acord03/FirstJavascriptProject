let ball = document.getElementById("ball")
let ball2 = document.getElementById("ball2")
let ball3 = document.getElementById("ball3")
let velocity = 1;
let positionX = 0;
let positionY = 0;
let positionX2 = 300;
let positionY2 = 0;
let positionX3 = 600;
let positionY3 = 0;
let reverseX = false;
let reverseY = false;
let reverseX2 = false;
let reverseY2 = false;
let reverseX3 = false;
let reverseY3 = false;

function bounceBigBall() {
    if (reverseX === false) {
        positionX = positionX + velocity;
    }else{positionX = positionX - velocity;}
    
    if (reverseY === false) {
        positionY = positionY + velocity;
    }else{positionY = positionY - velocity;}

    let Xmin = 0;
    let Xmax = 300;
    let Ymin = 0;
    let Ymax = 1200;

    if (positionX >= Xmax){
        reverseX = !reverseX;
    }if(positionX <= Xmin){
        reverseX = !reverseX;
    }
    if (positionY >= Ymax){
        reverseY = !reverseY;
    }if(positionY <= Ymin){
        reverseY = !reverseY;
    }

    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
}

function bounceBigBall2() {
    if (reverseX2 === false) {
        positionX2 = positionX2 + velocity;
    }else{positionX2 = positionX2 - velocity;}
    
    if (reverseY2 === false) {
        positionY2 = positionY2 + velocity;
    }else{positionY2 = positionY2 - velocity;}

    let Xmin2 = 300;
    let Xmax2 = 600;
    let Ymin2 = 0;
    let Ymax2 = 1200;

    if (positionX2 >= Xmax2){
        reverseX2 = !reverseX2;
    }if(positionX2 <= Xmin2){
        reverseX2 = !reverseX2;
    }
    if (positionY2 >= Ymax2){
        reverseY2 = !reverseY2;
    }if(positionY2 <= Ymin2){
        reverseY2 = !reverseY2;
    }

    ball2.style.left = positionX2 + 'px';
    ball2.style.top = positionY2 + 'px';
}

function bounceBigBall3() {
    if (reverseX3 === false) {
        positionX3 = positionX3 + velocity;
    }else{positionX3 = positionX3 - velocity;}
    
    if (reverseY3 === false) {
        positionY3 = positionY3 + velocity;
    }else{positionY3 = positionY3 - velocity;}

    let Xmin3 = 600;
    let Xmax3 = 900;
    let Ymin3 = 0;
    let Ymax3 = 1200;

    if (positionX3 >= Xmax3){
        reverseX3 = !reverseX3;
    }if(positionX3 <= Xmin3){
        reverseX3 = !reverseX3;
    }
    if (positionY3 >= Ymax3){
        reverseY3 = !reverseY3;
    }if(positionY3 <= Ymin3){
        reverseY3 = !reverseY3;
    }

    ball3.style.left = positionX3 + 'px';
    ball3.style.top = positionY3 + 'px';
}

setInterval(bounceBigBall, 2.5)
setInterval(bounceBigBall2, 2.5)
setInterval(bounceBigBall3, 2.5)