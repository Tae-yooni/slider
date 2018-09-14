const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const slider = document.getElementById("image__slider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
let i = 1;
let clicked = false;
let interval;

//* 일단 왼쪽버튼을 눌리든 오른쪽 버튼을 눌리든 셋타임아웃에 관계없이 바껴야됨.
// 1. 이미지가 내가 원하는 시간에 맞게 이미지가 변해야한다.
// function timer(time){
//     // let i = 1;
//     let length = images.length;
//     let interval = setInterval(function(){
//          //length = images.length;
//         slider.src = i + ".jpg";
//         i++;
//         if ( i == length + 1 ){
//             i = 1;
//         }
//         // console.log(i);
//     }, time);
// }

function changeJPG(){
        //length = images.length;
        let length = images.length;
       slider.src = i + ".jpg";
       i++;
       if ( i == length + 1 ){
           i = 1;
       } 

       // console.log(i);
}

function changeJPG2(){
    let length = images.length;
    slider.src = i + ".jpg";
    i++;
    if ( i == length ){
        i = 1;
    } else if (i == 1 ){
        i = length;
    }
}
// timer(3000);
//  if(clicked ){
//     anotherSetTime();
    
//  } else {
    interval = setInterval(changeJPG, 2000);
//     // setTimeout(interval, 1500);
//  }
   
 function anotherSetTime(){
    setInterval(changeJPG, 2000);
 }



// 2. 왼쪽 버튼 - images 배열에서 왼쪽으로 가게끔
function init(){
    leftBtn.addEventListener("click", toTheLeft);
    rightBtn.addEventListener("click", toTheRight);  
}

init();

function toTheLeft(){
    clearInterval(interval);
    i--;
    slider.src = i + ".jpg";
    if ( i == 1 ){
        i = 5;
    }
    interval = setInterval(changeJPG2, 2000);
    // cliked = false;

    
    // interval();

    
    // console.log(i);
}

function toTheRight(){
    clearInterval(interval);
    i++;
    slider.src = i + ".jpg";
    if ( i == 5 ){
        i = 0;
    }
    interval = setInterval(changeJPG2, 2000);
    // clicked = false;
    // clicked = true;
    // interval();
    // i++;
    
    // console.log(i);
}





// 3. 오른쪽 버튼 - images 배열에서 오른쪽으로 가게끔







//////////////////////////////////////////처음에 만든거














/*

const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const slider = document.getElementById("image__slider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
let i = 1;
let clicked = false;

//* 일단 왼쪽버튼을 눌리든 오른쪽 버튼을 눌리든 셋타임아웃에 관계없이 바껴야됨.
// 1. 이미지가 내가 원하는 시간에 맞게 이미지가 변해야한다.
// function timer(time){
//     // let i = 1;
//     let length = images.length;
//     let interval = setInterval(function(){
//          //length = images.length;
//         slider.src = i + ".jpg";
//         i++;
//         if ( i == length + 1 ){
//             i = 1;
//         }
//         // console.log(i);
//     }, time);
// }

// timer(3000);
    let length = images.length;
    let interval = setInterval(function(){
         //length = images.length;
        slider.src = i + ".jpg";
        i++;
        if ( i == length + 1 ){
            i = 1;
        }
        // console.log(i);
    }, 3000);



// 2. 왼쪽 버튼 - images 배열에서 왼쪽으로 가게끔
function init(){
    leftBtn.addEventListener("click", toTheLeft);
    rightBtn.addEventListener("click", toTheRight);  
}

init();

function toTheLeft(fn){
    clicked = true;
    clearInterval(interval);
    
    
    // interval();

    slider.src = --i + ".jpg";
    // console.log(i);
}

function toTheRight(fn){
    clearInterval(interval);
    // clicked = true;
    // interval();
    // i++;
    slider.src = ++i + ".jpg";
    // console.log(i);
}


*/