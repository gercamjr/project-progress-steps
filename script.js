const progress = document.getElementById('progress')
const prev = document.getElementById('previous')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

var currentActive = 1

next.addEventListener('click', (event) => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    
})