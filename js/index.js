//variable and constants

let direction = { x:0,y:0};
const fooodSound = new Audio('food.mp3');
const moveSound = new Audio('move.mp3');
const gameOverSound = new Audio('gameover.mp3');
const musicSound = new Audio('music.mp3');
let speedd =2;
let lastPaintTime=0



// game function starts here
const main=(ctime)=>{
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
};

const gameEngine =()=>{

}





//main logic starts here
window.requestAnimationFrame(main);