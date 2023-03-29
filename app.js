

/* ------------------ Make hacker text effect for home page ----------------- */

const fancy = document.querySelectorAll('.fancy');
const letters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";

fancy.forEach( element => {
  element.addEventListener('mouseover', event => {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("").map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      }).join("");

      if (iterations >= event.target.dataset.value.length) clearInterval(interval);

      iterations += 1 / 2;
    }, 30);
  });
})


