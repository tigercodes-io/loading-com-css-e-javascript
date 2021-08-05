const progress = document.querySelector(".progress");
const percent = document.querySelector(".percent");
let count = 4;
let x = 16;
const loading = setInterval(animate, 20);

function animate() {
  if (count == 100 && x == 400) {
    clearInterval(loading);
  } else {
    x += 4;
    count++;
    progress.style.width = `${x}px`;
    percent.innerText = `${count}%`;
  }
}
