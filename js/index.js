//variable and constants

let direction = { x:0,y:0};
const fooodSound = new Audio('food.mp3');
const moveSound = new Audio('move.mp3');
const gameOverSound = new Audio('gameover.mp3');
const musicSound = new Audio('music.mp3');
let speed =2;
let lastPaintTime=0
let snakeArr=[
    {x:13,y:15}
]





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
    //

    //Display the Snake array and food
    board.innerHTML ="";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);

        // Display the food
        //Display the Snake array and food
    board.innerHTML ="";
    snakeArr.forEach((e,index)=>{
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart=e.y;
        foodElement.style.gridColumnStart=e.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);

    })

}





//main logic starts here
window.requestAnimationFrame(main);