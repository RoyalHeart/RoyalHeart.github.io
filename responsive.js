function responsiveNavigation() {
  var x = document.getElementById("nav");
  console.log(x);
  x.classList.toggle("responsive");
}

function toggleDarkMode() {
  var element = document.body;
  console.log(element);
  element.classList.toggle("dark");
}
