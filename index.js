const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const leftImage = document.querySelector('.leftSide')
const rightImage = document.querySelector('.rightSide')
const img = document.querySelector('.main');
let n = 0;
let v = 1;
let z = -1;
let images = [
    firstImage = {
        src: 'img/1.jpg'
    },
    secondImage = {
        src: 'img/2.jpg'
    },
    thirdImage = {
        src: 'img/3.jpg'
    } 
]



rightButton.addEventListener("click", () => {   
n++ // центр
if (n >= 3) {
    n = 0
}
img.src = images[n].src

v++ // правый
if (v >= 3) {
    v = 0
}
rightImage.src = images[v].src


z++ // левый
if (z > 2) {
    z = 0
}
leftImage.src = images[z].src  
})





leftButton.addEventListener('click', () => {
    n-- // центр
    if (n < 0) {
        n = 2
    }
    img.src = images[n].src

    v-- // праый
if (v < 0) {
    v = 2
}
rightImage.src = images[v].src

if (z === -1) {
    z = 2;
}

z--   // левый
if (z < 0) {
    z = 2
}
leftImage.src = images[z].src  
})

