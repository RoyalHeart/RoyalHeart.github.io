var prevX;
var prevY;

function moveFish(x, y) {
  const fish = document.getElementById("fish");
  const wrapper = document.getElementById("wrapper");
  console.log(fish);
  if (x > prevX) {
    fish.style.transform = "scaleX(1)";
  } else {
    fish.style.transform = "scaleX(-1)";
  }
  setTimeout(() => {
    console.log(x, y);
    prevX = x;
    prevY = y;
    fish.style.left = `${x}px`;
    fish.style.top = `${y}px`;
  }, 100);
}
function random() {
  var x = Math.random() * wrapper.offsetWidth;
  var y = Math.random() * wrapper.offsetHeight;
  moveFish(x, y);
}
setInterval(() => {
  random();
}, 2000);
