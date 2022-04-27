const progress = document.getElementById("progress");
const prev = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

var currentActive = 1;

next.addEventListener("click", (event) => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update()

});

prev.addEventListener("click", (event) => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update()
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (((actives.length-1) / (circles.length-1)) * 100) + '%'

}
