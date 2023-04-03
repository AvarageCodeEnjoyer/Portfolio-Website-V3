/* ------------ When you load a page make container slowly appear ----------- */
const lineText = document.querySelector(".line")
const button = document.getElementById('button')
// lineText.forEach(element => element.addEventListener())

// button.addEventListener('click', e => {
function load() {
let i = 0

let textLoadIn = setInterval(() => {
    lineText.style.opacity = i
    i++
    if (i >= 100) clearInterval(textLoadIn)
    console.log(i)
  }, 50)
}
// })


/* ------------------ Make hacker text effect for home page ----------------- */

const fancy = document.querySelectorAll('.fancy');
const letters = "ABCDEFGHIJKLMNOPQRSTUZWXYZabcdefghijklmnopqrstuvwxyz";

fancy.forEach(element => {
  element.addEventListener('mouseover', e => {
    let iterations = 0;

    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText.split("").map((letter, index) => {
        if (index < iterations) {
          return e.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 52)];
      }).join("");

      if (iterations >= e.target.dataset.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  });
})



