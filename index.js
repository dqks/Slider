const left = document.querySelector('.left');
const right = document.querySelector('.right');
const img = document.querySelector('.main');
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
n++
if (n === 3) {
    n = 0
}
img.src = images[n].src
})

left.addEventListener('click', () => {
    n--
    if (n === -1) {
        n = 3
    }
    img.src = images[n].src
})
