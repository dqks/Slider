const left = document.querySelector('.left')
const right = document.querySelector('.right')
const img = document.querySelector('.main')
let arr = [1, 2, 3]
let n = 0
let images = [
    firstImage = {
        src: '1.jpg'
    },
    secondImage = {
        src: '2.jpg'
    },
    thirdImage = {
        src: '3.jpg'
    } 
]



right.addEventListener("click", () => {
    if (img.src != '1.jpg' && n < images.length) {
        n++
        }
img.src = images[n].src
})

