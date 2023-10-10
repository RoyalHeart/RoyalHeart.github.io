const container = document.getElementsByClassName("album-content")[0];
// where "container" is the id of the container
container.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    container.scrollLeft += 320;
    e.preventDefault();
    // prevenDefault() will help avoid worrisome
    // inclusion of vertical scroll
  } else {
    container.scrollLeft -= 320;
    e.preventDefault();
  }
});
var autoScrollTimer = setInterval(() => {
  let i = 0;
  let before = container.scrollLeft;
  var a = setInterval(() => {
    before = container.scrollLeft;
    container.scrollLeft += 16;
    i++;
    if (i >= 20) {
      window.clearInterval(a);
    }
    if (container.scrollLeft <= before) {
      setTimeout(() => {
        container.scrollLeft = 0;
      }, 2000);
    }
  }, 20);
}, 3000);
