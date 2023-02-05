const fishElements = document.getElementsByName("fish");
setTimeout(() => {
  moveFish();
}, 0);
function moveFish() {
  const wrapper = document.getElementById("wrapper");
  var x = Math.random() * wrapper.offsetWidth;
  var y = Math.random() * wrapper.offsetHeight;
  for (let index = 0; index < fishElements.length; index++) {
    let fishElement = fishElements[index];
    let fish = new Fish(fishElement, x, y);
    fish.move();
  }
}
class Fish {
  constructor(fishElement, x, y) {
    this.fishElement = fishElement;
    this.x = x;
    this.y = y;
  }
  move() {
    const wrapper = document.getElementById("wrapper");
    setInterval(() => {
      this.prevX = this.x;
      this.prevY = this.y;
      this.x = Math.random() * wrapper.offsetWidth;
      this.y = Math.random() * wrapper.offsetHeight;
      this.flip();
      this.fishElement.style.left = `${this.x}px`;
      this.fishElement.style.top = `${this.y}px`;
    }, Math.random() * 4000 + 4000);
  }
  flip() {
    if (this.x > this.prevX) {
      this.fishElement.style.transform = "scaleX(1)";
    } else {
      this.fishElement.style.transform = "scaleX(-1)";
    }
  }
}
