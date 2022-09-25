const left = document.querySelector('.left');
const right = document.querySelector('.right');
const img = document.querySelector('.main');
let arr = [1, 2, 3];
let n = 0;
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

right.addEventListener("click", () => {
    // if (img.src != 'img/1.jpg') {
    //     n++
    //     }
n++
img.src = images[n].src
console.log(n)
return n 
})

left.addEventListener('click', () => {
    n--
    img.src = images[n].src
    console.log(n)
})

