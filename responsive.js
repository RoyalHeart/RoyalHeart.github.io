function responsiveNavigation() {
  var x = document.getElementById("nav");
  console.log(x);
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
